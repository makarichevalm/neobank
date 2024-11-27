import { FC, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'
import Button from '../Button/Button'
import menuIcon from '@assets/icons/menu.svg'

const Header: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  return (
    <header className='header'>
      <Link to='/' className='header_link'>
        NeoBank
      </Link>
      <nav className='header_nav'>
        <div className='header_nav-icon' onClick={handleMenu}>
          <img src={menuIcon} alt='Menu' />
        </div>
        <ul className={`header_nav-item ${isMenuOpen && 'active'}`}>
          <li>
            <NavLink to='/card'>Credit card</NavLink>
          </li>
          <li>
            <NavLink to='/product'>Product</NavLink>
          </li>
          <li>
            <NavLink to='/account'>Account</NavLink>
          </li>
          <li>
            <NavLink to='/resources'>Resources</NavLink>
          </li>
        </ul>
      </nav>
      <Button name='Online Bank' />
    </header>
  )
}

export default Header
