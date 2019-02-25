// Координаты 3х палубного корабля
// Координаты текущего выстрела
// Количество попаданий
// Потоплен корабль или нет

// Создаем три переменные location1 location2 location3
let location1 = Math.floor(Math.random() = 0)
let location2 = location1 + 1
let location3 = location2 + 1
// Создаем переменную текущего выстрела currentShot
let currentShot
// Cоздаем переменную, чтобы считать выстрелы
let shots = 0
// Создаем переменную для количества попаданий hits
let hits = 0
// Создаем переменную, чтобы отслеживать потопленно или нет
let isSunk = false

while (isSunk === false) {
  currentShot = Number(prompt("Введите число от 0 до 9:"))
// Получить координаты выстрела
// Нужно увеличить счетчик всех выстрелов
  shots = shots + 1
  // Сравнить координаты выстрела с координатами корабля
  if (currentShot === location1 || currentShot === location2 || currentShot === location3 ) {
    hits += 1
        if (hits === 3) {
        isSunk = true;
        alert("Победа")
    }
  }
  if (currentShot < 0) {
   alert("Введите другое число больше 0 и меньше 9")
  } else if (currentShot > 9) {
    alert("Введите другое число больше 0 и меньше 9")
  }
  if (currentShot < 5 || currentShot > 7 ) {
    alert("Вы промахнулись!")
  } else if (currentShot >= 5 || currentShot <= 8){
    alert("Вы попали!")
  }
}
let rating = Math.round(3 / shots * 100)
alert("Вам понадобилось" + shots + "Выстрелов, чтобы потопить корабль. Ваш рейтинг:"  + rating)

// Если игрок попал, то увеличиваем счетчик попаданий на 1
// Если количество попаданий равно 3, то меняем значение переменной isSunk на true и сообщаем о победе
