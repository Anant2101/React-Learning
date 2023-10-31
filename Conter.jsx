import React, { useState } from 'react'

const Conter = () => {
const [count ,setCount] = useState(0);
const [name, setName] = useState('')
const Addition =()=>{
    setCount(count + 1)
}
const Subtraction =(event)=>{
    {console.log(event.target.value)}
    setCount(count - 1)
}
const inputHandler =(event) =>{
    setName(event.target.value)
}
  return (
    <>
    <div className='container'>
      <button className="btn btn-primary btn-sm" onClick={Addition}>Plus</button>
      {count}
      <button disabled={count < 1} className="btn btn-primary btn-sm" onClick={Subtraction}>Minus</button>
    </div>

    <div className='container'>
        <input type='text' className='form-control' onChange={inputHandler} />
        <div className='container'>{name}</div>
    </div>
    </>
  )
}

export default Conter
