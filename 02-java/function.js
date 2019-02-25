function checkMovie(name, rating, price) {
  if (rating >= 7 && price < 500) {
    console.log("На " + movieName + " стоит идти.")
  } else {
    console.log(movieName + "Лучше посмотреть дома.")
  }
}

 movieName = "Алита: Боевой ангел"
 movieRating = 7.3
 moviePrice = 300
 checkMovie(movieName, moviePrice, movieRating)

 movieName = "Дом, который построил Джек"
 movieRating = 7.3
 moviePrice = 500
checkMovie(movieName, moviePrice, movieRating)

 movieName = "Стекло"
 movieRating = 7.3
 moviePrice = 500
checkMovie(movieName, moviePrice, movieRating)
