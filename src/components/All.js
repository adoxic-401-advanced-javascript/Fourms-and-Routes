import React from 'react';
import Characters from './Characters';
import fetchXfile from '../utils/fetch';

export default function All() {
  const [state, setState] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    next();
    back();
    handleClick();
  }, []);


  const handleClick = () => {
    fetchXfile(`http://xfiles-api.herokuapp.com/api/v1/characters?perPage=10&page=${page}`)
      .then(res => {
        setState(res.results);
      });
  };

  const next = () => {
    console.log('clicked');
    setPage(page + 1);
    handleClick();
  };

  const back = () => {
    if(page > 1) {
      console.log('clicked');
      setPage(page - 1);
      handleClick();
    }
  };

  return (
    <>
      <Characters title="Paging" characters={state} />
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  );
}
