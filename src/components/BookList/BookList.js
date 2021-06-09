import React, { useContext, useState } from 'react';
import BooksContext from '../../contexts/Books/BooksContext';
import Book from '../Book/Book';
import './BookList.scss';

export default function BookList() {
  const [filter, setFilter] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
  const { setSearchQuery, books, loading } = useContext(BooksContext);

  const renderBooks = () => {
    if (!books) return;

    return Object.entries(books).map(([_, bookObj]) => {
      return Object.entries(bookObj)
        .filter((book) => {
          if (!titleFilter) return book;
          return book[1]?.data?.title?.toLowerCase()?.includes(titleFilter?.toLowerCase()) && book;
        })
        .map(([_, book], index) => {
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
      <div className="bookInputContainer">
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              setSearchQuery(filter);
            }
          }}
          className="filteringInput"
          id="name-input"
          placeholder="Enter a book"
        ></input>
        <img
          className="bookInputEnter"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Antu_arrow-right.svg/1200px-Antu_arrow-right.svg.png"
          alt="handle book search"
          onClick={() => setSearchQuery(filter)}
        />
      </div>

      {books.length > 0 && (
        <input
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
          className="filteringInput"
          id="name-input"
          placeholder="Filter by title"
        />
      )}
      {loading && (
        <h1>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </h1>
      )}
      {renderBooks()}
    </div>
  );
}
