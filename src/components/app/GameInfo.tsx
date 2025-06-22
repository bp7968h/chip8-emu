import React from "react";
import CardContent from "../ui/CardContent"
import type { AvailableGameInfo } from "../../constants/availableGames";

interface GameInfoProps {
    availableGameInfo: AvailableGameInfo | null,
    className?: string;
}

const GameInfo: React.FC<GameInfoProps> = ({ availableGameInfo, className }) => {

    if (!availableGameInfo) {
        return (
            <CardContent title="Game Information">
                <div className={`flex items-center justify-center ${className || ''}`}>
                    <div>
                        <p className="text-sm text-gray-400 mb-1">
                            Select game from game library or upload game and press PLAY.
                        </p>
                    </div>
                </div>
            </CardContent>
        )
    }

    return (
        <CardContent title="Game Information">
            <div className={`flex flex-row justify-around ${className || ''}`}>
                <div>
                    <p className="text-sm text-gray-400 mb-1">Now Playing:</p>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">
                        {availableGameInfo.title}
                    </h3>
                </div>
                <div className="space-y-1 mb-4">
                    <p className="text-sm text-gray-300">
                        <span className="font-semibold text-gray-400">Size:</span> {availableGameInfo.size}KB
                    </p>
                    <p className="text-sm text-gray-300">
                        <span className="font-semibold text-gray-400">Year:</span> {availableGameInfo.year == 0 ? "____" : availableGameInfo.year}
                    </p>
                </div>
            </div>
        </CardContent>
    )
}

export default GameInfo;