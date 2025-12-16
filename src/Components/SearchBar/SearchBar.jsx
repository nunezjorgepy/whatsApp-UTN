import { useContext } from 'react'
import './SearchBar.css'
import { ContactListContext } from '../../Context/ContactListContext'

function SearchBar() {
    const { listFilter, setListFilter } = useContext(ContactListContext)

    return (
        <form className='contact_searchBar_container'>
            <i className="bi bi-search search_bi"></i>
            <input 
                type="search" 
                name="contact_searchBar" 
                id="contact_searchBar" 
                className='contact_searchBar' 
                placeholder='Buscar un chat o iniciar uno nuevo'
                value={listFilter}
                onChange={e => setListFilter(e.target.value)}/>
        </form>
    )
}

export default SearchBar