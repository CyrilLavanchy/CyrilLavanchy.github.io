var ctx = document.getElementsByClassName("ChartByQuarter");
var ChartByQuarter = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1.Viertel', '2.Viertel', '3.Viertel', '4.Viertel', 'Zusatzviertel'],
    datasets: [
      {
        label: 'Pass',
        data: [52.35, 60.46, 54.46, 59.34, 52.86],
        backgroundColor: '#6145c2'
      },
      {
        label: 'Lauf',
        data: [47.65, 39.54, 45.54, 40.66, 47.14],
        backgroundColor: '#FF4545'
      }
    ]
  },
  options: {
    scales: {
      xAxes: [{ stacked: true}],
      yAxes: [{ stacked: true}]
    },
    legend: {
      position: 'right',
      labels: {
        fontSize: 20,
        fontStyle: 'bold'
      }
    }
  }
});
