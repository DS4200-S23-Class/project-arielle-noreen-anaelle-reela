// initialize all data in the correct format
let data = {
  "Gender": [
    {
      "click": genderDrilldownHandler,
      "cursor": "pointer",
      "name": "Female",
      "color": "#F49AC2",
      "type": "column",
      "dataPoints": [
        {
          "label": "African American",
          "y": 38431.42857,
          "drilldown": "african_american_female"
        },
        {
          "label": "American Indian",
          "y": 746.5878598,
          "drilldown": "american_indian_female"
        },
        {
          "label": "Asian",
          "y": 134109.2405,
          "drilldown": "asian_female"
        },
        {
          "label": "Latino",
          "y": 79337.68756,
          "drilldown": "latino_female"
        },
        {
          "label": "More Than One Race",
          "y": 15125.5324,
          "drilldown": "more_than_one_race_female"
        },
        {
          "label": "Native Hawaiian",
          "y": 259.7744603,
          "drilldown": "native_hawaiian_female"
        },
        {
          "label": "White",
          "y": 918721.3206,
          "drilldown": "white_female"
        }
      ]
    },
    {
      "click": genderDrilldownHandler,
      "cursor": "pointer",
      "name": "Male",
      "color": "#5DA9E9",
      "type": "column",
      "dataPoints": [
        {
          "label": "African American",
          "y": 93651.06761,
          "drilldown": "african_american_male"
        },
        {
          "label": "American Indian",
          "y": 755.857128,
          "drilldown": "american_indian_male"
        },
        {
          "label": "Asian",
          "y": 408296.9438,
          "drilldown": "asian_male"
        },
        {
          "label": "Latino",
          "y": 174274.8457,
          "drilldown": "latino_male"
        },
        {
          "label": "More Than One Race",
          "y": 37005.32795,
          "drilldown": "more_than_one_race_male"
        },
        {
          "label": "Native Hawaiian",
          "y": 820.1903388,
          "drilldown": "native_hawaiian_male"
        },
        {
          "label": "White",
          "y": 1429143.629,
          "drilldown": "white_male"
        }
      ]
    }
  ],
  
    "african_american_female": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 1695.731426 },
          { label: "Computer and Information Scientist", y: 4040.771409 },
          { label: "Mathematical Scientist", y: 1 },
          { label: "Physical Scientist", y: 702.8652387 },
          { label: "Psychologist", y: 1 },
          { label: "Computer Engineer", y: 211.7777359 },
          { label: "Mechanical Engineer", y: 47.11213 },
          { label: "Civil Engineer", y: 217.6871 },
          { label: "Industrial Engineer", y: 147.3684 }
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 16040.70268 },
          { label: "Computer and Information Scientist", y: 4142.124091 },
          { label: "Mathematical Scientist", y: 1 },
          { label: "Physical Scientist", y: 5561.803193 },
          { label: "Psychologist", y: 1 },
          { label: "Computer Engineer", y: 2084.338769 },
          { label: "Mechanical Engineer", y: 610.7128 },
          { label: "Civil Engineer", y: 2075.802 },
          { label: "Industrial Engineer", y: 852.6316 }
        ]
      }
    
    ],
    "african_american_male": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 1459.307333 },
          { label: "Computer and Information Scientist", y: 12757.99656},
          { label: "Mathematical Scientist", y: 1},
          { label: "Physical Scientist", y: 1321.584639},
          { label: "Psychologist", y: 1 },
          { label: "Computer Engineer", y:  1817.348478},
          { label: "Mechanical Engineer", y:524.3124},
          { label: "Civil Engineer", y:  925.1701},
          { label: "Industrial Engineer", y:  589.4737}
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 13804.25856 },
          { label: "Computer and Information Scientist", y: 13077.99911},
          { label: "Mathematical Scientist", y: 1 },
          { label: "Physical Scientist", y:  10457.75671 },
          { label: "Psychologist", y: 1 },
          { label: "Computer Engineer", y: 17886.53502 },
          { label: "Mechanical Engineer", y: 6796.642 },
          { label: "Civil Engineer", y: 8822.157 },
          { label: "Industrial Engineer", y: 3410.526}
        ]
      }
    
    ],

    "american_indian_female": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 1 },
          { label: "Computer and Information Scientist", y: 1},
          { label: "Mathematical Scientist", y: 2.0 },
          { label: "Physical Scientist", y: 39.04807 },
          { label: "Psychologist", y: 38.98866},
          { label: "Computer Engineer", y: 2.0 },
          { label: "Mechanical Engineer", y: 2.0 },
          { label: "Civil Engineer", y: 2.0 },
          { label: "Industrial Engineer", y: 2.0 }
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 1 },
          { label: "Computer and Information Scientist", y: 1 },
          { label: "Mathematical Scientist", y: 2.0 },
          { label: "Physical Scientist", y: 308.9891 },
          { label: "Psychologist", y: 359.5621 },
          { label: "Computer Engineer", y: 2.0 },
          { label: "Mechanical Engineer", y: 2.0 },
          { label: "Civil Engineer", y: 2.0 },
          { label: "Industrial Engineer", y: 2.0}
        ]
      }
    
    ],
    "american_indian_male": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 1 },
          { label: "Computer and Information Scientist", y: 1},
          { label: "Mathematical Scientist", y:  2.0},
          { label: "Physical Scientist", y: 73.42136883},
          { label: "Psychologist", y: 9.924385633},
          { label: "Computer Engineer", y: 2.0},
          { label: "Mechanical Engineer", y: 2.0 },
          { label: "Civil Engineer", y: 2.0 },
          { label: "Industrial Engineer", y: 2.0}
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 1 },
          { label: "Computer and Information Scientist", y: 1},
          { label: "Mathematical Scientist", y: 2.0 },
          { label: "Physical Scientist", y: 580.9864838 },
          { label: "Psychologist", y: 91.52488973},
          { label: "Computer Engineer", y: 2.0},
          { label: "Mechanical Engineer", y: 2.0 },
          { label: "Civil Engineer", y:  2.0},
          { label: "Industrial Engineer", y:  2.0}
        ]
      }
    
    ],

    "asian_female": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 1747.117 },
          { label: "Computer and Information Scientist", y: 18921.07 },
          { label: "Mathematical Scientist", y: 2117.47 },
          { label: "Physical Scientist", y: 2147.644 },
          { label: "Psychologist", y: 233.9319 },
          { label: "Computer Engineer", y: 1058.889 },
          { label: "Mechanical Engineer", y: 353.341 },
          { label: "Civil Engineer", y: 725.6236 },
          { label: "Industrial Engineer", y: 324.2105 }
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y:  16526.78},
          { label: "Computer and Information Scientist", y:  19395.66},
          { label: "Mathematical Scientist", y:  27608.56},
          { label: "Physical Scientist", y: 16994.4 },
          { label: "Psychologist", y:  2157.372},
          { label: "Computer Engineer", y:  10421.69},
          { label: "Mechanical Engineer", y: 4580.346},
          { label: "Civil Engineer", y:  6919.339},
          { label: "Industrial Engineer", y:  1875.789}
        ]
      }
    
    ],
    "asian_male": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 1503.528768 },
          { label: "Computer and Information Scientist", y: 59739.82515 },
          { label: "Mathematical Scientist", y: 2868.830925 },
          { label: "Physical Scientist", y:  4038.175286 },
          { label: "Psychologist", y:  59.5463138 },
          { label: "Computer Engineer", y: 9086.742389 },
          { label: "Mechanical Engineer", y: 3932.343 },
          { label: "Civil Engineer", y: 3083.9 },
          { label: "Industrial Engineer", y:1296.842 }
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 14222.56942 },
          { label: "Computer and Information Scientist", y: 61238.24981 },
          { label: "Mathematical Scientist", y: 37405.14168 },
          { label: "Physical Scientist", y: 31954.25661 },
          { label: "Psychologist", y:  549.1493384 },
          { label: "Computer Engineer", y: 89432.67509  },
          { label: "Mechanical Engineer", y: 50974.82 },
          { label: "Civil Engineer", y: 29407.19 },
          { label: "Industrial Engineer", y: 7503.158 }
        ]
      }
    
    ],

    "latino_female": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y:  2672.062},
          { label: "Computer and Information Scientist", y: 4575.265},
          { label: "Mathematical Scientist", y: 725.9899},
          { label: "Physical Scientist", y: 1054.298 },
          { label: "Psychologist", y: 857.7505},
          { label: "Computer Engineer", y:288.7878 },
          { label: "Mechanical Engineer", y: 164.8925},
          { label: "Civil Engineer", y: 544.2177},
          { label: "Industrial Engineer", y: 383.1579}
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y:  25276.26 },
          { label: "Computer and Information Scientist", y: 4690.024 },
          { label: "Mathematical Scientist", y:  9465.791},
          { label: "Physical Scientist", y:  8342.705},
          { label: "Psychologist", y: 7910.365},
          { label: "Computer Engineer", y: 2842.28 },
          { label: "Mechanical Engineer", y: 2137.495 },
          { label: "Civil Engineer", y:  5189.504},
          { label: "Industrial Engineer", y: 2216.842 }
        ]
      }
    
    ],
    "latino_male": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 2299.515 },
          { label: "Computer and Information Scientist", y: 14445.56224 },
          { label: "Mathematical Scientist", y: 983.5991743 },
          { label: "Physical Scientist", y: 1982.376959 },
          { label: "Psychologist", y: 218.3364839 },
          { label: "Computer Engineer", y: 2478.20247 },
          { label: "Mechanical Engineer", y: 1835.093 },
          { label: "Civil Engineer", y: 2312.925 },
          { label: "Industrial Engineer", y: 1532.632 }
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 21752.17 },
          { label: "Computer and Information Scientist", y: 14807.89317 },
          { label: "Mathematical Scientist", y: 12824.62 },
          { label: "Physical Scientist", y: 15686.63506 },
          { label: "Psychologist", y: 2013.547574 },
          { label: "Computer Engineer", y: 24390.72957 },
          { label: "Mechanical Engineer", y: 23788.25 },
          { label: "Civil Engineer", y:  22055.39 },
          { label: "Industrial Engineer", y: 8867.368 }
        ]
      }
    
    ],

    "more_than_one_race_female": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y:  359.7006 },
          { label: "Computer and Information Scientist", y:  1795.898},
          { label: "Mathematical Scientist", y:  120.9983},
          { label: "Physical Scientist", y: 273.3365 },
          { label: "Psychologist", y: 155.9546 },
          { label: "Computer Engineer", y: 67.38383 },
          { label: "Mechanical Engineer", y:  35.3341},
          { label: "Civil Engineer", y: 54.42177 },
          { label: "Industrial Engineer", y: 29.47368 }
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y:  3402.573 },
          { label: "Computer and Information Scientist", y: 1840.944 },
          { label: "Mathematical Scientist", y: 1577.632 },
          { label: "Physical Scientist", y: 2162.923 },
          { label: "Psychologist", y: 1438.248 },
          { label: "Computer Engineer", y: 663.1987 },
          { label: "Mechanical Engineer", y: 458.0346 },
          { label: "Civil Engineer", y: 518.9504 },
          { label: "Industrial Engineer", y: 170.5236 }
        ]
      }
    ],
    "more_than_one_race_male": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y:   309.5},
          { label: "Computer and Information Scientist", y: 5670.220693  },
          { label: "Mathematical Scientist", y:  163.9331957 },
          { label: "Physical Scientist", y: 513.9495818 },
          { label: "Psychologist", y: 39.69754253  },
          { label: "Computer Engineer", y:  578.2472429 },
          { label: "Mechanical Engineer", y: 393.2343 },
          { label: "Civil Engineer", y: 231.2925 },
          { label: "Industrial Engineer", y: 117.8947 }
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y:  2928.176 },
          { label: "Computer and Information Scientist", y: 5812.44405 },
          { label: "Mathematical Scientist", y: 2137.436667 },
          { label: "Physical Scientist", y: 4066.905387 },
          { label: "Psychologist", y: 366.0995589 },
          { label: "Computer Engineer", y:  5691.170233 },
          { label: "Mechanical Engineer", y: 5097.482 },
          { label: "Civil Engineer", y: 2205.539 },
          { label: "Industrial Engineer", y: 682.1053 }
        ]
      }
    ],

    "native_hawaiian_female": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y:  1 },
          { label: "Computer and Information Scientist", y: 128.2785  },
          { label: "Mathematical Scientist", y: 2.0  },
          { label: "Physical Scientist", y: 1 },
          { label: "Psychologist", y:   2.0},
          { label: "Computer Engineer", y:   1},
          { label: "Mechanical Engineer", y:  2.0},
          { label: "Civil Engineer", y: 2.0 },
          { label: "Industrial Engineer", y:  2.0}
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y:   1},
          { label: "Computer and Information Scientist", y:  131.496},
          { label: "Mathematical Scientist", y:  2.0},
          { label: "Physical Scientist", y: 1 },
          { label: "Psychologist", y:  2.0},
          { label: "Computer Engineer", y:   1 },
          { label: "Mechanical Engineer", y:  2.0},
          { label: "Civil Engineer", y:  2.0},
          { label: "Industrial Engineer", y: 2.0 }
        ]
      }
    ],
    "native_hawaiian_male": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 1  },
          { label: "Computer and Information Scientist", y: 405.0157638  },
          { label: "Mathematical Scientist", y: 2.0  },
          { label: "Physical Scientist", y: 1 },
          { label: "Psychologist", y: 2.0  },
          { label: "Computer Engineer", y:  1 },
          { label: "Mechanical Engineer", y: 2.0 },
          { label: "Civil Engineer", y: 2.0 },
          { label: "Industrial Engineer", y: 2.0 }
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y:  1 },
          { label: "Computer and Information Scientist", y: 415.174575 },
          { label: "Mathematical Scientist", y: 2.0 },
          { label: "Physical Scientist", y: 1 },
          { label: "Psychologist", y: 2.0 },
          { label: "Computer Engineer", y:  1 },
          { label: "Mechanical Engineer", y: 2.0 },
          { label: "Civil Engineer", y:  2.0},
          { label: "Industrial Engineer", y:  2.0}
        ]
      }
    ],

    "white_female": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y:  13308.92 },
          { label: "Computer and Information Scientist", y: 43122.94  },
          { label: "Mathematical Scientist", y:  7320.398 },
          { label: "Physical Scientist", y: 11714.42 },
          { label: "Psychologist", y:  6082.231 },
          { label: "Computer Engineer", y:  2281.424},
          { label: "Mechanical Engineer", y:  1607.701},
          { label: "Civil Engineer", y: 3773.243 },
          { label: "Industrial Engineer", y: 1886.316 }
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y:  125895.2 },
          { label: "Computer and Information Scientist", y: 44204.57297  },
          { label: "Mathematical Scientist", y: 95446.72546 },
          { label: "Physical Scientist", y: 92696.71989 },
          { label: "Psychologist", y: 56091.68242 },
          { label: "Computer Engineer", y: 22454.0131},
          { label: "Mechanical Engineer", y: 20840.57 },
          { label: "Civil Engineer", y: 359080.56 },
          { label: "Industrial Engineer", y:  10913.68}
        ]
      }
    ],
    "white_male": [
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "With Disability",
        color: "#FFB347",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 11453.35149  },
          { label: "Computer and Information Scientist", y: 136152.7992  },
          { label: "Mathematical Scientist", y:  9917.958341 },
          { label: "Physical Scientist", y: 22026.41065  },
          { label: "Psychologist", y: 1548.204159  },
          { label: "Computer Engineer", y: 19577.79951  },
          { label: "Mechanical Engineer", y: 17892.16 },
          { label: "Civil Engineer", y: 16036.28 },
          { label: "Industrial Engineer", y: 7545.263 }
        ]
      },
      {
        click: disabilityDrillDownHandler,
        cursor: "pointer",
        name: "Without Disability",
        color: "#B19CD9",
        type: "column",
        dataPoints: [
          { label: "Social Scientist", y: 108342.5  },
          { label: "Computer and Information Scientist", y: 139567.853 },
          { label: "Mathematical Scientist", y: 129314.9184 },
          { label: "Physical Scientist", y: 174295.9451 },
          { label: "Psychologist", y: 14277.8828 },
          { label: "Computer Engineer", y:  192686.7636 },
          { label: "Mechanical Engineer", y: 231935.4 },
          { label: "Civil Engineer", y: 152917.4 },
          { label: "Industrial Engineer", y:  43654.74}
        ]
      }
    ]
  };

  // create chartarray to append each chart to use for backbutton function
  let chartArray = [];

  // create a new canvasjs chart
  let chart = new CanvasJS.Chart("chartContainer", {
    //add a title 
    title:{
      text: "Representation of Various Demographic Groups in STEM Fields",
      fontFamily: "tahoma",
    },
    //enable animation
    animationEnabled: true,
    // create y axis with label count
    axisY: {
      title: "Count",
      fontFamily: "tahoma",
    },
    // create x axis with label race/ethnic group by sec
    axisX: {
      title: "Race/Ethnic Group by Sex",
      fontFamily: "tahoma",
    },
    //data for chart comes from all the child elements of the parent 'gender' in our data variable
    data: data["Gender"],
    //manually create tooltip with parameters sex, race, and total that shows up when user hovers over bar
    toolTip: {
      shared: false,
      content:"Sex: {name} <br/> Race: {label} <br/> Total: {y}"
  
    },
    // define the legend properties of the chart
    legend: {
      //cursor style is pointer so that the bars are clickable
      cursor: "pointer",
      //create function itemclick called when a user clicks on a bar
      itemclick: function (e) {
        // 'if statement' checks if the data associated with the bar has been clicked before
        // if the data isn't already visible, then make it visible
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          // hide chart
          e.dataSeries.visible = false;
        } else {
          //make chart visible
          e.dataSeries.visible = true;
        }
        // rerenders the chart after the data visibility changes
        chart.render();
      }
    }
  });
  //renders the chart initially after all the properties have been set
  chart.render();

  //append the chart to the array
  chartArray.push(chart);

  //establishing the race and gender variable for the pie chart as a global variable
  let race;
  let gender; 

  //create a new function that handles the first drilldown (i.e what happens after you click a bar on the first chart)
  function genderDrilldownHandler(e) {

    // getting the formatted axis title
    let group = e.dataPoint.drilldown;
    let words = group.split("_");
    let title = "";
    for(i = 0; i<words.length; i++){
      title+= words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
    }
    title = title.trim() + "s";
  
    let newChart = new CanvasJS.Chart("chartContainer", {

      //enable animation
      animationEnabled: true,
      // create a y axis titled count
      axisY: {
        title: "Count",
      fontFamily: "tahoma",
      },
      // create an x axis titled occupation by disability status
      // + e.dataPoint.drilldown changes title to the race & gender the user selected in the previous chart
      axisX: {
        title: "Occupation by Disability Status Among " + title,
        fontFamily: "tahoma",
      },
      // grab data associated with which race and gender user chose from previous graph
      data: data[e.dataPoint.drilldown],
      //create a tooltip
      toolTip: {
        shared: false,
        // manually change the content: status is with or without disability, total is the number of employees in that demographic
        content: "Status: {name}, Total: {y}"
      },
      legend: {
        // mimic same legend as first chart
        cursor: "pointer",
        itemclick: function (e) {
          if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          newChart.render();
        }
      }
    });
    // append the new chart to our array of charts 
    chartArray.push(newChart);
    newChart.render();
    
    // display the back button in block form
    // block form takes the entire width available and adds a new line before and after the button
    backButton.style.display = "block"; 
    //overwriting race variable
    race = e.dataPoint.drilldown;
   
    
   
  } 

  // 
  function disabilityDrillDownHandler(e) {

    //ensure that the click grabbed the right race
    console.log(race)
     // getting the formatted axis title
     let words = race.split("_");
     let title = "";
     for(i = 0; i<words.length; i++){
       title+= words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
     }
     title = title.trim() + "s";
     console.log(title);
   

    // save the occupation user selected to use when making the pie chart
    let selectedOccupation = e.dataPoint.label;

    //ensure that the click grabbed the right occupation
    console.log(selectedOccupation)
    

   //make an array of the with and without disability values
  // Accessing data points for "Physical Scientist" with disability
  let occupationwithdisability = null;
  let racewithdisability = data[race][0]["dataPoints"];

// Loop through each item in the racewithdisability array
  for (i = 0; i < racewithdisability.length; i++) {

    // Check if the "label" property of the current item in the loop is equal to the selectedOccupation variable
    if (racewithdisability[i]["label"] === selectedOccupation) {

      // If the label matches, assign the "y" property value of that item to the occupationwithdisability variable
      occupationwithdisability = racewithdisability[i]["y"];
      break;
    }
  }

  // Accessing data points for "Physical Scientist" without disability
  //function is same process as above function
  let occupationwithoutdisability = null;
  
  // note that we are grabbing data[race][1]["dataPoints"] as opposed to data[race][0]["dataPoints"] like above
  //this is because the data for without disability is in the 1st position of data[race]
  let racewithoutdisability = data[race][1]["dataPoints"];
  for (let i = 0; i < racewithoutdisability.length; i++) {
    if (racewithoutdisability[i]["label"] === selectedOccupation) {
      occupationwithoutdisability = racewithoutdisability[i]["y"];
      break;
    }
  }

  // Printing the values
  console.log(race + selectedOccupation + "with disability: " + occupationwithdisability);
  console.log(race + selectedOccupation+ "without disability: " + occupationwithoutdisability);



    //create the pie chart
    let piechart = new CanvasJS.Chart("chartContainer",
  {
    title:{
      text: "Distribution of " + title + " With/Without Disability in " + selectedOccupation,
      fontFamily: "tahoma",
    },
    legend: {
      maxWidth: 350,
      itemWidth: 120
    },

    data: [
    {
      type: "pie",
      showInLegend: true,
      legendText: "{indexLabel}",
      dataPoints: [
        { y: occupationwithdisability, indexLabel: "With Disability", color:"#FFB347"},
        { y: occupationwithoutdisability, indexLabel: "Without Disability", color:"#B19CD9"}]
    }
    ]
   
  });
  piechart.render();
}
  



// create a new variable currentchartindex
let currentChartIndex = 0;

backButton.addEventListener("click", function() {
  // remove the current chart from the chartArray
  chartArray.pop();

  // update the current chart index
  currentChartIndex = chartArray.length - 1;

  // get the previous chart from the chartArray
  let prevChart = chartArray[currentChartIndex].options;

  
  // create a new chart using the options of the previous chart
  chart = new CanvasJS.Chart("chartContainer", prevChart); 

  // render the new chart
  chart.render();

// back button doesn't show up on first chart
  if (chartArray.length =1) {
    backButton.style.display = "none";
  } 
  
});



  //Logging data in the console

  d3.csv("/data/pm03_data.csv").then((data) => {
    console.log("PRINT 10 ROWS FROM CSV")
    for(i = 0; i<11; i++){
      console.log(data[i])
    }
    // console.log(data[10]);
  });
 

 
 d3.json("/data/pm03_data_filled.json").then(function(dataset) {
  console.log("PRINTED JSON DATA");
  console.log(dataset);
});

