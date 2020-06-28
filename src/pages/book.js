import React, { useContext, useMemo, useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { BooksWrapper, BooksContext } from '../contexts/BooksContext';
import Book from '../components/Book';

const Card = styled.div`
  padding: 1em;
  /* margin: .5em; */
  border: 1px solid #dcdcdc;
`;

const BookRender = ({bookId}) => {
  const [book, setBook] = useState(null);
  const {books} = useContext(BooksContext);

  useEffect(() => {
    setBook(books[bookId])
  }, [bookId, books])
  // const book = useMemo(() => books.find(b => b.book === bookId), [bookId, books]);

  return (
    <div>
      {book && <Book book={book} />}
      {!book && <div>Livro não encontrado</div>}
    </div>
  )
}

const BookPage = ({'*': bookId}) => {
  console.log(bookId);

  return (
    <Layout>
      <BooksWrapper>
        <BookRender bookId={bookId} />
      </BooksWrapper>
    </Layout>
  )
}

export default BookPage