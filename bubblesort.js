var swap = function(arr, i, j) {
    if (arr[i] > arr[j]) {
      var temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp; 
  }
}

function bubbleSort(array){
  if (array.length <= 1) return array
  for (var i = 0; i < array.length; i++){
    for (var j = i + 1 ; j < array.length; j++){
      swap(array, i, j);
    }
  }
  return array
}


