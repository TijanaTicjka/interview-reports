import './Reports.css'
import { useEffect, useState, useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../Modal/Modal';


export const Reports = () => {
    const[allReports, setAllReports] = useState([]);
    console.log(allReports);
    const[modal, setModal] = useState(false);
    const[report, setReport] =useState(null);  

    const openModal = (report) => {
        setModal(true);
        setReport(report);
    }
   
    useEffect(() => {
        fetch('http://localhost:3333/api/reports')
        .then(data => data.json())
        .then(res => 
            setAllReports(res))

    },[])

    return (
        <section className='reports'>
            <Modal 
            modal={modal}
            setModal={setModal}
            report={report}/>
            <div className='reports-container'>
                {allReports.map(report => (
                <div key={report.id} className='report-box'>
                    <div className='box1'>
                      <h3>{report.companyName}</h3>
                      <p>Company</p>
                    </div>
                    <div className='box1'>
                      <h3>{report.candidateName}</h3>
                      <p>Candidate</p>
                    </div>
                    <div className='box2'>
                        <h3>{new Date(report.interviewDate).toLocaleDateString('ru-RU')}.</h3>
                        <p>Interview Date</p>
                    </div>
                    <div className='box2'>
                        <h3>{report.status}</h3>
                        <p>Status</p>
                    </div>
                    <div className='box3'>
                        <FontAwesomeIcon icon={faEye} size="lg"
                        onClick={()=> openModal(report)} />
                        <FontAwesomeIcon
                        icon={faTrashAlt}
                        size="lg"
                        style={{ color: 'black'}} /> 
                    </div>
                </div>
            ))}
            </div>
        </section>
    )
}