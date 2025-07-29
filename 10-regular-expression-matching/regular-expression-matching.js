/**
 * @param {string} s - The input string
 * @param {string} p - The pattern string containing '.' and '*'
 * @return {boolean} - Returns true if the entire string matches the pattern
 */
var isMatch = function(s, p) {
  //1. Initialize a DP table where dp[i][j] means: 
  //   does s[0..i-1] match p[0..j-1]?
  const dp = Array.from({ length: s.length + 1 }, () => Array(p.length + 1).fill(false));

  //2. Base case: empty string matches empty pattern
  dp[0][0] = true;

  //3. Pre-fill for patterns like a*, a*b*, etc. that can match an empty string
  for (let j = 1; j <= p.length; j++) {
    //4. Only * can allow us to "delete" previous pattern characters
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2]; //5. '*' means zero occurrence of the character before it
    }
  }

  //6. Fill the DP table for each substring length
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {

      //7. If characters match or pattern has '.', carry over diagonal match
      if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; //8. Exact match or '.' wildcard
      }

      //9. Handle '*' character in pattern
      else if (p[j - 1] === '*') {
        //10. Case 1: Treat '*' as 0 occurrence of previous char
        dp[i][j] = dp[i][j - 2];

        //11. Case 2: If previous pattern char matches current string char or is '.'
        if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
          //12. Include this char in match using '*' (repeat previous pattern char)
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      }

      //13. Else, dp[i][j] remains false by default
    }
  }

  //14. Final answer: does entire s match entire p?
  return dp[s.length][p.length];
};
