import React from 'react'
import './NewsSection.css'
import { Link } from 'react-router-dom'
import leftCircle from '../../assets/images/news-left-circle.svg'
import middleCircle from '../../assets/images/news-middle-circle.svg'
import news from '../../assets/images/news.png'

const NewsSection = () => {
  return (
    <section className="news-section">

        <img src={leftCircle} alt="circle" className='news-left-circle' />

        <div className="container news-content">
            <div className="row">
                <div className="col-md-6">
                    <div className="news-card">
                        <h2>Latest News</h2>
                        <p>
                            Stay informed with the latest updates and news in the shooting world.
                        </p>
                        <Link to={'#'} className='default-btn'>Read More</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="news-img-container">
                        <img src={middleCircle} alt="Circle" className='news-middle-circle' />
                        <img src={news} alt="News" className='news-img' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsSection