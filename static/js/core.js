'use strict';

function onRemindMePopOverInit() {
    $('#remind-me-popover input[type="radio"]').click(function() {
        $('#remind-me-popover').data('kendoMobilePopOver').close();
        $(this).prop('checked', false);
    });
}

function getDataSourceAndModel(e) {
  var dataSource = $(e.touch.target).closest('.km-listview').data('kendoMobileListView').dataSource;
  var model = dataSource.getByUid($(e.touch.target).closest('li').attr("data-uid"));
  return {
    dataSource: dataSource,
    model: model
  }
}

var messageIndicatorColor = '#111';
setInterval(function() {
  messageIndicatorColor = (messageIndicatorColor == '#111') ? '#DE0000' : '#111';
  $('.message-indicator').css('color', messageIndicatorColor);
}, 2000);

function goHome() {
  window.location = '/';
}
