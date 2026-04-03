const ARRAY_OF_IMAGES = [
	'black_cat.jpg',
	'deer.jpg',
	'dog_in_snow.jpg',
	'gecko.jpg',
	'iceland_polarlights.jpg',
	'iceland_waterfalls.jpg',
	'kitten.jpg',
	'penguin.jpg',
];

//function that renders all images on website
function renderAllImages(images) {
	let imageContainerRef = document.getElementById('image-container');
	for (i = 0; i < images.length; i++) {
		imageContainerRef.innerHTML += `<img class="gallery-images" src="./assets/img/${images[i]}" onclick='openDialog()'></img>`;
	}
}

renderAllImages(ARRAY_OF_IMAGES);

//function that renders a single image inside of a dialog
function openDialog() {
	let dialogRef = document.getElementById('img-dialog');
	dialogRef.showModal();
}

//close Dialog function
function closeDialog() {
	let dialogRef = document.getElementById('img-dialog');
	dialogRef.close();
}
