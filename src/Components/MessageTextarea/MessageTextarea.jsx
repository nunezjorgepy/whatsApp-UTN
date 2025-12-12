import { useState } from 'react'
import './MessageTextarea.css'

function MessageTextarea() {
    const [messageToSent, setMessageToSent] = useState('')
    const [willSendMessage, setWillSendMessage] = useState(true)

    return (
        <form 
            className="send_message" 
            onSubmit={willSendMessage ? (e) => sendNewMessage(e) : (e) => editMessage(e)}>
            <textarea 
                type="text" name='write_message_input' 
                id='write_message_input' 
                className="send_message_input" 
                placeholder='Escribe un mensaje'
                value={messageToSent}
                onChange={(e) => setMessageToSent(e.target.value)}/>
            {willSendMessage ? 
                <button className="send_icon">
                    <i className="bi bi-send"></i>
                </button> : 
                <button className="send_icon">
                    <i className="bi bi-pen-fill"></i>
                </button>}
        </form>
    )
}

export default MessageTextarea