export interface BoardProps {
    xIsNext: boolean;
    gameIsEnded: boolean;
    squares: Array<string | null>;
    onPlay: (nextSquares: Array<string | null>) => void;
}