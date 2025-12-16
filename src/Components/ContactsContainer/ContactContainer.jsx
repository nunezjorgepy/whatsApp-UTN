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
    ).sort(
        (a, b) => {
            /* Ordeno la lista según el más reciente */
            // Obtengo la lista de mensajes de cada contacto.
            const messageA = a.props.children.props.contact.messages
            const messageB = b.props.children.props.contact.messages

            return (
                messageB[messageB.length - 1].message_at - messageA[messageA.length - 1].message_at
            )
        }
    )
    

    const HTMLFilterContactList = HTMLContactList.filter(
        /* Filtra la lista de contactos según el término buscado, pero sólo la renderiza si hay un término buscado */
        (contact) => {
            /* toLowerCase() asegura que si busco jorge, lo encuentre aunque el contacto sea Jorge, JoRgE o JORGE */
            const name = contact.props.children.props.contact.name.toLowerCase()
            const lowerFilter = listFilter.toLowerCase()
            if (name.includes(lowerFilter)) {
                return contact
            }
        }
    )

    return (
        <aside className='contact_container'>
            <NewOption />
            <SearchBar />
            {isloadingContacts ? 
            <div className='loading_info'>Cargando Contactos...</div> :
            !listFilter ? HTMLContactList :
            HTMLFilterContactList}
        </aside>
    )
}

export default ContactContainer