import './CandidatePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const CandidateReports = () => {
    return (
        <div className='container'>
            <div className='info-box'>
            <div className='image' >
                <img src='https://variety.com/wp-content/uploads/2021/04/Avatar.jpg?w=681&h=383&crop=1&resize=681%2C383'></img>
            </div>
            <div className='info'>
                <p>Name:</p>
                <h2>Radmila Bijelovic</h2>
                <p>Email:</p>
                <h2>bijelovicr@gmail.com</h2>
            </div>
            <div className='info'> 
                <p>Date of birth:</p>
                <h2>17.04.1985.</h2>
                <p>Education:</p>
                <h2>BIT</h2>
            </div>
            </div>
            <h2>Reports</h2>
            <table className='table'>
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
            </table>
        </div>
        

    )
    
}