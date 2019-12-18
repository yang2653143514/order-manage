window.onload = function(){
	var lineChartData = {
		labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
		datasets: [{
			label: "上周的食堂每日销量",
			fill: false,
			lineTension: 0.1,
			backgroundColor: "rgba(75,192,192,0.4)",
			borderColor: "rgba(75,192,192,1)",
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			data: [55, 59, 60, 61, 56, 55, 46],
			spanGaps: false,
		}]
	};
	var ctx = document.getElementById("myChart1").getContext("2d");
	var LineChart = new Chart(ctx, {
		type: 'line',
		data: lineChartData,
		responsive: true,
		bezierCurve: false
	});

	var ctx = document.getElementById('myChart2').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
	        labels: ['0-8元', '8-14', '14-20元', '20-26元', '26元以上'],
	        datasets: [{
	            label: '销量',
	            data: [66, 80, 63, 42, 29],
	            backgroundColor: [
	                'rgba(216, 27, 96, 0.6)',
	                'rgba(3, 169, 244, 0.6)',
	                'rgba(255, 152, 0, 0.6)',
	                'rgba(29, 233, 182, 0.6)',
	                'rgba(156, 39, 176, 0.6)'
	            ],
	            borderColor: [
	                'rgba(216, 27, 96, 1)',
	                'rgba(3, 169, 244, 1)',
	                'rgba(255, 152, 0, 1)',
	                'rgba(29, 233, 182, 1)',
	                'rgba(156, 39, 176, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        legend: {
	            display: false
	        },
	        title: {
	            display: true,
	            text: '各价格段的商品销量',
	            position: 'top',
	            fontSize: 16,
	            padding: 20
	        },
	        scales: {
	            yAxes: [{
	                ticks: {
	                    min: 25
	                }
	            }]
	        }
	    }
	});

	var ctx = document.getElementById('myChart3').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'pie',
	    data: {
	        labels: ['酸', '咸', '辣', '甜', '清淡'],
	        datasets: [{
	            data: [15,25, 20, 23, 18],
	            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
	            borderWidth: 0.5 ,
	            borderColor: '#ddd'
	        }]
	    },
	    options: {
	        title: {
	            display: true,
	            text: '大家最喜欢的口味',
	            position: 'top',
	            fontSize: 16,
	            fontColor: '#111',
	            padding: 20
	        },
	        legend: {
	            display: true,
	            position: 'bottom',
	            labels: {
	                boxWidth: 20,
	                fontColor: '#111',
	                padding: 15
	            }
	        },
	        tooltips: {
	            enabled: false
	        },
	        plugins: {
	            datalabels: {
	                color: '#111',
	                textAlign: 'center',
	                font: {
	                    lineHeight: 1.6
	                },
	                formatter: function(value, ctx) {
	                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
	                }
	            }
	        }
	    }
	});

	var ctx = document.getElementById('myChart4').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: {
	        labels: ['肉类', '鱼类', '青菜', '汤', '素食'],
	        datasets: [{
	            data: [45, 15, 10, 20, 40],
	            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
	            borderWidth: 0.5 ,
	            borderColor: '#ddd'
	        }]
	    },
	    options: {
	        title: {
	            display: true,
	            text: '大家最喜欢的食材',
	            position: 'top',
	            fontSize: 16,
	            fontColor: '#111',
	            padding: 20
	        },
	        legend: {
	            display: true,
	            position: 'bottom',
	            labels: {
	                boxWidth: 20,
	                fontColor: '#111',
	                padding: 15
	            }
	        },
	        tooltips: {
	            enabled: false
	        },
	        plugins: {
	            datalabels: {
	                color: '#111',
	                textAlign: 'center',
	                font: {
	                    lineHeight: 1.6
	                },
	                formatter: function(value, ctx) {
	                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
	                }
	            }
	        }
	    }
	});
}