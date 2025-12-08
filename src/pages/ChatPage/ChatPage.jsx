import ContactContainer from "../../Components/ContactsContainer/ContactContainer"
import MessageContainer from "../../Components/MessageContainer/MessgaeContainer"


function ChatPage() {
    
    return (
        <main>
            <ContactContainer />
            <MessageContainer />    {/* Un mejor nombre hubiera sido ChatContainer, pero por ahroa lo dejo así */}
        </main>
    )
}

export default ChatPage