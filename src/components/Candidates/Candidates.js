

import {Search} from '../Search/Search'
import './Candidates.css';
import { useEffect, useState } from 'react';
import { CandidateCard } from '../CandidateCard/CandidateCard';


export const Candidates = () => {
    const [candidates, setCandidates]= useState([]);
   

    useEffect(() => {
        fetch('http://localhost:3333/api/candidates')
        .then(data => data.json())
        .then(res => 
            console.log(res))
        
    },[]
    )


    return (
        <div className="candidates">
            <Search candidates={candidates} setCandidates={setCandidates}/>
            <div className='container'>
                {candidates.map(c => ( 
                   <CandidateCard 
                   key={c.id}
                   id={c.id}
                   avatar = {c.avatar}
                   name = {c.name}
                   email = {c.email}
                   />)
                    )}
            </div>
        </div>
    )
}