import React from 'react';
import {SquareProps} from '../../interfaces/Square'

export const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
    return <button className="square" onClick={onSquareClick}>{value}</button>;
};