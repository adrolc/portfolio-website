import LOGO from 'assets/logo.png'
import {BsGithub} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
        <a href="#" className="footer_logo">
            <img src={LOGO} alt="" />
        </a>
        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://github.com/adrolc"><BsGithub /></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Adrian Olczak. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer