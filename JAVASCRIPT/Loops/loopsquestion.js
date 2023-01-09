// let num=Number(prompt("your grade: "))
// while(num<1000 || num>2000){
//     console.log("Lutfen 1000 ile 2000 arasında bir sayı giriniz");

// num=Number(prompt("your grade: "))}

// // //
// let x =16
// for (){}
// console.log(x%13==3);
// for (let i=1000; i<2000; i++){
//     if (i%13==3){
//         console.log(i);
//     }
// }
// let i=0
// let i =0
// i=
// for(let i=1, i<=5, i++){
//     let i+=
//     console.log(i/5);
// }

// let sayac=0
// let sum=0
// while(sayac<5){
//     const sayi=+prompt('bir sayi giriniz')
//     sum += sayi
//     sayac++
// }
// console.log(sum/sayac);

// let i =Number(prompt('your number enter'))
// while(i<0){
//     let i =Number(prompt('your number enter'))
//     console.log("0 dan büyük bir sayi giriniz");

// }
// console.log(i);

// let sum=0
// while (true){
//     const sayi = +prompt('bir sayı giriniz')
//     if (sayi<0){
//         break
//     }
//     sum += sayi
// }
// console.log(sum);

// for (let i = 1; i<100; i++)
// if (i%15===0){
//     console.log('fizzbizz');
// }
// else{
//     if(i%3===0){
//         console.log('fizz')
//     }else if(i%5===0){
//         console.log('bizz');
//     }
//     else {
//         console.log(
//             i
//         );
//     }
// }

// let num=Number(prompt("lütfen bir sayi giriniz: "))
// let digit=0;
// while (num/10>=1)
// digit++

// console.log(`girdiginiz sayi ${digit} basamaklıdır`)

// console.log(`girdiginiz sayi ${digit} basamaklıdır`)}

// let counter = 0
// let number=Number(prompt("your number: "))
// while(number>0){
//     number=Math.floor(number/10)
//     counter++
// }
//  console.log(`digit count is ${counter}`)

//  l
// var i = 0;
// var toplam = 0;

// while(i < 10) {
//   toplam += i;
//   i++;
// }
// console.log(toplam);

// for(i=1;i<=100; i++){
//     if(i%3==0 || i%5==0)
//     console.log(i);
// // }
// let metin=prompt("bir metin yaziniz")
// let sayi=+prompt("how many you want to text write ")
// let i=0

// while(i<sayi){

// i++;
// console.log(metin);
// }

// let metin=prompt("bir metin yaziniz")
// for (i=6; i>0; --i){
//     document.write(`<h${i}>${metin}</h${i}>`);
// }

// let textt=prompt("bir metin yaziniz")
// for(i=0; i<100; i++){
//     document.write(`<style>font-size:${i}px ${textt}</style >
//      `);
// }

// let i = +prompt("bir sayi giriniz");
// let sayi = true;
// if (i < 2) {
//   console.log("lütfen 1 den büyük bir sayi giriniz");
// } else {
//   for (x = 2; x < i; x++) {
//     if (i % x === 0) {
//       console.log(`girdiginiz ${i} sayisi asal sayi degildir`);
//       sayi = false;
//       break;
//     }
//   }
//   if (sayi === true) {
//     console.log(`girdiginiz ${i} sayisi asal sayidir`);
//   }
// }

// let i=+prompt("bir sayi giriniz")
// let x=0
// while(1<=i){
//   x++
//   i=i/10;
  
// }
// console.log(x);



//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.

// let again=""
// do { 
//   let avg = 0
// let midterm = Number(prompt("your midterm grade:"))
// let final = Number(prompt("your final grade:"))
//   avg = midterm * 0.4 + final * 0.6
//   console.log(`Your Score is ${avg}`)
//   again = prompt("Do you want to continue(e/E)?")
// } while (again === "e" || again === "E")
// console.log("See you later. Bye")



// do{
//   let ort=0;
//   let vize=+prompt("vize not giriniz");
//   let final=+prompt("final notunuzu giriniz")
  
//   ort=vize*0.4+final*0.6
//   console.log(ort);
//   devam=prompt("devam etmek için y harfini basınız")
// }while(devam ==="y")
// console.log("bye bye see you later");




const not=[21, 67, 86]
let toplam =0
for(i=0; i<not.length; i++){
  toplam+=not[i];
}
console.log((toplam/not.length).toFixed(2));


























// //? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
// //? for dongulerini kullanarak yaziniz.

// const primeNum = Number(prompt("Enter a number"))

// //? Flag method
// let isPrime = true

// if (primeNum < 2) {
//   console.log("Number should be bigger than 1 ")
// } else {
//   for (let i = 2; i < primeNum; i++) {
//     if (primeNum % i === 0) {
//       //? Tam bolunuyorsa asal degildir
//       console.log(`${primeNum} is not a prime number-${i}`)
//       isPrime = false
//       break
//     }
//   }

//   if (isPrime === true) {
//     console.log(`${primeNum} is a prime number`)
//   }
// }
