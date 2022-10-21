function preload()
{
}

function setup()
{
    canvas=createCanvas(333,444);
    canvas.position(600,200);
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
  image(video,0,0,333,444);

  stroke("red");
  
  line(width/4, height/4, 3*width/4, height/4);
  line(3*width/4, height/4, 3*width/4, 3*height/4);
  line(3*width/4, 3*height/4, width/4, 3*height/4);
  line(width/4, 3*height/4, width/4, height/4);
   
  circle(55,100,55);
circle(55,305,55);
circle(280,310,55);
circle(280,100,55);
}
  function take_snapshot()
{
    save("image.png")
}

circle(29,26,55);
circle(29,175,55);
circle(375,29,55);
circle(375,175,55);