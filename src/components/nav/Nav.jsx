import {useState} from 'react'

// Nav items
import {nav} from 'data/nav'


function Nav() {
  const [activeNav, setActiveNav] = useState('#')

  window.onscroll = function () {
    nav.forEach(({name, link}) => {
      if (document.getElementById(name.toLowerCase()).offsetTop - window.scrollY <= 100)
      {
        setActiveNav(link)
      }
    })
  }

  return (
    <nav className='nav'>
          {
            nav.map(({id, icon, link}) => {
              return (
                <a key={id} href={link} className={activeNav === link ? 'active' : ''}>{icon}</a>
              )
            }) 
          }
    </nav>
  )
}
export default Nav