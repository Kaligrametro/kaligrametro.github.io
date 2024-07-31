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

function genSlide(filename, fileextension)
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

