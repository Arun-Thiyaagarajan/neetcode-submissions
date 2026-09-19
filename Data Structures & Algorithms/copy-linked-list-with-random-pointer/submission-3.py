"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        current = head
        new_head = None
        tail = None
        mapping = dict()

        while current:
            new_node = Node(current.val)
            mapping[current] = new_node

            if new_head is None:
                new_head = tail = new_node
            else:
                tail.next = new_node
                tail = tail.next
                 
            current = current.next
        
        # 2. Connect next and random pointers
        current = head
        while current:
            copy_node = mapping[current]
            if current.random:
                copy_node.random = mapping[current.random]
            current = current.next

        return new_head