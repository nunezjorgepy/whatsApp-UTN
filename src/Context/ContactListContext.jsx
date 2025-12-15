import { createContext, useEffect, useState } from "react";
import { getContactList } from "../service/contactService";
import { Outlet } from "react-router-dom";

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

    function getContactById(contact_id) {
        for(const contact of contactList){
            if (Number(contact.contact_id) === Number(contact_id)){
                return contact
            }
        }
    }

    useEffect(
        loadContactList,
        []
    )

    const providerValues = {
        contactList,
        setContactList,
        isloadingContacts,
        getContactById
    }

    return (
        <ContactListContext.Provider value={providerValues}>
            <Outlet />
        </ContactListContext.Provider>
    )
}

export default ContactListContextProvider