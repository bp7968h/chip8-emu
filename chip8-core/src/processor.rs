use crate::{NUM_KEYS, RAM_SIZE, SCREEN_HEIGHT, SCREEN_WIDTH, STACK_SIZE, START_ADDR, V_REGS};
use js_sys;
use wasm_bindgen::prelude::*;

/// Represents all possible character sprite
const FONTSET_SIZE: usize = 80;
const FONTSET: [u8; FONTSET_SIZE] = [
    // Each line represents possible character sprite that is displayed on the screen.
    // Each sprite uses 5byte to represent itself, where the bits are used to identify if the pixel is on or off.
    0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
    0x20, 0x60, 0x20, 0x20, 0x70, // 1
    0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
    0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
    0x90, 0x90, 0xF0, 0x10, 0x10, // 4
    0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
    0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
    0xF0, 0x10, 0x20, 0x40, 0x40, // 7
    0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
    0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
    0xF0, 0x90, 0xF0, 0x90, 0x90, // A
    0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
    0xF0, 0x80, 0x80, 0x80, 0xF0, // C
    0xE0, 0x90, 0x90, 0x90, 0xE0, // D
    0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
    0xF0, 0x80, 0xF0, 0x80, 0x80, // F
];

/// Represents the main components of the CHIP-8 virtual machine (CPU, memory, display, registers, timers).
/// This struct encapsulates the entire state of the emulator at any given time.
#[derive(Debug)]
#[wasm_bindgen]
pub struct Processor {
    /// The Program Counter (PC).
    /// This 16-bit register stores the address of the next instruction to be executed.
    pc: u16,

    /// The 4KB (4096 bytes) of RAM.
    /// Memory addresses 0x000 to 0x1FF are reserved for the interpreter.
    /// Most programs start at 0x200.
    mem: [u8; RAM_SIZE],

    /// The 64x32 pixel monochrome display.
    /// Each `bool` represents a pixel: `true` for on (drawn), `false` for off (erased).
    /// Stored in a 1D array for simplicity, mapped as `index = y * SCREEN_WIDTH + x`.
    screen: [bool; SCREEN_WIDTH * SCREEN_HEIGHT],

    /// The 16 general-purpose 8-bit registers, named $V_0$ through $V_{F}$.
    /// $V_{F}$ (index 15) is special and often used as a flag register.
    vr: [u8; V_REGS],

    /// The Index Register (I).
    /// This 16-bit register is used to store memory addresses, primarily for drawing sprites
    /// and accessing data in memory.
    ir: u16,

    /// The Stack Pointer (SP).
    /// This 16-bit register points to the topmost level of the stack.
    sp: u16,

    /// The 16-level call stack.
    /// Used to store return addresses when calling subroutines.
    stack: [u16; STACK_SIZE],

    /// The number of keys (0-9 and A-f) on the CHIP-8's hexadecimal keypad.
    keys: [bool; NUM_KEYS],

    /// The Delay Timer.
    /// This 8-bit timer decrements at a rate of 60Hz until it reaches zero.
    /// It is used for timing events in games.
    dt: u8,

    /// The Sound Timer.
    /// This 8-bit timer also decrements at a rate of 60Hz until it reaches zero.
    /// As long as its value is non-zero, a sound (a simple beep) is emitted.
    st: u8,
}

/// Provides a default, initialized state for the `Processor`.
/// All registers, memory, and timers are set to their initial power-on values.
impl Default for Processor {
    fn default() -> Self {
        let mut init_ram = [0; RAM_SIZE];
        init_ram[0..FONTSET_SIZE].copy_from_slice(&FONTSET);

        Processor {
            pc: START_ADDR,
            mem: init_ram,
            screen: [false; SCREEN_WIDTH * SCREEN_HEIGHT],
            vr: [0; V_REGS],
            ir: 0,
            sp: 0,
            stack: [0; STACK_SIZE],
            keys: [false; NUM_KEYS],
            dt: 0,
            st: 0,
        }
    }
}

