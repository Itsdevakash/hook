import React,{useState,use} from 'react'

export default function Hook() {
    const[data,setData]=useState('Akash')
  return (
    <div>
<h1>{data}!</h1>
<button onClick={()=>setData('Maurya')}>Update State</button>
    </div>
  )
}
