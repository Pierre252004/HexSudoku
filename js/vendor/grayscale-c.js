function toggleGrayscale() {
  const page = window.location.href;
  let newhref;
  let first, last;
  if (page.indexOf("/grayscale/")==-1) {
    first= page.indexOf("/colorscale/");
    last = first+12;
    newhref = page.slice(0,first)+'/grayscale/'+page.slice(last,page.length);
  } else {
    first= page.indexOf("/grayscale/");
    last = first+11;
    newhref = page.slice(0,first)+'/colorscale/'+page.slice(last,page.length);
  }
  window.location.href = newhref;
}
