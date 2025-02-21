const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Python', 
            'C', 
            'Java', 
            ['Data', 'Structures'], 
            'Algorithms', 
            'HTML', 
            'CSS', 
            'JavaScript', 
            ['Machine', 'Learning'] 
        ],
        datasets: [{
            label: 'Skill Level (%)',
            data: [90, 70, 70, 85, 70, 95, 90, 87, 75],
            backgroundColor: [
                'rgba(256, 99, 132, 0.6)',
                'rgba(55, 162, 235, 0.6)',
                'rgba(256, 206, 86, 0.6)',
                'rgba(76, 192, 192, 0.6)',
                'rgba(154, 102, 255, 0.6)',
                'rgba(256, 159, 64, 0.6)',
                'rgba(0, 204, 102, 0.6)',
                'rgba(124, 56, 198,0.6)',
                'rgba(255, 204, 0, 0.6)'
            ],
            borderColor: [
                'rgba(256, 99, 132, 1)',
                'rgba(56, 162, 235, 1)',
                'rgba(256, 206, 86, 1)',
                'rgba(76, 192, 192, 1)',
                'rgba(154, 102, 255, 1)',
                'rgba(256, 159, 64, 1)',
                'rgba(0, 204, 102, 1)',
                'rgba(124, 56, 198,1)',
                'rgba(255, 204, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top', 
                align: 'center',
                labels: {
                    color: 'rgb(16, 12, 6)',
                    font: {
                        size: 14
                    },
                    padding: 20
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'black', 
                    font: {
                        size: 14 
                    },
                    padding: 10
                },
                grid: {
                    drawOnChartArea: false 
                }
            },
            y: {
                ticks: {
                    color: 'black', 
                    font: {
                        size: 14
                    },
                    stepSize: 10
                },
                grid: {
                    color: 'rgba(200, 200, 200, 0.3)' 
                },
                beginAtZero: true
            }
        },
        layout: {
            padding: {
                top: 50, 
                bottom: 50 
            }
        }
    }
});
