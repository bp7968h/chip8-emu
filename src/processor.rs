use crate::{RAM_SIZE, SCREEN_HEIGHT, SCREEN_WIDTH, STACK_SIZE, START_ADDR, V_REGS};

/// Represents the main components of the CHIP-8 virtual machine (CPU, memory, display, registers, timers).
/// This struct encapsulates the entire state of the emulator at any given time.
#[derive(Debug)]
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

    /// The Delay Timer.
    /// This 8-bit timer decrements at a rate of 60Hz until it reaches zero.
    /// It is used for timing events in games.
    dt: u8,

    /// The Sound Timer.
    /// This 8-bit timer also decrements at a rate of 60Hz until it reaches zero.
    /// As long as its value is non-zero, a sound (a simple beep) is emitted.
    st: u8,
}

/// Provides a default, initialized state for the `ProcessingUnit`.
/// All registers, memory, and timers are set to their initial power-on values.
impl Default for Processor {
    fn default() -> Self {
        Processor {
            pc: START_ADDR,
            mem: [0; 4096],
            screen: [false; 64 * 32],
            vr: [0; 16],
            ir: 0,
            sp: 0,
            stack: [0; 16],
            dt: 0,
            st: 0,
        }
    }
}

impl Processor {
    /// Creates a new `ProcessingUnit` instance with its default, initial state.
    ///
    /// This is equivalent to calling `ProcessingUnit::default()`.
    pub fn new() -> Self {
        Processor::default()
    }

    pub fn cycle(&mut self) {
        todo!()
    }

    pub fn fetch(&mut self) -> u16 {
        todo!()
    }

    pub fn execute(&mut self, op_code: u16) {
        todo!()
    }

    pub fn tick_timers(&mut self) {
        todo!()
    }

    pub fn reset(&mut self) {
        todo!()
    }

    fn stk_push(&mut self, val: u16) {
        if self.sp as usize >= STACK_SIZE {
            panic!("Stack overflow!");
        }
        self.stack[self.sp as usize] = val;
        self.sp += 1;
    }

    fn stk_pop(&mut self) -> u16 {
        if self.sp == 0 {
            panic!("Stack underflow!");
        }
        self.sp -= 1;
        self.stack[self.sp as usize]
    }
}
