import './CandidatePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { InfoSection } from '../InfoSection/InfoSection';

export const CandidateReports = () => {
    return (
        <div className='container'>
            <InfoSection/>
           
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