import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export const Modal = ({modal, setModal, report}) => {
  console.log(modal);
  console.log(report)
 
  if(modal) {
    return(
        <div className='modal-box'>
          <div className='report'>
            <div className='headline'>
              <h3>{report.candidateName}</h3>
              <button className='close' onClick={() => setModal(false)}>
                <FontAwesomeIcon icon={faCircleXmark}  className='icon-close'size="2xl" /> 
              </button>
            </div>
            <div className='details'>
              <div className='first-part'>
                <p className='title'>Company</p>
                <h3 className='dates'> {report.companyName}</h3>
                <p className='title'>Interview Date</p>
                <h3 className='dates'>{new Date(report.interviewDate).toLocaleDateString('ru-RU')}.</h3> 
                <p className='title'>Phase</p>
                <h3 className='dates'>{report.phase}</h3>
                <p className='title'>Status</p>
                <h3 className='dates'>{report.status}</h3>
              </div>
              <div className='notes'>
                <p>Notes</p>
                <p>{report.note}</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}