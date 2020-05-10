function oddeven(){
    reset1();
    re();
    document.getElementById("question").innerHTML="";
    ins=document.getElementById("input");
    ins.removeAttribute("hidden","true");
    ins.removeAttribute("type","text");
    inn=document.getElementById("answer");
    out=`<button type="button" onclick="oddorven();"> CLICK </button>`;
    inn.innerHTML=out;
    out="<h3><u>The output</u> </h3><br>";
}
function oddorven(){
    for (let i = 0; i <=15; i++) {
        if(i%2==0){
            out=out+`<p>${i}    : even </p>`

        }else{
            out=out+`<p>${i}    : Odd </p>`
        }

        
    }
    inn.innerHTML=out;
}