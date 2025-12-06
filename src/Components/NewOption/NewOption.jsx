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
        </div>
    )
}

export default NewOption