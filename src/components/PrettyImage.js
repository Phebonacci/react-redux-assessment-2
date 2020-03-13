import React from 'react';
import PropTypes from 'prop-types';

class PrettyImage extends React.Component {

  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    const { srcUrl, onError } = this.props;
    this.imageRef.current.onerror = onError;
    this.imageRef.current.src = srcUrl;
  }

  render() {
    return (
      <img
        alt='Broken img'
        ref={this.imageRef}
      />
    );
  }
};

PrettyImage.props = {
  srcUrl: PropTypes.string.isRequired,
  onError: PropTypes.func,
};

export default PrettyImage;
