import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BooksContext from './BooksContext';

const corsAnywhere = 'https://cors-anywhere-nirav.herokuapp.com/';

export default function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [queryResponse, setQueryResponse] = useState();
  const [searchQuery, setSearchQuery] = useState('');

  const getBook = async (isbn) => {
    try {
      const booksResponse = await axios.get(
        `${corsAnywhere}http://openlibrary.org/api/volumes/brief/isbn/${isbn}.json`,
      );

      return booksResponse;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!queryResponse) return;
    let booksArray = [];

    queryResponse.forEach((v) => {
      if (v?.isbn) {
        getBook(v?.isbn[0]).then((v) => {
          let newValue = Object.assign({}, v.data.records);
          booksArray.push(newValue);
        });
      }
      setBooks(booksArray);
    });
  }, [queryResponse]);

  useEffect(() => {
    if (!searchQuery) return;

    axios.get(`http://openlibrary.org/search.json?q=${searchQuery}`).then((response) => {
      setQueryResponse(response?.data?.docs);
    });
  }, [searchQuery]);

  return (
    <BooksContext.Provider value={{ books, setSearchQuery }}>{children}</BooksContext.Provider>
  );
}
