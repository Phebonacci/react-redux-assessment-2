import React from 'react';
import PrettyImage from '../PrettyImage';

class ArticleCard extends React.Component {
  state = { imgFailedToLoad: false };

  onImgError = () => {
    this.setState({ imgFailedToLoad: true });
  }

  render() {
    const { article: { title, description, url, urlToImage } } = this.props;
    return (
      <div className="item">
        {!this.state.imgFailedToLoad && <div className="image">
          <PrettyImage srcUrl={urlToImage} onError={this.onImgError} />
        </div>}
        <div className="content">
          <a className="header" href={url} target="_blank" rel="noopener noreferrer">{title}</a>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default ArticleCard;
