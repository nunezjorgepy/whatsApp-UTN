import { createContext, useEffect, useState } from "react";
import Contact from "../Components/Contact/Contact";
import { getContactList } from "../service/contactService";
import { Link, Outlet } from "react-router-dom";

export const ContactListContext = createContext()

const ContactListContextProvider = () => {
    const [contactList, setContactList] = useState([])
    /* const [HTMLContactList, setHTMLContactList] = useState([]) */

    function loadContactList() {
        /* Busca la lista de contactos en la 'base de datos' */
        const contact_list = getContactList();

        // Guardo la respuesta en mi estado
        setContactList(contact_list);
    }

    const HTMLContactList = contactList.map(
        (contact) => {
            return (
                <Link to={`/chat/` + contact.contact_id + '/messages'} key={contact.contact_id}>
                    <Contact contact={contact} />
                </Link>
            )
        }
    )

    useEffect(
        loadContactList,
        []
    )

    const providerValues = {
        contactList,
        HTMLContactList
    }

    return (
        <ContactListContext.Provider value={providerValues}>
            <Outlet />
        </ContactListContext.Provider>
    )
}

export default ContactListContextProvider