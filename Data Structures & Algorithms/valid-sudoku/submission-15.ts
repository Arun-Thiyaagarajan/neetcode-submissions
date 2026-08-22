class Solution {
    private board: string[][] = [];
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        this.board = [...board];

        if (!this.checkRowColDuplicate()) return false;
        if (!this.checkRowColDuplicate(false)) return false;

        for (let r = 0; r < 9; r += 3) {
            for (let c = 0; c < 9; c += 3) {
                if (this.hasDuplicateBox(r, c)) {
                    return false;
                }
            }
        }

        return true;
    }

    checkRowColDuplicate(isRow: boolean = true): boolean {
        const n = this.board.length;
        const seen = new Set<string>();
        let array: string[] = [];

        for (let i = 0; i < n; i++) {
            if (isRow) {
                array = this.board[i];
            } else {
                array = this.board.map(row => row[i]);
            }

            for (let j = 0; j < n; j++) {
                const num = array[j];

                if (num === ".") continue;
                // Checks for the duplicate in the horizontal rows, if has returns false.
                if (seen.has(num)) {
                    return false;
                }
                
                // else, add to seen
                seen.add(num);
            }

            seen.clear();
        }

        return true;
    }

    hasDuplicateBox(startRow: number, startCol: number): boolean {
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