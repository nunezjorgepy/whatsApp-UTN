import './MessagesContainer.css'
import { useContext } from 'react'
/* Contextos */
import { ContactDetailContext } from '../../Context/ContactDetailsContext'
/* Componentes */
import Message from '../Message/Message'


function MessgaesContainer() {
    const { contactSelected, isloadingContact } = useContext(ContactDetailContext)
    
    if (isloadingContact) {
        return (
            <div className="msgs_container loading_info">Cargando mensajes...</div>
        )
    }
    
    const HTMLMessages = contactSelected.messages.map(
        message => {
            return(
                <Message 
                key={message.message_id} 
                message={message}/>
            )
        }
    )

    if (HTMLMessages.length === 0) {
        return(
            <div className='nothing_to_show'>No hay mensajes para mostrar</div>
        )
    }
    
    return (
        <div className='msgs_container'>
            {HTMLMessages}
        </div>
    )
}

export default MessgaesContainer