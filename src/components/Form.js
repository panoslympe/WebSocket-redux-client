import { useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import { ReactComponent as Send } from '../send.svg';
import { useDispatch } from 'react-redux';
import { addMessage } from '../store/slice';
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const Form = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const eventListener = (message) => {
            dispatch(addMessage(message));
        };
        socket.on("outgoing_message", eventListener);

        return () => socket.off("outgoing_message", eventListener);
    }, [socket]);


    const handleNewMessage = (e) => {
        e.preventDefault();
        if (message === "") {
            alert("Please enter a message")
        } else {
            const data = { username: username === "" ? "unknown soldier" : username, message }
            socket.emit("incoming_message", data);
            dispatch(addMessage(data));
            setMessage("");
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleNewMessage}>
                <Input
                    id="username"
                    label="username"
                    placeholder="Username"
                    onchange={(e) => setUsername(e.target.value)}
                    value={username} />
                <Input
                    id="message"
                    label="message"
                    placeholder="message here"
                    onchange={(e) => setMessage(e.target.value)}
                    value={message} />
                <Button inner="submit"><Send /></Button>
            </form>
        </div>
    )
}

export default Form