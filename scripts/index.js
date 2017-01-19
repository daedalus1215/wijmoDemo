
var customers = [
    {
        age: 27,
        country: 'Canada',
        name: 'Adams, Craig',
        permission: 'RW'
    },
    {
        age: 43,
        country: 'Canada',
        name: 'Boucher, Philippe',
        permission: 'RW'
    },
    {
        age: 27,
        country: 'Canada',
        name: 'Adams, Craig',
        permission: 'RW'
    },
    {
        age: 26,
        country: 'Canada',
        name: 'Adams, Craig',
        permission: 'RW'
    },
    {
        age: 25,
        country: 'Canada',
        name: 'Adams, Craig',
        permission: 'RW'
    }
];

var grid = new wijmo.grid.FlexGrid('#gettingStartGrid', {
    autoGenerateColumns: false, // data items may contain null values
    columns: [                  // so define columns explicitly
        { binding: 'age', header: 'Age'},
        { binding: 'country', header: 'Country'},
        { binding: 'name', header: 'Name'},
        { binding: 'permission', header: 'Permission'}
    ],
    itemsSource: customers
});


// enable filtering on the FlexGrid
var filter = new wijmo.grid.filter.FlexGridFilter(grid);