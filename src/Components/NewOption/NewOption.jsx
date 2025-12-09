import './NewOption.css'

function NewOption() {
    return (
        <div className='new_container'>
            <div className="new_flex">
                <h1 className="new_whatsApp_logo">
                    WhatsApp
                </h1>

                <div className="new_options">
                    <button className="new_option new_contact">
                        <i className="bi bi-person-plus"></i>
                    </button>

                    <button className="new_option new_chat">
                        <i className="bi bi-chat-left"></i>
                    </button>
                </div>
            </div>

            <div className="new_contact_container">
                <form className="new_contact_form">
                    <div className="new_contact_name">
                        <label htmlFor="new_name_input" className="new_contact_label new_name_label">
                            <i class="bi bi-person"></i>
                            Nombre Completo
                        </label>
                        <input type="text" className="new_contact_input new_name_input" id='new_name_input' placeholder='Ingresa el nombre completo' autoFocus/>
                    </div>
                    <div className="new_contact_phone">
                        <label htmlFor="new_phone_input" className="new_contact_label new_phone_label">
                            <i class="bi bi-telephone"></i>
                            Teléfono
                        </label>
                        <input type="text" className="new_contact_input new_phone_input" id='new_phone_input' placeholder='1112345678'/>
                    </div>

                    <div className="new_btns_container">
                        <button className="btn_new_form btn_add_new_contact">Agregar</button>
                        <button className="btn_new_form btn_cancel_add">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewOption