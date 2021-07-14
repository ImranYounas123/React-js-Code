import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App()
{
 const btn = {
   color : '#fff', padding : '10px', borderRadius : "20px", backgroundColor : '#555', outline : 'none',border : 'none'
  }; 
  const person = {name : "Imran Younas", Degree : "Software Engineering"}
  const[status, setStatus] = React.useState(true);
return(
  <div className='App'>
    <h1>Hide Show Element</h1>

  {
    status?
    <h1 style={{marginTop:'100px'}}> Name : {person.name} <br/> Deree : {person.Degree}</h1>:<img src=""/>
:null
  }
    {/* <button onClick={()=>{setStatus(false)}}>Click Hide Button</button>
    <button onClick={()=>{setStatus(true)}}>Click Show Button</button> */}
    <button style={btn} onClick={()=>{setStatus(!status)}}>toggle Person Information</button>
  </div>
)
}
export default App;