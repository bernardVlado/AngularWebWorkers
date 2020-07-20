/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  
  let url = data;

  console.log("Loading Data From Url Using Web Worker...");
  fetch(url).then(response => response.json()
            .then(data => {
              // sending data back to component
              postMessage(data);
            })
            .catch(err => console.log(err)));

});
