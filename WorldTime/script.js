(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var w = 500, h=200;
	for(var i = 0; i<5; i++){
		 ctx.beginPath();
		 ctx.moveTo(Math.random()*w, Math.random()*h);
		 ctx.lineTo(Math.random()*w, Math.random()*h);
		 //ctx.bezierCurveTo(Math.random()*w, Math.random()*h);
		 ctx.stroke();
	}

	var indiaTime = document.getElementById('current-time');
	var londonTime = document.getElementById('current-time_b');
	var d = new Date();
	indiaTime.innerHTML = d.toTimeString();
  londonTime.innerHTML = d.toGMTString();




});


})();
