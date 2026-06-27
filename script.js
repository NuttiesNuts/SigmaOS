
// Date and Time
var uhDateIdk = new Date();

document.querySelector("#time").innerHTML =
    uhDateIdk.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    }) +
    " " +
    uhDateIdk.toLocaleDateString();

setInterval(function () {
    const now = new Date();

    document.querySelector("#time").innerHTML =
        now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        }) +
        " " +
        now.toLocaleDateString();
}, 1000);



// Make the DIV element draggable:
dragElement(document.getElementById("welcome"))
dragElement(document.getElementById("aboutMe"))

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    
    element.onmousedown = startDragging;
  }
  

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var biggestIndex = 1;

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
}

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block";
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
}

function initializeWindow(elementName) {
  var screen = document.querySelector("#" + elementName)
  addWindowTapHandling(screen)
  dragElement(document.getElementById(elementName))
}

initializeWindow("welcome")
initializeWindow("aboutMe")


var welcomeScreen = document.querySelector("#welcome")
var welcomeScreenClose = document.querySelector("#close")
var welcomeScreenOpen = document.querySelector("#welcomeApp")


welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

var aboutMeScreen = document.querySelector("#aboutMe")
var aboutMeScreenClose = document.querySelector("#aclose")
var aboutMeScreenOpen = document.querySelector("#aboutMeApp")
aboutMeScreen.style.display = "none"; //start closed

aboutMeScreenClose.addEventListener("click", function() {
  closeWindow(aboutMeScreen);
});

aboutMeScreenOpen.addEventListener("click", function() {
  openWindow(aboutMeScreen);
});

document.querySelector("#aboutMeButton").addEventListener("click", function() {
  openWindow(aboutMeScreen);
})