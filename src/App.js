import logo from './logo.svg';
import './App.css';


function App() {
  const name = "Oli Wasiuk" 
  const name_hanna = "Hanna Hryshkevich"
  const name_nina = "Nina Niewińska"
  const name_agata = "Agata Sawicka"
    return (
    <div className="App">
    <div> {name} </div>
    <div>{name_hanna}</div>
    <div>{name_nina}</div>
    <div>Dawid Pawlak</div>
    <div>{name_agata}</div>
    </div>
  );
}

export default App;
