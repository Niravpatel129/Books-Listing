import React, { useState } from 'react';

export default function Book({ book }) {
  const [listExpanded, setListExpanded] = useState(false);

  const { title, cover, authors, publishDate } = book;

  return (
    <div className="Book">
      <div className="expandIcon expand-btn" onClick={() => setListExpanded(!listExpanded)}>
        {listExpanded ? '-' : '+'}
      </div>
      <div className="imageContainer">
        <img src={cover} alt="student" />
      </div>
      <div>
        <div className="field firstName">{title}</div>
        <div className="field">Email: {title}</div>
        <div className="field">Company: {title}</div>
        <div className="field">Skill: {title}</div>

        <div
          className="expandedList"
          style={{ height: listExpanded ? 'auto' : 0, overflow: listExpanded ? 'auto' : 'hidden' }}
        ></div>
      </div>
    </div>
  );
}
