import React, { useState } from "react";

function ListingCard({ id, image, description, location, onDeleteListing }) {

  const [star, setStar] = useState(false)

  function toggleStar() {
    setStar(!star)
  }

  function handleDelete() {
    console.log(id)
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(()=>onDeleteListing(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {star ? (
          <button onClick={toggleStar} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleStar} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
