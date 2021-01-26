import './App.css';
import styled from "styled-components";
import React, { useState } from "react";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

const initialFormValues={
  username: "",
  email: "",
  role: ""
}

const initialTeam=[{
  username: "AS",
  email: "AS@LambdaSchool.com",
  role: "FS",
},]

function App() {

const [formValues, setFormValues]=useState(initialFormValues);

const [team, setTeam]=useState(initialTeam);

const onChange=function(event){
  const { name, value }=event.target;

  setFormValues({ ...formValues, [name]: value })
}

const onSubmit=function(event){
  event.preventDefault();

  const newTeamMember={
    username: formValues.username,
    email: formValues.email,
    role: formValues.role
  }

  setTeam([...team, newTeamMember]);
  setFormValues(initialFormValues);
}


  return (
    <DevTeam>
      <h1>Our Dev Team</h1>
        <Link to="/">Home</Link>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username:
          <input name="username" type="text" value={formValues.username} onChange={onChange} />
        </label>
        <label htmlFor="email">Email:
          <input name="email" type="email" value={formValues.email} onChange={onChange} />
        </label>
        <label htmlFor="role">Role:
          <select name="role" type="dropdown" value={formValues.role} onChange={onChange}>
            <option value="">Choose A Role</option>
            <option value="FE">Front End Engineer</option>
            <option value="BE">Back End Engineer</option>
            <option value="FS">Full Stack Engineer</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
      {team.map(function(member){
        return <p>Username: {member.username}, Email: {member.email}, Role: {member.role}</p>

      })}
    </DevTeam>
  );
}

//Styled Components 

const DevTeam=styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.8rem;
`

export default App;
