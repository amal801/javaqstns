function swap() {
    re(); 
    reset1();
    document.getElementById("question").innerHTML=""
    ins=document.getElementById("input");
    ins.removeAttribute("hidden","true");
    inn=document.getElementById("answer");
    out=`<button type="button" onclick="swap1();"> CLICK </button>`;
    inn.innerHTML=out;
    

}

function swap1(){
   if (ins.value.trim()!='') {
       
   
   res='';
   let content=ins.value;
   let len=(ins.value.length);
   for (let i = 0; i < len; i++) {
       let x= content.substring(i,i+1);
       if (/[a-z]+/.test(x)) {
           x=x.toUpperCase();
           

       }
       else{
           x=x.toLowerCase();
           
       }
       arr[i]=x;
       res=res+`${arr[i]}`;
   }
   inn.innerHTML=out+"<p>Swap string : "+res+'</p>';
}
}