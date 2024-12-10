import React from 'react';

export default function NewsComp({ news }) {

  return (
    <div class="news-main">

      {news.map((item, index) => {
        return (
          <div class="news-card-content">
            <img
              src={item.urlToImage}
              alt="News Image"
              class="news-card-image"
            ></img>
            <h3 class="news-card-title">{item.title}</h3>
            <p class="news-card-description">{item.description}</p>
            <div class="news-card-footer">
              <span class="news-card-author">{item.author}</span>
              <span class="news-card-date">{item.publishedAt}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
