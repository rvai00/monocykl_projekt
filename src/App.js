import logo from './logo.svg';
import './App.css';

const updateNameHanna = (name_hanna) => {
  const updatedNameHanna = name_hanna + "123"
  return updatedNameHanna
}

const updateNameAgata = (name_agata) => {
  const updatedNameAgata = name_agata + "240"
  return updatedNameAgata
}

const generateDawid = (input) => {
    input = input.split(' ');
    return {name: input[0], surname: input[1]};
}

const updateNameNina = (name_nina) => {
  const updatedNameNina = name_nina + "213"
  return updatedNameNina
}

function App() {
  const name = "Oli Wasiuk" 
  const name_hanna = "Hanna Hryshkevich"
  const name_nina = "Nina Niewińska"
  const name_agata = "Agata Sawicka"
  const dawid = generateDawid("Dawid Pawlak");
    return (
    <div className="App">
    <div> {name} </div>
    <div>{updateNameHanna(name_hanna)}</div>
    <div>{updateNameNina(name_nina)}</div>
    <div>{dawid.name + " " + dawid.surname}</div>
    <div>{updateNameAgata(name_agata)}</div>
    </div>
  );
}

export default App;
