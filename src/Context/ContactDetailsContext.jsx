import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getContactById, getContactList } from "../service/contactService";
import { ContactListContext } from "./ContactListContext";

export const ContactDetailContext = createContext()

const ContactDetailContextProvider = () => {
    const { id: id } = useParams()
    const [contactSelected, setContactSelected] = useState(null)
    const [isloadingContact, setIsLoadingContact] = useState(true)



    function loadContactById() {
        setIsLoadingContact(true)
        setTimeout(
            function() {
                const contact = getContactById(id)
                setContactSelected(contact)
                setIsLoadingContact(false)
            },
            2000
        )
    }

    function addNewMessages(content) {
        const new_message = {
            message_id: contactSelected.messages.length + 1,
            message: content,
            message_at: new Date(),
            isSentMessage: true,
            message_state: 'NOT_SENT',
        }

        setContactSelected({
            ...contactSelected,
            messages: [...contactSelected.messages, new_message]
        })
    }

    useEffect(
        loadContactById,
        [id]
    )


    const providerValues ={
        contactSelected,
        isloadingContact,
        loadContactById,
        addNewMessages,
    }

    return(
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet />
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider