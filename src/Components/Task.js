import React from 'react';
import {FaTimes} from 'react-icons/fa'
const Task = ({task,onDelete,onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : 'nothing'}`} onDoubleClick={() => 
            {
                onToggle(task.id);
                console.log(task.id)
            }
        }>
            <h3>
                 {task.text}
                 <FaTimes onClick = {()=>{
                    onDelete(task.id)
                 }} />
            </h3>
            <p>{task.month}</p>
        </div>
    );
};
export default Task