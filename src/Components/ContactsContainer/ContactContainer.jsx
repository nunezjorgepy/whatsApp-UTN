import './ContactContainer.css'
import { Link } from 'react-router-dom'
/* Components */
import NewOption from '../NewOption/NewOption.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Contact from '../Contact/Contact.jsx'
/* Contextos */
import { useContext } from 'react'
import { ContactListContext } from '../../Context/ContactListContext.jsx'


function ContactContainer() {
    const { contactList, isloadingContacts } = useContext(ContactListContext)

    const HTMLContactList = contactList.map(
        (contact) => {
            return (
                <Link to={`/chat/` + contact.contact_id + '/messages'} key={contact.contact_id}>
                    <Contact contact={contact} />
                </Link>
            )
        }
    )

    return (
        <aside className='contact_container'>
            <NewOption />
            <SearchBar />
            {isloadingContacts ? 
            <div>Cargando Contactos...</div> :
            HTMLContactList}
        </aside>
    )
}

export default ContactContainer