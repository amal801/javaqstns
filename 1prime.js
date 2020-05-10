function re(){ 
    document.getElementById("result").innerHTML=`<h3 id="question"></h3><br>
    <input id="input" type="text" hidden=true><br>
    <div id="answer"></div>`;
}


let arr=[];
let index=0;
var ins=document.getElementById("input");
var out='';
let inn=document.getElementById("answer");
function reset1(){
    out='';
    arr=[];
    index=0;
    res='';
}

function prime(){
        reset1();
        re();
        document.getElementById("question").innerHTML=""
        ins=document.getElementById("input");
        ins.removeAttribute("hidden","true");
        ins.removeAttribute("type","text");     
        ins.setAttribute("type","number");
        inn=document.getElementById("answer");
        out=`<button type="button" onclick="array();">CLICK</button>`;
        inn.innerHTML=out;
}
function array(){
    
    if(( ins.value)!=''){
        arr[index]=parseInt(ins.value);
        
        if (index===0) {
            let isPrime="Prime";
            for (let i = 2; i <= parseInt(ins.value)/2; i++) {
                if (parseInt(ins.value)%i===0) {
                    isPrime="Not Prime";
                    break;
                }
                
            }
            if (arr[index]==0||arr[index]==1) {
                isPrime="Not Prime";
            }
            out=out+`<p> 1st number (${arr[index]}) is ${isPrime}<p> <p>The array is </p>`;
            
        }

        out=out+`${arr[index]}   `
        inn.innerHTML=out;
        index++;
        ins.value='';
    }
}