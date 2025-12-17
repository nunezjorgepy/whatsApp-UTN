import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { ContactListContext } from "./ContactListContext";

export const ContactDetailContext = createContext()

const ContactDetailContextProvider = () => {
    const { id: id } = useParams()
    const { getContactById, updateContactById } = useContext(ContactListContext)
    const contactSelected = getContactById(id)

    function addNewMessages(content) {
        /* 
        La idea del message_id es que use siempre el id del último mensaje. Si uso 'contacSelected.messages.lenght + 1' y se llegara a borrar un mensaje anterior (NO el útlimo), al agregar uno nuevo tomaría como id la longitud de la lista y repetiría id
        */
        /*
            La variable new_message_id la creo porque, en caso de no haber mensajes en la lista, ya sea porque se creo un nuevo contacto o porque se borraron todos los mensajes, no puede leer la propiedad message_id y arroja un error. De esta forma, en caso de que no hayan mensajes, le asigno el valor 1.
        */
        const new_message_id = contactSelected.messages.length !== 0 ?
                                contactSelected.messages[contactSelected.messages.length - 1].message_id + 1 :
                                1
        const new_message = {
            message_id: new_message_id,
            message: content,
            message_at: new Date(),
            isSentMessage: true,
            message_state: 'NOT_SENT',
        }
        /* Clonamos el contacto seleccionado */
        const contactSelectedCloned = { ...contactSelected }
        /* Agregamos el nuevo mensaje a la lista del contacto clonado */
        contactSelectedCloned.messages.push(new_message)
        updateContactById(contactSelectedCloned, id)
    }


    function deleteMessage(messageIndex){
        /* Elimina el mensaje de la lista del contacto seleccionado (contactSelected) */
        const contactSelectedCloned = { ...contactSelected }
        contactSelectedCloned.messages.splice(messageIndex, 1)

        updateContactById(contactSelectedCloned, id)
    }


    function editMessage(messageIndex, text){
        /* Edita el mensaje seleccionado */
        const contactSelectedCloned = { ...contactSelected }
        contactSelectedCloned.messages[messageIndex].message = text

        updateContactById(contactSelectedCloned, id)
    }


    const providerValues ={
        contactSelected,
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