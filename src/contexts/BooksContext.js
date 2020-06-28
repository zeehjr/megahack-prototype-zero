import React, {createContext, useState, useEffect} from 'react';

const INITIAL_VALUE = {
  books: [],
  updateBooks: (newBooks) => {}
}

export const BooksContext = createContext(INITIAL_VALUE)

const loadBooks = () => {
  const booksString = localStorage.getItem('books')
  const books = booksString == null || booksString === '' ? [] : JSON.parse(booksString);

  return books;
}

export const BooksWrapper = ({children}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(loadBooks())
  }, [])

  const updateBooks = (newBooks) => {
    setBooks(newBooks);
    localStorage.setItem('books', JSON.stringify(newBooks));
  }

  return (
    <BooksContext.Provider value={{books, updateBooks}}>
      {children}
    </BooksContext.Provider>
  )
}