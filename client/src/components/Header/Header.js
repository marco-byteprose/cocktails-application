import { Link } from 'react-router-dom';
import 'src/components/Header/Header.css'

function Header() {

    return (
        <nav className="navbar navbar-expand-sm sticky-top header">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand text-white-50">The Bar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link text-white-50">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;