import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgContainer = document.querySelector('.gallery');
const cardMarkup = createGalleryItemsMarkup(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', cardMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
     <a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
    </a>
     `
    }).join("");
};
console.log(createGalleryItemsMarkup(galleryItems));

imgContainer.addEventListener('click', onImageContainerClick);

function onImageContainerClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    };    
}

var lightbox = new SimpleLightbox(".gallery a", {
        captions: true,
        captionsData: "alt",
        captionDelay: 250,
});