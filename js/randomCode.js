//验证码
function createCode(){
	len=6;
	var seed = new Array(
		'abcdefghijklmnopqrstuvwxyz',
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		'0123456789'
	);
	var idx,i;
	var result = '';
	for (i=0; i<len; i++)
	{
		idx = Math.floor(Math.random()*3);
		result += seed[idx].substr(Math.floor(Math.random()*(seed[idx].length)), 1);
	}
	return result;
}

window.onload()=autoRandom.innerHTML=createCode();