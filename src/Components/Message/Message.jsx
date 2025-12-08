import { useParams } from 'react-router-dom'
import './Message.css'
import { getContactById } from '../../service/contactService'

function Message(props) {
    const { message, renderMessageComponent } = props
    const { id: id } = useParams()
    const contact = getContactById(id)

    /* Dependiendo del tipo de mensaje, muestra una u otra cosa. */
    const justifyMessage = message.isSentMessage ? "msg_horizontal_position own_message_justify" : "msg_horizontal_position"
    const backgroundColorMessage = message.isSentMessage ? "msg_flex own_message_bg_color" : "msg_flex"

    function deleteMessage() {
        /* 
        Borra el mensaje seleccionado, eliminandolo de la lista de mensajes del contacto, y vuelve a renderizar los mensajes que quedan.
        */
        contact.messages.splice(findMessageId(), 1)
        renderMessageComponent()
    }

    function editMessage() {
        /* Edita el mensaje seleccionado */
        /* TODO: finish funciton */
        const messageIndex = findMessageId()
    }

    function findMessageId(){
        /* Encuentra el mensaje según la id del mensaje */
        /* TODO: finish funciton */
        const foundMessage = contact.messages.findIndex(
            (msg) => msg.message_id === message.message_id
        )
        
        return foundMessage
    }


    return (
        <div className={justifyMessage}>
            <div className={backgroundColorMessage}>
                {message.isSentMessage &&
                    <span className='chat_message_status'>
                        <i className="bi bi-check2-all check_seen"></i>
                    </span>
                }
                <p className="message_text">{message.message}</p>
                <span className="message_hour">
                    {message.message_at.getHours() < 10 ? '0'+message.message_at.getHours() : message.message_at.getHours()}
                    :
                    {message.message_at.getMinutes() < 10 ? '0'+message.message_at.getMinutes() : message.message_at.getMinutes()}
                </span>

                {/* Opciones de mensajes */}
                <div className="message_options">
                    {/*
                        La opción de editar se muestra solamente para los mensajes enviados
                        La opción de eliminar se muestra en ambos
                        La opción de reaccionar se muestra solamente en los mensajes recibidos
                    */}
                    {message.isSentMessage && 
                    <button onClick={editMessage} className="msg_option edit_message">
                        <i className="bi bi-pencil"></i>
                    </button>
                    }
                    <button onClick={deleteMessage} className="msg_option delete_message">
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