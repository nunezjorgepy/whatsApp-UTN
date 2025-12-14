import './Message.css'
import { useContext } from 'react'
import { MessageContext } from '../../Context/MessageContext'
import { ContactDetailContext } from '../../Context/ContactDetailsContext'

function Message(props) {
    const { message } = props
    const { 
        showDeleteWarning, 
        setShowDeleteWarning,
        showEditComponent,
        setShowEditComponent,
        messageId, 
        setMessageId, 
        findMessageIndex 
    } = useContext(MessageContext)
    const { contactSelected } = useContext(ContactDetailContext)

    /* Dependiendo del tipo de mensaje, muestra una u otra cosa. */
    const justifyMessage = message.isSentMessage ? "msg_horizontal_position own_message_justify" : "msg_horizontal_position"
    const backgroundColorMessage = message.isSentMessage ? "msg_flex own_message_bg_color" : "msg_flex"

    /* TODO:
        Unificar las funciones handle, que hacen casi lo mismo.
    */
    function handleDeleteButton() {
        /* Muestra el cuadro de advertencia */
        setShowDeleteWarning(!showDeleteWarning)

        /* Encuentra el index del mensaje a eliminar */
        const foundMessage = findMessageIndex(contactSelected, message)

        /* Setea el index del mensaje a eliminar */
        setMessageId(foundMessage)
    }

    function handleEditButton(){
        setShowEditComponent(!showDeleteWarning)
        
        /* Encuentra el index del mensaje a eliminar */
        const foundMessage = findMessageIndex(contactSelected, message)
        
        /* Setea el index del mensaje a eliminar */
        setMessageId(foundMessage)
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
                    <button onClick={handleDeleteButton} className="msg_option delete_message">
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