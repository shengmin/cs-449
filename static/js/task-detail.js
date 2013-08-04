'use strict';

var TASK = cs449.tasks[TASK_ID];
var listViewTemplate = $('#list-view-template').html();

function onMessageViewInit() {
  $('#message-list').kendoMobileListView({
      template: listViewTemplate,
      dataSource: kendo.data.DataSource.create({
          data: TASK.messages
      })
  });
}

function onLayoutShow() {
  $('#task-menu-mark-complete').click(function() {
    window.location = '/task';
  });
}

function onContentColumnSwipe(e) {
    var result = getDataSourceAndModel(e);
    result.dataSource.remove(result.model);
}

function onContentColumnTap(e) {
    var element = $(e.touch.target).closest('.content-column');
    var id = element.attr('data-message-id');
    var type = element.attr('data-message-type');
    var url = '';
    switch(type) {
      case 'mail':
        url = '#mail-preview-view';
        break;
      case 'cell':
        url = '#cell-preview-view';
        break;
    }
    app.navigate(url);
}
