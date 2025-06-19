export interface GameControlInfo {
    key: string,
    action: string
}

export interface GameInfo {
    id: string,
    title: string,
    filename: string,
    size: number,
    author: string,
    year: number,
    description: GameControlInfo[],
}

const availableGames: GameInfo[] = [
    {
        id: "space_invaders",
        title: "Space Invaders",
        filename: "space_invaders.ch8",
        size: 1.3,
        author: "David Winter",
        year: 1978,
        description: [
            { key: '5', action: 'Shoot' },
            { key: '4', action: 'Move Left' },
            { key: '6', action: 'Move Right' },
        ]
    },
    {
        id: "pong",
        title: "Pong",
        filename: "pong.ch8",
        size: 0.246,
        author: "Unknown",
        year: 1972,
        description: [
            { key: '1', action: 'Move Up' },
            { key: 'Q', action: 'Move Down' },
        ]
    },
    {
        id: "tetris",
        title: "Tetris",
        filename: "tetris.ch8",
        size: 0.494,
        author: "Fran Dachille",
        year: 1984,
        description: [
            { key: '4', action: 'Left Rotate' },
            { key: '5', action: 'Left Move' },
            { key: '6', action: 'Right Move' },
            { key: '1', action: 'Drop' },
            { key: 'Speed', action: 'Increases slightly every 5 lines, peaks at 45 lines' },
        ]
    },
    {
        id: "astro_dodge",
        title: "Astro Dodge",
        filename: "astro_dodge.ch8",
        size: 1.1,
        author: "Revival Studios",
        year: 2008,
        description: [
            { key: 'info', action: 'Make your way through asteroids field and dodge asteroids and score points' },
            { key: 'W', action: 'Start' },
            { key: '2', action: 'Move Up' },
            { key: 'Q', action: 'Move Left' },
            { key: 'E', action: 'Move Right' },
            { key: 'S', action: 'Move Down' },
        ]
    },
    {
        id: "hidden",
        title: "Hidden",
        filename: "hidden.ch8",
        size: 0.85,
        author: "David Winter",
        year: 1996,
        description: [
            { key: 'info', action: 'Find all identical cards in minimum time' },
            { key: '2', action: 'Move Down' },
            { key: '4', action: 'Move Left' },
            { key: '5', action: 'Show card' },
            { key: '6', action: 'Move right' },
            { key: '8', action: 'Move up' },
        ]
    },
    {
        id: "breakout",
        title: "Breakout",
        filename: "breakout",
        size: 0.28,
        author: "David Winter",
        year: 1997,
        description: [
            { key: 'info', action: 'Break all the brixs with 5 lives' },
            { key: 'Q', action: 'Move Left' },
            { key: 'E', action: 'Move Right' },
        ]
    }
];

export default availableGames;