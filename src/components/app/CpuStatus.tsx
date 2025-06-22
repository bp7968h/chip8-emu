import React, { useEffect, useState, type RefObject } from "react";
import CardContent from "../ui/CardContent";
import { CHIP8_CYCLES_PER_FRAME, type EmulatorStatus } from "../../hooks/useChip8Controller";
import type { Processor } from "chip8_core";
import ExecutedInstructions from "./ExecutedInstructions";
import Separator from "../ui/Separator";
import colorClass from "../../constants/colorClass";

interface CpuStatusProps {
    className?: string;
    processorRef: RefObject<Processor | null>;
    memoryRef: RefObject<WebAssembly.Memory | null>;
    screenUpdateTrigger: number;
    fps: number,
    emulatorStatus: EmulatorStatus;
}

interface CpuState {
    I: string;
    PC: string;
    SP: string;
}

export interface OpCodeItem {
    id: number;
    opcode: string;
}


const CpuStatus: React.FC<CpuStatusProps> = ({
    className, processorRef, screenUpdateTrigger, fps, emulatorStatus, memoryRef
}) => {
    const [cpuState, setCpuState] = useState<CpuState>({ I: '_', PC: '_', SP: '_' });
    const [lastInstructions, setLastInstructions] = useState<OpCodeItem[]>([]);

    useEffect(() => {
        const processor = processorRef.current;
        const wasm_memory = memoryRef.current;
        if (!processor || !wasm_memory) {
            return;
        }

        setCpuState({
            I: `0x${processor.i_register().toString(16).toUpperCase().padStart(3, '0')}`,
            PC: `0x${processor.program_counter().toString(16).toUpperCase().padStart(3, '0')}`,
            SP: processor.stack_pointer().toString(),
        });

        const opcodeBufferPtr = processor.opcodeBufferPtr();
        const opcodeBufferView = new Uint16Array(wasm_memory.buffer, opcodeBufferPtr, CHIP8_CYCLES_PER_FRAME);
        const newLastInstructions: OpCodeItem[] = [];

        for (let i = 0; i < CHIP8_CYCLES_PER_FRAME; i++) {
            const opcode = opcodeBufferView[i];
            newLastInstructions.push({
                id: Date.now() + i,
                opcode: `0x${opcode.toString(16).toUpperCase().padStart(4, '0')}`
            });
        }
        setLastInstructions(newLastInstructions);
    }, [screenUpdateTrigger, processorRef, memoryRef]);

    return (
        <CardContent title="CPU Status" className={`flex flex-col ${className || ''}`}>
            <h3 className={`text-2xl font-bold ${colorClass(emulatorStatus)} mx-2`}>
                {emulatorStatus.toUpperCase()}
            </h3>

            <section className="mb-2 flex-shrink-0">
                <div className="flex flex-row gap-2 justify-around mt-1 text-sm font-mono text-gray-50">
                    <div className="flex items-center gap-1">
                        <span className="text-gray-400">FPS:</span>
                        <span className="font-mono text-gray-50">{fps}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-gray-400 text-xs">I:</span>
                        <span className="text-gray-50">{cpuState.I}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-gray-400 text-xs">PC:</span>
                        <span className="text-gray-50">{cpuState.PC}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-gray-400 text-xs">SP:</span>
                        <span className="text-gray-50">{cpuState.SP}</span>
                    </div>
                    <div className="hidden sm:block"></div>
                </div>
            </section>

            <Separator />
            <ExecutedInstructions opCodes={lastInstructions} />
        </CardContent>
    )
}

export default CpuStatus;