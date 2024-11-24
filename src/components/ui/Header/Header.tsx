import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'
import Button from '../Button/Button'

const Header: FC = () => {
  return (
    <header className='header'>
      <Link to='/' className='header_link'>
        NeoBank
      </Link>
      <nav className='header_nav'>
        <ul>
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
