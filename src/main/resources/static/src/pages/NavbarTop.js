import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function NavbarTop() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/rules"}>FantaCalcio...</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link " to={"/teams"}>Teams</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link " to={"/classifica"}>Classifica</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to={"/players"}>Lista giocatori</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to={"/matches"}>Calendario</Link>
                        </li>   
                        <li className="nav-item">
                            <Link className="nav-link " to={"/formation"}>Formazioni</Link>
                        </li>                      
                    </ul>
                </div>
            </div>
        </nav>
    )
}