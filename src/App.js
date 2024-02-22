import './App.css';
import {useState} from 'react';
import tyl from './img/tyl.png';
import k1 from './img/k1.png';
import k2 from './img/k2.png';
import k3 from './img/k3.png';
import Karta from './Karta';

const Karty=[tyl, k1, k2, k3];
let wylosowane=[1,2,2,3,1,3];
let odkryte=[0,0,0,0,0,0];
let kp=-1;
let kd=-1;
let kpi, kdi;  //indeksy kart

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


function App() {
  let [karty, setKarty] = useState(Array(6).fill(tyl));
  let [licznik, setLicznik] = useState(0);
  async function obslugaKlik(i)
  {
    if(odkryte[i]!=0) return;
    let k = karty.slice();
    
    if(kp==-1)  //to jest karta pierwsza
    {
      k[i] = Karty[wylosowane[i]];
      setKarty(k);
      kp = wylosowane[i];
      odkryte[i] = wylosowane[i];
      kpi=i;
      return;
    }
    if(kd==-1)
    {
      k[i] = Karty[wylosowane[i]];
      setKarty(k);
      kd = wylosowane[i];
      odkryte[i] = wylosowane[i];
      kdi=i;     
      setLicznik(licznik+1);

    }

    if(kp == kd) //karty równe
    {
      kp=kd=-1;
      
    }
    else    //karty różne
    {
      console.log("start");
      await delay(1000);
      console.log("stop");      
      k[kpi] = tyl;
      k[kdi] = tyl;
      odkryte[kpi] = 0;
      odkryte[kdi] = 0;      
      setKarty(k.slice());
      kp = kd = -1;
    }
    
    
    
    console.log(i, kp, kd, kpi, kdi);
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
      <h2>Liczba prób: {licznik} </h2>

      <p><button onClick={nowaGra}>Nowa gra</button></p>
    </div>
  );
  function nowaGra()
{
  console.log("nowa gra");
  // wylosowac po dwie wartości 1,2,3 do tablicy wylosowane
  let losuj=[1,1,2,2,3,3];
  let poz=0;
  while(losuj.length > 0)
  {
    let x = Math.floor(Math.random()*losuj.length);
    console.log(losuj[x]);
    wylosowane[poz++] = losuj[x];
    console.log(losuj);
    losuj.splice(x,1);
    console.log(losuj);
    console.log(wylosowane);
  }
  setLicznik(0);
  let k = Array(6).fill(tyl);
  setKarty(k.slice());
}
}



export default App;
