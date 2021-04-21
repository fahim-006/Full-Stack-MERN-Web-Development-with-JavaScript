import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import feth from 'cross-fetch'
import axios from 'axios'

class App extends Component{
  state = {
    dishes: null,
    errMess: null
  }
  componentDidMount(){
    console.log("ComponentSismount: ", this.state);
    let a = fetch('http://localhost:3001/dishes')
    .then(response => response.json())
    .then(data =>{
      this.setState({
        dishes: data
      })
    })
    .catch(error => {
      this.setState({
        errMess: error.message
      })
    })

    /*axios.post('http://localhost:3001/dishes', {name:"Pizza", price:"799"})
    .then(response => console.log(response)); //ID automatically inputed*/

    //change
   /* axios.put('http://localhost:3001/dishes/1', {name:"Cheese Cake", price:"250"})
    .then(response => console.log(response)); //ID automatically inputed*/

    //delete
   /* axios.delete('http://localhost:3001/dishes/0')
    .then(response => console.log(response)); //ID automatically inputed*/
   
  }

  componentDidUpdate(){
    console.log("update: ", this.state);
  }
  render(){
    return(
      <div></div>
    );
  }
}
export default App;
