var b = 0; 
var a = b * 2;


function appendParagraph() {
  var node = document.createElement('div');
 
  var textnode = document.createTextNode(a); 
    node.appendChild(textnode); 

  var body = document.getElementById('body');
    body.appendChild(node);
}

for (var i = 0; i < 10; i++) {
  appendParagraph();
}
