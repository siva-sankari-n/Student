import React,{useState} from 'react'

const Name = () => {
  const names = ["Siva", "Kalai", "Azar"];
  const [index, setIndex] = useState(0);

    const nameChange = () =>{
        setIndex((prevIndex) => (prevIndex + 1) % names.length)
    }
  return (
    <div>
        <h3>Hello {names[index]} </h3>
        <button onClick={nameChange}>Change Name</button>
    </div>
  )
}

export default Name