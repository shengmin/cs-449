'use strict';

var TASK = cs449.tasks[TASK_ID];
var MESSAGE = null;
var listViewTemplate = $('#list-view-template').html();

function onMessageViewInit() {
  $('#message-list').kendoMobileListView({
      template: listViewTemplate,
      dataSource: kendo.data.DataSource.create({
          data: TASK.messages
      })
  });
}

function onMenuMarkCompleteClick() {
  window.location = '/';
}

function onContentColumnSwipe(e) {
    var result = getDataSourceAndModel(e);
    result.dataSource.remove(result.model);
}

function onContentColumnTap(e) {
    var model = getDataSourceAndModel(e).model;
    var id = model.id;
    var type = model.type;
    var url = '';
    switch(type) {
      case 'mail':
        url = '#mail-preview-view';
        break;
      case 'cell':
        url = '#cell-preview-view';
        break;
    }
    MESSAGE = model;
    app.navigate(url);
}

function onCellPreviewViewShow() {
  $('#cell-preview-view-title').html(MESSAGE.title);
  $('#cell-preview-view-content').html(MESSAGE.content);
  $('#cell-preview-view-from').html(MESSAGE.fromName + ' - ' + MESSAGE.fromId);
}

function onMailPreviewViewShow() {
  $('#mail-preview-view-title').html(MESSAGE.title);
  $('#mail-preview-view-content').html(MESSAGE.content);
  $('#mail-preview-view-from').html(MESSAGE.fromName + ' - ' + MESSAGE.fromId);
}
