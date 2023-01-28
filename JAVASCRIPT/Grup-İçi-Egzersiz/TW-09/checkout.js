let negative = document.querySelector(".buton .negative");
console.log(negative);
let positive = document.querySelector(".plus");
// console.log(positive);
let input = document.querySelector("input");
console.log(input);
negative.addEventListener("click", function () {
  if (input.value >= 1) {
    input.value--;
  }
});
positive.addEventListener("click", function () {
  input.value++;
});
// document.getElementById("bag-total").innerHTML = `${
//   25.98 * Number(input.value.toFixed(2))
// }`;

document.getElementById("bag-total").innerText = `${(
  25.98 * Number(input.value)
).toFixed(2)}`;
let subtotal = document.getElementById("subtotal");
subtotal.innerText = `${(
  Number((25.98 * Number(input.value)).toFixed(2)) + Number(120.98)
).toFixed(2)}`;

//         }
//       });
//       positive.addEventListener("click", function () {
//         input.value++;
//         document.getElementById("bag-total").innerHTML = `${(25.98*Number(input.value)).toFixed(2)}`;
//         let subtotal = document.getElementById("subtotal")
//         subtotal.innerText = `${(Number(((25.98*Number(input.value)).toFixed(2))) + Number(120.98)).toFixed(2)}`

//       });
//       let subtotal = document.getElementById("subtotal")
//       subtotal.innerText = `${(Number(((25.98*Number(input.value)).toFixed(2))) + Number(120.98)).toFixed(2)}
