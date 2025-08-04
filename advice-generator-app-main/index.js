const but=document.getElementById('but');
const id=document.getElementById('slipid');
const advices=document.getElementById('advices');
const error=document.getElementById('error');
const mobdiv=document.getElementById('mobdivider');
const desdiv=document.getElementById('desdivider');
const box=document.getElementById('box');
const dice=document.getElementById('dice');
const load=document.getElementById('load');
const copy=document.getElementById('copy');
const copied=document.getElementById('copied');

but.addEventListener("click",call);
copy.addEventListener("click",copyclip);
async function call(){
    try{
        but.disabled=true; //Disable button
        load.classList.remove('hidden');

        const adv=await fetch('https://api.adviceslip.com/advice');
        const advdata=await adv.json();

        id.innerText=`ADVICE #${advdata.slip.id}`;
        advices.innerHTML=`"${advdata.slip.advice}"`;

        updatediv();
    }
    catch(err){
       error.innerHTML="Failed to fetch advice" + err.message;
       setTimeout(()=>{
                error.innerHTML="";
        },3000);
    }
    finally{
         but.disabled=false; //Re-enable button
        load.classList.add('hidden');
        copy.classList.remove('hidden');
    }
}

function copyclip(){
    if(advices.innerHTML){
        navigator.clipboard.writeText(advices.innerText).then(() => {
        copied.classList.remove("hidden");
        setTimeout(() => copied.classList.add("hidden"), 2000);
    });

    }
}
function updatediv(){
    if(window.innerWidth < 768){
            mobdiv.classList.remove("hidden");
            desdiv.classList.add("hidden");
    }
    else{
            desdiv.classList.remove("hidden");
            mobdiv.classList.add("hidden");
    }
}

window.addEventListener("load",updatediv);
window.addEventListener("resize",updatediv);

/* learnt to new feature to add load, copy text to clipboard and also to enable and disable button*/
