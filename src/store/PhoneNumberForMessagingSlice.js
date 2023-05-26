import { createSlice } from "@reduxjs/toolkit";
const PhoneNumberSlice = createSlice({
    name:"PhoneNumber",
    initialState: {
        userInputPhoneNumer:"",
        userSubmitPhoneNumber:"",
        clickedBtnNewChat:false
      
    },
    reducers: {
        updataUserInputPhoneNumer(state, action) {
            state.userInputPhoneNumer=action.payload
        },
        onSubmitPhoneNumber(state, action) {
            state.userSubmitPhoneNumber=action.payload
        },
        onClickBtnNewChat(state,action) {
            state.clickedBtnNewChat=action.payload
        },
        
}})

export const {updataUserInputPhoneNumer, onSubmitPhoneNumber,onClickBtnNewChat } = PhoneNumberSlice.actions
export default PhoneNumberSlice.reducer