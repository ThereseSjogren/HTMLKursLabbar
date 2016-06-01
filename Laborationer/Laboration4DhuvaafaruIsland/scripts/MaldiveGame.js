$(document).ready(function () {
    drawAquarium();
});
function drawAquarium() {
    var canvas = document.getElementById('MyMaldiveCanvas');
    var context = canvas.getContext('2d');
    context.strokeStyle = "black";
    context.strokeRect(20, 20, 150, 100);
    context.shadowBlur = 25;
    context.shadowOffsetX = 15;
    context.shadowOffsetY = 15;
    context.shadowColor = "black";
    context.fillStyle = "lightblue";
    context.fillRect(20, 20, 150, 100);
    
}
