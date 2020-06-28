import React, { useContext } from 'react';
import { BooksContext } from '../../contexts/BooksContext';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Book = styled.div`
  padding: 1em;
  border: 1px solid #ececec;
`

const BookListItem = ({book, index}) => {
  return (
    <Link to={`/book/${index}`}>
      <Book>
        <span>{book.book}</span>
        <span>&nbsp;|&nbsp;</span>
        <span>{book.cards.length} cards</span>
      </Book>
    </Link>
  )
}

const BookList = () => {
  const {books} = useContext(BooksContext);
  
  return (
    <div>
      <header>Books list</header>
      {books.map((book, key) => <BookListItem key={key} index={key} book={book} />)}
    </div>
  )
}

export default BookList;