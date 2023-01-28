function toRoman(f){
    if (isNaN(f.input.value)){
      alert("Lütfen bir rakam girin.")
      f.input.value = ""
    }
    if (parseInt(f.input.value) > 2500){
      alert("Lütfen 1 ile 2500 arasında bir rakam girin")
      f.input.value = ""
    }
    var input = document.forms[0].input.value
    var romDate = ""
    while (input > 999){ 
      input = input - 1000
      romDate = romDate + "M"
    }
    if (input >= 900){
      input = input - 900
      romDate = romDate + "CM"
    }
    if (input >= 500){
      input = input - 500
      romDate = romDate + "D"
    }
    while (input > 99){ 
      input = input - 100
      romDate = romDate + "C"
    }
    if (input >= 90){
      input = input - 90
      romDate = romDate + "XC"
    }
    if (input >= 50){
      input = input - 50
      romDate = romDate + "L"
    }
    if (input >= 40){
      input = input - 40
      romDate = romDate + "XL"
    }
    while (input > 9){
      input = input - 10
      romDate = romDate + "X"
    }
    if (input == 9){
      input = input - 9
      romDate = romDate + "IX"
    }
    if (input >= 5){
      input = input - 5
      romDate = romDate + "V"
    }
    if (input == 4){
      input = input - 4
      romDate = romDate + "IV"
    }
    while (input > 0){ 
      input = input - 1
      romDate = romDate + "I"
    }
    f.result.value = romDate
    romDate = ""
  }// end of function toRom
   
//   function fromRoman(f){
//     if (!isNaN(document.forms[1].input.value)){
//       alert ("Lütfen romen rakamını girin.")
//       document.forms[1].input.value = ""
//     }
//     var output = 0
//     var romDate = document.forms[1].input.value.toUpperCase()
//     for (var i = 0; i < f.input.value.length; i++){
//       if (romDate.charAt(i) == "M"){
//         output += 1000}
//       if (romDate.charAt(i) == "D"){
//         output += 500}
//       if (romDate.charAt(i) == "C"){
//         output += 100}
//       if (romDate.charAt(i) == "L"){
//         output += 50}
//       if (romDate.charAt(i) == "X"){
//         output += 10}
//       if (romDate.charAt(i) == "V"){
//         output += 5}
//       if (romDate.charAt(i) == "I"){
//         output += 1}
//     }
//     if (romDate.indexOf("CM")!= -1){
//       output -= 200}
//     if (romDate.indexOf("XC")!= -1){
//       output -= 20}
//     if (romDate.indexOf("XL")!= -1){
//       output -= 20}
//     if (romDate.indexOf("IX")!= -1){
//       output -= 2}
//     if (romDate.indexOf("IV")!= -1){
//       output -= 2}
//     if (output == 0){output = ""}
//     f.result.value = output
//     output = 0
//   }