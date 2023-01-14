import './App.css';
import {users}  from "./data/users"

const UpdateNameHanna = (props) => {
  console.log(props)
  const updatedNameHanna = props.name.toUpperCase()
  return <div>{updatedNameHanna}</div>
}

const updateNameAgata = (name_agata, surname_agata) => {
  const updatedNameAgata = name_agata.bold()
  const updatedSurnameAgata = surname_agata.bold()
  return {name_agata: updatedNameAgata,surname_agata: updatedSurnameAgata};
}

const generateDawid = (input) => {
    input = input.split(' ');
    return {name: input[0], surname: input[1]};
}

class GenerateDawid extends React.component {
  render() {
     return <p>{this.props.user.name + " " + this.props.user.surname}</p>;
  }
};

const updateNameNina = (name_nina, surname_nina) => {
  const updatedNameNina = name_nina
  const updatedSurnameNina = surname_nina
  return {name_nina: updatedNameNina, surname_nina: updatedSurnameNina}
}

const updateName = (name, surname) => {
  const newName = name.slice (2,8)
  const newSurname = surname.slice (4,5)
  return {name: newName,surname: newSurname};
}


function App() {

  return (
    <div className="App">
      {users.map(user => <UpdateNameHanna name={user.name}/> )}
      {users.map(user => <GenerateDawid user={user}/> )}

    </div>
  );
}

export default App;

// const name = "Oli" 
// const surname = "Wasiuk"
// const name_hanna = "Hanna Hryshkevich"
// const name_nina = "Nina" 
// const surname_nina = "Niewińska"
// const name_agata = "Agata"
// const surname_agata = "Sawicka"
// const agata = updateNameAgata(name_agata, surname_agata);
// const dawid = generateDawid("Dawid Pawlak");
// const oli = updateName(name, surname);
// const nina = updateNameNina(name_nina, surname_nina)
