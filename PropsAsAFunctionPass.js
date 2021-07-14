import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App()
{
const [status, setStatus] = useState(1);
  function getData()
  {

    setStatus(status+1)
    alert("Hello Broooooo ! ")
  }
return( 
 <div className='App'>
    <h1>Function Pass as Props </h1>
    <h1>{status}</h1>
    <button onClick={getData}>Click ME</button>
  <User1 data1 = {getData} />
  <User2 data2 = {getData} />
  </div>
)
}
function User1(props)
{
  return(
    <div>
      <h1> User # 1</h1>
      <button onClick={props.data1}>Click ME</button>
    </div>
  )
}
function User2(props)
{
  return(
    <div> 
      <h1>User # 2 </h1>
     <button onClick={props.data2}>Click ME</button>
      </div>
  )
}


export default App;
