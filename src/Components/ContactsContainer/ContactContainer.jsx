import './ContactContainer.css'
/* Components */
import Contact from '../Contact/Contact.jsx'
import NewOption from '../NewOption/NewOption.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'

function ContactContainer() {
    return (
        <section className='contact_container'>
            <NewOption />
            <SearchBar />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
        </section>
    )
}

export default ContactContainer