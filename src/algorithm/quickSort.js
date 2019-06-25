function quickSort(array){

  if( array.length < 1){
    return []
  }
    var pivot = array[0];
    var leftArray = [];
    var rigthArray = [];

    for(let i = 1; i < array.length; i++){
        if(array[i] < pivot){
          leftArray.push(array[i])
        }else{
          rigthArray.push(array[i])
        }
    }


    return [].concat(quickSort(leftArray), pivot).concat(quickSort(rigthArray))
  
  
}


console.log(quickSort([4, 9, 2, 1, 6, 3, 8,4]))

console.log(quickSort([5,2,8,3,8,9,6,1,2,47]))