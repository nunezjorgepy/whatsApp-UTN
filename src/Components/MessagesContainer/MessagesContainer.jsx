import { useContext } from 'react'
import './MessagesContainer.css'
import { ContactDetailContext } from '../../Context/ContactDetailsContext'
import Message from '../Message/Message'


function MessgaesContainer() {
    const { contactSelected, isloadingContact } = useContext(ContactDetailContext)
    if (isloadingContact) {
        return (
            <div className="msgs_container">Cargando mensajes...</div>
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
    
    return (
        <div className='msgs_container'>
            {HTMLMessages}
        </div>
    )
}

export default MessgaesContainer