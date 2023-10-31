const imgItems = document.querySelectorAll('.img-item');
const smallImages = document.querySelectorAll('.sale-image-small');
const largeImage = document.getElementById('large-image');

function animateSmallImages() {
  smallImages.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add('fade-in');
    }, 200 * index);
  });
}

function showFirstImage() {
  const firstImgItem = imgItems[0];
  firstImgItem.click();
}

imgItems.forEach(imgItem => {
  imgItem.addEventListener('click', function () {
    const smallImageSrc = this.querySelector('img').src;
    largeImage.classList.remove('fade-in');
    largeImage.style.opacity = 0;
    setTimeout(() => {
      largeImage.src = smallImageSrc;
      setTimeout(() => {
        largeImage.classList.add('fade-in');
        largeImage.style.opacity = 1;
      }, 100);
    }, 300);
  });
});

showFirstImage();
animateSmallImages();
