import React, {useState} from 'react';
import Canvas from './components/Canvas';
import ColourPicker from './components/ColourPicker';
import './styles.css';

function App() {
    const [selectedColour, setSelectedColour] = useState(0);

    return (
        <div className="App">
            <ColourPicker currentColour={selectedColour} selectColour={colour => setSelectedColour(colour)} />
            <Canvas currentColour={selectedColour} />
        </div>
    );
}

export default App;
