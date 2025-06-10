import React from "react";
import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode,
    className?: string,
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={`bg-card rounded-xl shadow-lg p-4 ${className || ''}`}>
            {children}
        </div>
    )
};

export default Card;       