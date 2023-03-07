import React from 'react';
import './Article.css';

const Article = ( { imgUrl, date, title } ) => {
  return (
    <div className='blog-cont_article'>
      <div className='blog-cont_article-img'>
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className='blog-cont_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Fill Article</p>
      </div>
    </div>
  )
}

export default Article