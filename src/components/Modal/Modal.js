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
              <h2>{report.candidateName}</h2>
              <button className='close' onClick={() => setModal(false)}>
                <FontAwesomeIcon icon={faCircleXmark}  className='icon-close'size="2xl"/> 
              </button>
            </div>
            <div className='details'>
              <div className='first-part'>
                <div>Company</div>
                <div className='title'> {report.companyName}</div>
                <div>Interview Date</div>
                <div className='title'>{new Date(report.interviewDate).toLocaleDateString('ru-RU')}.</div>
                <div>Phase</div>
                <div className='title'>{report.phase}</div>
                <div>Status</div>
                <div className='title'>{report.status}</div>
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