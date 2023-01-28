// let x=2;
// let y=6;
// console.log(Math.min(x, y));


const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];
console.log(
 arr1.sort() === arr1,
 arr2.sort() == arr2,
 arr1.sort() === arr2.sort()
);
const notifications = 1;
console.log(
 `You have ${notifications} notification${notifications >= 1 ? 's' : ''}`
);
// document.querySelectorAll('div').forEach((e) => {
//     e.onclick = (e) => console.log(e.currentTarget.id);
//    });
   
// document.querySelector("span.content")

// window.onload = function() {
//     document.getElementById("myText").focus();
//   }

const topics = ["cooking", "art", "history", "ali", "ata ", "bak"] 

const [a,b, ...c] = ["cooking", "art", "history", "ali", "ata ", "bak"] 


// console.log([...c]);

// const instructors = {
//     name: 'Noah',
//     age:12,
//    };
//    delete instructors.name;
//    console.log(instructors);

   const numbers = [1, 2, 3, 4, 5]
const [x, y, ...w] = numbers
console.log(w);
