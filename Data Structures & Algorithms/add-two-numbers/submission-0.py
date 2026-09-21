# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        currA, currB = l1, l2
        a = b = ""
        while currA:
            a += str(currA.val)
            currA = currA.next
        
        while currB:
            b += str(currB.val)    
            currB = currB.next
        
        resultStr = str(int(a[::-1]) + int(b[::-1]))
        resultStr = resultStr[::-1]

        head = tail = None
        for number in resultStr:
            result_node = ListNode(int(number))

            if head is None:
                head = tail = result_node
            else:
                tail.next = result_node
                tail = tail.next
        return head