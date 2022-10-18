function soma(){
    var num1 =document.getElementById("num1").value;
    var num2 =document.getElementById("num2").value;
    var re =document.getElementById("re");
    num1=parseInt(num1);
    num2=parseInt(num2);
    re.innerHTML="Resultado: "+(num1+num2);
    }

function mult(){
    var num1 =document.getElementById("num1").value;
    var num2 =document.getElementById("num2").value;
    var re =document.getElementById("re");
    num1=parseInt(num1);
    num2=parseInt(num2);
    re.innerHTML="Resultado: "+(num1*num2);
    }

function subt(){
    var num1 =document.getElementById("num1").value;
    var num2 =document.getElementById("num2").value;
    var re =document.getElementById("re");
    num1=parseInt(num1);
    num2=parseInt(num2);
    re.innerHTML="Resultado: "+(num1-num2);
    }

function divi(){
    var num1 =document.getElementById("num1").value;
    var num2 =document.getElementById("num2").value;
    var re =document.getElementById("re");
    num1=parseInt(num1);
    num2=parseInt(num2);
    re.innerHTML="Resultado: "+(num1/num2);
    if((num1==0 || num2==0)){
    re.innerHTML="Resultado: 0"
    }
    }