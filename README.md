# chip8-emu

A CHIP-8 emulator written in Rust, intended to run in the browser using WebAssembly and React.

## Overview

This project implements a CHIP-8 virtual machine. CHIP-8 is an interpreted programming language, originally used on some DIY microcomputers in the late 1970s. Emulators allow us to run these retro programs on modern hardware.

This emulator currently supports the core CHIP-8 instruction set. The architecture is designed to be modular, making it easier to integrate with front-end technologies like React for rendering the display and handling input.