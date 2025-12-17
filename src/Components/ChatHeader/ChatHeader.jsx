import { Link } from 'react-router-dom'
import './ChatHeader.css'
import { useContext } from 'react';
import { ContactDetailContext } from '../../Context/ContactDetailsContext';

function ChatHeader() {
    const { contactSelected, isloadingContact } = useContext(ContactDetailContext)

    if (isloadingContact) {
        return(
            <div className="chat_header">
                <div className="show_contact_info">
                    <div className="img_container"></div>
                    <h2 className="chat_name loading_info">Cargando información del contacto...</h2>
                </div>
            </div>
        )
    }

    if (!contactSelected){
        return(
            <div className="chat_header">
                {/* Tiene la clase img_container para mantener el alto del chatHeader */}
                <h2 className="chat_name img_container loading_info">Lo sentimos, ha ocurrido un problema</h2>
            <Link to="/" className="back_home">
                <i className="bi bi-arrow-left"></i>
            </Link>
            </div>
            
        )
    }

    return (
        <div className="chat_header">
            <button className="show_contact_info">
                <div className="img_container">
                    <img 
                    className='chat_img' src={contactSelected.avatar} 
                    alt={"Foto de perfil de " + contactSelected.name}/>
                </div>
                <h2 className="chat_name">
                    {contactSelected.name}
                </h2>
            </button>
            <Link to="/" className="back_home">
                <i className="bi bi-arrow-left"></i>
            </Link>
        </div>
    )
}

export default ChatHeader