import './Message.css'

function Message(props) {
    const { isSendMessage } = props

    const justifyMessage = isSendMessage ? "msg_horizontal_position own_message_justify" : "msg_horizontal_position"
    const backgroundColorMessage = isSendMessage ? "msg_flex own_message_bg_color" : "msg_flex"

    return (
        <div className={justifyMessage}>
            <div className={backgroundColorMessage}>
                <p className="message_text">Hola! Bienvenido a mi copia de WhatsApp. Espero que te este gustando.</p>
                <span className="message_hour">12:51</span>
                <div className="message_options">
                    <button className="msg_option edit_message">
                        <i className="bi bi-pencil"></i>
                    </button>
                    <button className="msg_option delete_message">
                        <i className="bi bi-trash3"></i>
                    </button>
                    <button className="msg_option react_message">
                        <i className="bi bi-emoji-smile"></i>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Message