import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { addMessage } from '../store/slice';

const Form = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleNewMessage = (e) => {
        e.preventDefault();
        if (message === "") {
            alert("Please enter a message")
        } else {
            dispatch(addMessage({ username: username === "" ? "unknown soldier" : username, message }));
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleNewMessage}>
                <Input id="username" label="username" onchange={(e) => setUsername(e.target.value)} />
                <Input id="message" label="message" placeholder="message here" onchange={(e) => setMessage(e.target.value)} />
                <Button inner="submit"></Button>
            </form>
        </div>
    )
}

export default Form