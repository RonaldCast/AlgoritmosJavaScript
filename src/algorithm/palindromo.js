function palindromo(word) {
  word = word.toUpperCase();
  let arrayWord = [];
  for (let i = 0; i < word.length; i++) {
    arrayWord.unshift(word[i]);
  }
  if (word === arrayWord.join("")) {
    console.log(`La palabra "${word}" es un palindromo`);
  } else {
    console.log(`La palabra "${word}" NO es un palindromo`);
  }
}

function palindromo1(name) {
  name = name.toUpperCase();
  let palindrome = name
    .split("")
    .reverse()
    .join("");
  if (palindrome === name) {
    console.log(`La palabra "${name}" es un palindromo`);
  } else {
    console.log(`La palabra "${name}" NO es un palindromo`);
  }
}

console.log(palindromo("Ana"));
console.log(palindromo1("reconocer"));
