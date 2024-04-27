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
  iconDiv.classList.add('tech-icon');
  var iconImg = document.createElement('img');
  iconImg.src = 'images/icons/'+iconSrc; // Set the source of the image
  iconImg.alt = labelText; // Set the alt text for accessibility
  iconDiv.appendChild(iconImg);
  
  var labelDiv = document.createElement('div');
  labelDiv.classList.add('tech-label');
  labelDiv.textContent = labelText;
  
  technologyDiv.appendChild(iconDiv);
  technologyDiv.appendChild(labelDiv);
  
  //roundDiv.appendChild(technologyDiv);

  document.querySelector('.technology-section').appendChild(technologyDiv);
}



function createBlogItem(blogImg, blogTitle, blogText) {
  var blogDiv = document.createElement('div');
  blogDiv.classList.add('blog-item');

  var image = document.createElement('img');
  image.classList.add('blog-image');
  image.src = 'images/blog/'+blogImg;
  image.alt = blogTitle;

  var arrow = document.createElement('img');
  arrow.classList.add('arrow');
  arrow.src = 'images/icons/arrow.png';
  arrow.alt = 'icon';

  var blogContent = document.createElement('div');
  blogContent.classList.add('blog-content');

  var title = document.createElement('h3');
  title.textContent = blogTitle;

  var description = document.createElement('p');
  description.textContent = blogText;



  


  blogContent.appendChild(title);
  blogContent.appendChild(description);
  

  blogDiv.appendChild(image);
  blogDiv.appendChild(blogContent);
  blogDiv.appendChild(arrow);

  document.querySelector('.blogs-section').appendChild(blogDiv);
}
