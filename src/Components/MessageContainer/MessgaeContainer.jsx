import Message from '../Message/Message'
import ChatHeader from '../ChatHeader/ChatHeader'
import './MessgaeContainer.css'
import { getContactById } from "../../service/contactService"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function MessgaeContainer() {
    const { id: id } = useParams()
    const [HTMLMessages, setHTMLMessages] = useState([])
    const contact = getContactById(id)

    /* const HTMLMessages = contact.messages.map(
        (message) => {
            return (
                <Message key={message.message_id} message={message} />
            )
        }
    ) */
    function renderMessageComponent(){
        /* Función para setear los Message Components que se mostrarán en el chat */
        console.log('Here I am?')
        const messages = contact.messages.map(
            message => {
                return(
                    <Message key={message.message_id} message={message} />
                )
            }
        )
        
        setHTMLMessages(messages)
    }

    useEffect(
        renderMessageComponent,
        [contact]
    )

    return (
        <section className='msg_container'>
            {/* Info del contacto */}
            <ChatHeader contact={contact} />

            {/* Mensajes */}
            <div className="msgs_container">
                {HTMLMessages}
            </div>

            {/* Enviar Mensaje */}
            <form className="send_message">
                <input 
                    type="text" name='write_message_input' 
                    id='write_message_input' 
                    className="send_message_input" 
                    placeholder='Escribe un mensaje'/>
                <button className="send_icon">
                    <i className="bi bi-send"></i>
                </button>
            </form>
        </section>
    )
}

export default MessgaeContainer