import { createContext, useEffect, useState } from "react";
import { getContactList } from "../service/contactService";
import { Outlet } from "react-router-dom";

export const ContactListContext = createContext()

const ContactListContextProvider = () => {
    const [contactList, setContactList] = useState([])
    const [isloadingContacts, setIsLoadingContacts] = useState(true)
    const [listFilter, setListFilter] = useState('')

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

        
    function updateContactById(contact_to_update, contact_id){
        //Creamos una nueva lista donde el contacto a actualizar se reemplazara por el contacto actualizado
        const new_contact_list = contactList.map(
            (contact) => {
                if (Number(contact.contact_id) === Number(contact_id)) {
                    return contact_to_update
                }
                return contact
            }
        )

        setContactList(new_contact_list)
    }

    function addNewContact(new_contact){
        const new_contact_list = [ ...contactList ]
        new_contact_list.push(new_contact)

        setContactList(new_contact_list)
    }

    useEffect(
        loadContactList,
        []
    )

    const providerValues = {
        contactList,
        setContactList,
        isloadingContacts,
        getContactById,
        updateContactById,
        addNewContact,
        listFilter, 
        setListFilter,
    }

    return (
        <ContactListContext.Provider value={providerValues}>
            <Outlet />
        </ContactListContext.Provider>
    )
}

export default ContactListContextProvider