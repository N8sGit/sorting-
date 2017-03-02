function split(wholeArray){
  var half = Math.floor(wholeArray.length/2)
  var firstHalf = wholeArray.slice(0, half)
  var secondHalf = wholeArray.slice(half)
  return [firstHalf,secondHalf]
}


function merge(one, two){
  var result = [];
  for(var i = 0; i < two.length; i++){
    if(one[i]){
      if(one[i]<two[i]){
        result.push(one[i],two[i])
      } else result.push(two[i], one[i])
     } else result.push(two[i])
  }
  return result
}


function mergeSort(){
  var args = Array.prototype.slice.call(arguments);
  if (args[args.length - 1].length === 1) return args;
  else return mergeSort(split(args));
}
