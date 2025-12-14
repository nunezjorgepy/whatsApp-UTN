import { useParams } from 'react-router-dom'
import './Message.css'
import { getContactById } from '../../service/contactService'
import { useContext } from 'react'
import { MessageContext } from '../../Context/MessageContext'

function Message(props) {
    const { message, renderMessageComponent, toggleNewEditMessage, setMessageToSent, setMessageId } = props
    const { id: id } = useParams()
    const { showDelteWarning, setShowDelteWarning } = useContext(MessageContext)
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

    function handleEditButton(){
        /* Busca el mensaje */
        const messageId = findMessageId()
        const messageToEdit = contact.messages[messageId].message
        setMessageToSent(messageToEdit)
        setMessageId(messageId)
        console.log(messageToEdit)

        toggleNewEditMessage()
    }


    return (
        <div className={justifyMessage}>
            <div className={backgroundColorMessage}>
                {message.isSentMessage &&
                    <span className='chat_message_status'>
                        {message.message_state === 'NOT_SENT' ? <i className="bi bi-x-square"></i> :
                        message.message_state === 'SENT' ? <i className="bi bi-check2"></i> :
                        message.message_state === 'NOT_READ' ? <i className="bi bi-check2-all"></i> :
                        message.message_state === 'SEEN' ? <i className="bi bi-check2-all check_seen"></i> : ''}
                    </span>
                }
                <p className="message_text">{message.message}</p>
                <span className="message_hour">
                    {/* Si la hora o los minutos es menor a 10, le agrega un 0 para que figure como, por ejemplo, 03:02 en vez de 3:2 */}
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
                    <button onClick={handleEditButton} className="msg_option edit_message">
                        <i className="bi bi-pencil"></i>
                    </button>
                    }
                    <button onClick={() => setShowDelteWarning(!showDelteWarning)} className="msg_option delete_message">
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