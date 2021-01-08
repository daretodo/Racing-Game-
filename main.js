canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_width = 100;
car_height = 90;
background_image = "download.png"
car_image = "car.jpg";
carX = 10;
carY = 10;
function add(){
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;
    car_imgtag = new Image();
    car_imgtag.onload = uploadCar;
    car_imgtag.src = car_image;
}
function uploadCar(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadCar(){
    ctx.drawImage(car_imgtag,carX,carY,car_width,car_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypress = e.keyCode;
console.log(keypress);
if (keypress=="38"){
    up();
    console.log("Up Key Was Pressed");
}
if (keypress=="40"){
    down();
    console.log("Down Key Was Pressed");
}
if (keypress=="37"){
    left();
    console.log("Left Key Was Pressed");
}
if (keypress=="39"){
    right();
    console.log("Right Key Was Pressed");
}
}
function up(){
if (carY >= 0){
    carY=carY-10;
    console.log ("When up arrow is pressed,X = "+carX+",Y = "+carY);
    uploadBackground();
    uploadCar();
}
}
function down(){
    if (carY <=500){
        carY=carY+10;
        console.log ("When down arrow is pressed,X = "+carX+",Y = "+carY);
    uploadBackground();
    uploadCar();
    }
}
function left(){
    if (carX >=0){
        carX=carX-10;
        console.log ("When left arrow is pressed,X = "+carX+",Y = "+carY);
    uploadBackground();
    uploadCar();
    }
}
function right(){
    if (carX <=700 ){
        carX=carX+10;
        console.log("When right arrow is pressed,X = "+carX+",Y = "+carY);
     uploadBackground();
     uploadCar();
    }
}

