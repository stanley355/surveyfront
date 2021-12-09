const capitalizeFirstLetter = (word: any) => {
  let wordArray = word.split("");

  if (wordArray.length > 0) {
    const firstWord = wordArray[0].toUpperCase();
    wordArray[0] = firstWord;
  }

  return wordArray.join("");
};

export default capitalizeFirstLetter;
