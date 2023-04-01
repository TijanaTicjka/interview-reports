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
              <p>{report.candidateName}</p>
              <button className='close' onClick={() => setModal(false)}>
                <FontAwesomeIcon icon={faCircleXmark}  className='icon-close'size="2xl" /> 
              </button>
            </div>
            <div className='details'>
              <div className='first-part'>
                <div className='title'>Company</div>
                <div className='dates'> {report.companyName}</div>
                <div className='title'>Interview Date</div>
                <div className='dates'>{new Date(report.interviewDate).toLocaleDateString('ru-RU')}.</div> 
                <div className='title'>Phase</div>
                <div className='dates'>{report.phase}</div>
                <div className='title'>Status</div>
                <div className='dates'>{report.status}</div>
              </div>
              <div className='notes'>
                <div className='title'>Notes</div>
                <p>{report.note}</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}