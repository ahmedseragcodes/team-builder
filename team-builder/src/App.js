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

function App() {

const [formValues, setFormValues]=useState(initialFormValues);

const onChange=function(event){
  const { name, value }=event.target;

  setFormValues({ ...formValues, [name]: value })
}


  return (
    <DevTeam>
      <h1>Our Dev Team</h1>
        <Link to="/">Home</Link>
      <form>
        <label htmlFor="username">Username:
          <input name="username" type="text" value={formValues.username} onChange={onChange} />
        </label>
        <label htmlFor="email">Email:
          <input name="email" type="email" value={formValues.email} onChange={onChange} />
        </label>
        <label htmlFor="role">Role:
          <select name="role" type="dropdown" value={formValues.role}>
            <option value="FE">Front End Engineer</option>
            <option value="BE">Back End Engineer</option>
          </select>
        </label>
      </form>
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
