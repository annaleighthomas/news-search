import React from 'react';
import ArticleList from '../components/ArticleList';
import { fetchArticles } from '../articles-api';


export default class NewSearch extends React.Component {
  state = {
    search: '',
    loading: true,
    articles: []
  };

  async componentDidMount() {
    // const { articles } = await fetchArticles();
    const response = await fetchArticles();
    const articles = response.articles;
    this.setState({ articles, loading: false });
  }

  render() {
    const { articles, loading } = this.state; // { articles: [], loading: false }
    if (loading) return <h1>...loading</h1>;

    return <ArticleList articles={articles} />;
  }
}
