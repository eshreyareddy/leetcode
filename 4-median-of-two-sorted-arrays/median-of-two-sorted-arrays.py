from typing import List

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        #1 Ensure binary search is on the smaller array
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1

        x, y = len(nums1), len(nums2)
        low, high = 0, x

        while low <= high:
            #2 Partition both arrays
            partitionX = (low + high) // 2
            partitionY = (x + y + 1) // 2 - partitionX

            #3 Handle edge cases
            maxLeftX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]
            minRightX = float('inf') if partitionX == x else nums1[partitionX]

            maxLeftY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]
            minRightY = float('inf') if partitionY == y else nums2[partitionY]

            #4 Check correct partition
            if maxLeftX <= minRightY and maxLeftY <= minRightX:
                #5 Found the median
                if (x + y) % 2 == 0:
                    return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2
                else:
                    return float(max(maxLeftX, maxLeftY))
            elif maxLeftX > minRightY:
                #6 Move left
                high = partitionX - 1
            else:
                #7 Move right
                low = partitionX + 1

        raise ValueError("Input arrays are not sorted or valid")
