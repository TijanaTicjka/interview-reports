import './Header.css';
import { useNavigate } from 'react-router';

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div>
                <h1> Interview Reports </h1>
            </div>
                <div className='button-box'>
                    <button className='button' onClick={()=> navigate('/')}> Candidates </button>
                    <button className='button' onClick={()=> navigate('/reports')}> Reports </button>
            </div>
        </header>
    )
}