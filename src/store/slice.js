import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [
        { username: "panos", message: "hello" },
        { username: "giorgos", message: "goodbye" },
    ]
};

const messagesSlice = createSlice({
    name: "create message",
    initialState,
    reducers: {
        addMessage(state, action) {
            state.messages.push(action.payload);
            console.log("slice state", state.messages);
            console.log("slice payload", action.payload)
            localStorage.setItem("messages", JSON.stringify(state.messages));
        }
    }
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
