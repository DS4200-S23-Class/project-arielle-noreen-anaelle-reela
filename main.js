var categories = []
var data = {
    "Gender": [
      {
        click: genderDrilldownHandler,
        cursor: "pointer",
        name: "Female",
        type: "column",
        dataPoints: [
          {
            label: "African American",
            y: 23036,
            drilldown: "african_american"
          }
        ]
      },
      {
        click: genderDrilldownHandler,
        cursor: "pointer",
        name: "Male",
        type: "column",
        dataPoints: [
          {
            label: "African American",
            y: 37411,
            drilldown: "african_american"
          }
        ]
      }
    ],
  
    "african_american": [
      {
        click: wildAnimalsDrilldownHandler,
        cursor: "pointer",
        name: "With Disability",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 1695.731426 },
          { label: "Computer and Information Scientist", y: 4040.771409 },
          { label: "Mathematical Scientist", y: -1 },
          { label: "Physical Scientist", y: 702.8652387 },
          { label: "Psychologist", y: -1 },
          { label: "Computer Engineer", y: 211.7777359 },
          { label: "Mechanical Engineer", y: 47.11213 },
          { label: "Civil Engineer", y: 217.6871 },
          { label: "Industrial Engineer", y: 147.3684 }
        ]
      },
      {
        click: petAnimalsDrilldownHandler,
        cursor: "pointer",
        name: "Without Disability",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 16040.70268 },
          { label: "Computer and Information Scientist", y: 4142.124091 },
          { label: "Mathematical Scientist", y: -1 },
          { label: "Physical Scientist", y: 5561.803193 },
          { label: "Psychologist", y: -1 },
          { label: "Computer Engineer", y: 2084.338769 },
          { label: "Mechanical Engineer", y: 610.7128 },
          { label: "Civil Engineer", y: 2075.802 },
          { label: "Industrial Engineer", y: 852.6316 }
        ]
      }
    ]
  };

  var chart = new CanvasJS.Chart("chartContainer", {
    title:{
      text: "Sample Chart"
    },
    animationEnabled: true,
    axisY: {
      title: "Count"
    },
    axisX: {
      title: "Occupation"
    },
    data: data["Gender"],
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: function (e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart.render();
      }
    }
  });
  
  function genderDrilldownHandler(e) {
    chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      axisY: {
        title: "Count"
      },
      axisX: {
        title: "Occupation"
      },
      data: data[e.dataPoint.drilldown],
      toolTip: {
        shared: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e) {
          if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          chart.render();
        }
      }
    });
  
    chart.render();
  }
  
  function wildAnimalsDrilldownHandler(e) {
    chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      axisY: {
        title: "Count"
      },
      axisX: {
        title: "Occupation"
      },
      data: data[e.dataPoint.drilldown],
      toolTip: {
        shared: true
      }
    });
  
    chart.render();
  }
  
  function petAnimalsDrilldownHandler(e) {
    chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      axisY: {
        title: "Count"
      },
      axisX: {
        title: "Occupation"
      },
      data: data[e.dataPoint.drilldown],
      toolTip: {
        shared: true
      }
    });
  
    chart.render();
  }
  