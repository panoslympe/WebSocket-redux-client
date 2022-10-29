import React from 'react';
import { useSelector } from 'react-redux';


const Messages = () => {
    const messages = useSelector(state => state.messages);
    return (
        <div className="messages">
         <div> {messages.map((message, index) => (<div key={`${message}index${index}`}>{message.username}: {message.message}</div>))} </div>
         </div>
    )
}

export default Messages