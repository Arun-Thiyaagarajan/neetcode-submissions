class Solution:
    def search(self, nums: List[int], target: int) -> int:
        lo = 0
        hi = len(nums) - 1
        mid = -1
        #  0  1  2  3  4  5  6
        # [5, 6, 7, 1, 2, 3, 4]
        while lo <= hi:
            mid = (lo + hi) // 2

            if target == nums[mid]:
                return mid
            elif nums[lo] <= nums[mid]:
                if target >= nums[lo] and target <= nums[mid]:
                    hi = mid - 1
                else:
                    lo = mid + 1
            else:
                if target >= nums[mid] and target <= nums[hi]:
                    lo = mid + 1
                else:
                    hi = mid - 1
        return -1
