import './ContactContainer.css'
/* Components */
import Contact from '../Contact/Contact.jsx'
import NewOption from '../NewOption/NewOption.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { getContactList } from '../../service/contactService.js'




function ContactContainer() {
    console.log(getContactList())

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