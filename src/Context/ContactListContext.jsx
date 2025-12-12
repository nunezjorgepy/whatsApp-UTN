import { createContext, useEffect, useState } from "react";
import Contact from "../Components/Contact/Contact";
import { getContactList } from "../service/contactService";
import { Link, Outlet } from "react-router-dom";

export const ContactListContext = createContext()

const ContactListContextProvider = () => {
    const [contactList, setContactList] = useState([])
    const [isloadingContacts, setIsLoadingContacts] = useState(true)

    function loadContactList() {
        setIsLoadingContacts(true)
        setTimeout(
            function() {
                /* Busca la lista de contactos en la 'base de datos' */
                const contact_list = getContactList();
                // Guardo la respuesta en mi estado
                setContactList(contact_list);

                setIsLoadingContacts(false)
            },
            2000
        )
    }

    useEffect(
        loadContactList,
        []
    )

    const providerValues = {
        contactList,
        isloadingContacts
    }

    return (
        <ContactListContext.Provider value={providerValues}>
            <Outlet />
        </ContactListContext.Provider>
    )
}

export default ContactListContextProvider