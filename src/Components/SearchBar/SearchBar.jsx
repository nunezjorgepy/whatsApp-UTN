import './SearchBar.css'

function SearchBar() {
    return (
        <div className='contact_searchBar_container'>
            <i className="bi bi-search search_bi"></i>
            <input type="search" name="contact_searchBar" id="contact_searchBar" className='contact_searchBar' placeholder='Buscar un chat o iniciar uno nuevo'/>
        </div>
    )
}

export default SearchBar