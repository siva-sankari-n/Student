import React,{useState} from 'react';

const Namnig = () => {
    const name=["Siva" , "Kalai" ,"Karan"]
    const[index,SetIndex]=useState(0)

    const nameChange = () =>{
       SetIndex(prev => (prev+1)%name.length)
    }
  return (
    <div>
        <p>Hello {name[index]}</p>
        <button onClick={nameChange}>Change Name</button>
    </div>
  )
}

export default Namnig