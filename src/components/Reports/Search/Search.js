import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';
import { useState } from 'react';

export const Search = ({setSearchTerm}) => {
    const [search, setSearch] = useState('');
    console.log(search);
    
    const handleSearch = (event) => {
        const updatedSearch = event.target.value;
        setSearch(updatedSearch)
        setSearchTerm(search);
    }

    return (
      <div className="search-box">
        <div className="input">
           <FontAwesomeIcon icon={faSearch} className="icon" />
           <input id="reports" type="search" value={search} onChange={handleSearch}  placeholder="Search..."/>
       </div>
      </div>
    );
};