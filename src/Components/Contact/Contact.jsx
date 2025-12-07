import './Contact.css'

function Contact(props) {
    const { contact: {name, avatar, unread_messages, messages} } = props
    const lastMessage = messages[messages.length - 1]

    return (
        <div href='https://www.google.com.ar' className='contact_width'>
            <div className="contact_flex">
                {/* Imagen de Perfil */}
                <div className="img_container">
                    <img src={avatar} alt={"Foto de perfil de " + name } className="contact_profile_pic" />
                </div>

                {/* Información del mensaje */}
                <div className="contact_msg_info">
                    <div className="contact_msg_top_row">
                        {/* Nombre y hora del último mensaje */}
                        <h2 className="contact_name">{name}</h2>
                        <div className="contact_last_msg_at">12:53</div>
                    </div>

                    {/* Primero verifico que haya mensajes. SI los hay, muestro el último mensajes y las respectivas opciones. De no haber, muestro el mensaje "No hay mensajes" */}
                    {messages.length ? 
                    <>
                        <div className="contact_msg_bottom_row">
                            {/* Último mensaje y mensajes sin leer (de haber) */}
                            {lastMessage.isSentMessage && <i className="bi bi-check2-all check_seen"></i>}
                            <p className="conact_last_msg">{lastMessage.message}</p>
                            {unread_messages !== 0 && <span className="contact_unread_msgs">{unread_messages}</span>}
                        </div>
                    </>
                    : <p className="conact_last_msg">No hay mensajes</p>}
                </div>
            </div>
        </div>
    )
}

export default Contact