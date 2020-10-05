function getPanorama(name){
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'panoramas/' + name, false);

	xhr.send();
	
	return xhr.responseText;

}

console.log(getPanorama('test'))