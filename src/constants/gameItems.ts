export interface GameItem {
    name: string;
    size: string;
    selected?: boolean;
    color?: string;
    id?: string;
}

const gameItems: GameItem[] = [
    { id: 'pong', name: "Pong", size: "1KB", selected: true, color: "#a78bfa" },
    { id: 'tetris', name: "Tetris", size: "2KB", selected: false, color: "#6b7280" },
    { id: 'snake', name: "Snake", size: "1.5KB", selected: false, color: "#6b7280" },
    { id: 'spaceinvaders', name: "Space Invaders", size: "3KB", selected: false, color: "#6b7280" },
];

export default gameItems;