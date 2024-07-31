function getFileNames()
{
    console.log("getFileNames");
    showImage("public/IMG_4025.jpg", 200, 200, "1");   
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