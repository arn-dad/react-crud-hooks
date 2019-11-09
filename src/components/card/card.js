import React from 'react';
import './card.css';

const Card = props => {
  const { name, location, description, id } = props.data;
  return (
    <div className="card">
    <div className="content">
      <div className="header">
      <b>Name:</b>  {name}
      </div>
      <div className="meta">
       <b>Location:</b>{location}
      </div>
      <div className="description">
      <b>Description:</b> {description}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <button onClick={props.onUpdate.bind(null, id)} className="ui yellow basic button">Update</button>
        <button onClick={props.onRemove.bind(null, id)} className="ui red basic button">Remove</button>
      </div>
    </div>
    </div>
  );
};


export default Card;