
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount:5000,
    years:5,
    rate:10,
  };
  expect(calculateMonthlyPayment(values)).toEqual('106.24');

  // ...
});


it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 50000,
    years:10,
    rate:7,
  };
  expect(calculateMonthlyPayment(values)).toEqual('580.54')
  // ..
});

it("should be able to handle partial total years", function(){
  let values = {
    amount:50000,
    years:4.5,
    rate:7,
  };
  expect(calculateMonthlyPayment(values)).toEqual('1082.08')
})