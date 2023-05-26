import { createSlice } from "@reduxjs/toolkit";
const UserInputSlice = createSlice({
    name:"userInput",
    initialState: {
        idInstance:"",
        apiTokenInstance:"",
        userData:{
            idInstance:"",
            apiTokenInstance:""
        },
      
    },
    reducers: {
        updataUserInputIdInstance(state, action) {
            state.idInstance=action.payload
        },
        updataUserInputApiTokenInstance(state, action) {
            state.apiTokenInstance=action.payload
        },
        updataUserAuthorizationIdInstance(state, action){
            state.userData.idInstance=action.payload
        },
        updataUserAuthorizationApiTokenInstance(state, action) {
            state.userData.apiTokenInstance=action.payload
        },
        
}})

export const {updataUserInputIdInstance, updataUserInputApiTokenInstance,updataUserAuthorizationIdInstance, updataUserAuthorizationApiTokenInstance} = UserInputSlice.actions
export default UserInputSlice.reducer