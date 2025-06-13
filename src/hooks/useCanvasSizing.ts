import { useCallback, useEffect, useState, type Ref } from "react";

const DEFAULT_GRID_WIDTH = 64;
const DEFAULT_GRID_HEIGHT = 32;

const useCanvasSizing = (
    canvasRef: Ref<HTMLCanvasElement>,
    gridWidth: number = DEFAULT_GRID_WIDTH,
    gridHeight: number = DEFAULT_GRID_HEIGHT,
) => {
    const [pixelSize, setPixelSize] = useState(0);

    const calculateCanvasDimensions = useCallback(() => {
        const canvas = typeof canvasRef === 'function' ? null : canvasRef?.current;
        if (!canvas) {
            return;
        }

        const { clientWidth, clientHeight } = canvas;
        canvas.width = clientWidth;
        canvas.height = clientHeight;

        const calculatedPixelWidth = Math.floor(clientWidth / gridWidth);
        const calculatedPixelHeight = Math.floor(clientHeight / gridHeight);

        const newPixelSize = Math.min(calculatedPixelWidth, calculatedPixelHeight);
        setPixelSize(newPixelSize);
    }, [canvasRef, gridHeight, gridWidth]);

    useEffect(() => {
        const canvas = typeof canvasRef === 'function' ? null : canvasRef?.current;
        if (!canvas) {
            return;
        }

        if (typeof window === 'undefined' || !window.ResizeObserver) {
            calculateCanvasDimensions();
            return;
        }

        const resizeObserver = new ResizeObserver(entries => {
            if (entries[0] && entries[0].target === canvas) {
                calculateCanvasDimensions();
            }
        });

        resizeObserver.observe(canvas);

        return () => {
            resizeObserver.unobserve(canvas);
        };
    }, [canvasRef, calculateCanvasDimensions]);

    useEffect(() => {
        calculateCanvasDimensions();
    }, [canvasRef, calculateCanvasDimensions]);


    return { pixelSize, calculateCanvasDimensions };
};

export default useCanvasSizing;