import React from 'react';
import Characters from './Characters';
import fetchXfile from '../utils/fetch';

export default function Random() {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    handleClick();
  }, []);

  const handleClick = () => {
    fetchXfile(`http://xfiles-api.herokuapp.com/api/v1/characters?perPage=1&page=${Math.floor(Math.random() * 462)}`)
      .then(res => {
        setState(res.results);
      });
  };

  return (
    <>
      <Characters title="random" characters={state} />
      <button onClick={handleClick}>Another Random?</button>
    </>
  );
}
