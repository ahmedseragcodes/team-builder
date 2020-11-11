import './App.css';
import React, { useState } from "react"
import ReactDOM from "react-dom"



function App() {

  const [teamMembers, setTeamMembers]=useState([])
  const [teamMate, setTeamMate]=useState("")


  return (
    <div>
      <h1>{teamMembers}</h1>
      <AddMember />
    </div>
    );
}


function AddMember() {



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
