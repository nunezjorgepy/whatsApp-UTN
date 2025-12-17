import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const MessageContext = createContext()

const MessageContextProvider = () => {
    const [showDeleteWarning, setShowDeleteWarning] = useState(false)
    const [showEditComponent, setShowEditComponent] = useState(false)
    const [messageIndex, setmessageIndex] = useState(null)
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
        messageIndex,
        setmessageIndex,
        messageToEdit,
        setMessageToEdit,
        findMessageIndex,
    }

    return(
        <MessageContext.Provider value={providerValues}>
            <Outlet />
        </MessageContext.Provider>
    )
}

export default MessageContextProvider