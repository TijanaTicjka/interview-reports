import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

export const Search = () => {
  return (
    <div className="search-box">
      <div>
        <h2>Candidates</h2>
      </div>
      <div className="input">
         <FontAwesomeIcon icon={faSearch} className="icon" />
        <input placeholder="Search..."></input>
      </div>
    </div>
  );
};
