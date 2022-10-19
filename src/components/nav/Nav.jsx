import {useState} from 'react'

// Nav items
import {nav} from 'data/nav'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='nav'>
          {
            nav.map(({id, icon, link}) => {
              return (
                <a key={id} href={link} onClick={() => setActiveNav(link)} className={activeNav === link ? 'active' : ''}>{icon}</a>
              )
            }) 
          }
    </nav>
  )
}

export default Nav