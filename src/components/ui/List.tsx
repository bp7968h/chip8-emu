import { type ReactNode } from "react";
import ListItem from "./ListItem";

interface ListProps<T> {
    items: T[],
    onItemClick?: (item: T) => void,
    className?: string,
    listItemClassName?: string,
    renderItem: (item: T) => ReactNode,
    renderRight?: (item: T) => ReactNode,
    getItemKey: (item: T) => string | number,
    isItemSelected?: (item: T) => boolean,
}

const List = <T,>({ items, onItemClick, className, renderItem, renderRight, getItemKey, isItemSelected, listItemClassName }: ListProps<T>) => {
    return (
        <ul className={`${className || ''}`}>
            {items.map((item) => (
                <ListItem
                    key={getItemKey(item)}
                    onClick={onItemClick ? () => onItemClick(item) : undefined}
                    selected={isItemSelected ? isItemSelected(item) : false}
                    className={listItemClassName || ''}
                >
                    {renderItem(item)}
                    {renderRight && renderRight(item)}
                </ListItem>
            ))}
        </ul>
    )
};

export default List;