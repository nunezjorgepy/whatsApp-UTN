import { useContext } from 'react'
import './DeleteWarning.css'
import { MessageContext } from '../../Context/MessageContext'

function DeleteWarning() {
    const { showDeleteWarning, setShowDeleteWarning, messageId } = useContext(MessageContext)

    function handleDeleteSubmit(e){
        e.preventDefault()

        console.log(messageId)
    }

    return (
        <form className="delete_warning_form">
            <div className="delete_container">
                <span className="delete_span">¿Estas seguro de eliminar el mensaje?</span>
                <div className="delete_btns_container">
                    <button onClick={(e) => handleDeleteSubmit(e)} className="delete_btn delete_yes_btn">
                        Si
                    </button>
                    <button onClick={() => setShowDeleteWarning(!showDeleteWarning)} className="delete_btn delete_no_btn">
                        No
                    </button>
                </div>
            </div>
        </form>
    )
}

export default DeleteWarning