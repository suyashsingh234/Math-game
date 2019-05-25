var correctbox;
var score;
var interval;
function setquestion()
{
	var operator=['+','-','/','X'];
	var operatoridx=Math.floor(Math.random()*4);
	var no1=Math.floor(Math.random()*10);
	var no2=Math.floor(Math.random()*10);
	document.getElementById('question').innerHTML=no1+operator[operatoridx]+no2+"=?";
	var answer;
	if(operator[operatoridx]=='+')
		answer=no1+no2;
	else if(operator[operatoridx]=='-')
		answer=no1-no2;
	else if(operator[operatoridx]=='/')
		answer=Math.floor(no1/no2);
	else
		answer=no1*no2;
	correctbox=Math.floor((Math.random()*4)+1);
	for(var i=1;i<=4;i++)
	{
		if(i==correctbox)
		{
			document.getElementById('box'+correctbox).innerHTML=answer;
		}
		else
		{
			var curbox=document.getElementById('box'+i);
			curbox.innerHTML=Math.floor(Math.random()*100);
			if(curbox.innerHTML==answer)
				curbox.innerHTML=answer+3;
		}
	}
}

function startcountdown(starttime)
{
	interval=setInterval(function(){
		document.getElementById('time').innerHTML="Time:"+starttime;
		if(starttime<=0)
		{
			clearInterval(interval);
			document.getElementById('gameover').style.display='inline-block';
			document.getElementById('gameover').innerHTML="Game over!"+'<br>'+'Score is '+score;
		}
		starttime-=1;
	},1000);
}

var boxes=document.getElementsByClassName('box');
for(let i=0;i<boxes.length;i++)
{
	boxes[i].addEventListener('click',function()
	{
		if(boxes[i].id=='box'+correctbox)
		{
			score+=1;
			document.getElementById('score').innerHTML="Score:"+score;
			document.getElementById('showcorrect').style.display='inline-block';
			setTimeout(function(){
				document.getElementById('showcorrect').style.display=''
			},1000);
		}
		else {
			document.getElementById('showwrong').style.display='inline-block';
			setTimeout(function(){
				document.getElementById('showwrong').style.display=''
			},1000);
		}
		setquestion();
	});
}

document.getElementById('start').addEventListener('click',function()
{
	score=0;
	document.getElementById('gameover').style.display='';
	document.getElementById('score').innerHTML="Score:"+score;
	setquestion();
	var starttime=30;
	clearInterval(interval);
	startcountdown(starttime);
});
