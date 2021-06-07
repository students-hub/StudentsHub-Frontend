export function getDomSize(dom) {
  return {
    width:  dom.offsetWidth,
    height: dom.offsetHeight
  };
}

export function getDomPos(dom) {
  return {
    top:  dom.getBoundingClientRect().top,
    left: dom.getBoundingClientRect().left
  };
}

export function getWindowSize() {
  return {
    width:  window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.offsetHeight,
  };
}