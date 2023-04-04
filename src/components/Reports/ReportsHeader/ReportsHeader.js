import { useNavigate } from 'react-router';
import './ReportsHeader.css';

export const ReportsHeader = () => {
    const navigate = useNavigate()
    
    return (
        <header className="reports-header">
            <div>
                <h1 onClick={()=> navigate('/')}> Reports Administration </h1>
            </div>
            <div className='button-box'>
                <button className='button'> Reports </button>
                <button className='button'> Create Report </button>
            </div>
        </header>
    )
}