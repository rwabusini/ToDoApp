import React, { Component } from 'react'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ClearIcon from '@material-ui/icons/CancelPresentation';
import {Consumer, renderContext} from '../context'
import axios from 'axios'


export default class Todo extends Component {
style = ()=> {
    const {complete} = this.props.todo
    return {backgroundColor: complete? "blue": "none"}
}

toggle = (id, dispatch)=> {
    dispatch({type:"TOGGLE", payload:id})
}

remove = (id, dispatch)=> {
    axios.delete(`/todos/${id}`).then(()=> dispatch({type:"REMOVE", payload:id}))
}

 
     render(){
        const {title, _id} = this.props.todo
        return(
        <Consumer>
             {(value)=>{ 
            const {dispatch} = value
             return(
             <div className="todo" >
                <i style = {this.style()} >{title}</i> 
                <div>
                    <CheckBoxIcon style={{color: "green"}} onClick={this.toggle.bind(this ,_id ,dispatch)}/>
                    <ClearIcon type = "filled" style={{color: "red"}} onClick= {this.remove.bind(this, _id , dispatch)}/>
                </div>
             </div>
              )
            }}
        </Consumer>
        )
}

}   
