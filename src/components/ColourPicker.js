import React from 'react';
import Pixel from './Pixel';
import Colours from '../Colours';

const ColourPicker = props => {
    return (
        <div className="colourPicker">
            {Colours.map((colour, colourIndex) => {
                return <Pixel key={colourIndex}
                    background={colour}
                    setColour={() => props.selectColour(colourIndex)}
                    currentColour={Colours[props.currentColour] === colour} />
            })}
        </div>
    );
}

export default ColourPicker;