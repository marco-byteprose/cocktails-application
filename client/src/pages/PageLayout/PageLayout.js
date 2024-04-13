import { Outlet } from 'react-router-dom';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';

export default function PageLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    
    )
}