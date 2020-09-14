

function dragElement(elmnt,off) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let border_prev;
    let container = document.getElementById("container");
    
    // read the last coor
    let store = `${elmnt.id}-coor`
    let [e1,e2] = JSON.parse(window.localStorage.getItem(store)) || [10,off]

    elmnt.style.top  = e1 + "px";
    elmnt.style.left = e2 + "px";

  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    // bring elmnt on top
    elmnt.parentNode.appendChild(elmnt);
    border_prev        = elmnt.style.border
    elmnt.style.border = "2px solid green";

    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
     
      // bounds
    let etop  = (elmnt.offsetTop  - pos2);
    let eleft = elmnt.offsetLeft - pos1
    let bounx  = container.offsetWidth-elmnt.offsetWidth;
    let bouny  = container.offsetHeight-elmnt.offsetHeight;

    if(etop < 0 || eleft < 0 || (bouny-etop) < 0 || (bounx-eleft)<0  ) return;
    
    // set the element's new position:
    elmnt.style.top    =  (elmnt.offsetTop  - pos2) + "px";
    elmnt.style.left   =  (elmnt.offsetLeft - pos1) + "px";
    // store the last coor  
    let coor = [(elmnt.offsetTop  - pos2),(elmnt.offsetLeft - pos1)]   
    window.localStorage.setItem(store,JSON.stringify(coor))
  }

    
  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.border = border_prev;
  
  }
}

function resizeWindow(e) {
  console.log("resizing", e);

  e = e || window.event;
  e.preventDefault();

  let div1 = document.getElementById("mydiv1");
  let div2 = document.getElementById("mydiv2");

  elementBound(e, div1);
  elementBound(e, div2);

  function elementBound(e, elmnt) {
    let fix = false;
    let store = `${elmnt.id}-coor`;
    let etop = elmnt.offsetTop;
    let eleft = elmnt.offsetLeft;
    let bounx = container.offsetWidth - elmnt.offsetWidth;
    let bouny = container.offsetHeight - elmnt.offsetHeight;
    let positionInfo = elmnt.getBoundingClientRect();
    let coor = [elmnt.offsetTop, elmnt.offsetLeft]


    if ((bouny - etop) < 0) {
      fix = true;
      coor[0] = container.offsetHeight - positionInfo.height
      elmnt.style.top = (container.offsetHeight - positionInfo.height) + "px";
    }
    if ((bounx - eleft) < 0) {
      fix = true;
      coor[1] = container.offsetWidth - positionInfo.width
      elmnt.style.left = (container.offsetWidth - positionInfo.width) + "px";
    }
    if (etop < 0) {
      fix = true;
      coor[0] = 0
      elmnt.style.top = "0px";
    }
    if (eleft < 0) {
      fix = true;
      coor[1] = 0
      elmnt.style.left = "0px";
    }

    if (fix) {
      window.localStorage.setItem(store, JSON.stringify(coor))
    }
    

  }

}

//Make the DIV element draggagle:
let div1 = document.getElementById("mydiv1");
let div2 = document.getElementById("mydiv2");
let cont = document.getElementById("container");

dragElement(document.getElementById("mydiv1"),10);
dragElement(document.getElementById("mydiv2"),170);

window.addEventListener('resize', resizeWindow);
