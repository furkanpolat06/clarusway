//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ----------------------------------------------
// console.log("hello");
// alert("hi")
// console.log("async")

// const wait =(waitingTime)=>{
//     const starTime =new Date().getTime()
//     while(new Date().getTime() < starTime+waitingTime){}
// }
// console.log("hello");
// wait(5000)
// console.log("fs13");

//* Asenkron (setTimeout)
//*------------------------------------------------
// console.log("timeout strated");
// setTimeout(() => {
//   console.log("1 sec");
// }, 1000);
// console.log("timeout finished");
// setTimeout(() => {
//   console.log("2 sec");
// }, 999);
// console.log("timeout finished");

//* Asenkron (setInterval, clearInterval)
//*---------------------------------------------
// console.log("timer started");
// let counter=0

// let sec1=setInterval(()=>{
//     console.log(++counter)
//     if(counter>100){
//         clearInterval(sec1)
//         console.log("timer stopped");
//     }
// },11)


// console.log("promise");
// const myPromise=new Promise((resolve, reject)=>{
//     const success=Math.floor(Math.random()*4)
//     const data={a:2,b:3}
//     if(success){
//         console.log("data fetched")
//         resolve(data)
//     }else{
//         reject(new Error("something went wrong"))
//     }
// })
// myPromise.then((res)=>console.log(res)).catch((err)=>console.log(err))

//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

// console.log("FETCH")

// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((data) => showGithubUsers(data))
//   .catch((err) => console.log(err))

// const showGithubUsers = (users) => {
//   console.log(users)
//   const userArticle = document.querySelector(".users")

//   users.forEach((user) => {
//     //  console.log(user)
//     userArticle.innerHTML += `<img src=${user.avatar_url} alt="" />`
//   })
// }

let test=function(){
  setTimeout(function(){
      console.log("start of code");
      
      console.log("gs");
      
      alert("notice me!")
      console.log("end of code");
  }, 5000)
 }
 let test2=function(){
  console.log("Now I get attention!");
 }
 test()
 test2()
