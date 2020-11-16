import React, {Component} from 'react'
import {Consumer} from "../context"
import axios from 'axios'





export default class Task extends Component {
    state = {
        id:4,
        title:"",
        complete: false}


update = (e) => {
        this.setState({ title: e.target.value})
}

add = (dispatch,e)=> {
    e.preventDefault()
    const newTask = this.state
    axios.post("/todos", newTask)
    .then(res => dispatch({type:"ADD", payload:res.data}))
    this.setState({ title: "" })  
}

render(){  
      return (
        <Consumer>
             {(value)=>{ 
             const {dispatch} = value
                return(
                <form onSubmit= {this.add.bind(this,dispatch)}>
                <div className= "content">
                    <label style={{marginLeft:50 }}> Task </label> 
                    <input type= "text" className="task" placeholder= "What do you need to do?" onChange={this.update} value={this.state.value}/> 
                </div>
                <br/>
                <button style={{marginLeft:400}} type= "submit" className="submit-task"> Save Item</button>
                </form>
                 )
            }}
        </Consumer>
    )
}

}