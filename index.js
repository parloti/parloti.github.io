window.onload=main;
var canvas,ctx, anticlockwise=false,startAngle,endAngle,mouthAngle=0;

function main(){
    canvas=document.getElementById("game");
    ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-over';
    draw();
}
function toRadians(deg) {
    return deg * Math.PI / 180
}
function draw () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.arc(canvas.width / 2+15, canvas.height / 2-20, 5, 0, Math.PI*2, anticlockwise);
    ctx.fill();
    ctx.closePath();


    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 0)";
    mouthAngle++;
    if(mouthAngle>30){
        mouthAngle=0;
    }
    startAngle=mouthAngle*Math.PI/180;
    endAngle=Math.PI *2-startAngle;
    ctx.arc(canvas.width / 2, canvas.height / 2, 50, startAngle, endAngle, anticlockwise);
    ctx.lineTo(canvas.width / 2,canvas.height / 2);
    ctx.closePath();
    ctx.fill();


    window.requestAnimationFrame(draw);
}