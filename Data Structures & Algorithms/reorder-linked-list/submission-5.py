# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        slow = fast = head

        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        
        second = slow.next
        prev = slow.next = None
        while second:
            next_node = second.next
            second.next = prev
            prev = second
            second = next_node
        
        second = prev
        first = head
        counter = 0
        while first and second:
            if counter % 2 == 0:
                next_first = first.next
                first.next = second
                first = next_first
            else:
                next_second = second.next
                second.next = first
                second = next_second

            counter += 1
        