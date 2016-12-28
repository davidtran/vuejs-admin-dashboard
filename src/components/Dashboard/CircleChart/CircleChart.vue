<template src="./CircleChart.html"></template>

<script>
  const sum = (a, b) => {
    return a + b
  }

  export default {
    name: 'CircleChart',
    data: function() {
      return {
        activeTab: 'browsers',
        browserChart: {
          data: {
            series: [1000, 480, 705, 105, 50]
          },
          config: {
            labelInterpolationFnc: (value) => {
              return Math.round(value / this.browserChart.data.series.reduce(sum) * 100) + '%';
            },
            startAngle: 270,
            labelPosition: 'outside',
            labelOffset: -30
          }
        },
        osChart: {
          data: {
            series: [1300, 200, 605, 205, 100]
          },
          config: {
            labelInterpolationFnc: (value) => {
              return Math.round(value / this.osChart.data.series.reduce(sum) * 100) + '%';
            },
            startAngle: 0,
            donut: true,
            donutWidth: 20,
            labelPosition: 'outside',
            labelOffset: -30
          }
        }
      }
    },
    methods: {
      setActiveTab: function(tabName) {
        this.activeTab = tabName
        this.updateChart()
      },
      updateChart: function() {
        setTimeout(() => {
          let chartList = document.getElementsByClassName('ct-perfect-fourth')
          Array.from(chartList).forEach(chartist => {
            chartist.__chartist__.update()
          })
        }, 0)

      }
    }
  }
</script>