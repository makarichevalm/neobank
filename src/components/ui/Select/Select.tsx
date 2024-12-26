import { FC } from 'react'

type TSelectProps = {
  id: string
  options: Array<any>
  onChange: any
  onBlur: any
}
const Select: FC<TSelectProps> = ({ id, options, onChange, onBlur }) => {
  const fields = [
    {
      id: 'term',
      options: [
        { value: 6, name: '6 month' },
        { value: 12, name: '12 month' },
        { value: 18, name: '18 month' },
        { value: 24, name: '24 month' },
      ],
    },
  ]
  return (
    <select className='select' id={id} onChange={onChange} onBlur={onBlur}>
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default Select
