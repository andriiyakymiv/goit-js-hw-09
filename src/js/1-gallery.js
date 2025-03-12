import SimpleLightbox from 'simplelightbox';

import { images } from './1-gallery-items';

const gallery = document.querySelector('.gallery');

const createGallery = images.map(
  ({ preview, original, description }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
        <img
            class="gallery-image"
            src="${preview}" 
            alt="${description}"/>
        </a>
    </li>
`
);

gallery.innerHTML = createGallery.join('');

let simpleLightBoxGallery = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});
