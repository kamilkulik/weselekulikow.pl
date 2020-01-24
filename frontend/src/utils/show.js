import isInViewPort from './isInViewPort';

const show = (elem) => {
  if (isInViewPort(elem)) {
    elem.classList.remove('no-opacity');
  }
}

export default show;