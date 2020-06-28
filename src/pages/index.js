import React from 'react'
import BookList from '../components/BookList'
import BookLoader from '../components/BookLoader'
import { BooksWrapper } from '../contexts/BooksContext'
import Layout from '../components/layout'

const BooksPage = () => {
  return (
    <Layout>
      <BooksWrapper>
        <BookList />
        <BookLoader />
      </BooksWrapper>
    </Layout>
  )
}

export default BooksPage