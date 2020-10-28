import React from 'react'
import Todo from "./Todo"
import {Consumer} from '../context'

function TodoList() {
    return (   
        <Consumer>
                { value => { const {todos} = value
                return todos.map(to=> <Todo todo={to} key={to.id}/> )
                }}
        </Consumer> 

            )
}

export default TodoList
