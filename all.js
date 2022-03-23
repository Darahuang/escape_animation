const grid = document.querySelector('.grid');
// const animation = document.querySelectorAll('.img-fluid');
const msnry = new Masonry(grid);
imagesLoaded(grid).on('progress', () => {
  // layout Masonry after each image loads
  msnry.layout();
});

const animation = document.querySelectorAll('.img-fluid');
animation.forEach((item, index) => {
  const el = item;
  setTimeout(() => {
    el.classList.add('animation-zoomIn');
    el.style.setProperty('animation-delay', `${index / 4 + 0.5}s`);
  }, index * 200);
});
