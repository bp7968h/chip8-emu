import React from "react";
import ListItem from "./ListItem";
import type { GameItem } from "../../constants/gameItems";

interface ListProps {
    items: GameItem[],
    onItemClick?: (item: GameItem) => void,
    className?: string,
}

const List: React.FC<ListProps> = ({ items, onItemClick, className }) => {
    return (
        <ul className={`space-y-3 ${className || ''}`}>
            {items.map((item) => (
                <ListItem
                    key={item.id || item.name} // Use id if available, fallback to name (ensure uniqueness)
                    name={item.name}
                    size={item.size}
                    selected={item.selected}
                    color={item.color}
                    onClick={onItemClick ? () => onItemClick(item) : undefined}
                />
            ))}
        </ul>
    )
};

export default List;