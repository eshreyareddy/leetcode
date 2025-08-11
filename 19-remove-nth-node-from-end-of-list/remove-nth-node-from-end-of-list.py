# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        #1 Create a dummy node pointing to head (handles edge cases cleanly)
        dummy = ListNode(0, head)
        
        #2 Initialize two pointers at the dummy node
        fast = slow = dummy
        
        #3 Move fast pointer n+1 steps ahead to create the gap
        for _ in range(n + 1):
            fast = fast.next
        
        #4 Move both fast and slow until fast reaches the end
        while fast:
            fast = fast.next
            slow = slow.next
        
        #5 Skip the nth node from the end
        slow.next = slow.next.next
        
        #6 Return the head of the updated list
        return dummy.next
