// for(i = str.length-1; i>=-2, i--){
//     console.log(str[i]);
// }
// console.log("*** STRING METHODS ***");

/* let str1 = "This is a string"
let str2 = 'This is a string'
let str3 = `This is a string`
let str4 = new String("This is a string")

// console.log(typeof str1) // string
// console.log(typeof str2) // string
// console.log(typeof str3) // string
// console.log(typeof str4) // object
console.log(str1)
console.log(str2)
console.log(str3)
console.log(str4) */

/* let str1 = "Clarusway"
let str2 = 'Full Stack'
let str3 = ""
let str4 = str1 + " " + str2
console.log(str1.concat(" ",str2))
console.log(str4)

console.log(str1.length) // 9
console.log(str2.length) // 10
console.log(str3.length) // 0
console.log(str4.length) // 20 */

// let str = 'Hello World'
// let str2 = `'Hell"o" "World'`

// console.log(str[str.length-1])
// console.log(str[0])
// console.log(str[1])
// console.log(str[2])

//str nin tüm elemanları for döngüsü ile yazdır

/* for(i = 0; i< str.length;i++){
    console.log(str[i]);
} */

//str nin tüm elemanları for döngüsü ile tersten yazdır

// for(i = str.length-1; i>= 0 ;i--){
//     console.log(str[i]);
// }
// let a =5;
// let b=a;
// console.log({a},{b});
// a=10;
// console.log(({a}, {b}));


// let str1="Clarusway";
// console.log(str1.slice(1,5));
// console.log(str1.slice(0,5))
// console.log(str1.substring(9,5));
// console.log(str1.substring(str1));

// let email ='mark.m@clarusway.com'
// console.log(email.indexOf('@', 7));

// let str3 ='You do not know what'
// console.log(str3.lastIndexOf('Y'));
// let str ="hello world"
// for(i=0; i<str.length;i++)
// console.log(str[i]);
// console.log(str.length[]);
// for(i=10; i>=0;i--)
// console.log(str[i]);

// let str1="Clarusway";
// let str2="Full"
// let str3="Stack"
// const result=str1.concat(" ", str2, " "   ,str3)
// console.log(result);

//? ===============================================
//?           DIZI ERISIM METOTLARI
//? ===============================================

console.log("**** ACCESS ****")
const numbers = [3, 5, 2, "4", "four", 3, "4", "bes", "1"]

//* includes()
//*-----------------------------------------------------------

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string'e cevirir.

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

//* slice(start, end) -- end exclusive
//*-----------------------------------------------------------

//* concat()
//*-----------------------------------------------------------
const message = ["The weather", "is", "very", "nice"]
const now = [new Date().toLocaleString()]
console.log(now) //? ['04.01.2023 20:36:48']

const concattedMsg = message.concat(now, "JS Arrays", [["1,3,4"]])
console.log(concattedMsg)
