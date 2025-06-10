export const getRandomHex = (bits: number) => {
    if (bits === 8) return `0x${Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase()}`;
    if (bits === 16) return `0x${Math.floor(Math.random() * 65536).toString(16).padStart(4, '0').toUpperCase()}`;
    return '0x00';
};

export const mockCpuState = {
    V: Array.from({ length: 16 }, (_, i) => ({
        name: `V${i.toString(16).toUpperCase()}`,
        value: getRandomHex(8)
    })),
    I: getRandomHex(16),
    PC: getRandomHex(16),
    SP: getRandomHex(8),
    DT: getRandomHex(8),
    ST: getRandomHex(8),
    lastInstructions: [
        '0x1234', '0xAABB', '0xCDCD', '0xEFFE', '0x0123'
    ].map(() => getRandomHex(16)),
    status: 'running',
    fps: 60,
};