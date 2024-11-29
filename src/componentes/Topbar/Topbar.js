import './Topbar.css';
import {Link} from "react-router-dom";

function Topbar(){

    return(
        <div className="topbar">
            <h1>MyFinanci</h1>
            <nav className="nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="transactions" className="nav-link">Transações</Link>
            </nav>
        </div>
    )
}

export default Topbar;