# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:


        if not head:
            return None

        # Find length
        length = 0
        current = head

        while current:
            length += 1
            current = current.next

        # Remove head
        if length == n:
            return head.next

        # Find node before the one to remove
        temp = head

        for _ in range(length - n - 1):
            temp = temp.next

        # Remove node
        temp.next = temp.next.next

        return head
        