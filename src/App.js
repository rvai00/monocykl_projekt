import logo from './logo.svg';
import './App.css';

const updateNameHanna = (name_hanna) => {
  const updatedNameHanna = name_hanna + "123"
  return updatedNameHanna
}

function App() {
  const name = "Oli Wasiuk" 
  const name_hanna = "Hanna Hryshkevich"
  const name_nina = "Nina Niewińska"
  const name_agata = "Agata Sawicka"
  const name_dawid = "Dawid Pawlak"
    return (
    <div className="App">
    <div> {name} </div>
    <div>{updateNameHanna(name_hanna)}</div>
    <div>{name_nina}</div>
    <div>{name_dawid}</div>
    <div>{name_agata}</div>
    </div>
  );
}

export default App;
