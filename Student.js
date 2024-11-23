import React from 'react'
import PropsTypes from 'prop-types'

function Student(props){
    return (
    <div>
        <h1>Name : {props.name}</h1>
        <h1>Age : {props.age}</h1>
        <h1>Status : {props.age<=18 ? "Student" : "Not a Student"}</h1>
    </div>
    );
}

Student.propTypes ={
    name:PropsTypes.string,
    age:PropsTypes.number
}

Student.defaultProps={
    name:"Sakthi",
    age : 10
}
export default Student;