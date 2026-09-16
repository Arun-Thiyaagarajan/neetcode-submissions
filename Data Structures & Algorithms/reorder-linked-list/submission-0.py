# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        slow = fast = head
        result = ListNode()

        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        
        second = slow.next
        slow.next = None

        current = second
        prev = None
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        
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
        