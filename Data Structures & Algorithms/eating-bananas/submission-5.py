import math

class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        low = 1
        high = max(piles)

        while low <= high:
            k = low + ((high - low) // 2);
            time = sum(math.ceil(x/k) for x in piles);

            if time <= h:
                high = k - 1
            elif time > h:
                low = k + 1
        return low

