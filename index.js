// github api link to data

$.getJSON("https://YevheniiSerebrov.github.io/project_edi/data1.json", function(data) {

    for(var i = 0; i<data.length; i++){
        $('#tbody1').append(
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
$.getJSON("https://YevheniiSerebrov.github.io/project_edi/data1.json", function(data) {
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
                label: '1-100'
            }]
        },
        options: {
            responsive: 'true',
        }
    });
    });

$.getJSON("https://YevheniiSerebrov.github.io/project_edi/data1.json", function(data) {
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
                data: data,
                label: '1-100'
            }]
        },
        options: {
            responsive: 'true',
        }
    });
    });
// =====================================2===========================================
$.getJSON("https://YevheniiSerebrov.github.io/project_edi/data2.json", function(data) {

    for(var i = 0; i<data.length; i++){
        $('#tbody2').append(
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
$.getJSON("https://YevheniiSerebrov.github.io/project_edi/data2.json", function(data) {
    var labels = data.map(function(e) {
        return e.name;
    });
    var data = data.map(function(e) {
        return e.price;
    });
    
    var ctx = document.getElementById('myChart_2').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: '#f5d97a',
                borderColor: 'grey',
                data: data,
                label: '101-200'
            }]
        },
        options: {
            responsive: 'true',
        }
    });
    });

$.getJSON("https://YevheniiSerebrov.github.io/project_edi/data2.json", function(data) {
    var labels = data.map(function(e) {
        return e.country;
    });
    var data = data.map(function(e) {
        return e.years_of_warranty;
    });


    var ctx = document.getElementById('myChart2_2').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: 'red',
                borderColor: 'rgb(0, 150, 215)',
                data: data,
                label: '101-200'
            }]
        },
        options: {
            responsive: 'true',
        }
    });
    });
// ========================================3========================================
$.getJSON("https://YevheniiSerebrov.github.io/project_edi/data3.json", function(data) {

    for(var i = 0; i<data.length; i++){
        $('#tbody3').append(
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
$.getJSON("https://YevheniiSerebrov.github.io/project_edi/data3.json", function(data) {
    var labels = data.map(function(e) {
        return e.name;
    });
    var data = data.map(function(e) {
        return e.price;
    });
    
    var ctx = document.getElementById('myChart_3').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: '#f5de7a',
                borderColor: 'grey',
                data: data,
                label: '201-300'
            }]
        },
        options: {
            responsive: 'true',
        }
    });
    });

$.getJSON("https://YevheniiSerebrov.github.io/project_edi/data3.json", function(data) {
    var labels = data.map(function(e) {
        return e.country;
    });
    var data = data.map(function(e) {
        return e.years_of_warranty;
    });


    var ctx = document.getElementById('myChart2_3').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: 'green',
                borderColor: 'rgb(0, 150, 215)',
                data: data,
                label: '201-300'
            }]
        },
        options: {
            responsive: 'true',
        }
    });
    });
