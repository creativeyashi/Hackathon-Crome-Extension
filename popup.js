///////////////
////stretch////
///////////////

document.getElementById('dbButton').addEventListener('click', (e) => {
  console.log('dbButton was pressed');
  fetch('http://localhost:3001/person')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    })
    .catch(err => console.error(err)); 
});
