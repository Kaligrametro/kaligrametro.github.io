function getFileNames()
{
    console.log("getFileNames");
    showImage("public/IMG_4025.jpg", 400, 200, "1");   
}

function showImage(src, width, height, alt)
{
    let image = document.createElement("img");

    image.src = src;
    image.width = width;
    image.height = height;
    image.alt = alt;

    document.body.appendChild(image);
}

function addImage(src)
{
    // validate user is admin
    
}

// -- Slide management -- //

const slides = [];
/**
 * 
 * @param {string} filename 
 * @param {string} fileextension 
 * @returns new slide index
 */
const genSlide = (filename, fileextension) =>
{
    const newSlide = `
         <div class="slide">
            <img src="public/${file}.${fileextension}">
        </div>
    `;

    document
    .getElementById("slide_container")
    .insertAdjacentHTML("afterend", newSlide);

    slides.push(newSlide);
    return slides.length - 1;
}

(() => {
    'use strict';
    // Page is loaded
    const objects = document.getElementsByClassName('asyncImage');
    Array.from(objects).map((item) => {
      // Start loading image
      const img = new Image();
      img.src = item.dataset.src;
      // Once image is loaded replace the src of the HTML element
      img.onload = () => {
        item.classList.remove('asyncImage');
        return item.nodeName === 'IMG' ? 
          item.src = item.dataset.src :        
          item.style.backgroundImage = `url(${item.dataset.src})`;
      };
    });
  })();

