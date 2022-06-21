import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header'
import Button from './Components/Button'
import Tasks from './Components/Tasks';
import { useState } from "react";
import AddTask from './Components/AddTask';
import { useEffect } from 'react';
// class App extends React.Component {
//   render() {
//     const onClick = (name) =>{
//       console.log("Hello World, I'm ",name);
//     }
//     const foo = () => {
//       onClick("PhuLoc");
//     }
//     return (
//       <div className='container'>
//         <Header title='Hello GUYS'/>
//         <h2>Welcome to my blog</h2>
//         <h3>Author: Phu Loc</h3>
//         <Button text='Click me' className='Button-Class' color ='red' onClick = {foo} />
//         <Tasks />
//       </div>
//     );
//   }
// }

const App = () => {
  const [showAddTask, setShowAddTask] = useState({text:'show TaskAdding',status:false});
  const [tasks,setTasks] = useState([]);
  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })


    setTasks(tasks.filter((task) => 
    {
      return task.id !== id 
    }))
  }
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => { 
      return(
      task.id === id ? {...task, reminder: !task.reminder}
      :task
      )
    }
    ))
  }
  const addTask = async (task) => {
    const id = tasks.length + 1;
    const newTask = { id,...task };
    const res = await fetch(`http://localhost:5000/tasks`,{
      method:'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    console.log("Task to be added ",newTask);
    console.log(res)
    setTasks([...tasks, newTask]);
  } 
  const lengthofTasks = () =>
  {
    console.log(tasks.length);
  }
  const toggleShowAddTask = () =>{
    if (!showAddTask.status)
    {
      setShowAddTask({text:'hide taskAdding', status: true})
    }
    else
    {
      setShowAddTask({text:'show TaskAdding',status: false})
    }
  } 
  ///fetch some data
  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();
    return data;
  }
  useEffect(() => {
    const getData = async () =>{
      const data = await fetchData();
      setTasks(data);
    }
    getData();
  },[])
  return (
          <div className='container'>
            <Header title='Hello GUYS'/>
            <Button className={'btn-block btn'} text = {showAddTask.text} onClick={(toggleShowAddTask)} />
            {showAddTask.status && <AddTask addTask={addTask} ></AddTask>}
            {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle ={toggleReminder}/> : <h2 style={{textAlign:'center'}}>Nothing to show!</h2>}
            {/* <Button className={'btn-block btn'} text = {'Length'} onClick = {lengthofTasks} /> */}
          </div>
        );
} 
export default App
const onClick = (name) =>{
  console.log("Hello World, I'm ",name);
}
const foo = () => {
  onClick("PhuLoc");
}