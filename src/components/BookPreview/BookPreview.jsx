import React from "react";
import "./BookPreview.scss";

const BookPreview = ({ imgUrl, title }) => {
  console.log(imgUrl);
  return (
    <div>
      <div className="BookPreview-thumb">
        {imgUrl && <img src={imgUrl} alt={title} />}
      </div>
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default BookPreview;
