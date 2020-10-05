function getPanorama(name){
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'panoramas/' + name + '.json', false);

	xhr.send();
	
	return xhr.responseText;

}

pannellum.viewer('panorama', getPanorama('test'));