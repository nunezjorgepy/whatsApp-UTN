import './SearchBar.css'

function SearchBar() {
    return (
        <div className='contact_searchBar_container'>
            <i class="bi bi-search"></i>
            <input type="search" name="contact_searchBar" id="contact_searchBar" className='contact_searchBar' />
        </div>
    )
}

export default SearchBar