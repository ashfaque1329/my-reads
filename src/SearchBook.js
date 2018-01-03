import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import BookShelf from './BookShelf'
import * as BooksAPI from './utils/BooksAPI'

class SearchBook extends Component {

  static propTypes={
    books:PropTypes.array.isRequired,
    onShelfChange:PropTypes.func.isRequired,
  }

  state={
    books:[]
  }

  onQueryChange=(query)=>{
    BooksAPI.search(query, 10).then((books) => {
        if(!books || books.error ){
          return this.setState({ books: [] });
        }
        books = books.map(searchedBook => {
          let bookFound = this.props.books.find( (b) => b.id === searchedBook.id);
          if(bookFound) {
            searchedBook.shelf = bookFound.shelf;
          }
          else {
            searchedBook.shelf='none';
          }
          return searchedBook;
      	});
        this.setState({ books })
      });

    }



  render(){
    let { books } = this.state;
	  let { onShelfChange } = this.props;


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"
       		   to={'/'}>Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
      			type="text"
      			placeholder="Search by title or author"
      			onChange={(event) => this.onQueryChange(event.target.value)}
		        />
          </div>
        </div>
        <div className="search-books-results">
		      <ol className="books-grid">
		        {books && books.map((book, index) =>
              <BookShelf
               	key={ book.id }
                book={ book }
                onShelfChange={ onShelfChange }
              />
            )}
		       </ol>
         </div>
       </div>
    );

  }




}


export default SearchBook
