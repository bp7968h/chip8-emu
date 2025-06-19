import React, { type ReactNode } from "react";
import ListItem from "./ListItem";
import type { GameItem } from "../../constants/gameItems";

interface ListProps<T> {
    items: T[],
    onItemClick?: (item: T) => void,
    className?: string,
    renderItem: (item: T) => ReactNode,
    renderRight?: (item: T) => ReactNode,
    getItemKey: (item: T) => string | number,
    isItemSelected?: (item: T) => boolean,
}

const List = <T,>({ items, onItemClick, className, renderItem, renderRight, getItemKey, isItemSelected }: ListProps<T>) => {
    return (
        <ul className={`space-y-3 ${className || ''}`}>
            {items.map((item) => (
                <ListItem
                    key={getItemKey(item)}
                    onClick={onItemClick ? () => onItemClick(item) : undefined}
                    selected={isItemSelected ? isItemSelected(item) : false}
                >
                    {renderItem(item)}
                    {renderRight && renderRight(item)}
                </ListItem>
            ))}
        </ul>
    )
};

export default List;