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
//To use the state it must have constructor in which will be pased props
  constructor(props){
       super(props)
       //In the state i declar that count on start will be zero
       this.state={
          conut:0
       }
  }
  //Creating methods for taking order
  takeOrder(){
   this.setState({
    conut: this.state.conut + 1
   })
  }

  //Creting method for cancle order
  cancelOrder(){
    this.setState({
      conut: this.state.conut - 1
    })
  }
  //Inside Class in React we need to have render method which returns HTML
  render(){
    return<div>
     
    <img src={pizza} width="200"/>
    <h1>Pizza Order Counter</h1>
    <h1 style={Counter}>{this.state.conut}</h1>
    <button style={btn} onClick={()=>this.takeOrder()}>Take order</button>
    <br/>
    <br/>
    <button style={btn} onClick={()=>this.cancelOrder()}>Cancel order</button>
    </div>
  }

}


//Exporting the component function
export default Pizza;