import React, {useState} from 'react';
import Pixel from './Pixel';
import Colours from '../Colours';

const Canvas = props => {
    const savedCanvas = localStorage.getItem('savedCanvas');
    const startingCanvas = savedCanvas ? JSON.parse(savedCanvas) : Array(30)
        .fill()
        .map(() => Array(30)
            .fill(0));
    const [matrix, setMatrix] = useState(startingCanvas);

    const changeColour = (rowIndex, colIndex) => {
        const matrixAux = JSON.parse(JSON.stringify(matrix));
        matrixAux[rowIndex][colIndex] = props.currentColour;
        setMatrix(matrixAux);
        saveCurrentCanvas(matrixAux);
    }

    const saveCurrentCanvas = matrixAux => {
        localStorage.setItem('savedCanvas', JSON.stringify(matrixAux));
    }

    return (
        <div className={'canvas'}>
            {matrix.map((row, rowIndex) =>
                row.map((_, colIndex) => {
                    return (
                        <Pixel
                            key={`${rowIndex}-${colIndex}`}
                            background={Colours[matrix[rowIndex][colIndex]]}
                            setColour={() => changeColour(rowIndex, colIndex)} />
                    );
                })
            )}
        </div>
    );
}

export default Canvas;