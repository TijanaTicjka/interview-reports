import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';
import { useEffect, useState } from 'react';

export const Search = ({candidates, setCandidates}) => {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = candidates.filter(candidate => candidate.name.first.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="search-box">
      <div>
        <h2>Candidates</h2>
      </div>
      <div className="input">
         <FontAwesomeIcon icon={faSearch} className="icon" />
        <input type="search" placeholder="Search..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      </div>
    </div>
  );
};