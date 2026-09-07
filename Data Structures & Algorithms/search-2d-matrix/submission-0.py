class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        flat_matrix = [item for submatrix in matrix for item in submatrix]

        start = 0 
        end = len(flat_matrix) - 1

        while (start <= end):
            mid = start + ((end - start) // 2);

            if flat_matrix[mid] == target:
                return True
            elif flat_matrix[mid] < target:
                start = mid + 1
            else:
                end = mid - 1;

        return False;