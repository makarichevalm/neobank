import { FC } from 'react'
import './Message.scss'

type TMessage = {
  header: string
  desc: string
  border?: boolean
}
const Message: FC<TMessage> = ({ header, desc, border }) => {
  return (
    <div className={border ? 'cardMessage message-border' : 'cardMessage'}>
      <h3>{header}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Message
