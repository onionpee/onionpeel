const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];


const RANDOM_INDEX = Math.floor(Math.random()*images.length);
const chosenImages = images[RANDOM_INDEX];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImages}`;



//console.log(bgimage);

document.body.appendChild(bgimage);