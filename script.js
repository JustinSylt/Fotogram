const ARRAY_OF_IMAGES = [
	'black_cat.jpg',
	'deer.jpg',
	'dog_in_snow.jpg',
	'eagle.jpg',
	'gecko.jpg',
	'hot_air_baloon.jpg',
	'iceland_polarlights.jpg',
	'iceland_waterfalls.jpg',
	'kitten.jpg',
	'mountain_skyline.jpg',
	'penguin.jpg',
	'rainbow.jpg',
];

//function that renders all images on website
function renderAllImages(images) {
	let imageContainerRef = document.getElementById('image-container');
	for (i = 0; i < images.length; i++) {
		imageContainerRef.innerHTML += `<img class="gallery-images" src="./assets/img/${images[i]}">${images[i]}</img>`;
	}
}

renderAllImages(ARRAY_OF_IMAGES);
