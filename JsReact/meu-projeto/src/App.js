
import './App.css';

function App() {

  const name = 'jojo'

  const bigName = name.toUpperCase()
  function soma(a,b){
    return a + b
  }

  const img = 'https://via.placeholder.com/150'

  return (
    <div className="App">
    <h1>Olá React</h1>
    <p>Olá {name}</p>
    <p>Seu nome maiúsculo: {bigName}</p>
    <p>Soma {2+2}</p>
    <p>Soma via function: {soma(3,2)}</p>
    <img src={img} alt='Nome Alternativo'></img>
    
    </div>
  );
}

export default App;
