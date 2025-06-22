function toggleGrayscale() {
  const page = window.location.href;
  let newhref;
  let first, last;
  if (-1 === page.indexOf("index-m.html")) {
    newhref = './index-m.html';
  }
  else {
    newhref = './';
  }
  window.location.href = newhref;
}
