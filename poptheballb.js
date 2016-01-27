function preload() {
	pop = loadSound('audio/BalloonPopFast.mp3');
	mouseover = loadSound('audio/MouseOver.mp3');
}

function setup()
{

	createCanvas(800, 400);
	x = 250;
	y = 21;
	count = 0;
	moveD = 1;
	moveR = 1;
	drawBall = 1;
	
	
}  


function draw()
{
	background(125,125,125);

	d = sqrt((mouseX-x)*(mouseX-x) + (mouseY-y)*(mouseY-y))

	if (d < 25 && mouseIsPressed == true && mouseButton == LEFT && drawBall == 1)
	{
		drawBall = 0;
		pop.play();
	}
	if (d < 25 && drawBall == 1)
	{
		if (mouseover.isPlaying() == false)
		{
			mouseover.play();
		}
		fill(0,255,0);
	}
	if (d >= 25)
	{
		fill(255,0,0);
	}
	
	if (drawBall == 1)
	{
		ellipse(x,y,50,50);		
	}

	if (moveD == 1)
	{
		y = y + 2;
	}
	if (moveD == 0)
	{
		y = y - 3;
	}
	
	if (moveR == 1)
	{
		x = x + 1;
	}
	if (moveR == 0)
	{
		x = x - 2;
	}

	if (x < 25)
	{
		moveR = 1;
	}
	if (x > 775)
	{
		moveR = 0;
	}
	if (y > 375)
	{
		moveD = 0;
	}
	if (y < 25)
	{
		moveD = 1;
	}


}
