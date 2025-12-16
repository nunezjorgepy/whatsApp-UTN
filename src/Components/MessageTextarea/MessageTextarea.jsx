import { useContext, useState } from 'react'
import './MessageTextarea.css'
import { ContactDetailContext } from '../../Context/ContactDetailsContext'

function MessageTextarea() {
    const { addNewMessages } = useContext(ContactDetailContext)
    const [messageToSent, setMessageToSent] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        /* Me aseguro que no sea un mensaje vacío o que contenga sólo espacios. */
        if (!messageToSent.trim()) {
            return
        }
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
                <button className="send_icon">
                    <i className="bi bi-send send_message_btn"></i>
                </button> 
        </form>
    )
}

export default MessageTextarea