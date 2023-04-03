import { Outlet} from 'react-router';
import { Footer } from '../Footer/Footer';
import './Layout.css';
import { Header } from '../Header/Header';
import { ReportsHeader } from '../Reports/ReportsHeader/ReportsHeader';
import { useLocation } from 'react-router-dom';



export const Layout = () => {
    const location = useLocation();
    const reportsHeader = location.pathname === '/reports'

    return (
        <div>
            {reportsHeader ? <ReportsHeader /> : <Header />}
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}