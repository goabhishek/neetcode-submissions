class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
      
       return strs.map(s => `${s.length}#${s}`).join("");

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
     const result = [];
        let i = 0;

        while (i < str.length) {
            const j = str.indexOf("#", i);
            const len = Number(str.slice(i, j));

            result.push(str.slice(j + 1, j + 1 + len));

            i = j + 1 + len;
        }

        return result;
    }
    
}
