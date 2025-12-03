import './ContactContainer.css'
/* Components */
import Contact from '../Contact/Contact.jsx'
import NewOption from '../NewOption/NewOption.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'

function ContactContainer() {
    return (
        <aside className='contact_container'>
            <NewOption />
            <SearchBar />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
        </aside>
    )
}

export default ContactContainer