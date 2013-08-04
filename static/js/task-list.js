var listViewTemplate = $('#list-view-template').html();

function onContactViewInit() {
    $('#contact-list').kendoMobileListView({
        template: listViewTemplate,
        click: onListClick,
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
        click: onListClick,
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
        }),
        click: onListClick,
    });
    addCheckBoxChange('#all-view');
}

function addCheckBoxChange(view) {
    $(view + ' input[type="checkbox"]').change(function() {
        var size = $(view + ' input[type="checkbox"]:checked').size();
        $(view + ' #selected-tabstrip').toggle(size > 0);
        $(view + ' #unselected-tabstrip').toggle(size <= 0);
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
    });
}

function onGroupByListClick() {
    // $('#group-by-popover').data('kendoMobilePopOver').close();
}

function onLayoutShow() {
    $('#selected-tabstrip').hide();
}
