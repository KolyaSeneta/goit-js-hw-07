import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(`.gallery`)
const galleryItem = document.querySelector(`.gallery__item`)
// const largeImg = document.querySelector(`.gallery__image > data-source`)
// Change code below this line
// const images = galleryItems;
// console.log(galleryItem);
// console.log(galleryItems);
 function creatMarkup(images) {
     return images.map(({ preview, original, description }) => {
         return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `
     }).join('');
    
 }

 
 
 gallery.insertAdjacentHTML(`beforeend`,creatMarkup(galleryItems))
//   console.log(creatMarkup(galleryItems));
gallery.addEventListener(`click`, (e) => {
    e.preventDefault()
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)

instance.show()
})
  
console.log(gallery);

