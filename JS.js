let randNum = Math.floor(Math.random() * 101);
var clicks = 0;


function GN() {
    clicks += 1;
    const h = document.getElementById('G_N').value;
    if (h == randNum){
        alert("ถูกต้อง คุณเดาไปจำนวน"+clicks+" ครั้ง");
    }else if (h > randNum){
        alert("มากกว่า");
    }else if (h < randNum){
        alert("น้อยกว่า");
    }
    
}