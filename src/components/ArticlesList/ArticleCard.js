import React from 'react';

const ArticleCard = ({ article: { title, description, url, urlToImage } }) => {
  return (
    <div className="item">
      <div className="image">
        <img src={urlToImage} alt={title} />
      </div>
      <div className="content">
        <a className="header" href={url} target="_blank" rel="noopener noreferrer">{title}</a>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
