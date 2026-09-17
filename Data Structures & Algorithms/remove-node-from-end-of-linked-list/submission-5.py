# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:

        if not head or not head.next and n == 1:
            return None

        current = temp = head
        length = 0
        while current:
            length += 1
            current = current.next
        
        if length == n:
            return head.next

        counter = 0
        while temp:
            print(counter, length - n - 1)
            if counter == length - n - 1:
                temp.next = temp.next.next
                break

            counter += 1
            prev = temp
            temp = temp.next

        return head