#[wasm_bindgen]
impl Processor {
    /// Creates a new `Processor` instance with its default, initial state.
    ///
    /// This is equivalent to calling `Processor::default()`.
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Processor::default()
    }

    /// Provides the width of the screen
    ///
    /// As wasm_bindgen does not allow to directly export `const` values so adding a associate
    /// method to expose the `SCREEN_WIDTH`
    #[wasm_bindgen(js_name = "SCREEN_WIDTH")]
    pub fn width() -> usize {
        SCREEN_WIDTH
    }

    /// Provides the height of the screen
    ///
    /// As wasm_bindgen does not allow to directly export `const` values so adding a associate
    /// method to expose the `SCREEN_HEIGHT`
    #[wasm_bindgen(js_name = "SCREEN_HEIGHT")]
    pub fn height() -> usize {
        SCREEN_HEIGHT
    }

    /// Loads a CHIP-8 program or data into the emulator's memory.
    ///
    /// This function copies the provided byte slice `data` into the emulator's
    /// RAM, starting from the `START_ADDR` (typically 0x200 for CHIP-8 programs).
    /// This is where most CHIP-8 programs are expected to reside in memory.
    ///
    /// # Arguments
    ///
    /// * `data` - A slice of `u8` bytes representing the program's opcode or data.
    ///            The size of this slice determines how many bytes are loaded.
    ///
    /// # Panics
    ///
    /// This function **will panic** if the provided `data` is too large to fit
    /// into the available memory space starting from `START_ADDR`.
    /// Specifically, it panics if `(START_ADDR + data.len())` exceeds `RAM_SIZE`.
    /// TODO: Consider refactoring to return a `Result<()>` to handle memory overflow
    pub fn load(&mut self, data: &[u8]) {
        let copy_start = START_ADDR as usize;
        let copy_end = (START_ADDR as usize) + data.len();
        if copy_end > self.mem.len() {
            panic!("File Too Large");
        }
        self.mem[copy_start..copy_end].copy_from_slice(data);
    }

    /// Provides read-only reference to the display buffer
    ///
    /// This function returns a slice of booleans representing the current state
    /// of 64x32 pixel monochrome display. Each `true` vale indicates and `on` and `false`
    /// means an `off` pixel. The data is laid row by row in a single long buffer.
    ///
    /// # Returns
    ///
    /// A boolean slice, where the first 64 elements represent the first row,
    /// the next 64 elements the second row, and so on, for a total of 2048 pixels.
    pub fn screen(&self) -> *const bool {
        self.screen.as_slice().as_ptr()
    }

    #[cfg(test)]
    fn get_display(&self) -> &[bool] {
        &self.screen
    }

    /// Handles a key press event.
    ///
    /// Sets the state of the specified key to `true` (pressed).
    ///
    /// # Arguments
    ///
    /// * `idx` - The index of the key that was pressed (0-15 for CHIP-8).
    ///
    /// # Panics
    ///
    /// This function **will panic** if `idx` is out of bounds for the `self.keys` array (0-15).
    /// It is the caller's responsibility to provide a valid key index.
    /// TODO: Consider refactoring to return a `Result<()>`.
    pub fn key_press(&mut self, idx: usize) {
        if idx >= self.keys.len() {
            panic!(
                "Invalid Key Index: {} provided, but keys array size is {}",
                idx,
                self.keys.len()
            );
        }
        self.keys[idx] = true;
    }

    /// Handles a key release event.
    ///
    /// Sets the state of the specified key to `false` (released).
    ///
    /// # Arguments
    ///
    /// * `idx` - The index of the key that was released (0-15 for CHIP-8).
    ///
    /// # Panics
    ///
    /// This function **will panic** if `idx` is out of bounds for the `self.keys` array (0-15).
    /// It is the caller's responsibility to provide a valid key index.
    /// TODO: Consider refactoring to return a `Result<()>`.
    pub fn key_release(&mut self, idx: usize) {
        if idx >= self.keys.len() {
            panic!(
                "Invalid Key Index: {} provided, but keys array size is {}",
                idx,
                self.keys.len()
            );
        }
        self.keys[idx] = false;
    }

    /// Executes a single cycle of the CHIP-8 emulator
    ///
    /// This function fetches the next opcode from memory, decodes it,
    /// and then executes the corresponding operation, potentially modifying
    /// the CPU's registers or the system's memory.
    pub fn cycle(&mut self) {
        let op_code = self.fetch();
        self.execute(op_code);
    }

    /// Fetches the next opecode from memory
    ///
    /// This function reads `two bytes` from memory at the current `Program Counter (pc)`
    /// combines them into a 16-but opcode, and then increments the Program Counter by 2
    /// to point to the next instruction.
    ///
    /// # Returns
    ///
    /// A `u16` representing the fetched opcode.
    fn fetch(&mut self) -> u16 {
        let high_byte = self.mem[self.pc as usize] as u16;
        let low_byte = self.mem[(self.pc + 1) as usize] as u16;
        self.pc += 2;
        // combine high and low byte to single u16 value
        (high_byte << 8) | low_byte
    }

    /// Executes the provided opcode
    ///
    /// This function takes a 16-bit opcode, extracts the four hexadecimal nibbles
    /// that define the instruction, and then performs the corresponding operation,
    /// potentially modifying the CPU's registers, memory or other state.
    ///
    /// # Arguments
    ///
    /// * `op_code` - The 16-bit value to decoded and executed.
    pub fn execute(&mut self, op_code: u16) {
        let first_nibble = (op_code & 0xF000) >> 12;
        let x_register = (op_code & 0x0F00) >> 8;
        let y_register = (op_code & 0x00F0) >> 4;
        let last_nibble = op_code & 0x000F;

        match (first_nibble, x_register, y_register, last_nibble) {
            // 0000 - Nop: Do nothing, progress to next opcode
            (0, 0, 0, 0) => (),
            // 00E0 - Clear the display
            (0, 0, 0xE, 0) => {
                self.screen = [false; SCREEN_WIDTH * SCREEN_HEIGHT];
            }
            // 00EE - Return from subroutine
            (0, 0, 0xE, 0xE) => {
                let return_addr = self.stk_pop();
                self.pc = return_addr
            }
            // 1NNN - Jump to address `NNN`
            (1, _, _, _) => {
                let jump_addr = op_code & 0x0FFF;
                self.pc = jump_addr;
            }
            // 2NNN - Enter/Call subroutine at address `NNN`
            (2, _, _, _) => {
                let goto_addr = op_code & 0x0FFF;
                self.stk_push(self.pc);
                self.pc = goto_addr;
            }
            // 3XNN - Skip next instruction if VX == NN
            (3, vx, n1, n2) => {
                let nn = ((n1 << 4) | n2) as u8;
                if self.vr[vx as usize] == nn {
                    self.pc += 2;
                }
            }
            // 4XNN - Skip next instruction if VX != NN
            (4, vx, n1, n2) => {
                let nn = ((n1 << 4) | n2) as u8;
                if self.vr[vx as usize] != nn {
                    self.pc += 2;
                }
            }
            // 5XY0 - Skip next if VX == VY
            (5, vx, vy, 0) => {
                if self.vr[vx as usize] == self.vr[vy as usize] {
                    self.pc += 2;
                }
            }
            // 6XNN - Set VX to the value in NN
            (6, vx, n1, n2) => {
                let nn = ((n1 << 4) | n2) as u8;
                self.vr[vx as usize] = nn;
            }
            //todo!() 7XNN - Add the given value in NN to VX
            (7, vx, n1, n2) => {
                let nn = ((n1 << 4) | n2) as u8;
                self.vr[vx as usize] = self.vr[vx as usize].wrapping_add(nn);
            }
            // 8XY0 - Set VY to the value in VX
            (8, vx, vy, 0) => {
                self.vr[vx as usize] = self.vr[vy as usize];
            }
            // 8XY1 - Set VY OR'ed value to VX
            (8, vx, vy, 1) => {
                self.vr[vx as usize] |= self.vr[vy as usize];
            }
            // 8XY2 - Set VY AND'ed value to VX
            (8, vx, vy, 2) => {
                self.vr[vx as usize] &= self.vr[vy as usize];
            }
            // 8XY3 - Set VY XOR'ed value to VX
            (8, vx, vy, 3) => {
                self.vr[vx as usize] ^= self.vr[vy as usize];
            }
            // 8XY4 - Add VY value to VX
            (8, vx, vy, 4) => {
                let (res_vx, carry) = self.vr[vx as usize].overflowing_add(self.vr[vy as usize]);
                let res_vf = if carry { 1 } else { 0 };

                self.vr[vx as usize] = res_vx;
                self.vr[0xF] = res_vf;
            }
            // 8XY5 - Subtract VY value to VX
            (8, vx, vy, 5) => {
                let (res_vx, borrow) = self.vr[vx as usize].overflowing_sub(self.vr[vy as usize]);
                let res_vf = if borrow { 0 } else { 1 };

                self.vr[vx as usize] = res_vx;
                self.vr[0xF] = res_vf;
            }
            // 8XY6 - Single right shift on the value on VX
            (8, vx, _, 6) => {
                let dropped_bit = self.vr[vx as usize] & 1;
                self.vr[vx as usize] >>= 1;
                self.vr[0xF] = dropped_bit;
            }
            // 8XY7 - Subtract VX value to VY
            (8, vx, vy, 7) => {
                let (res_vx, borrow) = self.vr[vy as usize].overflowing_sub(self.vr[vx as usize]);
                let res_vf = if borrow { 0 } else { 1 };

                self.vr[vx as usize] = res_vx;
                self.vr[0xF] = res_vf;
            }
            // 8XYE - Single right shift on the value on VX
            (8, vx, _, 0xE) => {
                let dropped_bit = self.vr[vx as usize] & 0b10000000;
                self.vr[vx as usize] <<= 1;
                self.vr[0xF] = dropped_bit;
            }
            // 9XY0 - Skip instruction if VX != VY
            (9, vx, vy, 0) => {
                if self.vr[vx as usize] != self.vr[vy as usize] {
                    self.pc += 2;
                }
            }
            // ANNN - Add the value of NNN into I register
            (0xA, n1, n2, n3) => {
                let nnn = (n1 << 8) | (n2 << 4) | n3;
                self.ir = nnn;
            }
            // BNNN - Jump to V0 + NNN instruction position
            (0xB, n1, n2, n3) => {
                let nnn = (n1 << 8) | (n2 << 4) | n3;
                self.pc = (self.vr[0] as u16) + nnn;
            }
            // CXNN - Set the value of VX to random number AND'ed with NN
            (0xC, vx, n1, n2) => {
                let nn = ((n1 << 4) | n2) as u8;
                // let rand = rand::random::<u8>();
                let js_rand_f64 = js_sys::Math::random();
                let rand = (js_rand_f64 * 256.0) as u8;
                self.vr[vx as usize] = rand & nn;
            }
            // DXYN - Draw sprite
            (0xD, vx, vy, n) => {
                let x_coord = self.vr[vx as usize] as u16;
                let y_coord = self.vr[vy as usize] as u16;

                let mut flipped = false;
                for row in 0..n {
                    let addr = self.ir + row;
                    let pixels = self.mem[addr as usize];

                    for col in 0..8 {
                        if (pixels & (0b10000000 >> col)) != 0 {
                            let x = (x_coord + col) as usize % SCREEN_WIDTH;
                            let y = (y_coord + row) as usize % SCREEN_HEIGHT;

                            let idx = x + SCREEN_WIDTH * y;
                            flipped |= self.screen[idx];
                            self.screen[idx] = true;
                        }
                    }
                }

                if flipped {
                    self.vr[0xF] = 1;
                } else {
                    self.vr[0xF] = 0;
                }
            }
            // EX9E - Skip next instruction if VX is pressed
            (0xE, vx, 9, 0xE) => {
                let vx_val = self.vr[vx as usize];
                if self.keys[vx_val as usize] {
                    self.pc += 2;
                }
            }
            // EXA1 - Skip next instruction if VX is not pressed
            (0xE, vx, 0xA, 1) => {
                let vx_val = self.vr[vx as usize];
                if !self.keys[vx_val as usize] {
                    self.pc += 2;
                }
            }
            // FX07 - Stores value from Delay Timer (DT) to VX
            (0xF, vx, 0, 7) => {
                self.vr[vx as usize] = self.dt;
            }
            // FX0A - Blocking instruction, waits for key press
            (0xF, vx, 0, 0xA) => {
                let mut key_pressed = false;
                for i in 0..self.keys.len() {
                    if self.keys[i] {
                        self.vr[vx as usize] = i as u8;
                        key_pressed = true;
                        break;
                    }
                }

                if !key_pressed {
                    self.pc -= 2;
                }
            }
            // FX16 - Stores value from VX to Delay Timer (DT)
            (0xF, vx, 1, 6) => {
                self.dt = self.vr[vx as usize];
            }
            // FX18 - Stores value from VX to Sound Timer (ST)
            (0xF, vx, 1, 8) => {
                self.st = self.vr[vx as usize];
            }
            // FX1E - Add value from VX to I register
            (0xF, vx, 1, 0xE) => {
                self.ir = self.ir.wrapping_add(self.vr[vx as usize] as u16);
            }
            // FX29 - Set I to font address
            // Here the character are stored in starting address of the ram,
            // and each takes 5 bytes, so point at the beginning of each character by multiplying by 5
            (0xF, vx, 2, 9) => {
                let character_addr = self.vr[vx as usize] as u16;
                self.ir = character_addr * 5;
            }
            // FX33 - Store Binary Coded Decimal of VX to I register
            (0xF, vx, 3, 3) => {
                let vx_val = self.vr[vx as usize] as f32;
                let hundredth_digit = (vx_val / 100.0).floor() as u8;
                let tenth_digit = ((vx_val / 10.0) % 10.0).floor() as u8;
                let oneth_digit = (vx_val % 10.0) as u8;

                let addr = self.ir as usize;
                self.mem[addr] = hundredth_digit;
                self.mem[addr + 1] = tenth_digit;
                self.mem[addr + 2] = oneth_digit;
            }
            // FX55 - Store value from V0 to VX inside I register
            (0xF, vx, 5, 5) => {
                let ir_val = self.ir as usize;
                for i in 0..=(vx as usize) {
                    self.mem[i + ir_val] = self.vr[i];
                }
            }
            // FX65 - Load value from ram (starting from I reg) and store in V0 to VX
            (0xF, vx, 6, 5) => {
                let ir_val = self.ir as usize;
                for i in 0..=(vx as usize) {
                    self.vr[i] = self.mem[i + ir_val];
                }
            }
            (_, _, _, _) => unimplemented!("Unimplemented opcode: {}", op_code),
        }
    }

    /// Modifies the Delay Timer and Sound Timer as needed
    ///
    /// This function is typically called once per emulation cycle (or frame).
    /// Both timers, if greater than zero are decremented by one.
    ///
    /// If the Sound Timer (`st`) transitions from value grater than zero to one,
    /// a "beep" sound is emitted by the emulator. Once a timer reaches zero it
    /// remains at zero until the program explicitly sets it to a new value.
    pub fn tick_timers(&mut self) {
        if self.dt > 0 {
            self.dt -= 1;
        }

        if self.st > 0 {
            if self.st == 1 {
                // BEEP
                // todo!()
            }
            self.st -= 1;
        }
    }

    /// Reset the processor to its initial state.
    ///
    /// This function sets all registers, memory (including the fontset),
    /// screen, and timers to their default power-on values as defined by the `Default` trait implementation.
    /// It modifies the existing `Processor` instance.
    pub fn reset(&mut self) {
        *self = Processor::default();
    }

    /// Pushes a 16-bit value onto the CHIP-8's call stack.
    ///
    /// This function increments the stack pointer (`sp`) after storing the value.
    ///
    /// # Arguments
    ///
    /// * `val` - The 16-bit value to be pushed onto the stack.
    ///
    /// # Panics
    ///
    /// Panics if the stack pointer exceeds `STACK_SIZE` (i.e., stack overflow).
    // TODO: add error handlling instead of panicking
    fn stk_push(&mut self, val: u16) {
        if self.sp as usize >= STACK_SIZE {
            panic!("Stack overflow!");
        }
        self.stack[self.sp as usize] = val;
        self.sp += 1;
    }

    /// Pops a 16-bit value from the top of the CHIP-8's call stack.
    ///
    /// This function decrements the stack pointer (`sp`) before retrieving the value.
    ///
    /// # Returns
    ///
    /// The 16-bit value popped from the stack.
    ///
    /// # Panics
    ///
    /// Panics if the stack pointer is zero (i.e., stack underflow).
    // TODO: add error handlling instead of panicking
    fn stk_pop(&mut self) -> u16 {
        if self.sp == 0 {
            panic!("Stack underflow!");
        }
        self.sp -= 1;
        self.stack[self.sp as usize]
    }

    /// Returns the current value of the Program Counter (PC)
    #[cfg(test)]
    pub(crate) fn get_pc(&self) -> u16 {
        self.pc
    }

    /// Returns the current value of the Program Counter (PC)
    #[cfg(test)]
    pub(crate) fn get_sp(&self) -> u16 {
        self.sp
    }

    /// Returns the current value of the Index Register (IR)
    #[cfg(test)]
    pub(crate) fn get_ir(&self) -> u16 {
        self.ir
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_get_display_returns_correct_initial_value_and_size() {
        let cpu = Processor::new();
        let display = cpu.get_display();

        // The display buffer should have a size equal to SCREEN_WIDTH * SCREEN_HEIGHT
        assert_eq!(display.len(), SCREEN_WIDTH * SCREEN_HEIGHT);
        assert_eq!(&[false; SCREEN_WIDTH * SCREEN_HEIGHT], display);
    }

    #[test]
    fn test_get_display_reflects_internal_screen_state() {
        let mut cpu = Processor::new();

        // Manually set a few pixels on the internal screen
        let index1 = 10 + SCREEN_WIDTH * 5; // (10, 5)
        let index2 = 63 + SCREEN_WIDTH * 31; // (63, 31) - bottom right
        let index3 = 0 + SCREEN_WIDTH * 0; // (0, 0) - top left

        cpu.screen[index1] = true;
        cpu.screen[index2] = true;

        let display = cpu.get_display();

        // Verify that the get_display method returns a slice that matches the internal state
        assert!(display[index1]);
        assert!(display[index2]);
        assert!(!display[index3]);

        // Also, verify that all other pixels are false, as only three were set to true
        let mut count_true_pixels = 0;
        for &pixel in display.iter() {
            if pixel {
                count_true_pixels += 1;
            }
        }
        assert_eq!(count_true_pixels, 2);
    }

    #[test]
    fn test_cycle_fetch_and_execute_jp() {
        let mut cpu = Processor::new();
        let jump_address: u16 = 0x345;
        // 1NNN: JP addr
        let opcode: u16 = 0x1000 | jump_address;

        // Load the jump opcode into memory at the current PC
        cpu.mem[cpu.pc as usize] = (opcode >> 8) as u8;
        cpu.mem[(cpu.pc + 1) as usize] = opcode as u8;

        cpu.cycle();

        // After the cycle, the PC should have jumped to the new address
        assert_eq!(cpu.get_pc(), jump_address);
    }

    #[test]
    fn test_cycle_fetch_and_execute_ld_vx_nn_instruction() {
        let mut cpu: Processor = Processor::new();
        // V3
        let register_index: u8 = 0x3;
        let value: u8 = 0xAB;
        // 6XNN: LD Vx, byte
        let opcode: u16 = 0x6000 | ((register_index as u16) << 8) | (value as u16);

        // Load the LD opcode into memory at the current PC
        cpu.mem[cpu.pc as usize] = (opcode >> 8) as u8;
        cpu.mem[(cpu.pc + 1) as usize] = opcode as u8;
        let initial_pc = cpu.pc;

        cpu.cycle();

        // After the cycle, the specified register should hold the value
        assert_eq!(cpu.vr[register_index as usize], value);
        // The PC should have advanced by 2 after fetch
        assert_eq!(cpu.get_pc(), initial_pc + 2);
    }

    #[test]
    fn test_fetch_opcode() {
        let mut cpu = Processor::new();
        let opcode: u16 = 0xA1B2;
        cpu.mem[cpu.get_pc() as usize] = (opcode >> 8) as u8;
        cpu.mem[(cpu.get_pc() + 1) as usize] = opcode as u8;
        let initial_pc = cpu.get_pc();

        let fetched_opcode = cpu.fetch();

        assert_eq!(fetched_opcode, opcode);
        assert_eq!(cpu.get_pc(), initial_pc + 2);
    }

    #[test]
    fn test_execute_nop() {
        let mut cpu = Processor::new();
        let initial_pc = cpu.get_pc();
        cpu.execute(0x0000);
        assert_eq!(cpu.get_pc(), initial_pc);
    }

    #[test]
    fn test_execute_cls() {
        let mut cpu = Processor::new();
        cpu.screen[0] = true;
        cpu.execute(0x00E0);
        assert!(!cpu.screen.iter().any(|&pixel| pixel));
    }

    #[test]
    fn test_execute_ret() {
        let mut cpu = Processor::new();
        cpu.sp = 1;
        cpu.stack[0] = 0x567;
        cpu.execute(0x00EE);
        assert_eq!(cpu.get_pc(), 0x567);
        assert_eq!(cpu.sp, 0);
    }

    #[test]
    fn test_execute_jp() {
        let mut cpu = Processor::new();
        cpu.execute(0x1ABC);
        assert_eq!(cpu.get_pc(), 0xABC);
    }

    #[test]
    fn test_execute_call() {
        let mut cpu = Processor::new();
        let initial_pc = cpu.get_pc();
        cpu.execute(0x2DEF);
        assert_eq!(cpu.get_pc(), 0xDEF);
        assert_eq!(cpu.sp, 1);
        assert_eq!(cpu.stack[0], initial_pc);
    }

    #[test]
    fn test_execute_se_vx_nn_equal() {
        let mut cpu = Processor::new();
        cpu.vr[0x3] = 0x42;
        let initial_pc = cpu.get_pc();
        cpu.execute(0x3342);
        assert_eq!(cpu.get_pc(), initial_pc + 2);
    }

    #[test]
    fn test_execute_se_vx_nn_not_equal() {
        let mut cpu = Processor::new();
        cpu.vr[0x3] = 0x41;
        let initial_pc = cpu.get_pc();
        cpu.execute(0x3342);
        assert_eq!(cpu.get_pc(), initial_pc);
    }

    #[test]
    fn test_execute_sne_vx_nn_not_equal() {
        let mut cpu = Processor::new();
        cpu.vr[0x1] = 0x10;
        let initial_pc = cpu.get_pc();
        cpu.execute(0x4111);
        assert_eq!(cpu.get_pc(), initial_pc + 2);
    }

    #[test]
    fn test_execute_sne_vx_nn_equal() {
        let mut cpu = Processor::new();
        cpu.vr[0x1] = 0x10;
        let initial_pc = cpu.get_pc();
        cpu.execute(0x4110);
        assert_eq!(cpu.get_pc(), initial_pc);
    }

    #[test]
    fn test_execute_se_vx_vy_equal() {
        let mut cpu = Processor::new();
        cpu.vr[0x2] = 0x5;
        cpu.vr[0x7] = 0x5;
        let initial_pc = cpu.get_pc();
        cpu.execute(0x5270);
        assert_eq!(cpu.get_pc(), initial_pc + 2);
    }

    #[test]
    fn test_execute_se_vx_vy_not_equal() {
        let mut cpu = Processor::new();
        cpu.vr[0x2] = 0x5;
        cpu.vr[0x7] = 0x6;
        let initial_pc = cpu.get_pc();
        cpu.execute(0x5270);
        assert_eq!(cpu.get_pc(), initial_pc);
    }

    #[test]
    fn test_execute_ld_vx_nn() {
        let mut cpu = Processor::new();
        cpu.execute(0x6588);
        assert_eq!(cpu.vr[0x5], 0x88);
    }

    #[test]
    fn test_execute_add_vx_nn() {
        let mut cpu = Processor::new();
        cpu.vr[0x9] = 0x10;
        cpu.execute(0x7920);
        assert_eq!(cpu.vr[0x9], 0x30);
    }

    #[test]
    fn test_execute_ld_vx_vy() {
        let mut cpu = Processor::new();
        cpu.vr[0xA] = 0xAA;
        cpu.execute(0x8BA0);
        assert_eq!(cpu.vr[0xB], 0xAA);
    }

    #[test]
    fn test_execute_or_vx_vy() {
        let mut cpu = Processor::new();
        cpu.vr[0xC] = 0b10101010;
        cpu.vr[0xD] = 0b11001100;
        cpu.execute(0x8CD1);
        assert_eq!(cpu.vr[0xC], 0b11101110);
    }

    #[test]
    fn test_execute_and_vx_vy() {
        let mut cpu = Processor::new();
        cpu.vr[0xE] = 0b10101010;
        cpu.vr[0xF] = 0b11001100;
        cpu.execute(0x8EF2);
        assert_eq!(cpu.vr[0xE], 0b10001000);
    }

    #[test]
    fn test_execute_xor_vx_vy() {
        let mut cpu = Processor::new();
        cpu.vr[0x0] = 0b10101010;
        cpu.vr[0x1] = 0b11001100;
        cpu.execute(0x8013);
        assert_eq!(cpu.vr[0x0], 0b01100110);
    }

    #[test]
    fn test_execute_add_vx_vy_no_carry() {
        let mut cpu = Processor::new();
        cpu.vr[0x2] = 10;
        cpu.vr[0x3] = 20;
        cpu.execute(0x8234);
        assert_eq!(cpu.vr[0x2], 30);
        assert_eq!(cpu.vr[0xF], 0);
    }

    #[test]
    fn test_execute_add_vx_vy_with_carry() {
        let mut cpu = Processor::new();
        cpu.vr[0x2] = 250;
        cpu.vr[0x3] = 10;
        cpu.execute(0x8234);
        assert_eq!(cpu.vr[0x2], 4);
        assert_eq!(cpu.vr[0xF], 1);
    }

    #[test]
    fn test_execute_sub_vx_vy_no_borrow() {
        let mut cpu = Processor::new();
        cpu.vr[0x4] = 30;
        cpu.vr[0x5] = 10;
        cpu.execute(0x8455);
        assert_eq!(cpu.vr[0x4], 20);
        assert_eq!(cpu.vr[0xF], 1);
    }

    #[test]
    fn test_execute_sub_vx_vy_with_borrow() {
        let mut cpu = Processor::new();
        cpu.vr[0x4] = 10;
        cpu.vr[0x5] = 30;
        cpu.execute(0x8455);
        assert_eq!(cpu.vr[0x4], 236);
        assert_eq!(cpu.vr[0xF], 0);
    }

    #[test]
    fn test_execute_shr_vx() {
        let mut cpu = Processor::new();
        cpu.vr[0x6] = 0b10110101;
        cpu.execute(0x8606);
        assert_eq!(cpu.vr[0x6], 0b01011010);
        assert_eq!(cpu.vr[0xF], 1);

        let mut cpu2 = Processor::new();
        cpu2.vr[0x6] = 0b10110100;
        cpu2.execute(0x8606);
        assert_eq!(cpu2.vr[0x6], 0b01011010);
        assert_eq!(cpu2.vr[0xF], 0);
    }

    #[test]
    fn test_execute_subn_vx_vy_no_borrow() {
        let mut cpu = Processor::new();
        cpu.vr[0x7] = 10;
        cpu.vr[0x8] = 30;
        cpu.execute(0x8787);
        assert_eq!(cpu.vr[0x7], 20);
        assert_eq!(cpu.vr[0xF], 1);
    }

    #[test]
    fn test_execute_subn_vx_vy_with_borrow() {
        let mut cpu = Processor::new();
        cpu.vr[0x7] = 30;
        cpu.vr[0x8] = 10;
        cpu.execute(0x8787);
        assert_eq!(cpu.vr[0x7], 236);
        assert_eq!(cpu.vr[0xF], 0);
    }

    #[test]
    fn test_execute_shl_vx() {
        let mut cpu = Processor::new();
        cpu.vr[0x9] = 0b01011010;
        cpu.execute(0x890E);
        assert_eq!(cpu.vr[0x9], 0b10110100);
        assert_eq!(cpu.vr[0xF], 0);

        let mut cpu2 = Processor::new();
        cpu2.vr[0x9] = 0b11011010;
        cpu2.execute(0x890E);
        assert_eq!(cpu2.vr[0x9], 0b10110100);
        assert_eq!(cpu2.vr[0xF], 128);
    }

    #[test]
    fn test_execute_sne_vx_vy_not_equal() {
        let mut cpu = Processor::new();
        cpu.vr[0xA] = 5;
        cpu.vr[0xB] = 10;
        let initial_pc = cpu.get_pc();
        cpu.execute(0x9AB0);
        assert_eq!(cpu.get_pc(), initial_pc + 2);
    }

    #[test]
    fn test_execute_sne_vx_vy_equal() {
        let mut cpu = Processor::new();
        cpu.vr[0xA] = 5;
        cpu.vr[0xB] = 5;
        let initial_pc = cpu.get_pc();
        cpu.execute(0x9AB0);
        assert_eq!(cpu.get_pc(), initial_pc);
    }

    #[test]
    fn test_execute_ld_i() {
        let mut cpu = Processor::new();
        cpu.execute(0xA123);
        assert_eq!(cpu.get_ir(), 0x123);
    }

    #[test]
    fn test_execute_jp_v0() {
        let mut cpu = Processor::new();
        cpu.vr[0] = 0x10;
        cpu.execute(0xB234);
        assert_eq!(cpu.get_pc(), 0x234 + 0x10);
    }

    #[test]
    fn test_tick_timers_decrement() {
        let mut cpu = Processor::new();
        cpu.dt = 5;
        cpu.st = 10;

        cpu.tick_timers();

        assert_eq!(cpu.dt, 4);
        assert_eq!(cpu.st, 9);
    }

    #[test]
    fn test_execute_drw() {
        let mut cpu = Processor::new();
        cpu.ir = 0;
        cpu.mem[0] = 0xFF; // Single row full of pixels
        cpu.vr[0] = 0;
        cpu.vr[1] = 0;
        cpu.execute(0xD011); // Draw 1-byte sprite at (0, 0)

        for i in 0..8 {
            assert!(cpu.screen[i]);
        }
        assert_eq!(cpu.vr[0xF], 0); // No collision in this simple case

        // Test collision
        cpu.execute(0xD011); // Draw again at the same position
        assert_eq!(cpu.vr[0xF], 1); // Collision should occur
    }

    #[test]
    fn test_execute_skp_vx_pressed() {
        let mut cpu = Processor::new();
        cpu.vr[0x2] = 0x5;
        cpu.keys[0x5] = true;
        let initial_pc = cpu.get_pc();
        cpu.execute(0xE29E);
        assert_eq!(cpu.get_pc(), initial_pc + 2);
    }

    #[test]
    fn test_execute_skp_vx_not_pressed() {
        let mut cpu = Processor::new();
        cpu.vr[0x2] = 0x5;
        cpu.keys[0x5] = false;
        let initial_pc = cpu.get_pc();
        cpu.execute(0xE29E);
        assert_eq!(cpu.get_pc(), initial_pc);
    }

    #[test]
    fn test_execute_sknp_vx_not_pressed() {
        let mut cpu = Processor::new();
        cpu.vr[0x4] = 0xA;
        cpu.keys[0xA] = false;
        let initial_pc = cpu.get_pc();
        cpu.execute(0xE4A1);
        assert_eq!(cpu.get_pc(), initial_pc + 2);
    }

    #[test]
    fn test_execute_sknp_vx_pressed() {
        let mut cpu = Processor::new();
        cpu.vr[0x4] = 0xA;
        cpu.keys[0xA] = true;
        let initial_pc = cpu.get_pc();
        cpu.execute(0xE4A1);
        assert_eq!(cpu.get_pc(), initial_pc);
    }

    #[test]
    fn test_execute_ld_vx_dt() {
        let mut cpu = Processor::new();
        cpu.dt = 0x3C;
        cpu.execute(0xF107);
        assert_eq!(cpu.vr[0x1], 0x3C);
    }

    #[test]
    fn test_execute_ld_vx_k_skips_if_no_key() {
        let mut cpu = Processor::new();
        let initial_pc = cpu.get_pc();
        cpu.execute(0xF20A);
        assert_eq!(cpu.get_pc(), initial_pc - 2);
    }

    #[test]
    fn test_tick_timers_stops_at_zero() {
        let mut cpu = Processor::new();
        cpu.dt = 1;
        cpu.st = 1;

        cpu.tick_timers();
        cpu.tick_timers();

        assert_eq!(cpu.dt, 0);
        assert_eq!(cpu.st, 0);

        cpu.tick_timers();

        assert_eq!(cpu.dt, 0);
        assert_eq!(cpu.st, 0);
    }

    #[test]
    fn test_pushing_and_popping_to_stack() {
        let mut cpu = Processor::new();
        let val1: u16 = 0x1234;
        let val2: u16 = 0x5678;

        cpu.stk_push(val1);
        cpu.stk_push(val2);
        assert_eq!(cpu.get_sp(), 2);

        assert_eq!(cpu.stk_pop(), val2);
        assert_eq!(cpu.get_sp(), 1);

        assert_eq!(cpu.stk_pop(), val1);
        assert_eq!(cpu.get_sp(), 0);
    }

    #[test]
    #[should_panic]
    fn test_stack_overflow() {
        let mut cpu = Processor::new();
        for i in 0..STACK_SIZE + 1 {
            cpu.stk_push(i as u16);
        }
    }

    #[test]
    #[should_panic]
    fn test_stack_underflow() {
        let mut cpu = Processor::new();
        cpu.stk_pop();
    }
}
