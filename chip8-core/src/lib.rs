pub mod processor;

/// The total size of the CHIP-8's Random Access Memory (RAM) in bytes.
/// CHIP-8 has 4KB (4096 bytes) of memory.
pub(crate) const RAM_SIZE: usize = 4096;

/// The width and height of the CHIP-8's monochrome display in pixels.
/// The standard CHIP-8 resolution is 64x32 pixels.
pub const SCREEN_WIDTH: usize = 64;
pub const SCREEN_HEIGHT: usize = 32;

/// The number of general-purpose 8-bit registers ($V_0$ through $V_{F}$).
/// $V_{F}$ is often used as a flag register for certain operations (e.g., carry, borrow).
pub(crate) const V_REGS: usize = 16;

/// The maximum depth of the call stack.
/// The CHIP-8 stack is typically 16 levels deep, storing 16-bit return addresses.
pub(crate) const STACK_SIZE: usize = 16;

/// The starting memory address where CHIP-8 programs (ROMs) are typically loaded.
/// Addresses 0x000 to 0x1FF (0-511) are reserved for the CHIP-8 interpreter and font set.
/// Most programs begin execution at 0x200 (512).
pub(crate) const START_ADDR: u16 = 0x200;

/// The number of keys on the CHIP-8's hexadecimal keypad.
/// This includes keys 0-9 and A-F, totaling 16 keys.
pub const NUM_KEYS: usize = 16;

/// This is constant value to maintain circular buffer for last `OPCODE_BUFFER_SIZE` executed opcodes
pub(crate) const OPCODE_BUFFER_SIZE: usize = 10;
