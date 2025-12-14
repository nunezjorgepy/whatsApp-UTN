import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const MessageContext = createContext()

const MessageContextProvider = () => {
    const [showDeleteWarning, setShowDeleteWarning] = useState(false)
    const [showEditComponent, setShowEditComponent] = useState(true)
    /* 
    TODO: modificar el nombre de messaId a messageIndex (y el setter) porque es más adecuado.
    Hacerlo después de haber eliminado los messageId del intento antreior.
    */
    const [messageId, setMessageId] = useState(null)
    const [messageToEdit, setMessageToEdit] = useState('')

    function findMessageIndex(contact, message){
        /* Encuentra el índice del mensaje buscado */
        const foundMessage = contact.messages.findIndex(
            msg => msg.message_id === message.message_id
        )

        return foundMessage

    }

    const providerValues = {
        showDeleteWarning,
        setShowDeleteWarning,
        showEditComponent,
        setShowEditComponent,
        messageId,
        setMessageId,
        messageToEdit,
        setMessageToEdit,
        findMessageIndex
    }

    return(
        <MessageContext.Provider value={providerValues}>
            <Outlet />
        </MessageContext.Provider>
    )
}

export default MessageContextProvider