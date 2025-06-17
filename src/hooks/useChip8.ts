import { Processor } from "chip8_core";
import { memory } from "chip8_core/chip8_core_bg.wasm";
import { useEffect, useRef } from "react";

const useChip8 = () => {
    const processorRef = useRef<Processor | null>(null);
    const memoryRef = useRef<WebAssembly.Memory | null>(null);
    const animationFrameIdRef = useRef<number | null>(null);
    useEffect(() => {
        const initChip8 = async () => {
            try {
                const processor = new Processor();
                processorRef.current = processor;
                memoryRef.current = memory;
                console.log("Chip8 processor initialized successfully.");
            } catch (err) {
                console.error("Failed to initialize Chip8 processor: ", err);
            }
        };
        initChip8();

        return () => {
            if (animationFrameIdRef.current !== null) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, []);

    return {
        processorRef,
        memoryRef,
        animationFrameIdRef
    };
};

export default useChip8;