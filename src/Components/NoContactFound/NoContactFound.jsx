import { Link } from 'react-router-dom'
import './NoContactFound.css'

function NoContactFound() {
    return (
        <div className='no_contact_found_container'>
            <i className="bi bi-emoji-frown no_contact_sad_icon"></i>
            <p className="no_contact_p">Te pedimos disculpas.</p>
            <p className="no_contact_p">No pudimos encontrar al contacto buscado.</p>
            <Link to='/'><i className="bi bi-house no_contact_home"></i></Link>
        </div>
    )
}

export default NoContactFound