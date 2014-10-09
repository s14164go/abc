

var multioly = function(a,b) {
  var bunshi = a.bunshi * b.bunshi;
  var bunbo = a.bunbo * b.bunbo;
  var answer = frac(bunshi,bunbo);
  return answer;
};

a = frac(4,5);
b = frac(3,5);
c = multioly(a,b);
