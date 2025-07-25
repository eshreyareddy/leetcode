class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        left = 0
        right = len(height) - 1
        max_area = 0

        while left < right:
            # Calculate width and current area
            width = right - left
            h = min(height[left], height[right])
            max_area = max(max_area, h * width)

            # Move the shorter pointer inward
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return max_area
