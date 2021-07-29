import React from 'react';
import ArticleList from '../components/ArticleList';
import Search from '../components/Search';
import { fetchArticles } from '../articles-api';


export default class NewSearch extends React.Component {
  state = {
    search: '',
    loading: true,
    articles: []
  };

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({ articles, loading: false });
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault;
    this.setState({ loading: true });
    const articles = await fetchArticles(this.state.search);
    this.setState({ articles, loading: false });
  }

  render() {
    const { articles, loading, search } = this.state;
    if (loading) return <h1>...loading</h1>;

    return (
      <>
        <Search
          search={search}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}

        />
        <ArticleList articles={articles} />
      </>
    );
  }
}
