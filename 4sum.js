function summ(){
    reset1();
    re();
    document.getElementById("question").innerHTML="";
    ins=document.getElementById("input");
    ins.removeAttribute("hidden","true");
    ins.removeAttribute("type","text");
    inn=document.getElementById("answer");
    ins.setAttribute("type","number");
    sum=0;
    res="<p>The sum of squares = ";
    out=`<button type="button" onclick="array();"> CLICK </button>`;
    inn.innerHTML=out;
}
let sum;
function array(){
if(( ins.value)!=''){
    arr[index]=(ins.value);
    if (index===0) {
        out=out+`<p>The array is <p>`
    }
    sum=sum+(arr[index]*arr[index]);
    out=out+`${arr[index]}   `;
    
    inn.innerHTML=out+res+ sum+"</p>";
    index++;
    ins.value='';
}
}function summ(){
        reset1();
        re();
        document.getElementById("question").innerHTML="Question 4: Write a JavaScript program to find the sum of squares of the elements of an array."
        ins=document.getElementById("input");
        ins.removeAttribute("hidden","true");
        ins.setAttribute("placeholder","Enter a number");
        ins.removeAttribute("type","text");
        inn=document.getElementById("answer");
        ins.setAttribute("type","number");
        sum=0;
        res="<p>The sum of squares = ";
        out=`<button type="button" onclick="array();"> CLICK </button>`;
        inn.innerHTML=out;
}
let sum;
function array(){
    if(( ins.value)!=''){
        arr[index]=(ins.value);
        if (index===0) {
            out=out+`<p>The array is <p>`
        }
        sum=sum+(arr[index]*arr[index]);
        out=out+`${arr[index]}   `;
        
        inn.innerHTML=out+res+ sum+"</p>";
        index++;
        ins.value='';
    }
}