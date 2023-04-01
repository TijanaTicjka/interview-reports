import './CandidatePage.css';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { InfoSection } from '../InfoSection/InfoSection';
import { InterviewTable } from '../InterviewTable/InterviewTable';

export const CandidateReports = () => {
    const { id } = useParams();
    // const id = 56479186;
    const [candidate, setCandidate] = useState(null);
    // const [interviews, setInterviews] = useState([]);
    const [reports, setReports] = useState([]);
    // const [report, setReport] = useState(null);


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
           
            <h1>Reports</h1>

            <InterviewTable reports={reports} />
        </div>
    )  
}