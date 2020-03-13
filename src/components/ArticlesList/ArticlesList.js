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
      <div className="ui segment">
        <div className="ui small header">Search Results!</div>
        <p>Found {articles.length} article/s</p>
      </div>

      <div className="ui items">
        { articles.map(renderArticle) }
      </div>
    </div>
  );
};

export default ArticlesList;
