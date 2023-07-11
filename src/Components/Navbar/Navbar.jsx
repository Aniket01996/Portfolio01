import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div id='Home' className='n-wrapper'>
      <div className="n-left">
        <div className="n-name">Ani<span className='orange'>ket</span></div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
            <ul style={{listStyleType: 'none'}}>
              <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
                <li>Home</li>
                </Link>
              <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                <li>Services</li>
                </Link>
                <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                <li>Portfolio</li>
                </Link>
                <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                <li>Contact us</li>
                </Link>
            </ul>
        </div>
        <Link spy={true} to='Footer' smooth={true} activeClass='activeClass'>
        <button className='button n-button'>
            Connect
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
