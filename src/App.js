import './App.css';
import Topbar from "./componentes/Topbar/Topbar";
import {Outlet} from "react-router-dom";
import Footer from "./componentes/Footer/Footer";

function App() {
    return (
        <div className='app-container'>
            <Topbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default App;
