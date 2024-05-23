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

  technologyDiv.setAttribute("data-tilt", "");
  technologyDiv.setAttribute("data-tilt-scale", "1.2");
  technologyDiv.setAttribute("data-tilt-glare", "");
  technologyDiv.setAttribute("data-tilt-max-glare", "0.8");
  technologyDiv.setAttribute("data-tilt-reverse", "true");

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

  blogDiv.setAttribute("data-tilt", "");
  blogDiv.setAttribute("data-tilt-max", "7");
  blogDiv.setAttribute("data-tilt-scale", "1");
  blogDiv.setAttribute("data-tilt-glare", "");
  blogDiv.setAttribute("data-tilt-max-glare", "0.4");
  blogDiv.setAttribute("data-tilt-reverse", "true");

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
  //blogDiv.appendChild(arrow);

  document.querySelector('.blogs-section').appendChild(blogDiv);
}

function createProjectItem(img, projTitle, text, tech)
{
  var projDiv = document.createElement('div');
  projDiv.classList.add('project-item');

  projDiv.setAttribute("data-tilt","");
  projDiv.setAttribute("data-tilt-max","0.1");
  projDiv.setAttribute("data-tilt-glare","");
  projDiv.setAttribute("data-tilt-max-glare","0.2");

  var image = document.createElement('img');
  image.classList.add('project-image');
  image.src = 'images/projects/'+img;
  image.alt = projTitle;


  var projContent = document.createElement('div');
  projContent.classList.add('project-content');

  var title = document.createElement('h3');
  title.textContent = projTitle;

  var description = document.createElement('p');
  description.textContent = text;

  var techs = document.createElement('p');
  techs.textContent = tech;
  techs.classList.add('lighting-text');
  techs.classList.add('project-techs');

  var projTechs = document.createElement('div'); 
  projTechs.classList.add('project-techs-div');
  projTechs.appendChild(techs); 


  projContent.appendChild(title);
  projContent.appendChild(description);
  projContent.appendChild(projTechs);

  projDiv.appendChild(image);
  projDiv.appendChild(projContent);
  
  document.querySelector('.project-section').appendChild(projDiv);


}


function createContactIcon(imgLink, link)
{
  var icon = document.createElement('a');
  icon.href = link;
  icon.target = "_blank";
  icon.className = "icon-link";

  var img = document.createElement('img');
  img.src = 'images/icons/'+imgLink;
  img.alt = "imag";

  icon.appendChild(img);


  document.querySelector('.contact-section').appendChild(icon)
}