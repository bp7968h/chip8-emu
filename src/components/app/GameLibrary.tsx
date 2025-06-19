import React from "react";
import CardContent from "../ui/CardContent"
import List from "../ui/List";
import Game from "../../constants/gameItems";
import type { GameInfo } from "../../constants/availableGames";

interface GameLibraryProps {
    games: GameInfo[],
    onGameSelect: (game: GameInfo) => void,
    selectedGameId: string | null,
}

const GameLibrary: React.FC<GameLibraryProps> = ({ games, onGameSelect, selectedGameId }) => {
    return (
        <CardContent title="Game Library">
            <List
                items={games}
                onItemClick={(game: GameInfo) => onGameSelect(game)}
                className="flex-grow"
                renderItem={(game) => (
                    <div className="flex items-center">
                        <span className={`w-2 h-2 rounded-full mr-2 bg-purple-400`}></span>
                        <span className={`${game.id === selectedGameId ? 'text-gray-50' : 'text-gray-300'} font-semibold text-base`}>
                            {game.title}
                        </span>
                    </div>
                )}
                renderRight={(game) => (
                    <span className="text-sm font-mono text-gray-400">{game.author}</span>
                )}
                getItemKey={(game) => game.id}
                isItemSelected={(game) => game.id === selectedGameId}
            />
        </CardContent>
    )
}

export default GameLibrary;