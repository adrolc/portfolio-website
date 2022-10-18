import LOGO from 'assets/logo.png'
import GLOW from 'assets/glow1.png'

function TopBar() {
  return (
    <nav className='topBar'>
        <img className='topBar__glow' src={GLOW} alt="" />
        <div className="container topBar__container">
            <div className="topBar__logo">
                <img src={LOGO} alt="adrian olczak" />
            </div>
            <div className="topBar__menu">
                <a href="https://adrianolczak.pl">Blog</a>
                <a href="https://github.com/adrolc" target="_blank" rel='noreferrer'>GitHub</a>
            </div>
        </div>
    </nav>
  )
}

export default TopBar