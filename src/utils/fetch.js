function getXfiles(url,) {
  return fetch(url, {
    method: 'GET', 
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  })
    .then(response => {
      return response.json();
    }); 
}
export default getXfiles;
