import { createSlice } from "@reduxjs/toolkit"
const initPost={
    posts:[]
}

const PostsSlice=createSlice({
    name:"PostsSlice",
    initialState:initPost,
    reducers:{
        upDatePosts:(state,actions)=>{
            state.posts=actions.payload.data
        }
    }
})
export const{upDatePosts} = PostsSlice.actions
export default PostsSlice.reducer
