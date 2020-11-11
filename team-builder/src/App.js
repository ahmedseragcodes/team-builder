import './App.css';
import React, { useState } from "react"
import ReactDOM from "react-dom"



function App() {

  const [teamMembers, setTeamMembers]=useState(
    {name: "Ahmed"},
    {name: "Jesse"},
    {name: "Brody"},
  )
  const [teamMate, setTeamMate]=useState("")

const displayTeam=teamMembers.map(function(item){
    return <p>{item.name}</p>;
  })


  return (
    <div className="App">
      <h1>Team Members</h1>
      <p>{displayTeam}</p>
      <AddMember />
    </div>
    );
}


function AddMember(props) {


  return (
    <div>
    <form>
    <label htmlFor="name">
      <input 
      type="text"
      id="name"
      placeholder="name"
      />
    </label>
  </form>
  </div>
  )
}






export default App;
