class Solution {
    private board: string[][] = [];
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const numSet = new Set<string>();
        const n = board.length;
        this.board = [...board];

        for (let i = 0; i < n; i++) {
            const row = board[i];
            for (let j = 0; j < n; j++) {
                const num = row[j];
                // Checks for the duplicate in the horizontal rows, if has returns false.
                if (num != "." && numSet.has(num)) {
                    return false;
                }
                // else, add to rowSet
                numSet.add(num);
            }

            // clear the set
            numSet.clear();
        }


        for (let i = 0; i < n; i++) {
            const column = board.map(row => row[i]);
            for (let j = 0; j < n; j++) {
                const num = column[j];
                // Checks for the duplicate in the horizontal rows, if has returns false.
                if (num != "." && numSet.has(num)) {
                    return false;
                }
                // else, add to rowSet
                numSet.add(num);
            }

            // clear
            numSet.clear();
        }

        for (let r = 0; r < 9; r += 3) {
            for (let c = 0; c < 9; c += 3) {
                if (this.hasDuplicateBox(r, c)) {
                    return false;
                }
            }
        }

        return true;
    }

    public hasDuplicateBox(startRow: number, startCol: number): boolean {
        const seen = new Set<string>();

        for (let r = startRow; r < startRow + 3; r++) {
            for (let c = startCol; c < startCol + 3; c++) {
            const value = this.board[r][c];

            if (value === ".") continue;

            if (seen.has(value)) {
                return true;
            }

            seen.add(value);
        }
    }

        return false;
    }
}