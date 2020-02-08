const setViewPort = () => {
  const vpHeight = window.innerHeight;
  const vpWidth = window.innerWidth;
  const htmlCollection = document.getElementsByTagName('head');
  const viewport = htmlCollection[0].children[11];
  viewport.setAttribute('content', `width=${vpWidth}, height=${vpHeight}, initial-scale=1`);
}

export default setViewPort;