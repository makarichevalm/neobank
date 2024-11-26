import { FC } from 'react'
import './Map.scss'
import map from '@assets/images/map.png'

const Map: FC = () => {
  return (
    <article className='map'>
      <h3>You can use our services anywhere in the world</h3>
      <figure>
        <figcaption>Withdraw and transfer money online through our application</figcaption>
        <img src={map} alt='mapImage' />
      </figure>
    </article>
  )
}

export default Map
