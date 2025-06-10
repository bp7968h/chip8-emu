import React from "react";
import CardContent from "../ui/CardContent"
import List from "../ui/List";
import Game from "../../constants/gameItems";

const GameLibrary: React.FC = () => {
    const handleGameClick = (game: typeof Game[0]) => {
        console.log(`Game selected: ${game.name}`);
        // TODO: select and load the game into the emulator.
    };

    return (
        <CardContent title="Game Library">
            <List items={Game} onItemClick={handleGameClick} className="flex-grow" />
        </CardContent>
    )
}

export default GameLibrary;