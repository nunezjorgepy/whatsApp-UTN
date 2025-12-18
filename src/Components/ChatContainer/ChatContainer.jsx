import ChatHeader from '../ChatHeader/ChatHeader'
import './ChatContainer.css'
import { useContext, useEffect } from 'react'
/* Componentes */
import MessageTextarea from '../MessageTextarea/MessageTextarea'
import MessagesContainer from '../MessagesContainer/MessagesContainer'
import DeleteWarning from '../DeleteWarning/DeleteWarning'
import EditMessage from '../EditMessage/EditMessage'
/* Contextos */
import { MessageContext } from '../../Context/MessageContext'
import { ContactDetailContext } from '../../Context/ContactDetailsContext'



function MessgaeContainer() {
    const { 
        showDeleteWarning, 
        setShowDeleteWarning, 
        showEditComponent, 
        setShowEditComponent,
    } = useContext(MessageContext)
    const { unreadMessagesToZero } = useContext(ContactDetailContext)

    

    useEffect(
        () => {
            unreadMessagesToZero()
            setShowDeleteWarning(false)
            setShowEditComponent(false)
        },
        []
    )

    return (
        <section className='msg_container'>
            {/* Info del contacto */}
            <ChatHeader />

            {/* Mensajes */}
            <MessagesContainer />

            {/* Enviar Mensaje */}
            <MessageTextarea />

            {/* Advertencia de eliminar mensaje */}
            {showDeleteWarning && <DeleteWarning />}
            {/* Cuadro para Editar Mensaje */}
            {showEditComponent && <EditMessage />}
        </section>
    )
}

export default MessgaeContainer