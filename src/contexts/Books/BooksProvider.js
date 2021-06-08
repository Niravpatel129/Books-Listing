import axios from 'axios';
import React, { useEffect } from 'react';
import BooksContext from './BooksContext';

export default function BooksProvider({ children }) {
  //   const { fetchData } = useAxios('/search.json?q=Gatsby');
  //   const { fetchData } = useAxios();
  //   const { fetchData } = useAxios();

  const getBook = async (isbn) => {
    // let book = await fetchData(`/api/volumes/brief/isbn/${isbn}.json`);
    try {
      const book = await axios.get(
        'http://openlibrary.org/api/volumes/brief/isbn/9781741757309.json',
      );
      console.log(book);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook('9781741757309');
  }, []);

  //   useEffect(() => {
  //     response?.docs.forEach((v) => {
  //       if (v?.isbn) {
  //         getBook(v?.isbn[0]);
  //       }
  //     });
  //   }, [response]);

  return <BooksContext.Provider value={{}}>{children}</BooksContext.Provider>;
}
