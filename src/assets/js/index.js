// https://picsum.photos

let { innerWidth, innerHeight, screen } = window;
console.log(innerWidth, innerHeight, screen);
let url = `url("https://picsum.photos/seed/${innerHeight}/${innerWidth}")`;
console.log(url);
document.querySelector(".index-wrapper").style.backgroundImage = url;
