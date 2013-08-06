
function addCheckBoxChange(view) {
    $(view + ' input[type="checkbox"]').change(function() {
        refreshMenu(view);
    });
}

function onListClick(e) {
    if ($(e.target).closest('.content-column').size()) {
        window.location = '/task/' + e.dataItem.id;
    }
}

function onContentColumnSwipe(e) {
    var list = $(e.touch.target).closest('.km-listview').data('kendoMobileListView');
    var dataSource = list.dataSource;
    var model = dataSource.getByUid($(e.touch.target).closest('li').attr("data-uid"));
    dataSource.remove(model);
}

function onContentColumnTap(e) {
    var id = $(e.touch.target).closest('.content-column').attr('data-task-id');
    window.location = '/task/' + id;
}

function onMenuMarkCompleteClick() {
    $('input[type="checkbox"]:checked').each(function() {
        var dataSource = $(this).closest('.km-listview').data('kendoMobileListView').dataSource;
        var model = dataSource.getByUid($(this).closest('li').attr("data-uid"));
        dataSource.remove(model);
    });
}
