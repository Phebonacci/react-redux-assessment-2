import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  state = { keywords: '' };

  onInputChange = (e) => {
    this.setState({ keywords: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.keywords);
  };

  render() {
    return (
      <div>
        <form
          id="searchBar"
          name="searchBar"
          className="ui form"
          onSubmit={this.onFormSubmit}
          noValidate>
          <div className="field">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                value={this.state.keywords}
                placeholder={this.props.placeholder}
                onChange={this.onInputChange}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    )
  }
};

SearchBar.props = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default SearchBar;
