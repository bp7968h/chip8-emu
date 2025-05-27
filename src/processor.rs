use crate::{RAM_SIZE, SCREEN_HEIGHT, SCREEN_WIDTH, STACK_SIZE, START_ADDR, V_REGS};

/// Represents the main components of the CHIP-8 virtual machine (CPU, memory, display, registers, timers).
/// This struct encapsulates the entire state of the emulator at any given time.
#[derive(Debug)]
pub struct Processor {
    pc: u16,
    mem: [u8; RAM_SIZE],
    screen: [bool; SCREEN_WIDTH * SCREEN_HEIGHT],
    vr: [u8; V_REGS],
    ir: u16,
    sp: u16,
    stack: [u16; STACK_SIZE],
    dt: u8,
    st: u8,
}

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
    fn new() -> Self {
        Processor::default()
    }
}
