import React from 'react';
import ArticleCard from './ArticleCard';
import './ArticlesList.css';

const ArticlesList = ({ articles = [] }) => {
  const renderArticle = (article) => {
    return (
      <ArticleCard
        key={article.id}
        article={article}
      />
    );
  };

  return (
    <div className="articles-list">
      <div className="ui items">
        { articles.map(renderArticle) }
      </div>
    </div>
  );
};

export default ArticlesList;
