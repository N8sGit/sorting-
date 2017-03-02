function bubbleSort(array){
  if(array.length<=1) return array

  for(var i = 0; i<array.length; i++){
    var temp
    for(var j = i+1 ; j<array.length; j++){
      if(array[i]> array[j]){
        temp = array[j];
        array[j] = array[i]
        array[i] = temp
      }
    }


}


  console.log(array)

  return array
}
