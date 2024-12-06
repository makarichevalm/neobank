import { FC } from 'react'
import './NewsCard.scss'

type TCard = {
  urlToImage: string
  title: string
  url: string
  description: string
}

const NewsCard: FC<TCard> = ({ urlToImage, title, url, description }) => {
  return (
    <a className='newsCard' href={url} target='_blank'>
      <div>
        <img className='newsCard_img' src={urlToImage} />
        <h4 className='newsCard_title'>{title}</h4>
      </div>
      <p className='newsCard_desc'>{description}</p>
    </a>
  )
}

export default NewsCard
