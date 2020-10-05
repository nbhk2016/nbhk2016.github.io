async function main(){
	//pannellum.viewer('panorama', await fetch('panoramas/test.json'));
	console.log( (await fetch('panoramas/test.json')).json() )
}

main()