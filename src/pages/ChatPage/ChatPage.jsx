import { useParams } from "react-router-dom"
import ContactContainer from "../../Components/ContactsContainer/ContactContainer"
import MessageContainer from "../../Components/MessageContainer/MessgaeContainer"
import { getContactList } from "../../service/contactService"


function ChatPage() {
    const id = useParams()
    
    return (
        <main>
            <ContactContainer />
            <MessageContainer />
        </main>
    )
}

export default ChatPage