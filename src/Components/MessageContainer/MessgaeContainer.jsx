import Message from '../Message/Message'
import ChatHeader from '../ChatHeader/ChatHeader'
import './MessgaeContainer.css'

function MessgaeContainer() {
    return (
        <section className='msg_container'>
            {/* Info del contacto */}
            <ChatHeader />

            {/* Mensajes */}
            <div className="msgs_container">
                <Message />
            </div>

            {/* Enviar Mensaje */}
            <div className="send_message">
                <input type="text" className="send_message_input" placeholder='Escribe un mensaje'/>
                <button className="send_icon">
                    <i class="bi bi-send"></i>
                </button>
            </div>
        </section>
    )
}

export default MessgaeContainer