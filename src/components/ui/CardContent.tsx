import React from "react";
import type { ReactNode } from "react";

interface CardContentProps {
    title: string,
    children: ReactNode,
    className?: string,
}

const CardContent: React.FC<CardContentProps> = ({ title, children, className }) => {
    return (
        <div className={className}>
            <h2 className="text-xl font-bold text-white mb-4">
                {title}
            </h2>
            {children}
        </div>
    )
};

export default CardContent;       