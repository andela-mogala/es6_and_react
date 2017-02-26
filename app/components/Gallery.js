import React from 'react'

class Gallery extends React.Component {
  render() {
    return (
      <div>
        <h2>Gallery Component</h2>
        {
          this.props.items.map((item, index) => {
            let {title, imageLinks, infoLink} = item.volumeInfo;
            return (
              <a key={index} className="book" href={infoLink} target="_blank">
                <img
                  className="book-img"
                  src={imageLinks !== undefined ? imageLinks.thumbnail : ''}
                  alt="Book Image" />
                <h4 className="book-text">{title}</h4>
              </a>
            );
          })
        }
      </div>
    );
  }
}

export default Gallery;