import React from "react";
import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode,
    style?: string,
}

const Card: React.FC<CardProps> = ({ children, style }) => {
    return (
        <div className={`bg-gray-800 opacity-40 rounded-xl shadow-lg p-4 ${style || ''}`}>
            {children}
        </div>
    )
};

export default Card;       