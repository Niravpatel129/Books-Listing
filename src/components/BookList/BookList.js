import React, { useContext, useState } from 'react';
import BooksContext from '../../contexts/Books/BooksContext';
import Book from '../Book/Book';
import './BookList.scss';

export default function BookList() {
  const [filter, setFilter] = useState('');
  const { setSearchQuery, books } = useContext(BooksContext);

  const renderBooks = () => {
    if (!books) return;

    return Object.entries(books).map(([_, value]) => {
      return Object.entries(value).map(([_, book], index) => {
        return (
          <React.Fragment key={index}>
            <Book
              book={{
                title: book?.data?.title,
                cover: book?.data?.cover?.large,
                authors: book?.data?.authors?.map((author) => author.name)?.join(', '),
                publishDate: book?.data?.publish_date,
              }}
            />
          </React.Fragment>
        );
      });
    });
  };

  return (
    <div className="BookList">
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            console.log('query');
            setSearchQuery(filter);
          }
        }}
        className="filteringInput"
        id="name-input"
        placeholder="Search by name"
      />
      {/* <pre>{JSON.stringify(books)}</pre> */}
      {renderBooks()}
    </div>
  );
}
