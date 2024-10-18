
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'De'
  const img = 'https://via.placeholder.com/150'

  return (
    <div className="App">
    <h1>Olá React</h1>
    <p><SayMyName nome ='Jojo'/></p>
    <p><SayMyName nome ='Nandra'/></p>
    <p><SayMyName nome ={name}/></p>
    <p><Pessoa 
    nome ='JUJU'
    idade = '30' 
    profissao='empreendedora' 
    foto= {img}/></p>   
    
    </div>
  );
}

export default App;
