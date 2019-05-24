var operator=['+','-','/','X'];
document.getElementById('start').addEventListener('click',function()
{
	var operatoridx=Math.floor(Math.random()*4);
	var no1=Math.floor(Math.random()*10);
	var no2=Math.floor(Math.random()*10);
	document.getElementById('question').innerHTML=no1+operator[operatoridx]+no2+"=?";
	/*var answer;
	if(operator[operatoridx]=='+')
		answer=no1+no2;
	else if(operator[operatoridx]=='-')
		answer=no1-no2;
	else if(operator[operatoridx]=='/')
		answer=Math.floor(no1/no2);
	else
		answer=no1*no2;*/
});
