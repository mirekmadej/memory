import './Karta.css';

function Karta({obr}){
    return (
        <button className='przycisk'>
            <img src={obr} alt="obrazek" />
        </button>
    );
}

export default Karta;