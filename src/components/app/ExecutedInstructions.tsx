import React from "react";
import CardContent from "../ui/CardContent";
import List from "../ui/List";
import type { OpCodeItem } from "./CpuStatus";

interface ExecutedInstructionsProps {
    className?: string;
    opCodes: OpCodeItem[],
}

const ExecutedInstructions: React.FC<ExecutedInstructionsProps> = ({
    className, opCodes
}) => {
    return (
        <CardContent title="CPU Instructions" className={`flex flex-col ${className || ''}`}>
            <section className="flex flex-col px-0 py-1 gap-4 lg:max-h-[340px] overflow-hidden">
                <div className="flex flex-col mb-3 flex-shrink-0">
                    <h3 className="text-base font-semibold text-gray-400">Last 10 executions</h3>
                </div>
                <List
                    className="space-y-2 overflow-y-auto"
                    items={opCodes}
                    getItemKey={(item) => item.id}
                    listItemClassName="p-0"
                    renderItem={(item) => (
                        <div className="bg-gray-700 bg-opacity-50 py-1 rounded-md text-gray-50 font-mono text-xs w-full text-center">
                            {item.opcode}
                        </div>
                    )}
                />
            </section>
        </CardContent>
    )
}

export default ExecutedInstructions;