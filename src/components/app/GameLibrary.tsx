import React from "react";
import CardContent from "../ui/CardContent"
import List from "../ui/List";
import type { AvailableGameInfo } from "../../constants/availableGames";

interface GameLibraryProps {
    games: AvailableGameInfo[],
    onGameSelect: (game: AvailableGameInfo) => void,
    selectedGameId: string | null,
}

const GameLibrary: React.FC<GameLibraryProps> = ({ games, onGameSelect, selectedGameId }) => {
    return (
        <CardContent title="Game Library">
            <List
                items={games}
                onItemClick={(game: AvailableGameInfo) => onGameSelect(game)}
                className="space-y-2 flex-grow"
                listItemClassName="p-3"
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