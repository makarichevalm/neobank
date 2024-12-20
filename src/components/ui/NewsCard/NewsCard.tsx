import { FC } from 'react'
import './NewsCard.scss'
import { TNewsItem } from '../../../types/index.ts'
import defaultImage from '@assets/images/business.jpg'

const NewsCard: FC<TNewsItem> = ({ urlToImage, title, url, description }) => {
  return (
    <a className='newsCard' href={url} target='_blank'>
      <div>
        <img className='newsCard_img' src={urlToImage || defaultImage} />
        <h4 className='newsCard_title'>{title || ''}</h4>
      </div>
      <p className='newsCard_desc'>{description || ''}</p>
    </a>
  )
}

export default NewsCard
