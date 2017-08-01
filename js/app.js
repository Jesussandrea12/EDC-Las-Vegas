$(document).foundation()

$('[data-toggle-dia]').click(function () {
  $('#lineup-tabs').foundation('selectTab', $(this).data('toggleDia'))
});

const $offCanvas = $('#offCanvas');
const $sticky = $('#sticky');
const $drilldown = $('[data-drilldown]');

$offCanvas.find('li').click(function (ev) {
  $drilldown.foundation('_hideAll');
  $offCanvas.foundation('close');
  setTimeout(function () {
    $sticky.css('left', '0px');
  }, 300);
})
