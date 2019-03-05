// function sayHello(name) {
//   console.log("Привет, " + name);
// }
// let userName = prompt("Как тебя зовут?")
// sayHello(userName)

// function findMax(a, b) {
//   if (a > b) {
//     console.log("Большее число: " + a);
//   } else {
//     console.log("Большее число: " + b);
//   }
// }
// let a = prompt("Введите первое число")
// let b = prompt("Введите второе число")
// findMax(a, b)

// function checkSeason(number) {
//   if (number >= 3 || number <= 5) {
//     console.log("Весна");
//   } else if (number >= 6 || number <= 8) {
//     console.log("Лето");
//   } else if (number >= 9 || number <= 11) {
//     console.log("Осень");
//   } else {
//     console.log("Зима");
//   }
// }
// let number = prompt("Введите число от 1 до 12")
// checkSeason(number)

// function addOne(num) {
//   return num + 1
// }
// let number = 10
// let num = 20
// console.log("Вызываю функцию addOne(number): " + addOne(number));
// console.log("Вызываю функцию addOne(num): " + addOne(num));
// console.log("Вызываю функцию addOne(15): " + addOne(15));



// function nextEvent(num) {
//   if (num % 2 === 0) {
//     return num + 2
//   } else {
//     return num + 1
//   }
// }
// let num = 10
// console.log("Вызываю функцию nextEvent(num): " + nextEvent(num));

// function makeDiff(a, b, c) {
//   if (Math.min([2 [ 1[ 3 ]]]) {
//     return Math.min += 1
// }
// let a = 2
// let b = 1
// let c = 3
// console.log("Вызываю функцию makeDiff(a, b, c): " + makeDiff(a, b, c));

// function calcPrice(price, goods) {
//   return price * goods
// }
// let price = 20
// let goods = 10
// console.log("Вызываю функцию calcPrice(price, goods): " + calcPrice(price, goods));
//
// function splitPrice(price, value) {
//   return price / value
// }
// let price = 300
// let value = 15
// console.log("Вызываю функцию splitPrice(price, value): " + splitPrice(price, value));


let scores = [22, 33, 49, 87, 82, 38, 18, 49, 87, 49, 73, 18, 56, 62]

// let i = 0
//   while (i < scores.length) {
//     if (scores[i] > highScore) {
//       highScore = scores[i]
//     }
//     let msg = `Лошадь №${i + 1} пришла с результатом ${scores[i]}`
//     console.log(msg)
//     i += 1
//   }
  // console.log(highScore)

  // let j = 0
  // while (j < scores.length) {
  //   if(score[j] === highScore) {
  //     bestScores.push(scores[j])
  //   }
  // }
  let highScore = 0
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highScore) {
      highScore = scores[i]
    }
    let msg = `Лошадь №${i + 1} пришла с результатом ${scores[i]}`
    console.log(msg)
    i += 1
  }
  console.log(highScore);
  
  let bestScores = []
  for (let j = 0; j < scores.length; j++) {
    if (scores[j] === highScore) {
      bestScores.push(scores[j])
    }
  }
  console.log(bestScores);
