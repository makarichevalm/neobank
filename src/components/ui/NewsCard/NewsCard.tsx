import { FC } from 'react'
import './NewsCard.scss'
import { TNewsItem } from '../../../types/index.ts'

const NewsCard: FC<TNewsItem> = ({ urlToImage, title, url, description }) => {
  return (
    <a className='newsCard' href={url} target='_blank'>
      <div>
        <img className='newsCard_img' src={urlToImage || ''} />
        <h4 className='newsCard_title'>{title || 'title of the news'}</h4>
      </div>
      <p className='newsCard_desc'>{description || 'no description'}</p>
    </a>
  )
}

export default NewsCard
