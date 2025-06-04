$(document).ready(function () {
  if (!sessionStorage.disclaimerShown) {
    showDisclaimer();
    sessionStorage.disclaimerShown = 'true';
  }
});

hideDisclaimer = function() {
  $('#disclaimer_popup').hide();
};

showDisclaimer = function() {
  $('#disclaimer_popup').append('<div id="fade">');
  $('#disclaimer_popup').append(`<div class="popup_block">
    <div class="popup">
      <a href="javascript:hideDisclaimer()"><img src="images/popup_close.png" class="close_button" title="Close" alt="Close" /></a>
      <b>Inverse Path has been acquired by WithSecure (formerly F-Secure) Corporation in 2017</b>
      <br/><br/>
      <b>This site is an historical archive of Inverse Path former home.</b>
      <br/><br/>
      <b>The former Inverse Path team now works at <a href="https://reversec.com">Reversec</a>.</b>
      <br/><br/>
    </div>
  </div>`);

  $('#disclaimer_popup').show();
};
