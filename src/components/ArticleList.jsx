import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
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
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default ArticleList;
