import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [areUnreadMessages, setAreUnreadMessages] = useState(true)


    return (
        <div className='contact_width'>
            <div className="contact_flex">
                {/* Imagen de Perfil */}
                <div className="img_container">
                    <img src="https://photosmint.com/wp-content/uploads/2025/03/beautiful-whatsapp-dp-boy.jpg" alt="Profile Pic" className="contact_profile_pic" />
                </div>

                {/* Información del mensaje */}
                <div className="contact_msg_info">
                    <div className="contact_msg_top_row">
                        {/* Nombre y hora del último mensaje */}
                        <div className="contact_name">Marisa Delpodio</div>
                        <div className="contact_last_msg_at">12:53</div>
                    </div>
                    <div className="contact_msg_bottom_row">
                        {/* Último mensaje y mensajes sin leer (de haber) */}
                        <div className="conact_last_msg">Ya estoy volviendo a casa</div>
                        {areUnreadMessages && <div className="contact_unread_msgs">1</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact