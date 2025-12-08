import './ContactContainer.css'
/* Components */
import Contact from '../Contact/Contact.jsx'
import NewOption from '../NewOption/NewOption.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { getContactList } from '../../service/contactService.js'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function ContactContainer() {
    const [contactList, setContactList] = useState([])
    /* const [HTMLContactList, setHTMLContactList] = useState([]) */

    function loadContactList() {
        const contact_list = getContactList();

        // Guardo la respuesta en mi estado
        setContactList(contact_list);
    }

    const HTMLContactList = contactList.map(
        (contact) => {
            return (
                <Link to={`/chat/` + contact.contact_id} key={contact.contact_id}>
                    <Contact contact={contact} />
                </Link>
            )
        }
    )

    function renderContacts(){
        const contactos = contactList.map(
            (contact) => {
                return (
                    <Link to={`/chat/` + contact.contact_id} key={contact.contact_id}>
                        <Contact contact={contact} />
                    </Link>
                )
            }
        )

        setHTMLContactList(contactos)
    }

    useEffect(
        () => {
            loadContactList()
            /* renderContacts() */
        },
        []
    )

    return (
        <aside className='contact_container'>
            <NewOption />
            <SearchBar />
            {HTMLContactList}
        </aside>
    )
}

export default ContactContainer