import './ContactContainer.css'
/* Components */
import Contact from '../Contact/Contact.jsx'
import NewOption from '../NewOption/NewOption.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import contactList from '../../data/contact-list.js'



function ContactContainer() {
    console.log(contactList[1].messages[1].message_at)

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