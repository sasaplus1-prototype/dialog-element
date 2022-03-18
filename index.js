(function(){

  'use strict';

  var dialog = document.querySelector('dialog');
  var open = document.querySelector('input[value="open"]');
  var close = document.querySelector('input[value="close"]');

  dialogPolyfill.registerDialog(dialog);

  open.addEventListener('click', function(event) {
    dialog.showModal();
  }, false);

  close.addEventListener('click', function(event) {
    dialog.close();
  }, false);

}());
