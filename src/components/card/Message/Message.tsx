import { FC } from 'react'
import './Message.scss'

const Message: FC = () => {
  return (
    <div className='cardMessage'>
      <h3>The preliminary decision has been sent to your email.</h3>
      <p>In the letter you can get acquainted with the preliminary decision on the credit card.</p>
    </div>
  )
}

export default Message
