import { useContext } from 'react'
import { MessageContext } from '../../Context/MessageContext'
import { ContactDetailContext } from '../../Context/ContactDetailsContext'

function DeleteWarning() {
    const { showDeleteWarning, setShowDeleteWarning, messageIndex } = useContext(MessageContext)
    const { deleteMessage } = useContext(ContactDetailContext)

    function handleDeleteSubmit(e){
        e.preventDefault()
        
        deleteMessage(messageIndex)
        setShowDeleteWarning(!showDeleteWarning)
        
    }

    return (
        <form className="messages_popup_form">
            <div className="messages_popup_container">
                <span className="delete_span">¿Estas seguro de eliminar el mensaje?</span>
                <div className="messages_popup_btns_container">
                    <button onClick={(e) => handleDeleteSubmit(e)} className="messages_popup_btn messages_popup_yes_btn">
                        Si
                    </button>
                    <button onClick={() => setShowDeleteWarning(!showDeleteWarning)} className="messages_popup_btn messages_popup_no_btn">
                        No
                    </button>
                </div>
            </div>
        </form>
    )
}

export default DeleteWarning