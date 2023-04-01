import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './InterviewTable.css';

export const InterviewTable = ({ reports }) => {
    console.log(reports);
    return (
        <div className='gradient-border-table'>
            <table className='interview-table'>
                <thead className='row-first'>
                    <tr>
                    <th className='column-first'>
                    <FontAwesomeIcon icon={faCaretDown} size="1x" style={{ color: 'black' }} /> Company
                    </th>
                    <th className='column-second'>
                        <FontAwesomeIcon icon={faCaretDown} size="1x" style={{ color: 'black' }} /> Interview date
                    </th>
                    <th colSpan='2' className='column-third'>
                        <FontAwesomeIcon icon={faCaretDown} size="1x" style={{ color: 'black' }} /> Status
                    </th>
                </tr>
            </thead>
            <tbody>
                {reports.map((report, index) => (
                    <tr className={index % 2 === 0 ? "even-row" : "odd-row"} key={report.candidateId+index}>
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
