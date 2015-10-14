//getCount.js

function getCount(str) {
  //str.match(regexExp)  returns array of items that match the regex
  return (str.match(/[aeiou]/ig)||[]).length;
}