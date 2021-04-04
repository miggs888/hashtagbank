
var firstName; //first name
var lastName; //last name
let img;
function preload() {
  img = loadImage('images/hashtag_bank_logotype-01.png'); // Load the image
}
function setup(){
  createCanvas(800, 800);
}
function getFirstName() {  
    return document.getElementById("first_name").value;
}
function getSecondName()    {
    return document.getElementById("last_name").value;
}
function getFavoriteColor()    {
  return document.getElementById("favorite_color").value;
}
function display()  {
  //credit card shape
    background(255);
    stroke(220);
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = 5;
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = 'grey';
    favoriteColor = getFavoriteColor();
    fill(favoriteColor);
    rect(20, 20, 500, 300, 20);
    fill(0);
    noStroke();
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 255;

  //bank logo
    image(img, 30, 32, 430, 80);

  //credit card numbers & expiration
    textSize(24);
    text("1234" + " " + "5678" + " " +"9101" + " " + "1121", 38, 250);
    text("04" + " " + "/" + " " +"26", 320, 250);

  //Name display
    firstName = getFirstName();
    lastName = getSecondName();
    text(firstName + " " + lastName, 38, 285);
    document.getElementById("form").submit();
}