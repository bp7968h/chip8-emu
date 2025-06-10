import React from "react";
import CardContent from "../ui/CardContent"

interface GameInfoProps {
    className?: string;
}

const GameInfo: React.FC<GameInfoProps> = ({ className }) => {
    const currentGame = {
        name: "Pong",
        size: "1KB",
        year: 1972,
        players: 2,
    };

    return (
        <CardContent title="Game Information">
            <div className={`flex flex-row justify-around ${className || ''}`}>
                <div>
                    <p className="text-sm text-gray-400 mb-1">Now Playing:</p>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">
                        {currentGame.name}
                    </h3>
                </div>
                <div className="space-y-1 mb-6"> {/* Add some vertical spacing between stats */}
                    <p className="text-sm text-gray-300">
                        <span className="font-semibold text-gray-400">Size:</span> {currentGame.size}
                    </p>
                    <p className="text-sm text-gray-300">
                        <span className="font-semibold text-gray-400">Year:</span> {currentGame.year}
                    </p>
                    <p className="text-sm text-gray-300">
                        <span className="font-semibold text-gray-400">Players:</span> {currentGame.players}
                    </p>
                </div>
            </div>
        </CardContent>
    )
}

export default GameInfo;