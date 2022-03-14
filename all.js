const grid = document.querySelector('.grid');
const msnry = new Masonry(grid);
imagesLoaded(grid).on('progress', () => {
  // layout Masonry after each image loads
  msnry.layout();
});

const animation = document.querySelectorAll('.img-fluid');
animation.forEach((item, index) => {
  const el = item;
  el.style.setProperty('animation-delay', `${index / 2 + 0.5}s`);
});
