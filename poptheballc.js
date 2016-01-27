function preload() {
	pop = loadSound('audio/BalloonPopFast.mp3');
	mouseover1 = loadSound('audio/MouseOver.mp3');
	mouseover2 = loadSound('audio/MouseOver.mp3');
}

function setup()
{

	createCanvas(800, 400);
	x1 = 250;
	y1 = 21;
	x2 = 451;
	y2 = 322;

	moveD1 = 1;
	moveR1 = 1;
	drawBall1 = 1;

	moveD2 = 0;
	moveR2 = 1;
	drawBall2 = 1;
	
	
}  


function draw()
{
	background(125,125,125);

	d1 = sqrt((mouseX-x1)*(mouseX-x1) + (mouseY-y1)*(mouseY-y1))

	if (d1 < 25 && mouseIsPressed == true && mouseButton == LEFT && drawBall1 == 1)
	{
		drawBall1 = 0;
		pop.play();
	}
	if (d1 < 25 && drawBall1 == 1)
	{
		if (mouseover1.isPlaying() == false)
		{
			mouseover1.play();
		}
		fill(0,255,0);
	}
	if (d1 >= 25)
	{
		fill(255,0,0);
	}
	
	if (drawBall1 == 1)
	{
		ellipse(x1,y1,50,50);		
	}

	if (moveD1 == 1)
	{
		y1 = y1 + 2;
	}
	if (moveD1 == 0)
	{
		y1 = y1 - 3;
	}
	
	if (moveR1 == 1)
	{
		x1 = x1 + 1;
	}
	if (moveR1 == 0)
	{
		x1 = x1 - 2;
	}

	if (x1 < 25)
	{
		moveR1 = 1;
	}
	if (x1 > 775)
	{
		moveR1 = 0;
	}
	if (y1 > 375)
	{
		moveD1 = 0;
	}
	if (y1 < 25)
	{
		moveD1 = 1;
	}



	d2 = sqrt((mouseX-x2)*(mouseX-x2) + (mouseY-y2)*(mouseY-y2))

	if (d2 < 25 && mouseIsPressed == true && mouseButton == LEFT && drawBall2 == 1)
	{
		drawBall2 = 0;
		pop.play();
	}
	if (d2 < 25 && drawBall2 == 1)
	{
		if (mouseover2.isPlaying() == false)
		{
			mouseover2.play();
		}
		fill(0,255,0);
	}
	if (d2 >= 25)
	{
		fill(255,0,0);
	}
	
	if (drawBall2 == 1)
	{
		ellipse(x2,y2,50,50);		
	}
	if (moveD2 == 1)
	{
		y2 = y2 + 2;
	}
	if (moveD2 == 0)
	{
		y2 = y2 - 3;
	}
	
	if (moveR2 == 1)
	{
		x2 = x2 + 1;
	}
	if (moveR2 == 0)
	{
		x2 = x2 - 2;
	}

	if (x2 < 25)
	{
		moveR2 = 1;
	}
	if (x2 > 775)
	{
		moveR2 = 0;
	}
	if (y2 > 375)
	{
		moveD2 = 0;
	}
	if (y2 < 25)
	{
		moveD2 = 1;
	}


}
