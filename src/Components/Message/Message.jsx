import './Message.css'
import { useContext } from 'react'
import { MessageContext } from '../../Context/MessageContext'
import { ContactDetailContext } from '../../Context/ContactDetailsContext'

function Message(props) {
    const { message } = props
    const { 
        showDeleteWarning, 
        setShowDeleteWarning,
        setShowEditComponent,
        setmessageIndex,
        setMessageToEdit,
        findMessageIndex 
    } = useContext(MessageContext)
    const { contactSelected } = useContext(ContactDetailContext)

    function handleDeleteButton() {
        /* Muestra el cuadro de advertencia */
        setShowDeleteWarning(!showDeleteWarning)
        /* Encuentra el index del mensaje a eliminar */
        const foundMessage = findMessageIndex(contactSelected, message)
        /* Setea el index del mensaje a eliminar */
        setmessageIndex(foundMessage)
    }

    /* Función para el botón de editar */
    function handleEditButton(){
        setShowEditComponent(!showDeleteWarning)
        /* Encuentra el index del mensaje a eliminar */
        const foundMessage = findMessageIndex(contactSelected, message)
        setmessageIndex(foundMessage)
        setMessageToEdit(contactSelected.messages[foundMessage].message)
    }


    return (
        <div className={"msg_horizontal_position " + (message.isSentMessage ? "own_message_justify" : "msg_horizontal_position")}>
            <div className={message.isSentMessage ? "msg_flex own_message_bg_color" : "msg_flex"}>
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
                </div>
            </div>

        </div>
    )
}

export default Message