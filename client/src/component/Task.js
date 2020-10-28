import React from 'react'

function Task() {
    return (
        <form>
        <div className= "content">
            <label style={{marginLeft:50 }}> Task </label> 
            <input type= "text" className="task" placeholder= "What do you need to do?"/> <br/>
         </div>
         <button style={{marginLeft:400}} type= "submit" className="submit-task"> Save Item</button>
        </form>
    )
}

export default Task
