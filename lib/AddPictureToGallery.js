export default function addPictureToGallery(pictures, gallery);
pictures.forEach(pic =>{
  let img = document.createElement("img");
  img.src = pic.url;
  img.alt = pic.title;
  gallery.appendChild(img);
})
