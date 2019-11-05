import React from 'react';
import PropTypes from 'prop-types';

const Characters = ({ characters }) => {

  return (
    <>
      {characters.map(({ name, status, gender, occupation, rank, image, description }) => (
        <div key={name}>
          {name && <header><h3>{name}</h3></header>}
          {image && <figure>
            <img src={image} alt={name} />
          </figure>}
          {name && status && <p>{name} is {status}</p>}
          {gender && <p>{gender}</p>}
          {occupation && <p>{occupation}</p>}
          {rank && <p>{rank}</p>}
          {description && <p>{description}</p>}
        </div>
      ))}
    </>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    gender: PropTypes.string,
    occupation: PropTypes.string,
    rank: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string
  })).isRequired
};

export default Characters;
