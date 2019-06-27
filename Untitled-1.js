let pad = document.getElementById('pad');

function handleMouseDown(e) {
  var container = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    container.setAttribute('display', 'block');
    container.setAttribute("width", "100");
    container.setAttribute("height", "100");

    const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      cir1.setAttribute("cx", "80");
      cir1.setAttribute("cy", "80");
      cir1.setAttribute("r", "30");
      cir1.setAttribute("fill", "black");
    container.appendChild(cir1);

  pad.appendChild(container);
}
pad.addEventListener('mousedown', handleMouseDown, true);