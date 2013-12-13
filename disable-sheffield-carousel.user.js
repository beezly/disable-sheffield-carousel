// ==UserScript==

function addCss(cssString) { 
  var head = document.getElementsByTagName('head')[0]; 
  if (!head) return; 
  var newCss = document.createElement('style'); 
  newCss.type = "text/css"; 
  newCss.innerHTML = cssString; 
  head.appendChild(newCss); 
} 

addCss ('div#carousel { display: none; }');
