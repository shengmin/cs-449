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

function onCreateNewTaskShow() {
  $("#end-call-view").data("kendoMobileModalView").close();
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

function onPhoneCallShow() {
  setTimeout(function() {
    $("#end-call-view").data("kendoMobileModalView").open();
  }, 2000);
}

function onAddNote() {
  console.log("add a note");
  $('#noteBox').show();
  $('#addCallToExisting').hide();
  $('#addCallToContacts').hide();
  $('#noteBox').css('height', '6em');
  $('#end-call-view').css('height', '15em');
  $('#callFinishCancel').css('width', '50%');
  $('#callFinishDone').show();
  $('#callFinishDone').css('width', '50%');
}

function onCancelAddNote() {
  if (!$('#noteBox').is(":visible")) {
    console.log("closing modal dialog");
    $("#end-call-view").data("kendoMobileModalView").close();
    return;
  }
  $('#noteBox').hide();
  $('#noteBox').css('height', '0em');
  $('#addCallToExisting').show();
  $('#addCallToContacts').show();
  $('#end-call-view').css('height', '14em');
  $('#callFinishDone').css('width', '0%');
  $('#callFinishCancel').css('width', '100%');
  $('#callFinishDone').hide();
}
