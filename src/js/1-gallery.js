import SimpleLightbox from 'simplelightbox';

const gallery = document.querySelector('.gallery');

const createGallery = images.map(
  ({ preview, original, description }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
    </li>
`
);

gallery.insertAdjacentHTML('afterbegin', createGallery.join(''));
