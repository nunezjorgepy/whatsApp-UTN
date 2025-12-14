import { useContext } from 'react'
import './DeleteWarning.css'
import { MessageContext } from '../../Context/MessageContext'

function DeleteWarning() {
    const { showDelteWarning, setShowDelteWarning } = useContext(MessageContext)

    return (
        <form className="delete_warning_form">
            <div className="delete_container">
                <span className="delete_span">¿Estas seguro de eliminar el mensaje?</span>
                <div className="delete_btns_container">
                    <button className="delete_btn delete_yes_btn">Si</button>
                    <button onClick={() => setShowDelteWarning(!showDelteWarning)} className="delete_btn delete_no_btn">
                        No
                    </button>
                </div>
            </div>
        </form>
    )
}

export default DeleteWarning