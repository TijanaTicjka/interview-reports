import './Header.css';
import { useNavigate } from 'react-router';

export const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div>
                <h1> Interview Reports </h1>
            </div>
                <button className='button'  onClick={() => navigate('/candidates')}> Candidates </button>
        </header>
    )
}