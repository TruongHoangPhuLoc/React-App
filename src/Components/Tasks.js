import React from "react"
import Task from "./Task"
const Tasks = ({tasks, onDelete,onToggle,addTask}) => {
    return(
        <div className="Tasks">
            {
              tasks.map((task) => 
              (<Task 
                task={task} 
                key={task.id}
                onDelete={onDelete}
                onToggle={onToggle} 
                addTask = {addTask}
            />))
            }
        </div>
    )
}
export default Tasks