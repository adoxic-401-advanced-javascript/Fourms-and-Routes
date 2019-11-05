import React from 'react';
import Characters from './Characters';
import fetchXfile from '../utils/fetch';

export default function Categories(category) {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    handleClick();
  }, []);

  const handleClick = () => {
    if(category.category === 'Main characters' || category.category === 'Monster of the Week' || category.category === 'Syndicate' || category.category === 'Informants') {
      fetchXfile(`https://xfiles-api.herokuapp.com/api/v1/characters?category=${category.category}`)
        .then(res => {
          setState(res.results);
        });

    } else {
      fetchXfile(`https://xfiles-api.herokuapp.com/api/v1/characters/${category.category}`)
        .then(res => {
          setState(res);
        });
    }
  };

  return (
    <>
      <h2>{category.category}</h2>
      <Characters title={state} characters={state} />
    </>
  );
}
