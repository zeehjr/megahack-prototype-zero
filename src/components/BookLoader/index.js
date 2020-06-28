import React, { useRef, useCallback, useState, useContext } from 'react';
import { BooksContext } from '../../contexts/BooksContext';

const BookLoader = () => {
  const {books, updateBooks} = useContext(BooksContext);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const handleChange = useCallback(() => {
    const file = inputRef.current.files[0];

    setLoading(true);

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onloadend = () => {
      const book = JSON.parse(reader.result);
      
      updateBooks([...books, book]);

      setLoading(false)
    }
  }, [books, updateBooks])

  return (
    <div>
      {
        loading
        ? <span>Carregando...</span>
        : <input type="file" ref={inputRef} onChange={handleChange} />
      }
    </div>
  );
}

export default BookLoader;