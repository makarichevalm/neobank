import { FC } from 'react'
import './Features.scss'
import personImage from '@assets/images/personImage.png'
import checkbox from '@assets/icons/checkbox.svg'

const Features: FC = () => {
  return (
    <article className='features'>
      <figure className='features_img'>
        <img src={personImage} alt='PersonImage' />
      </figure>
      <section className='features_desc'>
        <h2>We Provide Many Features You Can Use</h2>
        <p>You can explore the features that we provide with fun and have their own functions each feature</p>
        <ul>
          <li>
            <img src={checkbox} alt='point' />
            <span>Powerfull online protection.</span>
          </li>
          <li>
            <img src={checkbox} alt='point' />
            <span>Cashback without borders.</span>
          </li>
          <li>
            <img src={checkbox} alt='point' />
            <span>Personal design</span>
          </li>
          <li>
            <img src={checkbox} alt='point' />
            <span>Work anywhere in the world</span>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default Features
