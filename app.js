const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(evnet) {
    painting = false;
}

function startPainting() {
    stopPainting = true;
}
//캔버스에서의 좌표값 받아오기
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        //클릭을 하고 움직이면(페인팅 시작하면) 이 부분은 작동하지 않음. 
    }
    else {
        ctx.lineTo();
        ctx.stroke();
    }
}
//마우스를 클릭한 상태 
function onMouseDown(event) {
    painting = true;
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mouseup", stopPainting)
    //stopPainting을 안넣은 이유 : 마우스를 떼도 라인이 필요. 
    canvas.addEventListener("mouseleave", stopPainting) //캔버스를 벗어남
}