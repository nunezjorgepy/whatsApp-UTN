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
    const { contactList, isloadingContacts, listFilter } = useContext(ContactListContext)

    const HTMLContactList = contactList.map(
        (contact) => {
            return (
                <Link to={`/chat/` + contact.contact_id + '/messages'} key={contact.contact_id}>
                    <Contact contact={contact} />
                </Link>
            )
        }
    ).filter(
        /* Filtro los contactos. Si filter es una cedena vacía, devuelve la lisa completa. */
        (contact) => {
            // Paso a minúscula el filtro y el nombre en la lista, para evitar que no encuentre 'Jorge' si busco 'jorge'
            const name = contact.props.children.props.contact.name.toLowerCase()
            const lowerFilter = listFilter.toLowerCase()
            if (name.includes(lowerFilter)) {
                return contact
            }
        }
    )

    /* const HTMLFilterContactList = HTMLContactList.filter(
        (contact) => {
            const name = contact.props.children.props.contact.name.toLowerCase()
            const lowerFilter = listFilter.toLowerCase()
            if (name.includes(lowerFilter)) {
                return contact
            }
        }
    ) */

    return (
        <aside className='contact_container'>
            <NewOption />
            <SearchBar />
            {isloadingContacts ? 
            <div>Cargando Contactos...</div> :
            HTMLContactList
            /* !listFilter ? HTMLContactList :
            HTMLFilterContactList */}
        </aside>
    )
}

export default ContactContainer