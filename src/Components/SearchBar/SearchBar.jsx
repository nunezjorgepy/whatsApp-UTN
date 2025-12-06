import './SearchBar.css'

function SearchBar() {
    return (
        <form className='contact_searchBar_container'>
            <i className="bi bi-search search_bi"></i>
            <input type="search" name="contact_searchBar" id="contact_searchBar" className='contact_searchBar' placeholder='Buscar un chat o iniciar uno nuevo'/>
        </form>
    )
}

export default SearchBar