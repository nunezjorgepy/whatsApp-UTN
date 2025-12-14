import Message from '../Message/Message'
import ChatHeader from '../ChatHeader/ChatHeader'
import './ChatContainer.css'
import { getContactById, getContactList } from "../../service/contactService"
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import MessageTextarea from '../MessageTextarea/MessageTextarea'
import MessagesContainer from '../MessagesContainer/MessagesContainer'
import { MessageContext } from '../../Context/MessageContext'
import DeleteWarning from '../DeleteWarning/DeleteWarning'



function MessgaeContainer() {
    const { id: id } = useParams()
    const { showDelteWarning } = useContext(MessageContext)
    const [willSendMessage, setWillSendMessage] = useState(true)
    const [messageToSent, setMessageToSent] = useState('')
    const [messageId, setMessageId] = useState(null)
    const contact = getContactById(id)
    
    function unreadMessageToZero() {
        /* Cuando entras en el chat, borra la cantidad de mensajes no leídos (si entraste, se supone que los leíste) */
        contact.unread_messages = 0
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
            unreadMessageToZero()
        },
        [contact]
    )

    return (
        <section className='msg_container'>
            {/* Info del contacto */}
            <ChatHeader />

            {/* Mensajes */}
            <MessagesContainer />

            {/* Enviar Mensaje */}
            <MessageTextarea />

            {showDelteWarning && <DeleteWarning />}
        </section>
    )
}

export default MessgaeContainer