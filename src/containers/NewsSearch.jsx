import React from 'react';
import ArticleList from '../components/ArticleList';
import { fetchArticles } from '../articles-api';


export default class NewSearch extends React.Component {
  state = {
    search: '',
    loading: true,
    articles: ''
  };

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({ articles, loading: false });
  }

  render() {
    const { articles, loading } = this.state;
    if (loading) return <h1>...loading</h1>;

    return <ArticleList articles={articles} />;
  }
}
