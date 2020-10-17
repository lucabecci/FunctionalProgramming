/*Escriba el suyo Array.prototype.myMap(), que debería comportarse exactamente igual Array.prototype.map(). Puede utilizar un forbucle o el forEachmétodo.*/

var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  let arr = this  
  var newArray = [];
  for(let i = 0; i < arr.length; i++){
    newArray.push(callback(arr[i]))
  }
  return newArray
};

var new_s = s.myMap(function(item){
  return item * 2;
});

console.log(new_s)
/*new_s debería ser igual [46, 130, 196, 10].*/