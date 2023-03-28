import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export const Modal = ({modal,setModal}) => {
    console.log(modal);
    const closeModal = ()=>{
      setModal(false)
    }
    if(modal) {

        return(
        <div className='modal-box'> 
          <div className='report'>
            <div className='headline'>
              <h4>Name Surname</h4>
              <button className='close' onClick={closeModal}>
                <FontAwesomeIcon icon={faCircleXmark}  className='icon-close'size="2xl"/> 
              </button>
            </div>
          </div>
        </div>
    )
    }
}