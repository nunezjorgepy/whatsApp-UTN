import { useContext } from 'react'
import './EditMessage.css'
import { MessageContext } from '../../Context/MessageContext'
import { ContactDetailContext } from '../../Context/ContactDetailsContext'

function EditMessage() {
    const { 
        showEditComponent, 
        setShowEditComponent,
        messageToEdit,
        setMessageToEdit,
        messageId,
    } = useContext(MessageContext)
    const { editMessage } = useContext(ContactDetailContext)

    function handleButtonPress(e, isSend) {
        e.preventDefault()

        /* Si presioné en el botón Acpetar, envía el mensaje */
        if (isSend) {
            editMessage(messageId, messageToEdit)
        }

        setShowEditComponent(!showEditComponent)
    }


    return (
        <form className='messages_popup_form'>
            <div className="messages_popup_container edit_container">
                <span className="edit_span">Editar Mensaje</span>
                <textarea 
                    name="edit_textarea" 
                    id="edit_textarea" 
                    className='edit_textarea'
                    value={messageToEdit}
                    onChange={(e) => setMessageToEdit(e.target.value)}
                    >

                </textarea>
                <div className="messages_popup_btns_container">
                    <button onClick={(e) => handleButtonPress(e, true)} className="messages_popup_btn">
                        Aceptar
                    </button>
                    <button onClick={(e) => handleButtonPress(e)} className="messages_popup_btn messages_popup_no_btn">
                        Cancelar
                    </button>
                </div>
            </div>
        </form>
    )
}

export default EditMessage