import { FC } from 'react'
import './CardDesign.scss'
import Button from '@components/ui/Button/Button'
import image1 from '@assets/images/cardImage1.png'
import image2 from '@assets/images/cardImage2.png'
import image3 from '@assets/images/cardImage3.png'
import image4 from '@assets/images/cardImage4.png'

type TImages = {
  id: number
  src: string
  alt: string
}

let images: Array<TImages> = [
  { id: 1, src: image1, alt: 'image1' },
  { id: 2, src: image2, alt: 'image2' },
  { id: 3, src: image3, alt: 'image3' },
  { id: 4, src: image4, alt: 'image4' },
]
const CardDesign: FC = () => {
  return (
    <article className='design'>
      <section className='design_button'>
        <h1>Choose the design you like and apply for card right now</h1>
        <Button name='Choose the card' />
      </section>
      <section className='design_images'>
        {images.map((img) => {
          return (
            <figure key={img.id}>
              <img src={img.src} alt={img.alt} />
            </figure>
          )
        })}
      </section>
    </article>
  )
}

export default CardDesign
