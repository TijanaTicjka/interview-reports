import { Outlet, useNavigate } from 'react-router';
import { Footer } from '../Footer/Footer';
import './Layout.css';

export const Layout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='header-wrapper'>
                <div>
                    <h1> Interview Reports </h1>
                </div>
                <button className='button' onClick={() => navigate('/candidates')}> Candidates </button>
            </div>
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}