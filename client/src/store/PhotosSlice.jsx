import { createSlice } from "@reduxjs/toolkit"
const initPhoto={
    photos:[]
}

const PhotosSlice=createSlice({
    name:"PhotosSlice",
    initialState:initPhoto,
    reducers:{
        upDatePhotos:(state,actions)=>{
            state.photos=actions.payload.data
        }
    }
})
export const{upDatePhotos} = PhotosSlice.actions
export default PhotosSlice.reducer
