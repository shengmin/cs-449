'use strict';

var DS_TASKS = kendo.data.DataSource.create({
  data: cs449.tasks,
  group: { field: 'category' }
});

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
    currentTask = DS_TASKS.getByUid($(e.touch.target).closest('li[data-uid]').attr('data-uid'));
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

  $('#message-list').kendoMobileListView({
    template: $('#message-template').html(),
    fixedHeaders: true,
    dataSource: kendo.data.DataSource.create({
      data: currentTask.messages
    })
  });
}
