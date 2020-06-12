const request = require('request');
const getStatus = document.querySelector('#getStatus');
let status = document.querySelectorAll(".status");

function updateStatus() {
  request('https://www.githubstatus.com/', { json: true}, (err, res, body) => {
    let result = body.components;
  })
}
updateStatus();

getStatus.addEventListener("click", ()=>{
  updateStatus();
});
