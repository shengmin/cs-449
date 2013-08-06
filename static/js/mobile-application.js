'use strict';

var DS_TASKS = kendo.data.DataSource.create({
  data: cs449.tasks,
  group: { field: 'category' }
});
var DS_MESSAGES = null;

var currentTask = null;
var currentMessage = null;

function onTaskListViewInit() {
  $('#task-list').kendoMobileListView({
    template: $('#task-template').html(),
    fixedHeaders: true,
    dataSource: DS_TASKS
  });

  addCheckBoxHandler();
}

function onTaskListTap(e) {
    currentTask = cs449.tasks[DS_TASKS.getByUid($(e.touch.target).closest('li[data-uid]').attr('data-uid')).id];
    app.navigate('#message-list-view');
}

function addCheckBoxHandler() {
  $('#task-list input[type="checkbox"]').change(function() {
    toggleHeader();
  });
}

function onTaskListViewAfterShow() {
  toggleHeader();
}

function toggleHeader() {
  var size = $('#task-list-view #task-list input[type="checkbox"]:checked').size();
  $('#task-menu').toggle(size > 0);
  $('#unselected-navbar').toggle(size <= 0);
}

function onGroupByPopOverInit() {
  $('input[name=group-by-select]').click(function() {
    var groupBy = $(this).val();
    if (groupBy) {
      DS_TASKS.group(groupBy);
    }
    var taskList = $('#task-list').data('kendoMobileListView');
    taskList.setDataSource(DS_TASKS);
    $('#group-by-popover').data('kendoMobilePopOver').close();
    addCheckBoxHandler();
  });
}

function onRemindMePopOverInit() {
  $('#remind-me-popover input[type="radio"]').click(function() {
    $('#remind-me-popover').data('kendoMobilePopOver').close();
    $(this).prop('checked', false);
    // Remove the tasks that have been selected
    $('#task-list-view #task-list input[type="checkbox"]:checked').each(function() {
      var model = DS_TASKS.getByUid($(this).closest('li[data-uid]').attr('data-uid'));
      model.set('category', CAT_WAITING);
    });
    $('#task-list').data('kendoMobileListView').setDataSource(DS_TASKS);
    toggleHeader();
  });
}

function onMessageListViewBeforeShow() {
  var template = kendo.template($('#message-title-template').html());
  $('#message-list-title').html(template(currentTask));
  $('#message-list-title').kendoMobileListView({
    style: 'inset'
  });

  DS_MESSAGES = kendo.data.DataSource.create({
    data: currentTask.messages
  });

  $('#message-list').kendoMobileListView({
    template: $('#message-template').html(),
    fixedHeaders: true,
    dataSource: DS_MESSAGES
  });
}

function onMessageListTap(e) {
    var model = DS_MESSAGES.getByUid($(e.touch.target).closest('li[data-uid]').attr('data-uid'));
    var type = model.type;
    var view = '';
    switch(type) {
      case 'mail':
        view = '#mail-preview-view';
        break;
      case 'cell':
        view = '#phone-preview-view';
        break;
    }
    currentMessage = model;
    onPhonePreviewViewOpen();
    onMailPreviewViewOpen();
    $(view).data('kendoMobileModalView').open();
}

function onReminderTaskListTap(e) {
  currentTask = cs449.tasks[$(e.touch.target).closest('[data-id]').attr('data-id')];
  app.navigate('#message-list-view');
}

function onMessageListSwipe(e) {
  var model = DS_MESSAGES.getByUid($(e.touch.target).closest('li[data-uid]').attr('data-uid'));
  DS_MESSAGES.remove(model);
}

function onTaskListSwipe(e) {
  var model = DS_TASKS.getByUid($(e.touch.target).closest('li[data-uid]').attr('data-uid'));
  DS_TASKS.remove(model);
}

function deleteMessage(e) {
  DS_MESSAGES.remove(currentMessage);
  closeMailPreviewModalView();
  closePhonePreviewModalView();
}

function closePhonePreviewModalView() {
  $('#phone-preview-view').data('kendoMobileModalView').close();
}

function closeMailPreviewModalView() {
  $('#mail-preview-view').data('kendoMobileModalView').close();
}

function onPhonePreviewViewOpen() {
  $('#phone-preview-view-title').html(currentMessage.title);
  $('#phone-preview-view-content').html(currentMessage.content);
  $('#phone-preview-view-from').html(currentMessage.fromName + ': ' + currentMessage.fromId);
}

function onMailPreviewViewOpen() {
  $('#mail-preview-view-title').html(currentMessage.title);
  $('#mail-preview-view-content').html(currentMessage.content);
  $('#mail-preview-view-from').html(currentMessage.fromName + ': ' + currentMessage.fromId);
}

function onPhoneCallViewBeforeShow() {
  closePhonePreviewModalView();
  setTimeout(function() {
    $("#call-end-view").data("kendoMobileModalView").open();
  }, 2000);
}

function onNativeMailViewBeforeShow() {
  closeMailPreviewModalView();
}

function onPhoneCallViewHide() {
  $('#call-end-view').data('kendoMobileModalView').close();
  onCancelAddNote();
}

function onAddNote() {
  $('#noteBox').show();
  $('#addCallToExisting').hide();
  $('#addCallToContacts').hide();
  $('#noteBox').css('height', '6em');
  $('#call-end-view').css('height', '15em');
  $('#callFinishCancel').css('width', '45%');
  $('#callFinishDone').show();
  $('#callFinishDone').css('width', '45%');
}

function onCancelAddNote() {
  if (!$('#noteBox').is(":visible")) {
    $("#call-end-view").data("kendoMobileModalView").close();
    return;
  }
  $('#noteBox').hide();
  $('#noteBox').css('height', 0);
  $('#addCallToExisting').show();
  $('#addCallToContacts').show();
  $('#call-end-view').css('height', '14em');
  $('#callFinishDone').css('width', 0);
  $('#callFinishCancel').css('width', '100%');
  $('#callFinishDone').hide();
}
