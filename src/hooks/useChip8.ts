import init, { Processor } from "chip8_core";
import { useEffect, useState } from "react";

const useChip8 = () => {
    const [chip8, setChip8] = useState<null | Processor>(null);
    const [memory, setMemory] = useState<WebAssembly.Memory | null>(null);
    const [screenAddr, setScreenAddr] = useState<number | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initChip8 = async () => {
            try {
                const wasm = await init();
                const processor = new Processor();
                setChip8(processor);
                setMemory(wasm.memory);
                setScreenAddr(processor.screen());
                setIsInitialized(true);

                console.log("Chip8 processor initialized successfully.");
            } catch (err) {
                console.error("Failed to initialize Chip8 processor: ", err);
            }
        };

        initChip8();
    }, []);

    return { chip8, memory, screenAddr, isInitialized };
};

export default useChip8;