import '../styles/Footer.scss'
import LogoFooter from '../assets/LogoFooter.png'

function Footer() {
    return(
        <div className='footer'>
            <div className='footer-content'>
                <img src={LogoFooter}></img>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )

}
export default Footer