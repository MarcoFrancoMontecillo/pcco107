function personInformation(){
  let fullName = prompt('Input your Full Name: ')
  let age = prompt('Input your Age: ')
  let location = prompt('Input your Location: ')
  if (fullName != null && age != null && location != null) {
    alert ('Thank You For The Informations!')
    console.log(`Hello ${fullName}, with the age of ${age} and located at ${location}`)
  }
}

function favBands(firstBand, secondBand, thirdBand, forthBand, fifthBand){
  return `1st = ${firstBand} 2nd = ${secondBand} 3rd = ${thirdBand} 4th = ${forthBand} 5th = ${fifthBand}`
}

let favBandsBe = favBands('Ben&Ben', 'Silent Sactuary', 'Queens', 'Eraserheads', 'parokya ni edgar')
console.log(favBandsBe);

function favMovies(firstMovie, secondMovie, thirdMovie, forthMovie, fifthMovie){
  return `1st = ${firstMovie} 2nd = ${secondMovie} 3rd = ${thirdMovie} 4th = ${forthMovie} 5th = ${fifthMovie}`
}

let favMoviesBe = favMovies('BLACK ADAM - 39%', 'FANTASTIC BEASTS: THE SECRETS OF DUMBLEDORE - 46%', 'ALL QUIET ON THE WESTERN FRONT - 90%', 'UNCHARTED - 41%', 'SPIDERHEAD - 39%')
console.log(favMoviesBe);
