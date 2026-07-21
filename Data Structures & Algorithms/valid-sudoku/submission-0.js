class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const rows = new Map();
        const cols = new Map();
        const boxes = new Map();

        for (let r = 0; r < 9; r++) {

            for (let c = 0; c < 9; c++) {

                const value = board[r][c];

                // Ignore empty cells
                if (value === ".") continue;

                // Create Set if not present
                if (!rows.has(r)) rows.set(r, new Set());
                if (!cols.has(c)) cols.set(c, new Set());

                const box = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;

                if (!boxes.has(box)) boxes.set(box, new Set());

                // Check duplicate
                if (
                    rows.get(r).has(value) ||
                    cols.get(c).has(value) ||
                    boxes.get(box).has(value)
                ) {
                    return false;
                }

                // Add value
                rows.get(r).add(value);
                cols.get(c).add(value);
                boxes.get(box).add(value);
            }
        }

        return true;
    }
}