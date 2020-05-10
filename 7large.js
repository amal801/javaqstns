
function lrg(){
    reset1();
    re();
    document.getElementById("question").innerHTML="";
    ins=document.getElementById("input");
    ins.removeAttribute("hidden","true");
    ins.removeAttribute("type","text");     
    ins.setAttribute("type","number");
    inn=document.getElementById("answer");
    out=`<br><input type="number" id="num2" ><br>
    <button type="button" onclick="large();"> CLICK </button>`;
    inn.innerHTML=out;

}

function large(){
    let answer='';
    ins=document.getElementById("input");
    let num1=parseInt(ins.value);
    let num2=parseInt(document.getElementById("num2").value);
    if (num1!=''&&num2!='') {
        
    
    if(num1>num2){
        answer="1st one is larger";

    }else if (num1===num2) {
        answer="they are same "
    }else{
        answer="2nd one is larger";
    }
    res=`<p> num 1: ${num1}</p><p> num 2 : ${num2} </p>`;
    
    inn.innerHTML=out+res+"<p>"+answer+"</p>";;
    res='';
    ins.value='';
    }   
}