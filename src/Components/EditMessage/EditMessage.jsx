import { useContext, useState } from 'react'
import './EditMessage.css'
import { MessageContext } from '../../Context/MessageContext'
import { ContactDetailContext } from '../../Context/ContactDetailsContext'
import { ContactListContext } from '../../Context/ContactListContext'

function EditMessage() {
    const [isWrongEdit, setIsWrongEdit] = useState(false)
    const { 
        showEditComponent, 
        setShowEditComponent,
        messageToEdit,
        setMessageToEdit,
        messageIndex,
    } = useContext(MessageContext)
    const { editMessage } = useContext(ContactDetailContext)
    const { verifyTextInput } = useContext(ContactListContext)

    function handleButtonPress(e, isSend) {
        e.preventDefault()

        /* Si presioné en el botón Acpetar, envía el mensaje */
        if (isSend) {
            /* Salvo que haya un mensaje invñalido */
            if (!verifyTextInput(messageToEdit)){
                setIsWrongEdit(true)
                return
            }
            editMessage(messageIndex, messageToEdit)
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
                {isWrongEdit && <span className='error_edit'>Error: no se puede enviar un mensaje vacío</span>}
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