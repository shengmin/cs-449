var listViewTemplate = $('#list-view-template').html();

function onContactViewInit() {
    $('#contact-list').kendoMobileListView({
        template: listViewTemplate,
        dataSource: kendo.data.DataSource.create({
            data: cs449.tasks,
            group: { field: 'contact' }
        })
    })
}

function onCategoryViewInit() {
    $('#category-list').kendoMobileListView({
        template: listViewTemplate,
        dataSource: kendo.data.DataSource.create({
            data: cs449.tasks,
            group: { field: 'category' }
        })
    });
}

function onGroupByPopOverInit(e) {
    $('input[name=group-by-select]').click(function() {
        window.location.hash = $(this).val();
    });
}

function onGroupByPopOverClick(e) {
    $('#group-by-popover').data('kendoMobilePopOver').close();

}
