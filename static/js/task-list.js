
  var localDataSource = new kendo.data.HierarchicalDataSource({
    data: cs449.tasks,
    schema: {
        model: {
            children: "messages"
        }
    }
});

var groupedData = [
        {name: "Sashimi salad", letter: "S" },
        {name: "Chirashi sushi", letter: "C" },
        {name: "Seaweed salad", letter: "S" },
        {name: "Edamame", letter: "E" },
        {name: "Miso soup", letter: "M" },
        {name: "Maguro", letter: "M" },
        {name: "Shake", letter: "S" },
        {name: "Shiromi", letter: "S" },
        {name: "Tekka maki", letter: "T" },
        {name: "Hosomaki Mix", letter: "H" },
        {name: "California rolls", letter: "C" },
        {name: "Seattle rolls", letter: "S" },
        {name: "Spicy Tuna rolls", letter: "S" },
        {name: "Ebi rolls", letter: "E" },
        {name: "Chicken Teriyaki", letter: "C" },
        {name: "Salmon Teriyaki", letter: "S" },
        {name: "Gohan", letter: "G" },
        {name: "Tori Katsu", letter: "T" },
        {name: "Yaki Udon", letter: "Y" }
    ];

function onCategoryViewInit() {
  $("#category-list").kendoMobileListView({
            dataSource: localDataSource,
            template: "${name}",
            fixedHeaders: true
        });
}


function initForm() {
    $("#dropdown").kendoDropDownList({
         dataSource: [ { Id: 0, Title: "Manager" }, { Id: 1, Title: "Developer" }, { Id: 2, Title: "Vice President" } ],
         animation: {
            open: {
                effects: "fadeIn",
                duration: 300,
                show: true
            }
         },
         dataTextField: "Title",
    dataValueField: "Id"
     });
}
