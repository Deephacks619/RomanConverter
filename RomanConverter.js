var convertToRoman = function(num) {

  var number = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var x = '';

  for (var i = 0; i <number.length; i++) {
    while (number[i] <= num) {
      x=x+roman[i];
      num=num-number[i];
    }
  }

  return x;
}

// test here
convertToRoman(36);