import Message from '../Message/Message'
import ChatHeader from '../ChatHeader/ChatHeader'
import './MessgaeContainer.css'
import { getContactList, getContactById } from "../../service/contactService"
import { useParams } from 'react-router-dom'

function MessgaeContainer() {
    const { id: id } = useParams()
    const contact = getContactById(id)
    

    return (
        <section className='msg_container'>
            {/* Info del contacto */}
            <ChatHeader contact={contact} />

            {/* Mensajes */}
            <div className="msgs_container">
                <Message />
                <Message />
                <Message isSendMessage />
                <Message />
                <Message isSendMessage />
            </div>

            {/* Enviar Mensaje */}
            <form className="send_message">
                <input type="text" name='write_message_input' id='write_message_input' className="send_message_input" placeholder='Escribe un mensaje'/>
                <button className="send_icon">
                    <i className="bi bi-send"></i>
                </button>
            </form>
        </section>
    )
}

export default MessgaeContainer