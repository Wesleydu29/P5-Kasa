import '../styles/Header.scss'
import LOGO from '../assets/LOGO.png'
import {NavLink} from "react-router-dom"

function Header() {
    return(
        <nav className="header">
            <div className="navbar-logo">
                <img src={LOGO} alt="Logo"></img>
            </div>
            <div className='navbar-link'>
                <NavLink to="/">Acceuil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </div>
        </nav>
    )

}
export default Header