// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const imgMarkup = createImgEl(galleryItems);

function createImgEl(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join('');
}
galleryList.insertAdjacentHTML('afterbegin', imgMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */ navText: ['&#10094', '&#10095'],
  closeText: '&#10007',
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
