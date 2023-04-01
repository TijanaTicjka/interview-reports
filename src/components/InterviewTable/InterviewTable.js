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
    <div className='gradient-border-table'>
        <table className='interview-table'>
            <thead className='row-first'>
                <tr>
                    <th className='column-first'>
                    <FontAwesomeIcon icon={faCaretDown} size="1x" style={{ color: 'black' }} /> Company
                    </th>
                    <th className='column-second'>
                        <FontAwesomeIcon icon={faCaretDown} size="1x" style={{ color: 'black' }} />Interview date
                    </th>
                    <th colSpan='2' className='column-third'>
                        <FontAwesomeIcon icon={faCaretDown} size="1x" style={{ color: 'black' }} /> Status
                    </th>
                </tr>
            </thead>
            <tbody>
                {reports.map(report => (
                    <tr key={report.candidateId}>
                        <td>{report.companyName}</td>
                        <td>{new Date(report.interviewDate).toLocaleDateString('ru-RU')}.</td>
                        <td>{report.status}</td>
                        <td style={{ width: '5%', textAlign: 'center'}}><FontAwesomeIcon icon={faEye} size="lg" /></td>
                    </tr>
                ))}
            </tbody>
        </table>        
    </div>
    )
}
