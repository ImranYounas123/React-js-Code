import logo from './logo.svg';
import './App.css';
import Props from './Props';
import React,{Component} from 'react';
function App() {
  const person = {
    fname : "Imran Younas",
    lname : "Younas",
    degree : "Software Engineering",
    Skills : " Web development"
  };
  return (
    <div className="App">
  <h1>Hello Imran</h1>
  <Props name ={"Imran"} email = {"imran.khanfaa123@gmail.com"} 
   other = {person}/>
    </div>   
  );
}

export default App;


