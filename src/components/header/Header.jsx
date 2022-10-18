import ARROW from 'assets/arrow_down.png'
import HEADER_IMG from 'assets/header_img.png'
import GLOW1 from 'assets/glow1.png'
import GLOW2 from 'assets/glow2.png'

const Header = () => {
  return (
    <header className='header'>
      <div className="container header__container">
        <div className="header__content">
          <h3>Hi! I'm</h3>
          <h1>Adrian Olczak</h1>
          <h5 className="text-light">Backend developer</h5>
          <div className="header__cta">
            <a href="#experience" className='btn btn-primary-outline'>Experience</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
        <div className="header__image">
          <img className='header__img' src={HEADER_IMG} alt="" />
          <img className='header__glow1' src={GLOW1} alt="" />
          <img className='header__glow2' src={GLOW2} alt="" />
        </div>
      </div>
      <a className='header__arrow' href="#experience"><img src={ARROW} alt="" /></a>
    </header>
  )
}

export default Header