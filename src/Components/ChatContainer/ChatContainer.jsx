import Message from '../Message/Message'
import ChatHeader from '../ChatHeader/ChatHeader'
import './ChatContainer.css'
import { getContactById, getContactList } from "../../service/contactService"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MessageTextarea from '../MessageTextarea/MessageTextarea'



function MessgaeContainer() {
    const { id: id } = useParams()
    const [HTMLMessages, setHTMLMessages] = useState([])
    const [willSendMessage, setWillSendMessage] = useState(true)
    const [messageToSent, setMessageToSent] = useState('')
    const [messageId, setMessageId] = useState(null)
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
                    toggleNewEditMessage={toggleNewEditMessage}
                    setMessageToSent={setMessageToSent}
                    setMessageId={setMessageId} />
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
        contact.messages[messageId].message = messageToSent
        setMessageToSent('')
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
            <MessageTextarea />
        </section>
    )
}

export default MessgaeContainer