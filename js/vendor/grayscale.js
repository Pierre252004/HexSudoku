const fs = require('fs');
const data = fs.readFileSync('mood.txt', 'utf8');
console.log(data);

function toggleGrayscale() {
  const body = document.body;
  const logo = document.getElementById('logo');

  body.classList.toggle('grayscale-mode');
  if (body.classList.contains('grayscale-mode')) {
    logo.src = './img/logo-m.png';
    fs.writeFileSync('mood.txt', 'OFF');
    console.log('OFF');
  } else {
    logo.src = './img/logo.png';
    fs.writeFileSync('mood.txt', 'ON');
  }

}
