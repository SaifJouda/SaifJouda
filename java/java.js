function updateCursorPosition(event) {
  const cursorLight = document.querySelector(".cursor-light");
  const posX = event.clientX - cursorLight.offsetWidth / 2;
  const posY = event.clientY - cursorLight.offsetHeight / 2;
  
  cursorLight.style.transform = `translate(${posX}px, ${posY}px)`;
}
window.addEventListener("mousemove", updateCursorPosition);
//document.body.addEventListener("scroll", updateCursorPosition);


