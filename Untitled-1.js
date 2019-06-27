let pad = document.getElementById('pad');

function handleMouseDown(e) {
  var container = document.createElement('div');
    container.style.background = "#000";
    container.style.borderRadius = "100%;"

    container.style.width = "3px";
    container.style.height = "3px";
    container.style.padding = "0";
    
    container.style.position = 'absolute';
    container.style.top = e.clientY + 'px';
    container.style.left = e.clientX + 'px';
    // const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    //   cir1.setAttribute("cx", "0");
    //   cir1.setAttribute("cy", "0");
    //   cir1.setAttribute("r", "1");
    //   cir1.setAttribute("fill", "black");
    // container.appendChild(container);

  pad.appendChild(container);
}
pad.addEventListener('mousedown', handleMouseDown, true);