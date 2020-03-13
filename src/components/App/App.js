import React from 'react';
import Dropdown from '../Dropdown';
import SearchBar from '../SearchBar';
import ArticleList from '../ArticlesList/ArticlesList';

import countryOptions from '../../constants/countryOptions';
import discoveryOptions from '../../constants/discoveryOptions';

import * as newsService from '../../services/newsService';

import './App.css';

class App extends React.Component {
  state = { searchResults: [], countryFilter: '', discoveryFilter: 'top', isSearching: false };

  onSearchSubmit = async (keywords) => {
    this.setState({ ...this.state, isSearching: true });
    const { countryFilter, discoveryFilter } = this.state;
    const { data } = await (discoveryFilter === 'top' ?
      newsService.searchTopHeadlines(keywords, countryFilter) :
      newsService.searchEverything(keywords));
    const articles = data.articles.map(a => ({ ...a, id: a.url }));
    this.setState({ ...this.state, searchResults: articles, isSearching: false });
  };

  onFilterSelect = (filterKey) => (value) => {
    this.setState({ ...this.state, [filterKey]: value });
  }

  render() {
    return (
      <div className="app">
        <h1 className="ui center aligned header">Phebe News App</h1>

        <div className="ui secondary menu">
          <div className="item">
            <Dropdown
              id="countryFilter"
              value={this.state.countryFilter}
              options={countryOptions}
              placeholder="Select a country"
              onSelect={this.onFilterSelect('countryFilter')}
            />
          </div>
          <div className="item">
            <Dropdown
              id="discoveryFilter"
              value={this.state.discoveryFilter}
              options={discoveryOptions}
              onSelect={this.onFilterSelect('discoveryFilter')}
            />
          </div>
          <div className="right menu">
            <div className="item">
              <SearchBar onSubmit={this.onSearchSubmit} placeholder="Search article..." />
            </div>
          </div>
        </div>

        <div className="ui segment">
          <div className={`ui inverted dimmer ${this.state.isSearching ? 'active' : ''}`}>
            <div className="ui text loader">Searching</div>
          </div>
          <ArticleList articles={this.state.searchResults} />
        </div>
      </div>
    )
  }
}

export default App;
