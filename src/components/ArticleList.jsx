import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
  if (!articles) return null;

  const articleElements = articles.map((article) => (
    <li key={article.id}>
      <Article
        {...article} />
    </li>
  ));

  return <ul>{articleElements}</ul>;
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.number
    })
  )
};

export default ArticleList;
