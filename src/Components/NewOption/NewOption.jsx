import './NewOption.css'

function NewOption() {
    return (
        <div className='new_container'>
            <div className="new_flex">
                <div className="new_whatsApp_logo">
                    WhatsApp
                </div>

                <div className="new_options">
                    <div className="new_contact">
                        <i class="bi bi-person-plus"></i>
                    </div>

                    <div className="new_chat">
                        <i class="bi bi-chat-left"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewOption