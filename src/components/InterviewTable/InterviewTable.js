import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './InterviewTable.css';

export const InterviewTable = ({ reports }) => {
    console.log(reports);
    // const params = useParams();
    // const candidateId = params.candidateId;
    // const [interviews, setInterviews] = useState([]);
    // const [report, setReport] = useState(null);
    // const [candidate, setCandidate] = useState(null);
    


    // useEffect(() => {
    //    fetch(`http://localhost:3333/api/reports?candidateId=${id}`)
    //     .then(data => data.json())
    //     .then(result => {
                // console.log(result);
                // setReports(result);

     //       // setInterviews(result.interviews);
     //       // setReport(result.report);
     //       // setCandidate(result.candidate);
    //     })
    //     .catch(error => console.error(error));
    // }, [id]);

   // // [params.id]);

return (
    <div className='table-container'>
        <table className='interview-table'>
            <thead className='row-first'>
                <tr>
                    <th>
                    <FontAwesomeIcon icon={faCaretDown} size="1x" style={{ color: 'black' }} /> Company
                    </th>
                    <th>
                        <FontAwesomeIcon icon={faCaretDown} size="1x" style={{ color: 'black' }} />Interview date
                    </th>
                    <th>
                        <FontAwesomeIcon icon={faCaretDown} size="1x" style={{ color: 'black' }} /> Status
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody className='row-second'>
                {reports.map(report => (
                    <tr key={report.candidateId}>
                        <td>{report.companyName}</td>
                        <td>{new Date(report.interviewDate).toLocaleDateString('ru-RU')}</td>
                        <td>{report.status}</td>
                        <td><FontAwesomeIcon icon={faEye} size="lg" /></td>
                    </tr>
                ))}
            </tbody>
        </table>        
    </div>
    )
}
