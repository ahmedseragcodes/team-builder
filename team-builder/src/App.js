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

  //test
  let [teamMate, setTeamMate]=useState({name: ""});

const displayTeam=teamMembers.map(function(item){
    return <p key={item.name}>{item.name}</p>;
  })



  return (
    <div className="App">
      <h1>Team Members</h1>
      <div>{displayTeam}</div>
      <AddMember teamMate={teamMate} setTeamMate={setTeamMate} displayTeam={displayTeam}/>
    </div>
    );
}



//form creating component function 
export function AddMember(props) {

const displayTeam=props;
const teamMate=props;
const setTeamMate=props;


const handleChanges=function(event){
  setTeamMate({name: event.target.value});
}

const submitForm=function(event){
  event.preventDefault();
  displayTeam.push(teamMate);
}

  return (
    <div>
    <form onSubmit={submitForm}>
    <label htmlFor="name">
      <input 
      type="text"
      id="name"
      placeholder="Enter Name"
      onChange={handleChanges}
      />
    </label>
    <button type="submit">Add Team Member</button>
  </form>
  </div>
  )
}






export default App;
