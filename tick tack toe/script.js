const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");

let toggled1 = false
function xfn1(){
    const img = document.getElementById('btnimg1');
    if (toggled1){
        img.src = "X.png";
    }else{
        img.src = "transparent.jpg";
    }
    toggled1 = !toggled1
}
let toggled2 = false
function xfn2(){
    const img = document.getElementById('btnimg2');
    if (toggled2){
        img.src = "X.png";
    }else{
        img.src = "transparent.jpg";
    }
    toggled2 = !toggled2
}
let toggled3 = false
function xfn3(){
    const img = document.getElementById('btnimg3');
    if (toggled3){
        img.src = "X.png";
    }else{
        img.src = "transparent.jpg";
    }
    toggled3 = !toggled3
}
let toggled4 = false
function xfn4(){
    const img = document.getElementById('btnimg4');
    if (toggled4){
        img.src = "X.png";
    }else{
        img.src = "transparent.jpg";
    }
    toggled4 = !toggled4
}
let toggled5 = false
function xfn5(){
    const img = document.getElementById('btnimg5');
    if (toggled5){
        img.src = "X.png";
    }else{
        img.src = "transparent.jpg";
    }
    toggled5 = !toggled5
}
let toggled6 = false
function xfn6(){
    const img = document.getElementById('btnimg6');
    if (toggled6){
        img.src = "X.png";
    }else{
        img.src = "transparent.jpg";
    }
    toggled6 = !toggled6
}
let toggled7 = false
function xfn7(){
    const img = document.getElementById('btnimg7');
    if (toggled7){
        img.src = "X.png";
    }else{
        img.src = "transparent.jpg";
    }
    toggled7 = !toggled7
}
let toggled8 = false
function xfn8(){
    const img = document.getElementById('btnimg8');
    if (toggled8){
        img.src = "X.png";
    }else{
        img.src = "transparent.jpg";
    }
    toggled8 = !toggled8
}
let toggled9 = false
function xfn9(){
    const img = document.getElementById('btnimg9');
    if (toggled9){
        img.src = "X.png";
    }else{
        img.src = "transparent.jpg";
    }
    toggled9 = !toggled9
}
button1.onclick = xfn1;
button2.onclick = xfn2;
button3.onclick = xfn3;
button4.onclick = xfn4;
button5.onclick = xfn5;
button6.onclick = xfn6;
button7.onclick = xfn7;
button8.onclick = xfn8;
button9.onclick = xfn9;