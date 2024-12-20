import { FC, useRef, useState, useEffect } from 'react'
import './News.scss'
import NewsCard from '../../ui/NewsCard/NewsCard'
import { TNewsItem } from '../../../types'

type TNews = {
  newsData: TNewsItem[] | string
}

const News: FC<TNews> = ({ newsData }) => {
  const [step, setStep] = useState(0)
  const [isDisabledPrevBtn, setDisabledPrevBtn] = useState(true)
  const [isDisabledNextBtn, setDisabledNextBtn] = useState(false)
  const sliderRef = useRef(null)
  const prevBtnRef = useRef(null)
  const nextBtnRef = useRef(null)
  const getStep = (slider: HTMLElement | null, countElem: number) => {
    if (!slider) return
    return slider.scrollWidth / countElem
  }
  const handleStep = () => {
    const sliderStep = getStep(sliderRef.current, newsData.length)
    if (sliderStep) {
      setStep(sliderStep)
    }
  }
  const nextScroll = (slider: HTMLElement | null, step: number) => {
    slider?.scrollBy(step, 0)
  }

  const prevScroll = (slider: HTMLElement | null, step: number) => {
    slider?.scrollBy(-1 * step, 0)
  }
  const scroll = (
    slider: HTMLElement | null,
    prevBtn: HTMLElement | null,
    nextBtn: HTMLElement | null,
    step: number,
  ) => {
    if (slider && prevBtn && nextBtn) {
      if (slider.scrollLeft === 0) {
        prevBtn.removeEventListener('click', () => prevScroll(slider, step))
        setDisabledPrevBtn(true)
      } else {
        prevBtn.addEventListener('click', () => prevScroll(slider, step))
        setDisabledPrevBtn(false)
      }
      if (Math.round(slider.scrollLeft) === slider.scrollWidth - slider.clientWidth) {
        nextBtn.removeEventListener('click', () => nextScroll(slider, step))
        setDisabledNextBtn(true)
      } else {
        nextBtn.addEventListener('click', () => nextScroll(slider, step))
        setDisabledNextBtn(false)
      }
    }
  }
  useEffect(() => {
    handleStep()
  }, [newsData])
  return (
    <section className='news'>
      <h3>Current news from the world of finance</h3>
      <p className='news_p'>
        We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.
      </p>
      <article className='news_slider' id='slider'>
        <div
          className='slider_content'
          ref={sliderRef}
          onScroll={() => scroll(sliderRef.current, prevBtnRef.current, nextBtnRef.current, step)}
        >
          {typeof newsData === 'string' && <p className='slider_content-message'>{newsData}</p>}
          {newsData.length === 0 && <p className='slider_content-message'>Loading news...</p>}
          {Array.isArray(newsData) &&
            newsData.map((newsInfo, index) => (
              <section className='cardContainer' key={index}>
                <NewsCard
                  urlToImage={newsInfo.urlToImage}
                  title={newsInfo.title}
                  url={newsInfo.url}
                  description={newsInfo.description}
                />
              </section>
            ))}
        </div>
      </article>
      {typeof newsData !== 'string' && (
        <div className='news_nav'>
          <button
            className='news_nav-prev'
            id='btn_prev'
            disabled={isDisabledPrevBtn}
            ref={prevBtnRef}
            onClick={() => prevScroll(sliderRef.current, step)}
          ></button>
          <button
            className='news_nav-next'
            id='btn_next'
            disabled={isDisabledNextBtn}
            ref={nextBtnRef}
            onClick={() => nextScroll(sliderRef.current, step)}
          ></button>
        </div>
      )}
    </section>
  )
}

export default News
