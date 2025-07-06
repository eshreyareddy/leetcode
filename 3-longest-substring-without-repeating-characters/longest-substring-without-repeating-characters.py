class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        char_index = {}  # Dictionary to store last seen positions of characters
        left = 0  # Start of the sliding window
        max_length = 0  # Maximum length found

        for right in range(len(s)):
            if s[right] in char_index and char_index[s[right]] >= left:
                # Move the left pointer to the right of the last occurrence
                left = char_index[s[right]] + 1

            # Update or insert the current character's index
            char_index[s[right]] = right

            # Calculate the current window length and update max
            max_length = max(max_length, right - left + 1)

        return max_length
