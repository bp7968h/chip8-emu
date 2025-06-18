import type { Processor } from "chip8_core";
import { useEffect, type RefObject } from "react";

const KEY_MAP: { [key: string]: number } = {
    '1': 0x1, '2': 0x2, '3': 0x3, '4': 0xC,
    'q': 0x4, 'w': 0x5, 'e': 0x6, 'r': 0xD,
    'a': 0x7, 's': 0x8, 'd': 0x9, 'f': 0xE,
    'z': 0xA, 'x': 0x0, 'c': 0xB, 'v': 0xF
};

interface UseKeyboardInputProps {
    processorRef: RefObject<Processor | null>,
    isRunning: boolean,
}

const useKeyboardInput = ({ processorRef, isRunning }: UseKeyboardInputProps) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!processorRef.current || !isRunning) {
                return
            };

            const chip8Key = KEY_MAP[event.key.toLowerCase()];
            if (chip8Key !== undefined) {
                processorRef.current.key_press(chip8Key);
            }
        };

        const handleKeyUp = (event: KeyboardEvent) => {
            if (!processorRef.current || !isRunning) {
                return
            };

            const chip8Key = KEY_MAP[event.key.toLowerCase()];
            if (chip8Key !== undefined) {
                processorRef.current.key_release(chip8Key);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [processorRef, isRunning]);
}

export default useKeyboardInput;