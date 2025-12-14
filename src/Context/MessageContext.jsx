import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const MessageContext = createContext()

const MessageContextProvider = () => {
    const [showDelteWarning, setShowDelteWarning] = useState(true)

    const providerValues = {
        showDelteWarning,
        setShowDelteWarning
    }

    return(
        <MessageContext.Provider value={providerValues}>
            <Outlet />
        </MessageContext.Provider>
    )
}

export default MessageContextProvider