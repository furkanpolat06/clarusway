// function topla(s1,s2){
//     const toplam=s1+s2
//     return toplam
// }
// topla(2,3)

// function calculate(name,yob){
//     const age=2023-yob
//     console.log(`${name} age is ${yob}`);
// }
// calculate("elif", 2000)



// function oddOrEven(num){
//     return num %2 "odd" : "even"
// }
// const number=Number(prompt("lütfen bir sayi giriniz: "))
// const oddEven = oddOrEven(num)
// console.log(`${num} is ${oddEven}`);



// function cevap(num){
//     return num===2 ? "tek" : "cift"
// }
// const num=+prompt("lutfen bir sayi giriniz: ")
// const x=
// console.log(`girdiginiz sayi ${tek}`);

















// function oddOrEven(num){
//     return num%2===0 ? "even":"odd"
// }
// const number=+prompt("please enter a number to check odd or even: ")
// const oddEven = oddOrEven(number)
// console.log(`${number} is ${oddEven}`);

// function sayi(num){
//     return num===2 ? "tek":"cift"
// }
// const girilenSayi=+prompt("gardas bi sayi gir hele: ")
// const yeniAtanan=sayi("girilenSayi")
// console.log(`${girilenSayi} sayisi ${yeniAtanan} sayidir `);










// const findBiggest = function(n1,n2,n3){
//     let biggest=n1
//     if (n2>=biggest){
//         biggest=n2
//     }
//     if (n3>=biggest){
//         biggest=n3
//     }
//     return biggest
// }
// console.log(`The Biggest: ${findBiggest(2,1,3)}`);


const compute=function(n1,n2,op){
    let result=0
    switch(op){
        case "+":
            result=add(n1, n2)
            break
            case "-":
                result=sub(n1, n2)
                break
            case "/":
                    result=div(n1, n2)
                    break
            case "*":
                result=mul(n1, n2)
                break
                default:
                    break
                
    }
}
console.log(compute(3,2,"*"));