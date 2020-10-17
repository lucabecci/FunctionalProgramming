/*Vuelva a escribir el código para que la matriz global bookList no cambie dentro de ninguna de las funciones. La addfunción debe agregar el dado bookNameal final de la matriz que se le pasó y devolver una nueva matriz (lista). La removefunción debería eliminar lo dado bookNamede la matriz que se le pasó.

Nota: Ambas funciones deben devolver una matriz y cualquier parámetro nuevo debe agregarse antes del bookName parámetro.*/

var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Change code below this line
function add(bookList, bookName) {
  let arr = bookList.slice()
  arr.push(bookName);
  return arr;

  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  let arr = bookList.slice()    
  var book_index = arr.indexOf(bookName);
  if (book_index >= 0) {
    arr.splice(book_index, 1);
    return arr;

    // Change code above this line
  }
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);
console.log(newBookList)
console.log(newerBookList)
console.log(newestBookList)
console.log(bookList);
