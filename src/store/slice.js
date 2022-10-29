import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    messages: [
    ]
};

const messagesSlice = createSlice({
    name: "create message",
    initialState,
    reducers: {
        addMessage(state, action) {
            state.messages.push(action.payload);
            localStorage.setItem("messages", JSON.stringify(state.messages));
        }
    }
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
