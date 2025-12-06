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
                        <h2 className="contact_name">{name}</h2>
                        <div className="contact_last_msg_at">12:53</div>
                    </div>
                    <div className="contact_msg_bottom_row">
                        {/* Último mensaje y mensajes sin leer (de haber) */}
                        {lastMessage.isSentMessage && <i className="bi bi-check2-all check_seen"></i>}
                        <p className="conact_last_msg">{lastMessage.message}</p>
                        {unread_messages !== 0 && <span className="contact_unread_msgs">{unread_messages}</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact