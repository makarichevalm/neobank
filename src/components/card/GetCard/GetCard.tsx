import { FC } from 'react'
import './GetCard.scss'
import Divider from '@/components/ui/Divider/Divider'
const GetCard: FC = () => {
  return (
    <article className='getCard'>
      <h3>How to get a card</h3>
      <div className='getCard_step'>
        <section>
          <div className='getCard_step_num'>
            <div className='getCard_step_num-circle'>
              <span>1</span>
            </div>
            <Divider style='cardDivider' />
          </div>
          <div className='getCard_step_desc'>Fill out an online application - you do not need to visit the bank</div>
        </section>
        <section>
          <div className='getCard_step_num'>
            <div className='getCard_step_num-circle'>
              <span>2</span>
            </div>
            <Divider style='cardDivider' />
          </div>
          <div className='getCard_step_desc'>
            Find out the bank's decision immediately after filling out the application
          </div>
        </section>
        <section>
          <div className='getCard_step_num'>
            <div className='getCard_step_num-circle'>
              <span>3</span>
            </div>
            <Divider style='cardDivider' />
          </div>
          <div className='getCard_step_desc'>
            The bank will deliver the card free of charge, wherever convenient, to your city
          </div>
        </section>
      </div>
    </article>
  )
}

export default GetCard
