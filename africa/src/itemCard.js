import React from 'react';

const itemCard = props => {
  const { name, description, price, location,category } = props.item;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="item-name">
        name: <em>{name}</em>
      </div>
      <div className="item-description">
        description: <strong>{description}</strong>
      </div>
      <div className="item-price">
        price: <strong>{price}</strong>
      </div>
      <div className="item-location">
        location: <strong>{location}</strong>
      </div>
      <div className="item-category">
        category: <strong>{category}</strong>
      </div>
      
      <h3>Actors</h3>

      {items.map(item => (
        <div key={item} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
