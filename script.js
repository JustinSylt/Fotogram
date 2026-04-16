// name list of all images
const ARRAY_OF_IMAGES = [
  'black_cat.jpg',
  'deer.jpg',
  'dog_in_snow.jpg',
  'eagle.jpg',
  'gecko.jpg',
  'kitten.jpg',
  'penguin.jpg',
  'iceland_waterfalls.jpg',
];

// count of array index
let currentImageIndex = 0;

// function that renders all images on screen
function renderAllImages(images) {
  let imageContainerRef = document.getElementById('all-images-container');
  for (let i = 0; i < images.length; i++) {
    const figure = createGalleryFigure(images[i]);
    imageContainerRef.appendChild(figure);
  }
}

//function that only creates figure and events for dialog
function createGalleryFigure(imageName) {
  const figure = document.createElement('figure');
  figure.classList.add('figure');
  figure.appendChild(createGalleryImage(imageName));
  figure.addEventListener('click', openDialog);
  figure.addEventListener('keydown', handleFigureKeydown);
  return figure;
}

// function that only applies image to figure
function createGalleryImage(imageName) {
  const img = document.createElement('img');
  img.src = `./assets/img/${imageName}`;
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

renderAllImages(ARRAY_OF_IMAGES);

document.getElementById('dialog').addEventListener('click', handleDialogClick);

// function that opens the dialog and calls render function for the dialog image
function openDialog(event) {
  let imageName = event.target.src.split('/').pop();
  let dialogRef = document.getElementById('dialog');
  dialogRef.classList.add('open');
  renderDialog(imageName);
  dialogRef.showModal();
}

// function that closes dialog
function closeDialog() {
  let dialogRef = document.getElementById('dialog');
  dialogRef.close();
}

// function that renders image inside of the dialog
function renderDialog(imageName) {
  let dialogImageRef = document.getElementById('dialog-img');
  let dialogImageCaptionRef = document.getElementById('dialog-image-caption');
  let imageCaptionName = splitImageName(imageName);
  dialogImageCaptionRef.innerHTML = `${imageCaptionName}`;
  dialogImageRef.src = `./assets/img/${imageName}`;
  dialogImageRef.alt = `${imageCaptionName}`;
  renderImageIndex();
}

// function that renders dialog image index
function renderImageIndex() {
  let pTagIndexRef = document.getElementById('current-image-index');
  pTagIndexRef.innerHTML = `${currentImageIndex + 1} / ${ARRAY_OF_IMAGES.length}`;
}

function handleDialogClick(event) {
  const dialogRef = document.getElementById('dialog');
  if (event.target === dialogRef) {
    closeDialog();
  }
}

function slideLeftImage() {
  currentImageIndex =
    (currentImageIndex - 1 + ARRAY_OF_IMAGES.length) % ARRAY_OF_IMAGES.length;
  renderDialog(ARRAY_OF_IMAGES[currentImageIndex]);
}

function slideRightImage() {
  currentImageIndex = (currentImageIndex + 1) % ARRAY_OF_IMAGES.length;
  renderDialog(ARRAY_OF_IMAGES[currentImageIndex]);
}

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
