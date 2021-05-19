//Importing React and Component. This is because I want to build Class component. Class component is need because I want to use State. React State we can not use on Function Component
import React,{Component}from 'react';
//Importing the image
import pizza from './pizza.png';
//INer styling
const Counter = {
   fontSize: "82px",
   backgroundColor: "black",
   borderRadius: "20px"
}

const btn = {
  fontSize:"28px",
  padding:"10px",
  backgroundColor: "white",
  borderRadius: "10px"
}

//Creating the Class Pizza wich extends React.Component functions. This I use because I want to use State menagment
class Pizza extends React.Component{
  //Inside Class in React we need to have render method which returns HTML
  render(){
    return<div>
     
    <img src={pizza} width="200"/>
    <h1>Pizza Order Counter</h1>
    <h1 style={Counter}>0</h1>
    <button style={btn}>Take order</button>
    <br/>
    <br/>
    <button style={btn}>Cancel order</button>
    </div>
  }

}


//Exporting the component function
export default Pizza;