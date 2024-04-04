import { useSelector } from 'react-redux';
import UseHttp from '../../hooks/useHttp'
import { useEffect, useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import Todo from './Todo';
import { Stack } from '@mui/material';
import MyDialogTodos from './MyDialogTodos';

const Todos = () => {
  const { get, put, deleted, putComplete } = UseHttp();
  const [showAdd, setShowAdd] = useState(false);

  const todos = useSelector((x) => x.TodoSlice.todos)
  useEffect(() => {
     get('todos')
  }, [])

  if (todos.length == 0) {
    return (
      <>
      <body style={{textAlign:'center'}}>
        <h1 style={{fontFamily:'Comic Sans MS'}}>הכל מוכן לשבת!!! גוט שאבעס...</h1>
        <Stack padding={0} margin="10px" flexWrap="wrap" direction={{ xs: 'column', md: 'row' }} justifyContent={"center"} alignItems={{ md: "flex-start", xs: "center" }}>
          <React.Fragment>
            <Button variant="outlined" onClick={() => setShowAdd(true)}>
              הוסף משימה
            </Button>
            {showAdd ? <MyDialogTodos type1={'add'} item={undefined} what={""} who={""} setShow={setShowAdd}/> : <></>}

          </React.Fragment>
        </Stack>
        </body>
      </>
    )
  }

  else {
    return (
      <>
        <Stack padding={0} margin="10px" flexWrap="wrap" direction={{ xs: 'column', md: 'row' }} justifyContent={"center"} alignItems={{ md: "flex-start", xs: "center" }}>
          <React.Fragment>
            <Button variant="outlined" onClick={() => setShowAdd(true)} >
              הוסף משימה
            </Button>
            {showAdd ? <MyDialogTodos type1={'add'} item={undefined} what={""} who={""} setShow={setShowAdd} /> : <></>}
          </React.Fragment>
          {todos.map((item) => {
            return (<Todo item={item} put={put} deleted={deleted} putComplete={putComplete} key={item._id} setShow={setShowAdd} />)
          })}
        </Stack>
      </>
    )
  }
}
export default Todos