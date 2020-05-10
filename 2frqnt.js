
function frqnt(){
    re(); 
    reset1();
    document.getElementById("question").innerHTML=""
     ins=document.getElementById("input");
     ins.removeAttribute("hidden","true");
     inn=document.getElementById("answer");
     out=`<button type="button" onclick="array();">CLICK</button><button type="button" onclick="ans();">FREQUENT</button>`;
     inn.innerHTML=out;
 }
 let res='';
 function array(){
     
     if(( ins.value)!=''){
         arr[index]=(ins.value);
         if (index===0) {
             res=res+`<p> array is <p>`
         }
         
 
         res=res+`${arr[index]}   `
         inn.innerHTML=out+res;
         index++;
         ins.value='';
     }
 }
 
 function ans(){
     if (arr.length>0) {
         let repeat=[];
         let repetition=0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        repeat[i]=0;
        for (let j = i; j < arr.length; j++) {
            const element2 = arr[j];
            if(element===element2){
                repeat[i]++;
            }
         }
         if(repeat[i]>repetition){
             repetition=repeat[i];
         }       
    }
     res=res+`<p> frequent= `;
     for (let i = 0; i < arr.length; i++) {
         if (repeat[i]===repetition){
             res=res+" "+arr[i];
         }
         
     }
     ins.setAttribute("hidden","true")
     res=res+"</p>"
     inn.innerHTML=res;
     
     }
 }