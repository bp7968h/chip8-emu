import React from "react";

interface CanvasProps {
    className?: string
}

const Canvas: React.FC<CanvasProps> = ({ className }) => {
    return (
        <canvas className={`bg-card rounded-xl w-full mb-2 ${className || ''}`}>

        </canvas>
    )
}

export default Canvas;