

$("#show-menu").on("click", function () {
  $("#hidden-menu").animate({
    "right": 0}, 500);
});
$("#hidden-menu .close").on("click", function () {
  $("#hidden-menu").animate({
    "right": -400}, 250);
});

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

 function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();


window.onload = function () {

    var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}, {x: 11, y: 13}, {x: 12, y: 18}, {x: 13, y: 20}, {x: 14, y: 17},{x: 15, y: 10}, {x: 16, y: 13}, {x: 17, y: 18}, {x: 18, y: 20}, {x: 19, y: 17}];   //dataPoints.
    var dps1 = [{x: 1, y: 7}, {x: 2, y: 6}, {x: 3, y: 6}, {x: 4, y: 14}, {x: 5, y: 8},{x: 6, y: 15}, {x: 7, y: 12}, {x: 8, y: 17}, {x: 9, y: 10}, {x: 10, y: 11}, {x: 11, y: 2}, {x: 12, y: 5}, {x: 13, y: 10}, {x: 14, y: 8},{x: 15, y: 8}, {x: 16, y: 14}, {x: 17, y: 15}, {x: 18, y: 18}, {x: 19, y: 6}];
    var dps2 = [{x: 1, y: 9}, {x: 2, y: 19}, {x: 3, y: 8}, {x: 4, y: 8}, {x: 5, y: 11},{x: 6, y: 17}, {x: 7, y: 19}, {x: 8, y: 12}, {x: 9, y: 18}, {x: 10, y: 14}, {x: 11, y: 4}, {x: 12, y: 14}, {x: 13, y: 11}, {x: 14, y: 10},{x: 15, y: 15}, {x: 16, y: 18}, {x: 17, y: 9}, {x: 18, y: 11}, {x: 19, y: 16}];
    var dps3 = [{x: 1, y: 10}, {x: 2, y: 15}, {x: 3, y: 3}, {x: 4, y: 11}, {x: 5, y: 14},{x: 6, y: 4}, {x: 7, y: 8}, {x: 8, y: 10}, {x: 9, y: 14}, {x: 10, y: 17}, {x: 11, y: 10}, {x: 12, y: 4}, {x: 13, y: 12}, {x: 14, y: 4},{x: 15, y: 7}, {x: 16, y: 11}, {x: 17, y: 4}, {x: 18, y: 17}, {x: 19, y: 14}];
    var chart = new CanvasJS.Chart("chartContainer",{
      title :{
        text: "Нагрузка на сеть"
      },
      axisX: {
        title: "Время"
      },
      axisY: {
        title: "Количество запросов"
      },
      data: [{
        type: "line",
        dataPoints : dps
      }]
    });
    var chart1 = new CanvasJS.Chart("chartContainer1",{
      title :{
        text: "Средняя нагрузка процессоров"
      },
      axisX: {
        title: "Время"
      },
      axisY: {
        title: "Проценты"
      },
      data: [{
        type: "line",
        dataPoints : dps1
      }]
    });
    var chart2 = new CanvasJS.Chart("chartContainer2",{
      title :{
        text: "Средняя нагрузка жёстких дисков"
      },
      axisX: {
        title: "Время"
      },
      axisY: {
        title: "Проценты"
      },
      data: [{
        type: "line",
        dataPoints : dps2
      }]
    });
    var chart3 = new CanvasJS.Chart("chartContainer3",{
      title :{
        text: "Нагрузка базы данных"
      },
      axisX: {
        title: "Время"
      },
      axisY: {
        title: "Проценты"
      },
      data: [{
        type: "line",
        dataPoints : dps3
      }]
    });


    chart.render();
    chart1.render();
    chart2.render();
    chart3.render();

    var xVal = dps.length;

    var updateInterval = 1000;

    var updateChart = function () {


      /*yVal =  Math.round(30 * Math.abs(Math.sin(Math.round(5 + Math.random() *(4+4)))));*/
yVal =  Math.abs( Math.round(4*Math.sin(0.5*xVal)+3*Math.sin(1*xVal)+5*Math.sin(1.5*xVal)+2*Math.sin(2*xVal)+1*Math.sin(2.5*xVal) + Math.random(0+5)))+ 3;
yVal1 =  Math.round((Math.abs( Math.round(3*Math.sin(10*xVal)+2.5*Math.sin(20*xVal)+2.5*Math.sin(30*xVal) + Math.random(1+2)))+ 4)/13*100);
yVal2 =  Math.round((Math.abs( Math.round(0.2*Math.sin(xVal)+0.2*Math.cos(xVal) +0.5*Math.sin(2*xVal) +0.2*Math.cos(2*xVal) + 0.2*Math.sin(3*xVal)+0.1*Math.cos(3*xVal) + Math.random(1+2)))+ 4)/12*100);
yVal3 =  Math.round((Math.abs( Math.round(2*Math.sin(0.5*xVal) + 0.5*Math.cos(0.9*xVal) + 2*Math.sin(0.3*xVal)+ 3*Math.cos(0.2*xVal) + 0.3*Math.sin(0.1*xVal) + 5*Math.cos(0.1*xVal) + 0.9*Math.sin(1.5*xVal) + 0.8*Math.cos(2*xVal)+ Math.random(1+2)))+ 4)/20.5*100);

      dps.push({x: xVal,y: yVal});
dps1.push({x: xVal,y: yVal1});
dps2.push({x: xVal,y: yVal2});
dps3.push({x: xVal,y: yVal3});
      xVal++;
      if (dps.length >  2 )
      {
        dps.shift();
        dps1.shift();
        dps2.shift();
        dps3.shift();
      }

      chart.render();
      chart1.render();
        chart2.render();
          chart3.render();

document.getElementById('output1').innerHTML = yVal;
document.getElementById('output2').innerHTML = yVal1 + "%";
document.getElementById('output3').innerHTML = yVal2 + "%";
document.getElementById('output4').innerHTML = yVal3 + "%";
document.getElementById('rand').innerHTML = (yVal3 - 6) + "  C";
document.getElementById('rand1').innerHTML = (yVal3  + 31) + "  м/бит в сек";
document.getElementById('rand2').innerHTML = (yVal3 + 23) + " %";
document.getElementById('rand3').innerHTML = (yVal3  + 7) + "  C";
document.getElementById('rand4').innerHTML = (yVal3  + 28) + "  м/бит в сек";
document.getElementById('rand5').innerHTML = (yVal3 + 5) + " %";
document.getElementById('rand6').innerHTML = (yVal3  - 10) + "  C";
document.getElementById('rand7').innerHTML = (yVal3  - 19) + "  м/бит в сек";
document.getElementById('rand8').innerHTML = (yVal3 + 3) + " %";
document.getElementById('rand9').innerHTML = (yVal3  - 5) + "  м/бит в сек";
document.getElementById('rand10').innerHTML = (yVal3  + 4 ) + " %";
document.getElementById('rand11').innerHTML = (yVal3  - 7) + "  C";
if (yVal == 3 && yVal2 > 45) {
  alert("Проблемы с скоростью интернет-соединения в компьютере 3", 12000)
}
if (yVal1 > 80) {
  alert('Проблемы с температурой процессора в компьютере 2', 12000)
}
};
//обновл кажд отр врем

setInterval(function(){updateChart()}, updateInterval);


}
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();
document.getElementById('ones').onclick = function() {
  document.getElementById('twice').classList.add('but');
  if (twice.innerHTML == "") {
   twice.innerHTML = "Новый сервис";
 }

}
