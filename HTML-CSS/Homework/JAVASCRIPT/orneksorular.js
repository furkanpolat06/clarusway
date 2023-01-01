// let c=1;
// for(i=10; i<=11; ++i){
// c=i*c;
// }
// console.log(c);

// let c=0;
// for(i=1000; i<2000; ++i){
//     c=i+c;
    
// }
// console.log(c/1000);

// let sayi=+prompt("please your enter a number")
// if (sayi<1000 || sayi>2000){
//     console.log("lutfen 1000 ile 2000 arasında bir sayi giriniz");
// }
// else
// for(sayi=1000; sayi<=2000; ++i)
//  if(sayi%23===0){
//         console.log(`${sayi} sayisi 23 ün katı bir sayidir `);
//     }

// let i=0;
// let c=0;
// for (i=1000; i<=2000; ++i){
//     if(i%23===0){
//         console.log(`girilen ${i} sayisi 23 ün katıdır`);
//     }
// }

// let i=0;
// let c=0;
// while (i<1000){
//     i++;
//     c=c+i;
// }console.log(c);

// let sifre="123";
// let hak =3;
// while (hak>0){
//     let mesaj =prompt("sifreyi girin");
//     hak--;
//     if (hak==0) break;
//     if (mesaj==sifre){
//         console.log("hosgeldiniz");
//         break;
//     }
//     else{
//         alert ("son"+ hak + "hakkınız kaldı");
//     }
// }
// if (hak ===0){
//     console.log("izinsiz giremezsiniz");
// }

// let i=0;
// let c=0
// while(i<10){
    
//     i++;
//     if(i%2===0)
//     c=i+c;
//     console.log(c);
// }
// let sayac=0;
// let toplam=0;
// do{
//     if(sayac%2===0){
//         toplam=toplam+sayac;
//       } ++sayac;
//     }while(sayac<=20);
//     console.log(toplam);
// const r=+prompt("r: ")
// const h=+prompt("h: ")
// const volume=(r,h)=>Math.PI*r*r*h
// console.log(`${volume(r,h)}`)
// console.log("AGE:", calculateAge(1990));
// const calculateAge=(year)=>new Date().getFullYear()-year
// console.log(calculateAge(1990));

// const r=+prompt("r: ");
// const h=+prompt("h: ");
// const volume=(r,h)

// const silindir=Math.PI*r*r*h
// console.log(`silindir`(r, h));

// const fibo = (n)=>{
//   let fib1=1
//   let fib2=1
//   let sum=0
//   for (let i=2; i<n; i++){
//     sum=fib1+fib2
//     fib1=fib2
//     fib2=sum
//   }
//   return fib2}
  
// const n=+prompt("please enter n: ")
// console.log(`fibonacci(${n})=${fibo(n)}`);

// let toplam=1;
// let sayi = +prompt("lütfen bir sayi giriniz: ")
// while(sayi>0){
//   toplam *=sayi;
//   sayi=+prompt("sayi girmeye devamke bro")
// }
// console.log(toplam)

// let i = 1;

// while (i <= 5) {
//   i += 1;
// }
// console.log(i);
// let y=0
// let i=0
// for (i = 1; i <= 10; i++) {
//   y += i
// }
// console.log(`${i} e  kadar sayilarinin toplami ${y}`);
// let i =0;
// for(i=0;i<100;i++){
//   if (i%4===0){
//     console.log(`${i} sayisi 4 e bölünebilmektedir`);
//   }
//   else
//   console.log(`${i} sayisi 4 e bölünememektedir`);
// } 
// let i = +prompt("lütfen bir sayi giriniz ");
// while (i>100 || i<0){
//   console.log("3girdiginiz sayi 0 ile 100 arasında olmamalıdır");  
// }
// if (i%3===0){
//   console.log(`${i} sayisi 3 ile bölünebilen bir sayidir `);
// }
// else
// console.log(`${i} sayisi 3 ile bölünebilen bir sayi değildir`);
// let i=+prompt("lütfen bir sayi giriniz ")

// if (i>=0 || i<=100){if (i%3===0){console.log(`${i} sayisi 3 ile bölünebilen bir sayidir `);
//   }
//   else
//   console.log(`${i} sayisi 3 ile bölünebilen bir sayi değildir`);}
// else 
// while(true);
// {console.log("lütfen 0 ile 100 arasında bir sayi giriniz ")
//     }


// const primeNum=Number(prompt("enter a number: "))
// let isPrime = true
// for(let i= 2;i<primeNum; i++){
//   if (primeNum%i===0){
//     console.log(`${primeNum} is not a prime number`);
//     isPrime=false
//   }
//  if (isPrime===true){
//   console.log(`${primeNum} is a prime number`);
//  } }

 let grade =+prompt("your number enter: ")
 while (grade<0 || grade>100){
  if(true)
  console.log(+prompt("lütfen 0 ile 100 arasında bir sayi giriniz"));
 grade =number(prompt("your grade: "))}
 console.log(`your grade: ${grade}`);