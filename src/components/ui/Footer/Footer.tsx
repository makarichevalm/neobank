import { FC } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import logo from '@assets/images/logo.png'
import Divider from '../Divider/Divider'

type TLinks = {
  id: number
  text: string
  to?: string
}
let footerLinks: Array<TLinks> = [
  { id: 1, text: 'About bank' },
  { id: 2, text: 'Ask a Question' },
  { id: 3, text: 'Quality of service' },
  { id: 4, text: 'Requisites' },
  { id: 5, text: 'Press center' },
  { id: 6, text: 'Bank career' },
  { id: 7, text: 'Investors' },
  { id: 8, text: 'Analytics' },
  { id: 9, text: 'Business and processes' },
  { id: 10, text: 'Compliance and business ethics' },
]
const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className='footer_info'>
        <a className='footer_info-logo' href='https://www.neoflex.ru/' target='_blank'>
          <img src={logo} alt='Neoflex' />
        </a>
        <address>
          <p>
            <a className='phone' href='tel: +74959852513'>
              +7 (495) 984 25 13
            </a>
          </p>
          <p>
            <a className='email' href='mailto: info@neoflex.ru'>
              info@neoflex.ru
            </a>
          </p>
        </address>
      </div>
      <nav className='footer_links'>
        <ul className='footer_links_list'>
          {footerLinks.map((link) => {
            return (
              <li className='footer_link' key={link.id}>
                <Link to={link.to ? link.to : '/notfound'}>{link.text}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <Divider style='footerDivider' />
      <p className='footer_text'>
        We use cookies to personalize our services and improve the user experience of our website. Cookies are small
        files containing information about previous visits to a website. If you do not want to use cookies, please
        change your browser settings
      </p>
    </footer>
  )
}

export default Footer
