import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.svg'
import menu from '../../images/icon-menu.svg'
import menu_close from '../../images/icon-close-menu.svg'
import up_arrow from '../../images/icon-arrow-up.svg'
import down_arrow from '../../images/icon-arrow-down.svg'

function Header() {
  const drop_down_initial = {features: false,company: false}
  const [drop, setDrop] = useState(drop_down_initial)
  const [toggleMenu, setToggleMenu] = useState(false)
  const handler = ()=>{
    setDrop({...drop, company: true})
  }
  useEffect(()=>{
    if(toggleMenu){
    document.body.classList.add('nav-open')
    }else{
      document.body.classList.remove('nav-open')
    }
  },[toggleMenu])
  return (
    <header className={`${toggleMenu ? 'open' : null}`}>
    <a href="#" className='logo'>
      <img onClick={handler}  className='logo' src={logo} alt="snap" />
    </a>
      <div className='menu' onClick={()=>setToggleMenu(!toggleMenu)}>
        <img src={menu} alt="close"  className='open-menu'/>
        <img src={menu_close} alt="close-menu" className='close-menu' />
      </div>
      <nav>
        <ul className='nav-links'>
          <li className='nav-link'  onClick={()=>setDrop({...drop, features:!drop.features})}>
              <span>Features</span>
              {drop.features ? <img src={down_arrow} alt="down_arrow" /> : <img src={up_arrow} alt="up_arrow" />}
            <ul className={`dropdown-list features  ${drop.features ? 'link-open' : null}`}>
              <li className="dropdown-link">
                <a href="#">Todo List</a>
              </li>
              <li className="dropdown-link">
                <a href="#">Calendar</a>
              </li>
              <li className="dropdown-link">
                <a href="#">Remainder</a>
              </li>
              <li className="dropdown-link">
                <a href="#">Planning</a>
              </li>
            </ul>
          </li>
          <li className='nav-link'  onClick={()=>setDrop({...drop, company: !drop.company})}>
            <span>Company</span>
              {drop.company ? <img src={down_arrow} alt="down_arrow" /> : <img src={up_arrow} alt="up_arrow" />}
            <ul className={`dropdown-list company ${drop.company ? "link-open" : null}`}>
              <li>
                <a href="#">History</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </li>
          <li className='nav-link'>Career</li>
          <li className='nav-link'>About</li>
        </ul>
        <div className='registration'>
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>
    </header>
  );
}

export default Header