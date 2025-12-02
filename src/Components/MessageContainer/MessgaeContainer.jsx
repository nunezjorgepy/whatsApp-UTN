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
        </section>
    )
}

export default MessgaeContainer