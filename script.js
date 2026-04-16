// object list of all images and their alternative texts
const ARRAY_OF_IMAGES = [
  { source: 'black_cat.jpg', alternative: 'pciture of a black cat' },
  { source: 'deer.jpg', alternative: 'picture of a deer' },
  {
    source: 'dog_in_snow.jpg',
    alternative: 'picture of a dog jumping in the snow',
  },
  {
    source: 'eagle.jpg',
    alternative: 'picture of an eagle starring into the camera',
  },
  { source: 'gecko.jpg', alternative: 'pciture of a gecko' },
  {
    source: 'kitten.jpg',
    alternative: 'picture of a kitten sitting inside of a basket',
  },
  { source: 'penguin.jpg', alternative: 'picture of two penguins' },
  {
    source: 'iceland_waterfalls.jpg',
    alternative: 'picture of a beautiful waterfall',
  },
];

// count of array index
let currentImageIndex = 0;

// initialize application
function init() {
  renderAllImages(ARRAY_OF_IMAGES);
  document
    .getElementById('dialog')
    .addEventListener('click', handleDialogClick);
}

// function that renders all images on screen
function renderAllImages(images) {
  let imageContainerRef = document.getElementById('all-images-container');
  for (let i = 0; i < images.length; i++) {
    const figure = createGalleryFigure(images[i]);
    imageContainerRef.appendChild(figure);
  }
}

//function that only creates figure and events for dialog
function createGalleryFigure(image) {
  const figure = document.createElement('figure');
  figure.classList.add('figure');
  figure.appendChild(createGalleryImage(image));
  figure.addEventListener('click', openDialog);
  figure.addEventListener('keydown', handleFigureKeydown);
  return figure;
}

// function that only applies image to figure
function createGalleryImage(image) {
  const img = document.createElement('img');
  img.alt = `${image.alternative}`;
  img.src = `./assets/img/${image.source}`;
  img.classList.add('gallery-img');
  img.setAttribute('tabindex', 0);
  return img;
}

// event handler for pressing enter to open dialog
function handleFigureKeydown(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openDialog(event);
  }
}

// function that opens the dialog and calls render function for the dialog image
function openDialog(event) {
  let imageName = event.target.src.split('/').pop();
  currentImageIndex = ARRAY_OF_IMAGES.findIndex(
    (img) => img.source === imageName,
  );
  let dialogRef = document.getElementById('dialog');
  dialogRef.classList.add('open');
  renderDialog(ARRAY_OF_IMAGES[currentImageIndex]);
  dialogRef.showModal();
}

// function that closes dialog
function closeDialog() {
  let dialogRef = document.getElementById('dialog');
  dialogRef.close();
}

// function that renders image inside of the dialog
function renderDialog(image) {
  let dialogImageRef = document.getElementById('dialog-img');
  let dialogImageCaptionRef = document.getElementById('dialog-image-caption');
  let imageCaptionName = splitImageName(image.source);
  dialogImageCaptionRef.innerHTML = `${imageCaptionName}`;
  dialogImageRef.src = `./assets/img/${image.source}`;
  dialogImageRef.alt = image.alternative;
  renderImageIndex();
}

// function that renders dialog image index
function renderImageIndex() {
  let pTagIndexRef = document.getElementById('current-image-index');
  pTagIndexRef.innerHTML = `${currentImageIndex + 1} / ${ARRAY_OF_IMAGES.length}`;
}

// function that closes dialog on backdrop click
function handleDialogClick(event) {
  const dialogRef = document.getElementById('dialog');
  if (event.target === dialogRef) {
    closeDialog();
  }
}

// function that slides to the previous image
function slideLeftImage() {
  currentImageIndex =
    (currentImageIndex - 1 + ARRAY_OF_IMAGES.length) % ARRAY_OF_IMAGES.length;
  renderDialog(ARRAY_OF_IMAGES[currentImageIndex]);
}

// function that slides to the next image
function slideRightImage() {
  currentImageIndex = (currentImageIndex + 1) % ARRAY_OF_IMAGES.length;
  renderDialog(ARRAY_OF_IMAGES[currentImageIndex]);
}

// event handler for arrow key navigation
function handleArrowKey(event, action) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    action();
  }
}

// function that splits image file name to single words
function splitImageName(img) {
  let finalName = '';
  let splitImageName = img.split('.')[0];
  splitImageName = splitImageName.split('_');

  for (let i = 0; i < splitImageName.length; i++) {
    finalName += splitImageName[i];
    if (i + 1 == splitImageName.length) {
      break;
    }
    finalName += ' ';
  }
  return finalName;
}
