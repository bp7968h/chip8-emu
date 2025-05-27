/// Represents the main components of the CHIP-8 virtual machine (CPU, memory, display, registers, timers).
/// This struct encapsulates the entire state of the emulator at any given time.
#[derive(Debug)]
pub struct Processor {
    pc: u16,
    mem: [u8; 4096],
    screen: [bool; 64 * 32],
    vr: [u8; 16],
    ir: u16,
    sp: u16,
    stack: [u16; 16],
    dt: u8,
    st: u8,
}

impl Default for Processor {
    fn default() -> Self {
        Processor {
            pc: 0x200,
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
    fn new() -> Self {
        Processor::default()
    }
}
