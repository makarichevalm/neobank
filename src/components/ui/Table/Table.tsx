import { FC, useState } from 'react'
import './Table.scss'
import sortImg from '@/assets/icons/Arrow_drop_up.svg'

type TTable = {
  headers: { id: string; name: string }[]
  data: { [key: string]: string | number }[]
}
type TSortDirection = 'asc' | 'desc'
type TSortedKey = {
  keyToSort: string
  direction: TSortDirection
}

const Table: FC<TTable> = ({ headers, data }) => {
  const [sort, setSort] = useState<TSortedKey>({ keyToSort: 'number', direction: 'asc' })
  const handleHeaderClick = (header: string) => {
    setSort({
      keyToSort: header,
      direction: changeSortDirection(header),
    })
  }
  const changeSortDirection = (header: string) => {
    if (header === sort.keyToSort) {
      if (sort.direction === 'asc') return 'desc'
      return 'asc'
    }
    return 'desc'
  }
  const sortData = (rows: typeof data) => {
    if (sort.direction === 'asc') {
      return rows.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1))
    }
    return rows.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1))
  }
  return (
    <div className='tableContainer'>
      <table className='table'>
        <thead className='table_header'>
          <tr className='table_header_row'>
            {headers.map((header) => (
              <th key={header.id}>
                <button className='table_header_row-btn' onClick={() => handleHeaderClick(header.id)}>
                  {header.name}
                  <img
                    src={sortImg}
                    className={`${
                      sort.keyToSort === header.id && sort.direction === 'desc' ? 'btn-sort btn-down' : 'btn-sort'
                    }`}
                  />
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='table_body'>
          {sortData(data).map((row, index) => (
            <tr className='table_body_row' key={index}>
              {Object.values(row).map((item, itemIndex) => (
                <td key={itemIndex}>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
