import { FC } from 'react'
import './ExchangeRate.scss'
import bank from '@assets/icons/bank.svg'

const ExchangeRate: FC = () => {
  return (
    <article className='converter'>
      <div className='converter_title'>
        <h3>Exchange rate in internet bank</h3>
        <span>Update every 15 minutes, MSC 09.08.2022</span>
      </div>
      <p>Currency</p>
      <div className='converter_currency'>
        <ul className='currency_list' id='currency_list'>
          <li>
            <span>USD: </span> 160.79
          </li>
          <li>
            <span>USD: </span> 160.79
          </li>
          <li>
            <span>USD: </span> 60.79
          </li>
          <li>
            <span>USD: </span> 160.79
          </li>
          <li>
            <span>USD: </span> 60.79
          </li>
          <li>
            <span>USD: </span> 60.79
          </li>
        </ul>
        <img src={bank} alt='Bank' />
      </div>
      <span className='converter_courses'>All courses</span>
    </article>
  )
}

export default ExchangeRate
