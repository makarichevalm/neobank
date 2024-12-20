import { FC } from 'react'
import './ExchangeRate.scss'
import bank from '@assets/icons/bank.svg'
import { TCurrencies } from '../../../types'

type TExchangeRate = {
  currencies: TCurrencies[]
}
const ExchangeRate: FC<TExchangeRate> = ({ currencies }) => {
  return (
    <article className='converter'>
      <div className='converter_title'>
        <h3>Exchange rate in internet bank</h3>
        <span>Update every 15 minutes, MSC 09.08.2022</span>
      </div>
      <p>Currency</p>
      <div className='converter_currency'>
        <ul className='currency_list' id='currency_list'>
          {currencies.length === 0 ? (
            <p className='currency_list-error'>Exchange rates are not available. Try again later</p>
          ) : (
            currencies.map((cur) => {
              return (
                <li key={cur.id}>
                  <span>{cur.name}:</span>
                  {cur.value}
                </li>
              )
            })
          )}
        </ul>
        <img src={bank} alt='Bank' />
      </div>
      <span className='converter_courses'>All courses</span>
    </article>
  )
}

export default ExchangeRate
