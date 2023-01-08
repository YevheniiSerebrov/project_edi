// macaroo api link to data
$.getJSON("https://my.api.mockaroo.com/products.json?key=8ab1f590", function(data) {
    
        for(var i = 0; i<data.length; i++){
            $('tbody').append(
                '<tr><td>' + data[i].id +
                '</td><td>'+data[i].name +
                '</td><td>'+data[i].price +
                '</td><td>'+data[i].color +
                '</td><td>'+data[i].brand_name +
                '</td><td>'+data[i].stock +
                '</td><td>'+data[i].description +
                '</td><td>'+data[i].years_of_warranty +
                '</td><td>'+data[i].country + '</td></tr>');
                }
        }
        );
$.getJSON("https://my.api.mockaroo.com/products.json?key=8ab1f590", function(data) {
    var labels = data.map(function(e) {
        return e.name;
    });
    var data = data.map(function(e) {
        return e.price;
    });
    
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: '#f5de7a',
                borderColor: 'grey',
                data: data,
                label: 'Graph Line'
            }]
        },
        options: {
            responsive: 'true',
        }
    });
    });

$.getJSON("https://my.api.mockaroo.com/products.json?key=8ab1f590", function(data) {
    var labels = data.map(function(e) {
        return e.country;
    });
    var data = data.map(function(e) {
        return e.years_of_warranty;
    });


    var ctx = document.getElementById('myChart2').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: 'yellow',
                borderColor: 'rgb(0, 150, 215)',
                data: data
            }]
        },
        options: {
            responsive: 'true',
        }
    });
    });

