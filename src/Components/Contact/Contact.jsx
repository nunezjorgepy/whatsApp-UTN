import { useState } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'

function Contact(props) {
    const { contact: {name, avatar, unread_messages, messages} } = props
    const lastMessage = messages[messages.length - 1]

    return (
        <div href='https://www.google.com.ar' className='contact_width'>
            <div className="contact_flex">
                {/* Imagen de Perfil */}
                <div className="img_container">
                    <img src={avatar} alt="Profile Pic" className="contact_profile_pic" />
                </div>

                {/* Información del mensaje */}
                <div className="contact_msg_info">
                    <div className="contact_msg_top_row">
                        {/* Nombre y hora del último mensaje */}
                        <div className="contact_name">{name}</div>
                        <div className="contact_last_msg_at">12:53</div>
                    </div>
                    <div className="contact_msg_bottom_row">
                        {/* Último mensaje y mensajes sin leer (de haber) */}
                        {lastMessage.isSentMessage && <i className="bi bi-check2-all check_seen"></i>}
                        <div className="conact_last_msg">{lastMessage.message}</div>
                        {unread_messages !== 0 && <div className="contact_unread_msgs">{unread_messages}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact