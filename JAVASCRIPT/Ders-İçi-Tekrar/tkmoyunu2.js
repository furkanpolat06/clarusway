const yourChoice = document.getElementById("your-choice")
const pcChoice = document.getElementById("pc-choice")
const select = document.querySelector(".select")
let userSelect; // Bizim seçimimiz
let pcRandom; // Pc nin seçimi
select.addEventListener("click", (e)=>{
    userSelect=e.target.getAttribute("alt")
    yourChoice.innerHTML=`<img src="./assets/${userSelect}.png">`;
    pc()
})
const pcArr=["tas", "kagit", "makas"];
function pc(){
    pcRandom=pcArr[Math.floor(Math.random()*3)];
    console.log(pcRandom);
    pcChoice.innerHTML=`<img src="./assets/${pcRandom}.png">`
    result()

}
function result(){
    switch(userSelect){
        case "tas":
            if (pcRandom=="kagit"){
                lost()
            }
            else if(pcRandom=="makas")
            win()
    }
}


function result(){
    switch(userSelect){
        case "tas":
        }
            if (pcRandom=="kagit")
            {lost()
            }
            
}





















// const tasImage=document.querySelector(".tas")
// const kagitImage=document.querySelector(".kagit")
// const makasImage=document.querySelector(".makas")
// tasImage.addEventListener("click",(e)=>{
//     console.log(e);
    
//     yourChoice.innerHTML=`<img src="./assets/tas.png"><img>`;
// })
// kagitImage.addEventListener("click",(e)=>{
//     console.log(e);
//     yourChoice.innerHTML=`<img src="./assets/kagit.png"><img>`;
// })
// makasImage.addEventListener("click",(e)=>{
//     console.log(e);
//     yourChoice.innerHTML=`<img src="./assets/makas.png"><img>`;
// })