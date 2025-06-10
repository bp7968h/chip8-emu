import React from "react";
import CardContent from "../ui/CardContent";
import { mockCpuState } from "../../utils";
import Separator from "../ui/Separator";

interface CpuStatusProps {
    className?: string;
    fps?: number;
    emulatorStatus?: EmulatorStatus;
}

export type EmulatorStatus = 'running' | 'paused' | 'stopped';

export const mockEmulatorStatus: { fps: number; status: EmulatorStatus } = {
    fps: 60,
    status: 'running',
};

const CpuStatus: React.FC<CpuStatusProps> = ({
    className,
    fps = mockEmulatorStatus.fps,
    emulatorStatus = mockEmulatorStatus.status
}) => {
    // TODO: Get from emulator
    const cpuState = mockCpuState;

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

            <section className="flex flex-col flex-shrink-0">
                <h3 className="text-base font-semibold text-gray-400 mb-3">Executed Instructions(last 5)</h3>
                <div className="flex flex-col space-y-2 text-center">
                    {cpuState.lastInstructions.map((instruction, index) => (
                        <div
                            key={index}
                            className="bg-gray-700 bg-opacity-50 p-2 rounded-md text-gray-50 font-mono text-sm"
                        >
                            {instruction}
                        </div>
                    ))}
                </div>
            </section>
        </CardContent>
    )
}

export default CpuStatus;