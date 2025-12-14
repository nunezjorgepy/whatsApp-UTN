import './EditMessage.css'

function EditMessage() {
    return (
        <form className='messages_popup_form'>
            <div className="messages_popup_container edit_container">
                <span className="edit_span">Editar Mensaje</span>
                <textarea 
                    name="edit_textarea" 
                    id="edit_textarea" 
                    className='edit_textarea'>

                </textarea>
                <div className="messages_popup_btns_container">
                    <button className="messages_popup_btn">
                        Aceptar
                    </button>
                    <button className="messages_popup_btn messages_popup_no_btn">
                        Cancelar
                    </button>
                </div>
            </div>
        </form>
    )
}

export default EditMessage