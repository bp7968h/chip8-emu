import init, { Processor } from "chip8_core";
import { useEffect, useState } from "react";

const useChip8 = () => {
    const [chip8, setChip8] = useState<null | Processor>(null);
    const [memory, setMemory] = useState<WebAssembly.Memory | null>(null);

    useEffect(() => {
        const initChip8 = async () => {
            const wasm = await init();
            const processor = new Processor();
            setChip8(processor);
            setMemory(wasm.memory);
            console.log("Chip8 processor initialized successfully.");
        }

        initChip8();
    }, []);

    return [chip8, memory]
};

export default useChip8;