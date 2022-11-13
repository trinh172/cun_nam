const imgs = [
    "assets/picture_1.jpg",
    "assets/picture_2.jpg",
    "assets/picture_3.jpg",
    "assets/picture_4.jpg",
    "assets/picture_5.jpg",
    "assets/picture_6.jpg",
    "assets/picture_7.jpg",
    "assets/picture_8.jpg",
    "assets/picture_9.jpg",
    "assets/picture_10.jpg",
];

function changeImg() {
  const index = Math.floor(Math.random() * imgs.length);
  document.getElementById("imgId").src = imgs[index];
}

changeImg();
setInterval(changeImg, 1500);