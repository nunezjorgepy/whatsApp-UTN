import './HomePage.css'
import ContactContainer from '../Components/ContactsContainer/ContactContainer'

function HomePage() {
    return (
        <main className='home_main'>
            <ContactContainer />
            <section className="no_chat_opened">No hay chats abiertos</section>
        </main>
    )
}

export default HomePage