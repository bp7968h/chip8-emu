import React, { useEffect, useState, type RefObject } from "react";
import CardContent from "../ui/CardContent";
import Separator from "../ui/Separator";
import { CHIP8_CYCLES_PER_FRAME, type EmulatorStatus } from "../../hooks/useChip8Controller";
import type { Processor } from "chip8_core";
import List from "../ui/List";

interface CpuStatusProps {
    className?: string;
    processorRef: RefObject<Processor | null>;
    memoryRef: RefObject<WebAssembly.Memory | null>;
    screenUpdateTrigger: number;
    emulatorStatus: EmulatorStatus;
}

interface CpuState {
    I: string;
    PC: string;
    SP: string;
}

interface OpCodeItem {
    id: number;
    opcode: string;
}


const CpuStatus: React.FC<CpuStatusProps> = ({
    className, processorRef, screenUpdateTrigger, emulatorStatus, memoryRef
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

    const statusColorClass = {
        'running': 'text-green-500',
        'paused': 'text-amber-500',
        'stopped': 'text-red-500',
    }[emulatorStatus];

    return (
        <CardContent title="CPU Status" className={`flex flex-col ${className || ''}`}>
            <h3 className={`text-2xl font-bold ${statusColorClass} mx-2`}>
                {emulatorStatus.toUpperCase()}
            </h3>

            <section className="mb-2">
                <div className="flex flex-row gap-2 justify-around mt-1 text-sm font-mono text-gray-50">
                    <div className="flex items-center gap-1">
                        <span className="text-gray-400">FPS:</span>
                        <span className="font-mono text-gray-50">60</span>
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

            <section className="flex flex-row px-0 py-1 gap-4 overflow-hidden">
                {/* Opcodes Column */}
                <div className="flex flex-col scroll-auto w-1/3">
                    <div className="flex flex-col mb-3">
                        <h3 className="text-base font-semibold text-gray-400">Instructions</h3>
                        <span className="text-xs text-gray-400 mb-1">
                            Last 10
                        </span>
                    </div>
                    <List
                        className="space-y-2"
                        items={lastInstructions}
                        getItemKey={(item) => item.id}
                        listItemClassName="p-0"
                        renderItem={(item) => (
                            <div className="bg-gray-700 bg-opacity-50 p-1 rounded-md text-gray-50 font-mono text-xs w-full text-center mb-0.5">
                                {item.opcode}
                            </div>
                        )}
                    />
                </div>

                {/* Logs Column */}
                <div className="flex flex-col flex-grow w-3/4"> {/* Takes remaining width */}
                    <div className="flex flex-col mb-3">
                        <h3 className="text-base font-semibold text-gray-400">Logs</h3>
                        <span className="text-xs text-gray-400 mb-1">
                            Recent events
                        </span>
                    </div>
                    <List
                        className="space-y-0.5 overflow-y-auto" // Added overflow-y-auto for scrollability
                        items={lastInstructions}
                        getItemKey={(item) => item.id}
                        renderItem={(item) => (
                            <div className="bg-gray-700 bg-opacity-50 p-0.5 rounded-md text-gray-50 font-mono text-xs w-full">
                                {/* Flex to align time and message */}
                                <span className="text-gray-400 mr-1">{item.id}:</span>
                                <span className="whitespace-nowrap overflow-hidden text-ellipsis">{item.opcode}</span>
                            </div>
                        )}
                    />
                </div>
            </section>
        </CardContent>
    )
}

export default CpuStatus;