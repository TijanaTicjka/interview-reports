import { Outlet} from 'react-router';
import { Footer } from '../Footer/Footer';
import './Layout.css';
import { Header } from '../Header/Header';



export const Layout = () => {
  
    return (
        <div>
            <Header/>
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}