import './Message.css'

function Message(props) {
    const { isSendMessage } = props

    const justifyMessage = isSendMessage ? "msg_horizontal_position own_message_justify" : "msg_horizontal_position"
    const backgroundColorMessage = isSendMessage ? "msg_flex own_message_bg_color" : "msg_flex"

    return (
        <div className={justifyMessage}>
            <div className={backgroundColorMessage}>
                <div className="message_text">Hola! Bienvenido a mi copia de WhatsApp. Espero que te este gustando.</div>
                <div className="message_hour">12:51</div>
            </div>
        </div>
    )
}

export default Message