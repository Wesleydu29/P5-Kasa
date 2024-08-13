import '../styles/Header.css'
import LOGO from '../assets/LOGO.png'

function Header() {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={LOGO} alt="Logo"></img>
            </div>
            <div className='navbar-link'>
                <a href='index.html'>Acceuil</a>
                <a>A Propos</a>
            </div>
        </nav>
    )

}
export default Header