import { FC } from 'react'
import './Table.scss'
import sortImg from '@/assets/icons/Arrow_drop_up.svg'
import { TPayment } from '@/types'

type TTable = {
  headers: { id: string; name: string }[]
  data: TPayment[]
}
const Table: FC<TTable> = ({ headers, data }) => {
  return (
    <div className='tableContainer'>
      <table className='table'>
        <thead className='table_header'>
          <tr className='table_header_row'>
            {headers.map((header) => (
              <th key={header.id}>
                <button className='table_header_row-btn'>
                  {header.name}
                  <img src={sortImg} className='' />
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='table_body'>
          {data.map((item, index) => (
            <tr className='table_body_row' key={index}>
              <td>{item.number}</td>
              <td>{item.date}</td>
              <td>{item.totalPayment}</td>
              <td>{item.interestPayment}</td>
              <td>{item.debtPayment}</td>
              <td>{item.remainingDebt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
