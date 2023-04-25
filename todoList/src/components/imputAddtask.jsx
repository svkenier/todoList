import React from 'react'
import TextField from '@mui/material/TextField'



const ImputAddTask = ({task, handelSubmit, handelChange}) => {

 const {value} = task  

    return (

    <>  
    <form onSubmit={handelSubmit}>
    <TextField value={value} onChange={handelChange}  />
    </form>
    </>
  )
}

export default ImputAddTask