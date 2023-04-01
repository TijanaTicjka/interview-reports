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
            



            {/* <table className='table'>
                <tr className='row-first'>
                    <td>
                        <FontAwesomeIcon icon={faCaretDown} size="1x" style={{ color: 'black' }} /> Company
                    </td>
                    <td>
                         <FontAwesomeIcon icon={faCaretDown} size="1x" style={{ color: 'black' }}/>Interview date
                    </td>
                    <td colSpan={2}>
                         <FontAwesomeIcon icon={faCaretDown} size="1x" style={{ color: 'black' }} /> Status
                    </td>
                    
                </tr>
                 <tr className='row-second'>
                    <td>
                         Google
                    </td>
                    <td>
                       item
                    </td>
                    <td>
                       item
                    </td>
                    <td>
                       <FontAwesomeIcon icon={faEye} size="lg" />
                    </td>
                </tr >
                 <tr className='row-third'>
                    <td>
                         Facebook
                    </td>
                    <td>
                        Item
                    </td>
                    <td>
                        Item
                    </td>
                    <td>
                      <FontAwesomeIcon icon={faEye} size="lg" />
                    </td>
                </tr>
                 <tr className='row-fourth'>
                    <td>
                        Facebook
                    </td>
                    <td>
                        Item
                    </td>
                    <td>
                        Item
                    </td>
                    <td>
                       <FontAwesomeIcon icon={faEye} size="lg" />
                    </td>
                </tr>
                <tr className='row-fifth'>
                    <td>
                        Linkedin
                    </td>
                    <td>
                        Item
                    </td>
                    <td >
                        Item
                    </td>
                    <td>
                        <FontAwesomeIcon icon={faEye} size="lg" />
                    </td>
                </tr>
            </table> */}
        </div>
        

    )
    
}