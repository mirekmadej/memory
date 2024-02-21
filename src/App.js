import './App.css';
import {useState} from 'react';
import tyl from './img/tyl.png';
import k1 from './img/k1.png';
import k2 from './img/k2.png';
import k3 from './img/k3.png';
import Karta from './Karta';

function App() {
  let [karty, setKarty] = useState(Array(6).fill(tyl));
  return (
    <div className="App">
      <h1>memory</h1>
      <div className='wiersz'>
        <Karta obr={tyl} />
        <Karta obr={tyl} />
        <Karta obr={tyl} />
      </div>
      <div className='wiersz'>
        <Karta obr={k1} />
        <Karta obr={k2} />
        <Karta obr={k3} />
      </div>
    </div>
  );
}

export default App;
