function toggleGrayscale() {
  const page = window.location.href;
  let newhref;
  let first, last;
  if (-1 === page.indexOf("index.html")) {
    first= page.indexOf("index-m");
    newhref = page.slice(0,first)+'index.html';
  } else {
    first= page.indexOf("index");
    newhref = page.slice(0,first)+'index-m.html';
  }
  window.location.href = newhref;
}
