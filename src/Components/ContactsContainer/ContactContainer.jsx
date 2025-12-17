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
    const { contactList, isloadingContacts, listFilter, filterContactList } = useContext(ContactListContext)

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

            /* Cuando agrego un nuevo contacto o elimino todos los mensajes, no puede leer la propiedad message_at ya que no existe. Por eso, le asigno el valor 0, que lo deja último en la lista */
            const messageADate = messageA.length !== 0 ? messageA[messageA.length - 1].message_at : 0
            const messageBDate = messageB.length !== 0 ? messageB[messageB.length - 1].message_at : 0

            return (
                messageBDate - messageADate
            )
        }
    )
    

    const HTMLFilterContactList = filterContactList(HTMLContactList, listFilter)

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