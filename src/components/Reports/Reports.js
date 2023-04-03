import './Reports.css'
import { useEffect, useState, useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal } from '../Modal/Modal';
import {Search} from './Search/Search'


export const Reports = () => {
    const[allReports, setAllReports] = useState([]);
    console.log(allReports);
    const[modal, setModal] = useState(false);
    const[report, setReport] = useState(null); 
    const[searchTerm, setSearchTerm] = useState('')

    const openModal = (report) => {
        setModal(true);
        setReport(report);
    }


    const deleteReport = (id) => {
        fetch(`http://localhost:3333/api/reports/${id}`, {
            method: 'DELETE',})
            .then((res) => {
                if (res.status !== 200) {
                console.log('Error');
                return;
            }
            const newReports = allReports.filter((report) => report.id !== id);setAllReports(newReports);
        });
    };
   
    useEffect(() => {
        fetch('http://localhost:3333/api/reports')
        .then(data => data.json())
        .then(res => 
            setAllReports(res))

    },[])

    const filltredReports = useMemo(()=>{
        if(!searchTerm) {
            return allReports} else {
        return allReports.filter(report =>
            (report.candidateName.toLowerCase().includes(searchTerm.toLowerCase()))|| report.companyName.toLowerCase().includes(searchTerm.toLowerCase())
        )}
    },[searchTerm,allReports])

    return (
        <section className='reports'>
            <Modal 
            modal={modal}
            setModal={setModal}
            report={report}/>
            <Search setSearchTerm={setSearchTerm}/>
            <div className='reports-container'>
                {filltredReports.map(report => (
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
                        style={{ color: 'black'}} onClick={()=> deleteReport(report.id)} /> 
                    </div>
                </div>
            ))}
            </div>
        </section>
    )
}