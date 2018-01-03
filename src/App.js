import React,{ Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'

class BooksApp extends Component {
  state = {
     books:[],

    //showSearchPage: false
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({ books })
    })
  }

  changeBookShelf=(selectedBook,shelf)=>{
    BooksAPI.update(selectedBook,shelf).then(()=>{
      selectedBook.shelf=shelf
      this.setState((state)=>({
        books: state.books.filter((b)=>b.id !== selectedBook.id).concat(selectedBook)
      }))
    });
  }


  render() {
    return (
      <div className='app'>
        <Route exact path="/" render={()=>(
          <ListBooks
            books={ this.state.books }
            onShelfChange={ this.changeBookShelf }
          />
        )}/>
        <Route path="/search" render={({ history })=>(
          <SearchBook
            books={ this.state.books }
            onShelfChange={(book, shelf) => {
              this.changeBookShelf(book, shelf)
              history.push('/')}}
          />
        )}/>
      </div>

    );
  }
}

export default BooksApp
