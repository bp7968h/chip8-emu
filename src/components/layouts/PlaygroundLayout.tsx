import React from "react";
import type { ReactNode } from "react";


interface PlaygroundLayoutProps {
    children: ReactNode,
    style?: string,
}

const PlaygroundLayout: React.FC<PlaygroundLayoutProps> = ({ children, style }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-[320px_1fr_140px] gap-2 ${style || ''}`}>
            {children}
        </div>
    )
};

export default PlaygroundLayout;