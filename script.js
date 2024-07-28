let count = 0;

document.getElementById('counter-button').addEventListener('click', function() {
	count++;
	document.getElementById('count').innerText = count;
});