import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <div>
            <Header />
            <div className="navbar-overlay.hidden" ></div>
            <Outlet />
            <Footer />
            </div>
            
    );
}

export default SharedLayout;
