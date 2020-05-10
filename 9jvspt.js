function jvspt(){
    reset1();
    re();
    document.getElementById("question").innerHTML=`
    <h3>J </h3><h3>Ja </h3><h3>Jav </h3><h3>------ </h3>`;
    inn=document.getElementById("answer");
    out=`<button type="button" onclick="java();"> CLICK </button>`;
    inn.innerHTML=out;
    out="<h3><u>The output</u> </h3><br>";
    
}
let text="Javascript";
function java(){
    let answer='';
    for(let x of text){
        answer=answer+" "+x;
        res=res+`<h3>${answer}<h3>`
        
    }
    inn.innerHTML=out+res;
}