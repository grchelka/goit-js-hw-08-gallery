import galleryItems from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryCardsMarkup (items) {
    return items.map(({original, preview, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
        `
    }).join(''); 
}

galleryContainer.addEventListener('click', onGalleryContainerClick);
const lightBoxRef = document.querySelector('.lightbox');
const lightBoxImageRef = document.querySelector('.lightbox__image');
const closeBtnRef = document.querySelector('[data-action="close-lightbox"]');
closeBtnRef.addEventListener('click', onCloseBtnClick);

function onGalleryContainerClick(event) {
    event.preventDefault();
    openModal(event);
}

function onCloseBtnClick(event) {
    closeModal(event);
}

function openModal(event) {
    if (event.target.nodeName === 'IMG') {
        lightBoxRef.classList.add('is-open');
        lightBoxImageRef.src = event.target.dataset.source;
        lightBoxImageRef.alt = event.target.alt;
    }
}
function closeModal(event) {
    if (event.target === closeBtnRef) {
        lightBoxRef.classList.remove('is-open');
        lightBoxImageRef.removeAttribute('src');
        lightBoxImageRef.removeAttribute('alt');
    }
}