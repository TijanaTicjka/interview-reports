
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import './InfoSection.css';


export const InfoSection = () => {
    const params = useParams()
    const [candidate, setCandidate] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:3333/api/candidates/${params.id}`).then
            (data => data.json())
            .then(result => setCandidate(result))
    }, [params.id])
    if (!candidate) return null;
    return (
        <div className='info-box'>
            <div className='image'>
                <img src={candidate.avatar}></img>
            </div>
            <div className='info'>
                <p>Name:</p>
                <h2>{candidate.name}</h2>
                <p>Email:</p>
                <h2>{ candidate.email}</h2>
            </div>
            <div className='info'> 
                <p>Date of birth:</p>
                <h2>{candidate.birthday}</h2>
                <p>Education:</p>
                <h2>{candidate.education}</h2>
            </div> 
            
        </div>
    )
}