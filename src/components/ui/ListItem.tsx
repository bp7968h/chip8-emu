import React, { type ReactNode } from "react";

interface ListItemProps {
    children: ReactNode,
    selected?: boolean,
    onClick?: () => void,
    className?: string,
}

const ListItem: React.FC<ListItemProps> = ({
    children, selected = false, onClick, className
}) => {
    return (
        <li
            className={`
        rounded-md flex items-center justify-between text-gray-50
        ${selected ? 'bg-gray-700 bg-opacity-60' : 'border border-gray-600'}
        ${onClick ? 'cursor-pointer hover:bg-gray-700/50 transition-colors duration-150' : ''}
        ${className || ''}
      `}
            onClick={onClick}
        >
            {children}
        </li>
    );
};

export default ListItem;