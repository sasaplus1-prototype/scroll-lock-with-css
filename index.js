(function(){
  'use strict';

  function lockScroll() {
    var scrollTop = (document.scrollingElement || document.documentElement).scrollTop;

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100vh';
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';

      document.documentElement.scrollTop = scrollTop;
      document.body.scrollTop = scrollTop;
    } else {
      (document.scrollingElement || document.documentElement).style.overflow = 'hidden';
    }

    return scrollTop;
  }

  function unlockScroll(scrollTop) {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.overflow = '';
      document.body.style.height = '';

      (document.scrollingElement || document.documentElement).scrollTop = scrollTop;
    } else {
      (document.scrollingElement || document.documentElement).style.overflow = '';
    }
  }

  var beforeScrollTop;

  function onClick() {
    var dialog = document.getElementById('js-dialog');

    if (/none/i.test(dialog.style.display)) {
      beforeScrollTop = lockScroll();
      dialog.style.display = 'block';
    } else {
      dialog.style.display = 'none';
      unlockScroll(beforeScrollTop);
    }
  }

  function onDOMContentLoaded() {
    var button = document.getElementById('js-button');

    button.addEventListener('click', onClick, false);
  }

  document.addEventListener('DOMContentLoaded', onDOMContentLoaded, false);
}());
