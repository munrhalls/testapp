function appendParagraph() {
  var node = document.createElement('div');
 
  var textnode = document.createTextNode('This is my page'); 
    node.appendChild(textnode); 

  var body = document.getElementById('body');
    body.appendChild(node);
}

for (var i = 0; i < 10; i++) {
  appendParagraph();
}