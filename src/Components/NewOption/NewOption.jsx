import './NewOption.css'

function NewOption() {
    return (
        <div className='new_container'>
            <div className="new_flex">
                <div className="new_whatsApp_logo">
                    WhatsApp
                </div>

                <div className="new_options">
                    <button className="new_option new_contact">
                        <i class="bi bi-person-plus"></i>
                    </button>

                    <button className="new_option new_chat">
                        <i class="bi bi-chat-left"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewOption