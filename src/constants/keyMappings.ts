export interface KeyMap {
    chip8: string,
    qwerty: string,
}

const keyMappings: KeyMap[] = [
    { chip8: '1', qwerty: '1' },
    { chip8: '2', qwerty: '2' },
    { chip8: '3', qwerty: '3' },
    { chip8: 'C', qwerty: '4' }, // C maps to 4

    { chip8: '4', qwerty: 'Q' },
    { chip8: '5', qwerty: 'W' },
    { chip8: '6', qwerty: 'E' },
    { chip8: 'D', qwerty: 'R' }, // D maps to R

    { chip8: '7', qwerty: 'A' },
    { chip8: '8', qwerty: 'S' },
    { chip8: '9', qwerty: 'D' },
    { chip8: 'E', qwerty: 'F' }, // E maps to F

    { chip8: 'A', qwerty: 'Z' }, // A maps to Z
    { chip8: '0', qwerty: 'X' },
    { chip8: 'B', qwerty: 'C' }, // B maps to C
    { chip8: 'F', qwerty: 'V' }, // F maps to V
]

export default keyMappings;