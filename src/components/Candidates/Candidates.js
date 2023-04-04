

import {Search} from '../Search/Search'
import './Candidates.css';
import { useEffect, useState } from 'react';
import { CandidateCard } from '../CandidateCard/CandidateCard';


export const Candidates = () => {
    const [candidates, setCandidates]= useState([]);
   

     useEffect(()=> {
        fetch('http://localhost:3333/api/candidates',{
              mode: 'cors',
              headers: {
                'Access-Control-Allow-Origin':'*'
              }}).then(data=>data.json())
        .then(res => {
            setCandidates(res)
        })
    },[])


    return (
        <section className="candidates">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <div className='container'>
                {(filteredCandidates.length > 0) ? 
                    (
                        filteredCandidates.map(c => ( 
                        <CandidateCard 
                        key={c.id}
                        id={c.id}
                        avatar = {c.avatar}
                        name = {c.name}
                        email = {c.email}
                        />))
                    ) : 
                    (
                    <div className='card'>
                        <div className='border'><h3>No candidates found!</h3></div>
                    </div>
                    )
                }
            </div>
        </section>
    )
}