import { useContext } from 'react'
import './EditMessage.css'
import { MessageContext } from '../../Context/MessageContext'

function EditMessage() {
    const { 
        showEditComponent, 
        setShowEditComponent,
        messageToEdit,
        setMessageToEdit,
    } = useContext(MessageContext)

    function handleCancelClick(e){
        e.preventDefault()

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
                    <button className="messages_popup_btn">
                        Aceptar
                    </button>
                    <button onClick={(e) => handleCancelClick(e)} className="messages_popup_btn messages_popup_no_btn">
                        Cancelar
                    </button>
                </div>
            </div>
        </form>
    )
}

export default EditMessage