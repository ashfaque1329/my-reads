import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'

class BookShelf extends Component {

  static propTypes={
    book:PropTypes.object.isRequired,
    onShelfChange:PropTypes.func.isRequired,
  }

  bookOptions=[
  { key: 'none', value: 'Move To...' },
  { key: 'currentlyReading', value: 'currently Reading' },
  { key: 'wantToRead', value: 'Want to Read' },
  { key: 'read', value: 'Read' },
  { key: 'none', value: 'None' },
  ]


  render(){
    const { book,onShelfChange } = this.props;
    let imageLinks = book ? book.imageLinks : '';
    let bookCoverURL = imageLinks ? imageLinks.thumbnail : '';




    return(
      <li key={ book.id }>
        <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCoverURL})` }}></div>
                <div className="book-shelf-changer">
                  <select value={ book.shelf } onChange={(event) => onShelfChange(book, event.target.value)}>
                  { this.bookOptions.map((e) => {
                      if (e.value==='Move To...'){
                        return <option key={e.value} value={e.key} disabled>{e.value}</option>;
                      }
                      else
                        return <option key={e.value} value={e.key}>{e.value}</option>;
                  })}
                  </select>
                </div>
              </div>
            <div className="book-title">{ book.title }</div>
            <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
        </div>
      </li>
    );
  }



}

export default BookShelf
