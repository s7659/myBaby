import { createSlice } from "@reduxjs/toolkit"
const initTodo={
    todos:[]
}

const TodoSlice=createSlice({
    name:"TodoSlice",
    initialState:initTodo,
    reducers:{
        upDateTodos:(state,actions)=>{
            state.todos=actions.payload.data
        }
    
    }
})
export const{upDateTodos} = TodoSlice.actions
export default TodoSlice.reducer
