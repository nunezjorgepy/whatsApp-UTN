import ContactContainer from '../../Components/ContactsContainer/ContactContainer'

function HomePage() {
    return (
        <main>
            <ContactContainer />
            <section className="nothing_to_show">No hay chats abiertos</section>
        </main>
    )
}

export default HomePage