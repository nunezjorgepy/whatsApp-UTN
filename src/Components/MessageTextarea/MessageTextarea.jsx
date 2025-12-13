import { useContext, useState } from 'react'
import './MessageTextarea.css'
import { ContactDetailContext } from '../../Context/ContactDetailsContext'

function MessageTextarea() {
    const { addNewMessages } = useContext(ContactDetailContext)
    const [messageToSent, setMessageToSent] = useState('')
    const [willSendMessage, setWillSendMessage] = useState(true)

    function handleSubmit(e) {
        e.preventDefault()
        addNewMessages(messageToSent)
        setMessageToSent('')
    }

    return (
        <form 
            className="send_message" 
            onSubmit={(e) => handleSubmit(e)}>
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