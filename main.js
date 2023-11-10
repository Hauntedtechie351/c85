function add()
{
    background_imgTag = new Image();//Defining with a new image
   background_imgTag.onload = uploadBackground;//seting a founction on lodading this variable
   background_imgTag.src =background_image;//load image

   rover_imgTag = new Image();//defining with a new image
   rover_imgTag.onload =uploadRover;//seting a founction on lodading this variable
   rover_imgTag.src = rover_image
}
function uploadBackground()
{
ctx.drawImage(background_image,0,0,canvas.width,canvas.height);
}
function uploadRover()
{
ctx.drawImage(rover_image,rover_X,rover_Y,rover_width,rover_height);
}
window.addEventListener("keydown",my_Keydown)
function my_Keydown(e)
{
keyPressed=e.keyCode
console.log(keyPressed)
if(keyPressed ==)
}






























