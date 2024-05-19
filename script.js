const ctx1 = document.getElementById('myChart1');
const ctx2 = document.getElementById('myChart2');
const ctx3 = document.getElementById('myChart3');
const ctx4 = document.getElementById('myChart4');
const ctx5 = document.getElementById('myChart5');

  new Chart(ctx1, {
    data: {
      datasets: [{
        type: 'line',
        label: 'New Customers',
        data: [250, 225, 200, 125, 175, 275, 325, 350, 325, 275, 200, 150]
      },
      {
        type: 'line',
        label: 'Premium Customers',
        data: [350, 325, 300, 225, 175, 175, 225, 250, 200, 225, 100, 100]
    }],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
    },
    options: {
        elements: {
            point: {
                radius: 0
            },
            line: {
                tension: 0.35
            }
        },
      scales: {
        x: {
            grid: {
              color: ''
            }
          },
        y: {
          suggestedMax: 400,
          beginAtZero: true,
          grid: {
            color: 'grey'
          }
        }
      }
    }
  });

  new Chart(ctx2, {
    data: {
      datasets: [{
        type: 'bar',
        label: 'Online Sales',
        data: [14, 17.5, 5, 16, 12, 18, 21]
      },
      {
        type: 'bar',
        label: 'Offline Sales',
        data: [13, 12, 23, 6, 11, 14, 11]
    }],
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
    },
    options: {
      scales: {
        x: {
            grid: {
              color: ''
            }
          },
        y: {
          suggestedMax: 25,
          beginAtZero: true,
          grid: {
            color: 'grey'
          },
          ticks: {
            callback: function(value, index, ticks) {
                return value + "k";
            }
        }
        }
      }
    }
  });

  new Chart(ctx3, {
    type: 'doughnut',
    data: { 
        labels: [
        'Google Ads',
        'Facebook Ads Manager',
        'Amazon Advertising',
        'YouTube',
        'Others'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [150, 150, 100, 100, 50],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(25, 205, 86)',
          'rgb(255, 5, 56)',
          'rgb(255, 205, 76)'
        ],
        hoverOffset: 4
      }]
    }
  });

  new Chart(ctx4, {
    data: {
      datasets: [{
        type: 'bar',
        label: 'Visitors',
        data: [300, 110, 90, 120, 220, 280, 300, 260, 270, 320, 360] 
      }],
      labels: ['00:00', '2:00', '4:00', '6:00', '8:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    },
    options: {
      scales: {
        x: {
            grid: {
              color: ''
            }
          },
        y: {
          suggestedMax: 400,
          beginAtZero: true,
          grid: {
            color: 'grey'
          }
        }
       }
      }
  });

  new Chart(ctx5, {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Investment',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ]
    }],
    labels:['UP','MP','RAJ','J&K','MAH','WB'],
    options: {
        scales: {
            y: {
                suggestedMax: 25,
                beginAtZero: true,
                grid: {
                  color: 'grey'
                },
                ticks: {
                    callback: function(value, index, ticks) {
                    return value + "lac";
                }
            }
        }
    }
  }
}
});