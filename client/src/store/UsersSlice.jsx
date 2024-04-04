import { createSlice } from "@reduxjs/toolkit"
const initUser={
    users:[]
}

const UsersSlice=createSlice({
    name:"UsersSlice",
    initialState:initUser,
    reducers:{
        upDateUsers:(state,actions)=>{
            state.users=actions.payload.data
        }
    }
})
export const{upDateUsers} = UsersSlice.actions
export default UsersSlice.reducer
