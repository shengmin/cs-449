var listViewTemplate = $('#list-view-template').html();

function onContactViewInit() {
    $('#contact-list').kendoMobileListView({
        template: listViewTemplate,
        click: onListClick,
        dataSource: kendo.data.DataSource.create({
            data: cs449.tasks,
            group: { field: 'contact' }
        })
    })
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
}

function onListClick(e) {
    window.location = '/task/' + e.dataItem.id;
}

function onGroupByPopOverInit(e) {
    $('input[name=group-by-select]').click(function() {
        $('#group-by-popover').data('kendoMobilePopOver').close();
        window.location.hash = $(this).val();
    });
}
