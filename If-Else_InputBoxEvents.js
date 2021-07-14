import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App()
{
  const Age = 30;
return(
  <div className="App">
    <h1>Condition in react js</h1>
    {(() => {
    if(Age == 20)
    {
      return(
        <h1>{Age} age is a Young AGe !</h1>
      )
    }else if(Age < 20)
    {
      return(
        <h1>{Age} : age is of child Age </h1>
      )
    }
    else{
      return(
        <h1>{Age} age is a Older Age</h1>
      )
      }
    })()}
    <h1>----------------------------------------------------------------------------------------------</h1>
    <Input />
  </div>
  
);
}
function Input()
{
const [data1, setData] = useState(null);
  const [data2, setDataBtn] = useState(false);

  function getData(val)
  {
    // console.warn(val.target.value)
    setData(val.target.value)
  }
  return (
    <div>
      <h1>Use input to add event</h1>
  {   
  data2? //to check true btn  
  <h1>{data1}</h1> // print this
  :null  // else print null nothing
}
  <input onChange={getData} type="text" placeholder="Input Name"/>    
  <button onClick={()=>{setDataBtn(true)}}>Click ME</button>

  </div>   
  );
}
export default App;