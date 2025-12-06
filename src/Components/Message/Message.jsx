import './Message.css'

function Message(props) {
    const { message } = props

    /* Dependiendo del tipo de mensaje, muestra una u otra cosa. */
    const justifyMessage = message.isSentMessage ? "msg_horizontal_position own_message_justify" : "msg_horizontal_position"
    const backgroundColorMessage = message.isSentMessage ? "msg_flex own_message_bg_color" : "msg_flex"


    return (
        <div className={justifyMessage}>
            <div className={backgroundColorMessage}>
                <p className="message_text">{message.message}</p>
                <span className="message_hour">
                    {message.message_at.getHours()}
                    :
                    {message.message_at.getMinutes()}
                </span>

                {/* Opciones de mensajes */}
                <div className="message_options">
                    {/*
                        La opción de editar se muestra solamente para los mensajes enviados
                        La opción de eliminar se muestra en ambos
                        La opción de reaccionar se muestra solamente en los mensajes recibidos
                    */}
                    {message.isSentMessage && 
                    <button className="msg_option edit_message">
                        <i className="bi bi-pencil"></i>
                    </button>
                    }
                    <button className="msg_option delete_message">
                        <i className="bi bi-trash3"></i>
                    </button>
                    {!message.isSentMessage &&
                    <button className="msg_option react_message">
                        <i className="bi bi-emoji-smile"></i>
                    </button>
                    }
                </div>
            </div>

        </div>
    )
}

export default Message