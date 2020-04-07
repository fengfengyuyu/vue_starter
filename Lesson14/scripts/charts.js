var chartData = [
  {
    key: "Cumulative Return",
    values: [
      { 
        "label" : "A" ,
        "value" : -29.765957771107
      } , 
      { 
        "label" : "B" , 
        "value" : 0
      } , 
      { 
        "label" : "C" , 
        "value" : 32.807804682612
      } , 
      { 
        "label" : "D" , 
        "value" : 196.45946739256
      }
    ]
  }
];

var drawChart = function() {
	nv.addGraph(function() {
	  var chart = nv.models.discreteBarChart()
	    .x(function(d) { return d.label })
	    .y(function(d) { return d.value })
	    .staggerLabels(true)
	    .showValues(true)

	  d3.select('#chart svg')
	    .datum(chartData)
	    .transition().duration(500)
	    .call(chart)
	    ;

	  nv.utils.windowResize(chart.update);

	  return chart;
	});
}