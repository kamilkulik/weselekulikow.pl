import isInViewPort from './isInViewPort';

const onScroll = (elem, anim) => {
  window.addEventListener('scroll', (e) => scrollHandle(elem,anim), false)
  return
};

function scrollHandle(elem, anim) {
  const show = elem.classList;
  if (isInViewPort(elem) && anim === 'left') {
    elem.classList.add('float-in-left');
    show.remove('no-opacity');
  } else if (isInViewPort(elem) && anim === 'right') {
    elem.classList.add('float-in-right');
    show.remove('no-opacity');
  }
}

export default onScroll;