import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
 const [counter, state] = React.useState(1);
  function changeOnDC(val)
  {
    state((pre)=>{
        return Math.round(pre*val);  
    })
  }
  function changeOnSC(val)
  {
    state((pre)=>{
        return pre + val;  
    })
  }
  return (
    <div className="App">
       <h1>COUNTER: {counter}</h1>
       <button onDoubleClick={()=>changeOnDC(2)} onClick={()=>changeOnSC(1)}>Click or Double Click To Increase Value</button>
       <button onClick={()=>changeOnSC(-1)}>Click To Decrease Value</button>
       <button onDoubleClick={()=>changeOnDC(0.5)}>Double Click to Decrease By half</button>
    </div>
  );
}

export default App;
