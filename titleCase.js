function titleCase(str) {
  return str.toLowerCase().split(" ").map(function(i){return i[0].toUpperCase() + i.substring(1)}).join(" ");
  
}