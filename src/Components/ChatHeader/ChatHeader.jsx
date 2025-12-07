import { Link } from 'react-router-dom'
import './ChatHeader.css'

function ChatHeader(props) {
    const { avatar, name } = props.contact;

    return (
        <div className="chat_header">
            <button className="show_contact_info">
                <div className="img_container">
                    <img className='chat_img' src={avatar} alt={"Foto de perfil de " + name} />
                </div>
                <h2 className="chat_name">
                    {name}
                </h2>
            </button>
            <Link to="/" className="back_home">
                <i className="bi bi-arrow-left"></i>
            </Link>
        </div>
    )
}

export default ChatHeader