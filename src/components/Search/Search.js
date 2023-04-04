import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

export const Search = ({searchTerm, setSearchTerm}) => {

  return (
    <div className="search-box">
      <div>
        <h2>Candidates</h2>
      </div>
      <div className="input">
         <FontAwesomeIcon icon={faSearch} className="icon" />
        <input id="search" type="search" placeholder="Search..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      </div>
    </div>
  );
};