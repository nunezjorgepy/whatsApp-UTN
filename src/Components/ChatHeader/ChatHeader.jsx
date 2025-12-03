import { Link } from 'react-router-dom'
import './ChatHeader.css'

function ChatHeader() {
    return (
        <div className="chat_header">
            <button className="show_contact_info">
                <div className="img_container">
                    <img className='chat_img' src="https://photosmint.com/wp-content/uploads/2025/03/beautiful-whatsapp-dp-boy.jpg" alt="Foto de Contacto" />
                </div>
                <div className="chat_name">
                    Nombre del Contacto
                </div>
            </button>
            <Link to="/" className="back_home">
                <i className="bi bi-arrow-left"></i>
            </Link>
        </div>
    )
}

export default ChatHeader