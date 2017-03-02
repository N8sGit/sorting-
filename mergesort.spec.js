describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]])
  });
});  

  describe('merge', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([3,5,9],[4,6,7,10])).toEqual([3,4,5,6,7,9,10]);
    });
  });

  describe('mergeSort', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      console.log(mergeSort([1]));
      expect(mergeSort([3,7,22,30,4,24,12,2,6,18,1])).toEqual([1,2,3,4,6,7,12,18,22,24,30]);
      
    });
  });
