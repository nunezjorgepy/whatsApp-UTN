import Message from '../Message/Message'
import ChatHeader from '../ChatHeader/ChatHeader'
import './MessgaeContainer.css'
import { getContactById } from "../../service/contactService"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'



function MessgaeContainer() {
    const { id: id } = useParams()
    const [HTMLMessages, setHTMLMessages] = useState([])
    const [willSendMessage, setWillSendMessage] = useState(true)
    const [messageToSent, setMessageToSent] = useState('')
    const contact = getContactById(id)
    
    function unreadMessageToZero() {
        /* Cuando entras en el chat, borra la cantidad de mensajes no leídos (si entraste, se supone que los leíste) */
        contact.unread_messages = 0
    }

    function renderMessageComponent(){
        /* Función para setear los Message Components que se mostrarán en el chat */
        const messages = contact.messages.map(
            message => {
                return(
                    <Message 
                    key={message.message_id} 
                    message={message} 
                    renderMessageComponent={renderMessageComponent}
                    toggleNewEditMessage={toggleNewEditMessage} />
                )
            }
        )
        
        setHTMLMessages(messages)
    }

    function sendNewMessage(e){
        e.preventDefault()

        contact.messages.push({
            message_id: contact.messages[contact.messages.length - 1].message_id + 1,
            message: messageToSent,
            message_at: new Date(),
            isSentMessage: true,
            message_state: `NOT_SENT`
        })

        renderMessageComponent()
        setMessageToSent('')
    }

    function toggleNewEditMessage(){
        /* Cambia el botón de enviar nuevo mensajes por el de editar mensaje, y la función correspondiente */
        setWillSendMessage(!willSendMessage)
    }

    function editMessage(e) {
        e.preventDefault()
        console.log('Editing Message...')
        toggleNewEditMessage()
    }

    useEffect(
        () => {
            renderMessageComponent()
            unreadMessageToZero()
        },
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
            <form 
                className="send_message" 
                onSubmit={willSendMessage ? (e) => sendNewMessage(e) : (e) => editMessage(e)}>
                <input 
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
        </section>
    )
}

export default MessgaeContainer