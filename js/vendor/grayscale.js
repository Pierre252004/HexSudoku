function toggleGrayscale() {
  const body = document.body;
  const logo = document.getElementById('logo');

  body.classList.toggle('grayscale-mode');
  logo.src = body.classList.contains('grayscale-mode') ? './img/logo-m.png' : './img/logo.png';
  window.location.href = "./index_m.html"; // ⬅️ Change to your desired page

}
