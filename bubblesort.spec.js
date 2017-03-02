describe('Bubble Sort', function(){
  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it(' handles an array of one element', function(){
    expect(bubbleSort([1])).toEqual([1]);
    console.log(swap.calls.count());
    expect(swap.calls.count()).toEqual(0);
  });

  it('handles an array with an even number of elements', function(){
    expect(bubbleSort([2,8,9,8,3,7,8,6])).toEqual([2,3,6,7,8,8,8,9]);
    console.log(swap.calls.count());
  });

  it('handles an array with an odd number of elements', function(){
    expect(bubbleSort([17,8,20,13,3,7,5,1,10,19,11])).toEqual([1,3,5,7,8,10,11,13,17,19,20]);
    console.log(swap.calls.count());
  });




});
