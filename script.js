const cursor = document.querySelector(".cursor");

function cursorMove(e) {
  // console.count(e);
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px"
  );
}

document.addEventListener("mousemove", cursorMove);
