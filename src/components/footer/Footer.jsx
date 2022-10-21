import LOGO from 'assets/logo.png'
import {BsGithub} from 'react-icons/bs'

// me
import {me} from 'data/me'

// Nav items
import {nav} from 'data/nav'

function Footer() {
  return (
    <footer>
        <img className='footer__logo' src={LOGO} alt="" />
        <ul className="footer__navlinks">
            {
                nav.map(({id, name, link}) => {
                    return (
                        <li key={id}><a href={link}>{name}</a></li>
                    )
                }) 
            }
        </ul>

        <div className="footer__socials">
            <a href={me["github"]}><BsGithub /></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Adrian Olczak. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer