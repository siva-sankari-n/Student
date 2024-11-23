import React from 'react';
import './stu.css'

function Student(props){
       
    
    return (
        <div className='default'>
        <div className='pros'>
          <h1>Name : {props.name}</h1>
          <h1>Age : {props.age}</h1>
          <h1>Status : {props.age <=18 ? "Student" : "Not a Student"}</h1>
        </div>
        </div>
    );
}
export default Student