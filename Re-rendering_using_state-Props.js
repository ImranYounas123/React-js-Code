import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

//to check onclick btn and re-rendering method when we click btn
function App() {
  const [data, setData] = useState("Imran Younas")
  return (
    <div>
      <h1>Hello : {data}</h1>
      <button onClick={() => { { setData("Hasnain Alam") } }}>Update Name</button>
      <h1>---------------------------------------------------------------</h1>
      <User data={data} />
      <Admin />
    </div>
  )
}
class User extends Component {
  constructor() {
    super();
    this.state = {
      email: "imran.khanfaa123@gmail.com"
    }
  }
  render() {
    console.warn("Hello RENDER", this.props)
    console.warn("email render ", this.email)
    return (
      <div>
        <h1>User Component {this.props.data}</h1>
        <h1>{this.state.email}</h1>
        <button onClick={() => { this.setState({ email: "ImranYounaskaa123@gmail.com" }) }}>Update Email </button>
        <h1>---------------------------------------------------------------</h1>
      </div>
    )
  }
}

export default App;
// class App extends Component
// {

//   constructor()
//   {
//     super();
//     console.log("Constructor");
//     //we define state here 
//     //here we should not call the API 
//     this.state  = {
//       data : "Imran"
//     }
//   }
//   render()
//   {
//     console.log("render");
//     return( 
//       <div className='App'>
//          <h1>Life Cycle method in react :) {this.state.data} </h1>
//          <h2>Constructor Life Cycle method in class Component</h2>
//        </div>
//      )
//   }
// }

// export default App;
