// console.log("for");

// const n=Number(prompt("enter a number"))
// let sum=0
// for(let i=1; i<=n; i++){
//     sum=sum+i
// } 
// console.log("sum:" sum)
// let num= Number(prompt("enter a number"))
// const randomNum=1

// for(let j=0; j<num; j++){
//     randomNum=Math.round(Math.random()*100)
//     console.log(`${j}. random number: ${randomNum}`);
// }
// let count=1
// while(count<=10){
//     console.log(count);
//     count ++ ;
    
// }
// TAHMİN OYUNU
// *Program 0-100 arasında rastgele bir sayı tutmalı ve kullanıcının bu sayıyı 5 kerede(hak) tahmin etmesini istemelidir.
// *Her yanlışta hakkını bir düşürmeli ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirmelidir.
// *Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" diye bir bilgi mesajı yazdırmalıdır.

// let random = Math.round(Math.random() * 100);
// console.log(random);
// let count = 0;

// do {
//   guessNumber = prompt("Guess Number between 0 and 100");
//   count++;
//   if(guessNumber == random) {
//     alert(`Tebrikler ${count}. denemede bildiniz`);
//   }else if (count >= 5) {
//     alert("Üzgünüz bilemediniz 5 hakkınız doldu.");
//     break;
//   } else if (guessNumber > random) {
//     alert("AZALT");
//   } else {
//     alert("ARTTIR");
//   } 
// } while (count < 5);

// let rastgale=Math.round("0 ile 100 arasında bir sayi giriniz");
// console.log(rastgale);
// let count=0
// do{
//     guessNumber=prompt("guess number between 0 and 100")
//     count++;
//     if(guessNumber===random){
//         alert(`Tebrikler ${count}. denemede bildiniz`);
//         else if(count >=5){
//             alert("üzgünüz bilemediniz 5 hakkınız doldu");
//             break;
//         }else if(guessNumber>rastgale){
//             alert("azalt");
//         }else{
//             alert("arttırır");
//         }
//     }
// }while (count<5)

// let grade = Number(prompt("your grade: "))
// while (grade<0 ||grade>100){
//     console.log("Grade should be 0-100");
//     grade=Number(prompt("your grade: "))
// }
// console.log(`Your grade: ${grade}`);

// let counter=0
// let number = Number(prompt("your grade: "))
// while (number>=1 100){
//     number=(number/10)
//     counter++
// }
// console.log(`Digit count is ${counter}`);



// let x=1
// let y=1
// while (x<=5){
// y =x*y;
// x++;
// }
// console.log(y);












// let guess;
// let trial = 5;
// let randomNumber = Math.floor(Math.random() * 100);
// console.log(randomNumber);
// ​
// while (trial > 0) {
//   guess = Number(prompt("please enter a guess number"));
// ​
//   trial--;
//   if (guess === randomNumber) {
//     console.log("Congrats, you win");
//     break;
//   } else if (guess < randomNumber) {
//     console.log("increase your guess");
//   } else {
//     console.log("decrease your guess");
//   }
//   if (trial == 0) {
//     console.log("Sorry, you lost");
//   }
// }


// let toplam=0;
// for (i=0; i<20; i++){
//     toplam=toplam+i;
//     if (toplam>100)
//     console.log(toplam);
// }
// let iz=0
// let top=0;
// while(iz<10){
//     top=i+tops;
    
// }
// console.log(tops);