import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const imgContainer = document.querySelector('.gallery');
const cardMarkup = createGalleryItemsMarkup(galleryItems);

imgContainer.insertAdjacentHTML('beforeend', cardMarkup);

let instance = basicLightbox.create(`
    <img src="">
`, {
        onShow: () => {
        imgContainer.addEventListener("keydown", closeModalWindowByEsc);
        },
        onClose: () => {
        imgContainer.removeEventListener("keydown", closeModalWindowByEsc);
        }
});

function closeModalWindowByEsc(evt) {
        if (evt.code === 'Escape') {
            instance.close()
        }
}
    
function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
     <div class="gallery__item">
       <a class="gallery__link" href="${original}"
       >
         <img
           class="gallery__image"
           src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
     </div>
     `
    }).join("");
};
// console.log(createGalleryItemsMarkup(galleryItems));

imgContainer.addEventListener('click', onImageContainerClick);

function onImageContainerClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    };

    const elem = instance.element();
    const img = elem.querySelector('img');
    img.src = evt.target.dataset.source;
    console.log(img);
    instance.show(); 
}

