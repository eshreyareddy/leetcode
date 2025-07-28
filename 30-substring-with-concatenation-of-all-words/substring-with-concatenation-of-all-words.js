/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
//1 Define the main function that accepts the string s and array of words
var findSubstring = function(s, words) {
  //2 Return empty array if edge case
  if (!s || !words || words.length === 0) return [];

  //3 Get individual word length and total concatenated length
  const wordLen = words[0].length;          //3
  const totalLen = wordLen * words.length;  //4
  const wordCount = {};                     //5

  //6 Build a frequency map of all words
  for (let word of words) {                 //6
    wordCount[word] = (wordCount[word] || 0) + 1;  //7
  }

  const result = [];                        //8

  //9 Loop through s from index 0 to s.length - totalLen
  for (let i = 0; i <= s.length - totalLen; i++) {  //9
    const seen = {};                         //10
    let j = 0;                                //11

    //12 Try matching k words starting from position i
    while (j < words.length) {               //12
      const wordIndex = i + j * wordLen;     //13
      const word = s.slice(wordIndex, wordIndex + wordLen);  //14

      if (!wordCount[word]) break;           //15

      seen[word] = (seen[word] || 0) + 1;     //16
      if (seen[word] > wordCount[word]) break;  //17

      j++;                                    //18
    }

    //19 If all words matched, add index to result
    if (j === words.length) result.push(i);  //19
  }

  return result;  //20
};
