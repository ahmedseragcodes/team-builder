import './App.css';
import React, { useState } from "react"
import ReactDOM from "react-dom"


//parent component function creating the team members list and calling form creating component function
function App() {

  const [teamMembers, setTeamMembers]=useState([
    {name: "Ahmed"},
    {name: "Jesse"},
    {name: "Brody"},
  ]);

const displayTeam=teamMembers.map(function(item){
    return <p key={item.name}>{item.name}</p>;
  })



  return (
    <div className="App">
      <h1>Team Members</h1>
      <div>{displayTeam}</div>
      <AddMember />
    </div>
    );
}



//form creating component function 
export function AddMember(props) {

let [teamMate, setTeamMate]=useState({name: ""});

const handleChanges=function(event){
  setTeamMate({name: event.target.value});
  console.log(teamMate);
}



  return (
    <div>
    <form>
    <label htmlFor="name"> Name
      <input 
      type="text"
      id="name"
      placeholder="Enter Name"
      onChange={handleChanges}
      />
    </label>
  </form>
  </div>
  )
}






export default App;
