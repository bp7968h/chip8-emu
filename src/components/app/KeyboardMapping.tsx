// src/components/app/KeyboardMapping.tsx
import React from "react";
import CardContent from "../ui/CardContent"; // Assuming CardContent exists and provides title
import keyMappings from "../../constants/keyMappings"; // Import your key mappings
import ArrowUpIcon from "../ui/ArrowUpIcon";

interface KeyboardMappingProps {
    className?: string; // Allow external styling if needed
}

const KeyboardMapping: React.FC<KeyboardMappingProps> = ({ className }) => {
    return (
        <CardContent title="Keyboard Mapping" className={className}>
            <div className="flex flex-col items-center gap-y-1">
                <div className="flex flex-row justify-center gap-x-1 w-full">
                    <h3 className="sr-only lg:not-sr-only">Chip8</h3>
                    {keyMappings.map((mapping) => (
                        <div
                            key={`chip8-${mapping.chip8}`} // Unique key for each element
                            className="w-6 h-5 lg:w-8 lg:h-6 bg-gray-700 border border-gray-600 rounded-md flex items-center justify-center flex-shrink-0"
                        >
                            <span className="font-mono text-gray-50 text-sm">{mapping.chip8}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row justify-center gap-x-1 w-full">
                    <span className="sr-only lg:not-sr-only text-purple-400">-----</span>
                    {keyMappings.map((mapping) => (
                        <div key={`pointer-${mapping.chip8}`} className="flex flex-col items-center w-6 lg:w-8 flex-shrink-0">
                            <ArrowUpIcon className="text-purple-400" />
                        </div>
                    ))}
                </div>

                <div className="flex flex-row justify-center gap-x-1 w-full">
                    <h3 className="sr-only lg:not-sr-only">Qwerty</h3>
                    {keyMappings.map((mapping) => (
                        <div
                            key={`qwerty-${mapping.qwerty}`}
                            className="w-6 h-5 lg:w-8 lg:h-6 bg-gray-700 border border-gray-600 rounded-md flex items-center justify-center flex-shrink-0"
                        >
                            <span className="font-mono text-gray-50 text-sm">{mapping.qwerty}</span>
                        </div>
                    ))}
                </div>

            </div>
        </CardContent>
    );
};

export default KeyboardMapping;