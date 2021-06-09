import React from 'react';
import './Book.scss';

export default function Book({ book }) {
  const { title, cover, authors, publishDate } = book;

  return (
    <div className="Book">
      <div className="imageContainer">
        <img
          src={
            cover ||
            'https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png'
          }
          alt="book cover"
        />
      </div>
      <div>
        <div className="field firstName">{title}</div>
        <div className="field">Author: {authors}</div>
        <div className="field">publish date: {publishDate}</div>
      </div>
    </div>
  );
}
