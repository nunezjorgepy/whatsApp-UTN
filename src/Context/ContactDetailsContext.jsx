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

    function addNewMessages(content) {
        /* 
        La idea del message_id es que use siempre el id del último mensaje. Si uso 'contacSelected.messages.lenght + 1' y se llegara a borrar un mensaje anterior (NO el útlimo), al agregar uno nuevo tomaría como id la longitud de la lista y repetiría id
        */
        const new_message = {
            message_id: contactSelected.messages[contactSelected.messages.length - 1].message_id + 1,
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

    function deleteMessage(messageIndex){
        /* Elimina el mensaje de la lista del contacto seleccionado (contactSelected) */
        contactSelected.messages.splice(messageIndex, 1)
    }

    function editMessage(messageIndex, text){
        contactSelected.messages[messageIndex].message = text
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
        deleteMessage,
        editMessage,
    }

    return(
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet />
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider