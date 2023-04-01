import './SingleCandidate.css';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { InfoSection } from '../InfoSection/InfoSection';
import { InterviewTable } from '../InterviewTable/InterviewTable';

export const SingleCandidate = () => {
    const { id } = useParams();
    const [candidate, setCandidate] = useState(null);
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3333/api/candidates/${id}`)
            .then(data => data.json())
            .then(result => setCandidate(result))
    }, []);
     
    useEffect(() => {
        fetch(`http://localhost:3333/api/reports?candidateId=${id}`)
            .then(data => data.json())
            .then(result => {
                console.log(result);
                setReports(result);
        })
        .catch(error => console.error(error));
    }, [id]);


    return (
        <div className='container'>
            <InfoSection candidate={candidate}/>
            <div className='heading'>Reports</div>
            <InterviewTable reports={reports} />
        </div>
    )  
}