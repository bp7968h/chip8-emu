import React from "react";
import type { ReactNode } from "react";

interface CardContentProps {
    title: string,
    children: ReactNode,
    style?: string,
}

const CardContent: React.FC<CardContentProps> = ({ title, children, style }) => {
    return (
        <div className={style}>
            <h2 className="text-xl font-bold text-white mb-4">
                {title}
            </h2>
            {children}
        </div>
    )
};

export default CardContent;       