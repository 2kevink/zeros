module.exports = function getZerosCount(number) {
  var k = 5;
  var s = 0;
  do{
    s+=Math.floor(number/k);
    number=Math.floor(number/k);

  }while(number!=0)
  return s;
}
