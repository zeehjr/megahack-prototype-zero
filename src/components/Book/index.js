import React, { useState } from 'react'
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5em;
`

const Main = styled.main`
  display: grid;
  grid-template-columns: auto 1fr auto;
`

const Book = ({book}) => {
  const [card, setCard] = useState(0);

  const handleNextCard = () => {
    if (card < book.cards.length -1) {
      setCard(card + 1);
    }
  }

  const handlePreviousCard = () => {
    if (card > 0) {
      setCard(card - 1);
    }
  }

  return (
    <div>
      <Header>
        <h1>{book.book}</h1>
        <h5>Reading {card + 1} of {book.cards.length}</h5>
      </Header>
      <Main>
        <span>
          <button onClick={handlePreviousCard} disabled={card === 0}>&lt;</button>
        </span>
        <p>{book.cards[card].text}</p>
        <span>
          <button onClick={handleNextCard} disabled={card === book.cards.length - 1}>&gt;</button>
        </span>
      </Main>
    </div>
  )
}

export default Book;