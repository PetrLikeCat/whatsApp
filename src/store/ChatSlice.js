import { createSlice } from "@reduxjs/toolkit";
const ChatSlice = createSlice({
    name:"ChatSlice",
    initialState: {
        inputMessage:"",
        chatMessages:[],
    },
    reducers: {
        addMessage(state, action) {
            state.chatMessages.push(action.payload)
        },
        updateInputMessage(state, action) {
            state.inputMessage=action.payload
        },
        
}})

export const {addMessage, updateInputMessage} = ChatSlice.actions
export default ChatSlice.reducer