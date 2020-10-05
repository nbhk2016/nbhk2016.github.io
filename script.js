function getPanorama(name){
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'panoramas/' + name + '.json', false);

	xhr.send();
	
	return JSON.parse(xhr.responseText);

}

pannellum.viewer('panorama', getPanorama('a_corp'));