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
            <a href="/" className="back_home">
                <i class="bi bi-arrow-left"></i>
            </a>
        </div>
    )
}

export default ChatHeader