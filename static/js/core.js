'use strict';

$(document).ready(function() {
  $('.hello').click(function() {
    $('.notification-sidebar').removeClass('hidden');
  });

  $('.notification-sidebar').each(function(index, notificationSideBar) {
    $(this).find('.row.active').click(function() {
      $(notificationSideBar).addClass('hidden');
    });
  });
});
