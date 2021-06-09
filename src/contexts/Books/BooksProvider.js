import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BooksContext from './BooksContext';

const corsAnywhere = 'https://cors-anywhere-nirav.herokuapp.com/';

const BooksProvider = ({ children }) => {
  const [queryResponse, setQueryResponse] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!queryResponse) return;
    let booksArray = [];

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

    new Promise((resolve, reject) => {
      queryResponse.forEach((v, index, array) => {
        if (v?.isbn) {
          getBook(v?.isbn[0]).then((v) => {
            let newValue = Object.assign({}, v.data.records);
            booksArray.push(newValue);
            if (index === array.length - 1) resolve();
          });
        }
      });
    }).then(() => {
      console.log('done query', booksArray.length);

      if (booksArray.length > 0) {
        setBooks(booksArray);
      }
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
};

export default BooksProvider;
