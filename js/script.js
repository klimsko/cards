$(function() {

function addScript(src){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.async = false;
  document.body.appendChild(script);
}

addScript('js/main.js');
addScript('js/card.js');

})