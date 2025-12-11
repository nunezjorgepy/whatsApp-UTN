import { createContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getContactById } from "../service/contactService";

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

    useEffect(
        loadContactById,
        []
    )


    providerValues ={
        contactSelected,
        isloadingContact,
        loadContactById
    }

    return(
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet />
        </ContactDetailContext.Provider>
    )
}