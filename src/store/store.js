import { configureStore } from "@reduxjs/toolkit";
import userInputUpdateReducer from "./UserInputSlice"
import phoneNumberForMessagingUpdateRedicer from "./PhoneNumberForMessagingSlice";
import chatReducer from "./ChatSlice"

export default configureStore ({
    reducer: {
        userData:userInputUpdateReducer,
        phoneNumber:phoneNumberForMessagingUpdateRedicer,
        chatMessages:chatReducer
    },
    devTools:true

})