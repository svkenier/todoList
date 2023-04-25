import TextField from '@mui/material/TextField'
import  { useState } from 'react';
import TablesList from './components/tablesList';
import ImputAddTask from './components/imputAddtask';
import { Container } from '@mui/material';
import { useEffect } from 'react';




function App() {
 
 let defaulTask = {id:null,title:"", estado:true}

  const [todo, setTodo] = useState([])
  const [task, setTask] = useState(defaulTask)
 
  


  const handelSubmit = (event) =>{
    event.preventDefault()
    setTodo(
      [...todo, task] )
      console.log(todo)
  }

  const handelChange =(e)=>{
    const {value, name, checked } = e.target 
    setTask({...task ,id:Date.now(), title:value, estado:checked})
    console.log(todo)
  } 

  

 const handelDelete = (elementId) =>{
  
 setTodo(todo.filter(({id})=> id !== elementId  ))
 }

//  const handelToggle = ( event) => {
//   // if (completeTodo.includes(taskTitle)) {
//   //   setcompleteTodo(completeTodo.filter((item)=> item != taskTitle))
//   // }else{
//   //   setcompleteTodo([...completeTodo,taskTitle])
//   // }


 


// };

 useEffect(()=>{
  let data = localStorage.getItem("task")
  if (data) {
  setTodo(JSON.parse(data))    
  }
 },[])

 useEffect(()=>{
  localStorage.setItem("task", JSON.stringify(todo))
 },[todo])

 

  return (   
    <Container>
    <ImputAddTask task={task} handelSubmit={handelSubmit} handelChange={handelChange}  />
    <TablesList task={task} todo={todo} handelDelete={handelDelete} handelChange={handelChange} />
    </Container>
  )
}

export default App
