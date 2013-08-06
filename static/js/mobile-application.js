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
  });
}

function onRemindMePopOverInit() {
  $('#remind-me-popover input[type="radio"]').click(function() {
    $('#remind-me-popover').data('kendoMobilePopOver').close();
    $(this).prop('checked', false);
    // Remove the tasks that have been selected
    $('#task-list-view #task-list input[type="checkbox"]:checked').prop('checked', false);
  });
}
