import React from "react";

interface ListItemProps {
    name: string,
    size: string,
    selected?: boolean,
    color?: string,
    onClick?: () => void,
    className?: string,
}

const ListItem: React.FC<ListItemProps> = ({
    name, size, selected = false, color = "#6b7280", onClick, className
}) => {
    return (
        <li
            className={`
        p-3 rounded-md flex items-center justify-between text-gray-50
        ${selected ? 'bg-gray-700 bg-opacity-60' : 'border border-gray-600'}
        ${onClick ? 'cursor-pointer hover:bg-gray-700/50 transition-colors duration-150' : ''}
        ${className || ''}
      `}
            onClick={onClick}
        >
            <div className="flex items-center">
                <span className={`w-2 h-2 rounded-full mr-2 bg-[${color}]`}></span>
                <span className={`${selected ? 'text-gray-50' : 'text-gray-300'} font-semibold text-base`}>
                    {name}
                </span>
            </div>
            <span className="text-sm font-mono text-gray-400">{size}</span>
        </li>
    );
};

export default ListItem;