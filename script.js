var random =  function(N,M){    
    console.log(N,M);
  return Math.floor(Math.random()*(M-N+1)+N);
};

d3.select("svg1")
    .append("rect")
    .attr({
        "x": 10,
        "y": 10,
        "width": 20,
        "height": 10,
        "fill": "red"
    });
       
    <script>
      function launch(){
          var number = random(1,50);
          console.log(number);
          d3.select("p").text(number);

      }
  
    </script>


