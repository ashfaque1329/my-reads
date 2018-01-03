import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import BookShelf from './BookShelf'


class ListBooks extends Component {

  static propTypes={
    books:PropTypes.array.isRequired,
    onShelfChange:PropTypes.func.isRequired
  }



  render() {

    const { books, onShelfChange } = this.props;

    let currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
    let wantToRead = books.filter(book => book.shelf === 'wantToRead');
    let read = books.filter(book => book.shelf === 'read');





    return (

      <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        { currentlyReading.map((book)=>
                          <BookShelf
    		                     key={ book.id }
    					               book={ book }
    					               shelf={ book.shelf }
					                   onShelfChange={ onShelfChange }
	  			                />
                        )}
                      </ol>
                    </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want To Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        { wantToRead.map((book)=>
                          <BookShelf
    		                     key={ book.id }
    					               book={ book }
    					               shelf={ book.shelf }
					                   onShelfChange={ onShelfChange }
	  			                />
                        )}
                      </ol>
                    </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        { read.map((book)=>
                          <BookShelf
    		                     key={ book.id }
    					               book={ book }
    					               shelf={ book.shelf }
					                   onShelfChange={ onShelfChange }
	  			                />
                        )}
                      </ol>
                    </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
      </div>
    );


  }

}


export default ListBooks;
