import './ContactContainer.css'
/* Components */
import NewOption from '../NewOption/NewOption.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { useContext } from 'react'
import { ContactListContext } from '../../Context/ContactListContext.jsx'


function ContactContainer() {
    const { HTMLContactList } = useContext(ContactListContext)

    return (
        <aside className='contact_container'>
            <NewOption />
            <SearchBar />
            {HTMLContactList}
        </aside>
    )
}

export default ContactContainer