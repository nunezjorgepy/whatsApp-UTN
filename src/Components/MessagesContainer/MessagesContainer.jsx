import './MessagesContainer.css'
import { useContext } from 'react'
/* Contextos */
import { ContactDetailContext } from '../../Context/ContactDetailsContext'
/* Componentes */
import Message from '../Message/Message'
import { ContactListContext } from '../../Context/ContactListContext'
import NoContactFound from '../NoContactFound/NoContactFound'


function MessgaesContainer() {
    const { contactSelected } = useContext(ContactDetailContext)
    const { isloadingContacts } = useContext(ContactListContext)
    
    if (isloadingContacts) {
        /* Mientras que carga la página... */
        return (
            <div className="msgs_container loading_info">Cargando mensajes...</div>
        )
    }

    if (!contactSelected) {
        /* Si buscas un contacto que no existe */
        return(
            <NoContactFound />
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