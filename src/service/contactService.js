import concactList from "../data/contact-list";

export function getContactList(){
    /* En un futuro, esta función llama al servidor */
    return concactList
}

export function getContactById (contact_id) {
    /* Devuelve al contacto con la misma id que la solicitada */
    for(const contact of concactList){
        if (Number(contact.contact_id) === Number(contact_id)){
            return contact
        }
    }
}