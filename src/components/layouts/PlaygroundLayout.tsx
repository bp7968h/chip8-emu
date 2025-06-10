import React from "react";
import type { ReactNode } from "react";


interface PlaygroundLayoutProps {
    children: ReactNode,
    style?: string,
}

const PlaygroundLayout: React.FC<PlaygroundLayoutProps> = ({ children, style }) => {
    return (
        <div className={`flex flex-col py-2 px-2 gap-2  lg:flex-row lg:py-8 lg:px-16 h-full ${style || ''}`}>
            {children}
        </div>
    )
};

export default PlaygroundLayout;