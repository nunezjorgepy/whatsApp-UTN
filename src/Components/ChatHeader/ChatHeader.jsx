import { Link } from 'react-router-dom'
import './ChatHeader.css'
import { useContext } from 'react';
import { ContactDetailContext } from '../../Context/ContactDetailsContext';

function ChatHeader(props) {
    /* const { avatar, name } = props.contact; */
    const { contactSelected, isloadingContact } = useContext(ContactDetailContext)





    return (
        <div className="chat_header">
            <button className="show_contact_info">
                <div className="img_container">
                    <img 
                    className='chat_img' src={!isloadingContact && contactSelected.avatar} 
                    alt={"Foto de perfil"}/>
                </div>
                <h2 className="chat_name">
                    {isloadingContact ? <div>Cragando información...</div> : contactSelected.name}
                </h2>
            </button>
            <Link to="/" className="back_home">
                <i className="bi bi-arrow-left"></i>
            </Link>
        </div>
    )
}

export default ChatHeader