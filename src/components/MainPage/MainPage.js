import './MainPage.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export const MainPage = () => {
    const navigate = useNavigate();
    return (
        <div className='dummy'>
            <h1 className='title' onClick={() => navigate('/')}> Hiring agency HAREM </h1>
            <Link to="/candidates">Go to Candidates</Link>
            <div>

            </div>
        </div>
    )
}