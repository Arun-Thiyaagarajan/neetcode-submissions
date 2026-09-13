class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        i = j = 0
        result = []

        while i < len(nums1) and j < len(nums2):
            if nums1[i] < nums2[j]:
                result.append(nums1[i])
                i += 1
            else:
                result.append(nums2[j])
                j += 1
        
        result.extend(nums1[i:])
        result.extend(nums2[j:])

        isEven = len(result) % 2 == 0
        mid = (len(result) - 1) // 2

        if isEven:
            return float((result[mid] + result[mid + 1]) / 2)

        else:
            return float(result[mid])

        return 0