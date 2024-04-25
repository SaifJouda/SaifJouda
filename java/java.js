function updateCursorPosition(event) {
  const cursorLight = document.querySelector(".cursor-light");
  const posX = event.clientX - cursorLight.offsetWidth / 2;
  const posY = event.clientY - cursorLight.offsetHeight / 2;
  
  cursorLight.style.transform = `translate(${posX}px, ${posY}px)`;
}
window.addEventListener("mousemove", updateCursorPosition);
//document.body.addEventListener("scroll", updateCursorPosition);


function createTechnology(iconSrc, labelText) {
  var technologyDiv = document.createElement('div');
  technologyDiv.classList.add('technology');


  //var roundDiv = document.createElement('div');
  //roundDiv.classList.add('round');
  
  var iconDiv = document.createElement('div');
  iconDiv.classList.add('icon');
  var iconImg = document.createElement('img');
  iconImg.src = iconSrc; // Set the source of the image
  iconImg.alt = labelText; // Set the alt text for accessibility
  iconDiv.appendChild(iconImg);
  
  var labelDiv = document.createElement('div');
  labelDiv.classList.add('label');
  labelDiv.textContent = labelText;
  
  technologyDiv.appendChild(iconDiv);
  technologyDiv.appendChild(labelDiv);
  
  //roundDiv.appendChild(technologyDiv);

  document.querySelector('.technology-section').appendChild(technologyDiv);
}

// Usage example:
createTechnology('images\icons\c-sharp.png', 'Technology 1');
createTechnology('images\icons\c-sharp.png', 'Technology 2');
