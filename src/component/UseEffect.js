import React,{useEffect,useState} from 'react'

export default function UseEffect(props) {
    const[count,setCount]=useState(0)
    const[data,setData]=useState(10)
    const[counts,setCounts]=useState(100)
 useEffect(()=>{

alert(count)


 },[count])

 useEffect(()=>{

    alert(data)
    
    
     },[data])


     useEffect(()=>{

        alert(counts)
        
        
         },[counts])




         useEffect(()=>{

            alert(props.countss)
            
            
             },[props.countss])



             useEffect(()=>{

                alert(props.datas)
                
                
                 },[props.datas])
        

  return (
    <div>
        <h6>1 ) Un Condition Base</h6>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
  <br></br><br></br>
  <h6>2 ) useEffect with Specific State  </h6>
 <h3>{counts}</h3><br></br><h3>{data}</h3>

  <button onClick={()=>setCounts(counts+1)}>Update Count</button>
  
  <button onClick={()=>setData(data+1)}>Update Count</button>
  <br></br> <br></br>

  <h6>3 ) useEffect with Specific  Props</h6>
  <h3>{props.countss}</h3><br></br><h3>{props.datas}</h3>
      
    </div>
  )
}
