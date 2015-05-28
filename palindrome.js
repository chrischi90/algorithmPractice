function palindrome(str) {
  var punctuationless = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var string = punctuationless.toLowerCase().replace(/\s+/g, '');
  var checkString = string.split("").reverse().join("");
  if (string === checkString){
    return true;
  } else {
    return false;
  }
}