import React from "react";

const BookPreview = ({ imgUrl, title }) => {
  return (
    <div>
      <img src={imgUrl} alt={title} />
      <div>
        <h3>{title}</h3>
        <a href="#">Go somewhere</a>
      </div>
    </div>
  );
};

export default BookPreview;
