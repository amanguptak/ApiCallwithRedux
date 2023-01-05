import { createSlice } from "@reduxjs/toolkit";


const initialState={
    users:[]
}

const userSlice=createSlice({

    name:"users",
    initialState,
    reducers:{
        addUsers:(state,actions)=>{
            state.users=actions.payload
        }
        //imme extra library
    }
})
export default userSlice.reducer

export const {addUsers} =userSlice.actions;
export const getAllUsers=(state)=>state.users.users