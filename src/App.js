import './App.css';
import {useState} from 'react';
import tyl from './img/tyl.png';
import k1 from './img/k1.png';
import k2 from './img/k2.png';
import k3 from './img/k3.png';
import Karta from './Karta';

const Karty=[tyl, k1, k2, k3];
let wylosowane=[1,2,2,3,1,3];

function App() {
  let [karty, setKarty] = useState(Array(6).fill(tyl));
  function obslugaKlik(i)
  {
    let k = karty.slice();
    k[i] = Karty[wylosowane[i]];
    setKarty(k);
    console.log(i);
  }

  return (
    <div className="App">
      <h1>memory</h1>
      <div className='wiersz'>
        <Karta obr={karty[0]} klik={()=>obslugaKlik(0)} />
        <Karta obr={karty[1]} klik={()=>obslugaKlik(1)} />
        <Karta obr={karty[2]} klik={()=>obslugaKlik(2)} />
      </div>
      <div className='wiersz'>
        <Karta obr={karty[3]} klik={()=>obslugaKlik(3)} />
        <Karta obr={karty[4]} klik={()=>obslugaKlik(4)} />
        <Karta obr={karty[5]} klik={()=>obslugaKlik(5)} />
      </div>
    </div>
  );
}

export default App;
