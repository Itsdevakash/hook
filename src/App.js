
import './App.css';
import Hook from './component/Hook';
import UseEffect from './component/UseEffect';
import React,{useState} from 'react'

function App() {
  const[data,setData]=useState(10)
  const[counts,setCounts]=useState(100)
  return (
    <div className="App">
      <h1>React Hooks With UseState</h1>
      <Hook/>
      <br></br>

      <h1>use Effect  in React</h1>
      <UseEffect  datas={data}   countss={counts}  />
      <button onClick={()=>setCounts(counts+1)}>Update Count</button>
  
  <button onClick={()=>setData(data+1)}>Update Data</button>
    
    </div>
  );
}

export default App;
