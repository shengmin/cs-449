var listViewTemplate = $('#list-view-template').html();

function onContactViewInit() {
    $('#contact-list').kendoMobileListView({
        template: listViewTemplate,
        dataSource: kendo.data.DataSource.create({
            data: cs449.tasks,
            group: { field: 'contact' }
        })
    });

    addCheckBoxChange('#contact-view');
}

function onCategoryViewInit() {
    $('#category-list').kendoMobileListView({
        template: listViewTemplate,
        dataSource: kendo.data.DataSource.create({
            data: cs449.tasks,
            group: { field: 'category' }
        })
    });

    addCheckBoxChange('#category-view');
}

function onAllViewInit() {
    $('#all-list').kendoMobileListView({
        template: listViewTemplate,
        dataSource: kendo.data.DataSource.create({
            data: cs449.tasks,
            sort: { field: 'timestamp', dir: 'desc' }
        })
    });
    addCheckBoxChange('#all-view');
}

function addCheckBoxChange(view) {
    $(view + ' input[type="checkbox"]').change(function() {
        var size = $(view + ' input[type="checkbox"]:checked').size();
        $(view + ' #selected-navbar').toggle(size > 0);
        $(view + ' #unselected-navbar').toggle(size <= 0);
    });
}

function onListClick(e) {
    if ($(e.target).closest('.content-column').size()) {
        window.location = '/task/' + e.dataItem.id;
    }
}

function onGroupByPopOverInit(e) {
    $('input[name=group-by-select]').click(function() {
        window.location.hash = $(this).val();
        $('#group-by-popover').data('kendoMobilePopOver').close();
    });
}

function onLayoutShow() {
    $('#selected-navbar').hide();
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
