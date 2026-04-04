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
		imageContainerRef.innerHTML += `<img class="gallery-images" src="./assets/img/${images[i]}" onclick='openDialog(event)'></img>`;
	}
}

renderAllImages(ARRAY_OF_IMAGES);

//function that opens dialog and calls image render
function openDialog(event) {
	let imageSource = event.target.src.split('/').pop();
	let dialogRef = document.getElementById('img-dialog');
	renderImageInDialog(imageSource);
	dialogRef.showModal();
}

//function that renders a single image inside of a dialog
function renderImageInDialog(src) {
	let dialogImgContainerRef = document.getElementById('dialog-img-container');
	dialogImgContainerRef.innerHTML = `<img class='single-dialog-img' src='./assets/img/${src}'></img>`;
}

//close Dialog function
function closeDialog() {
	let dialogRef = document.getElementById('img-dialog');
	dialogRef.close();
}
