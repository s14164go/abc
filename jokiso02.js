
var add = function(a,b){
  return a + b;
};


var add = function(a,b){
  var result;
  result = a + b;
  return result
};


var multiply = function(c,d){
  return c * d;
};

var f = function (x){
  var result, tmp;
  tmp = multiply(2, x);
  result = add(tmp, 10);
  return result;
};




var f2 = function(x){
  return add(multiply(x ,2), 10);
};

