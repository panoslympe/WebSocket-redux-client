import { useState } from 'react';
import { useSelector } from 'react-redux';
import Input from './Input';


const Messages = () => {
    const [showOnlyTen, setShowOnlyTen] = useState(false);
    const messages = useSelector(state => state.messages);

    const headDisplay = () => {
        if (messages.length > 10) {
            return <div className="text">would you like to display only last 10 items?
                <Input
                    type="checkbox"
                    checked={showOnlyTen}
                    onchange={() => setShowOnlyTen(!showOnlyTen)} />
            </div>
        }
    }



    return (
        <div className="messages">
            <div className='text welcome'>
                Redux and socket.io chat app
            </div>
            {headDisplay()}
            <div className='messagesComponent'>
                {messages.slice(showOnlyTen ? -10 : 0)
                    .map((message, index) => (<div className='messageEntry' key={`${message}index${index}`}>
                        <div className='username'>{message.username}:</div>
                        <div className='message'>{message.message}</div>
                    </div>))}
            </div>
        </div>
    )
}

export default Messages