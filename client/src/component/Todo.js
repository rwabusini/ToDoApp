import React, { Component } from 'react'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ClearIcon from '@material-ui/icons/CancelPresentation';


export default class Todo extends Component {

     render(){
        const {title} = this.props.todo
        return (
        <div className="todo" >
            <i>{title}</i> 
            <div>
                <CheckBoxIcon style={{color: "green"}}/>
                <ClearIcon type = "filled" style={{color: "red"}}/>
            </div>
        </div>
    )
}

}
