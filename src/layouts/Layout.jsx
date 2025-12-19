import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            
            <Outlet />
            <Footer></Footer>    
        </div>
    )
}

export default Layout