class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

     const map = {};
     for(const str of strs){
        const apb = str.split("").sort().join("");
        if(!map[apb]){
             map[apb] = []
        }
        map[apb].push(str)

     }
return Object.values(map)

    }
     
}
