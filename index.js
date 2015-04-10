(function(){

  'use strict';

  var dialog = document.querySelector('dialog'),
      open = document.querySelector('input[value="open"]'),
      close = document.querySelector('input[value="close"]');

  dialogPolyfill.registerDialog(dialog);

  open.addEventListener('click', function(event) {
    dialog.showModal();
  }, false);

  close.addEventListener('click', function(event) {
    dialog.close();
  }, false);

}());
