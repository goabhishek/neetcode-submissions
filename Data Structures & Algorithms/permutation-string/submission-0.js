class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;
 
const freq1 = new Array(26).fill(0);
const freq2 = new Array(26).fill(0);
 
// Initial window
for (let i = 0; i < s1.length; i++) {
freq1[s1.charCodeAt(i) - 97]++;
freq2[s2.charCodeAt(i) - 97]++;
}
 
if (this.isSame(freq1, freq2)) return true;
 
// Sliding window
for (let i = s1.length; i < s2.length; i++) {
freq2[s2.charCodeAt(i) - 97]++; // add new char
freq2[s2.charCodeAt(i - s1.length) - 97]--; // remove old char
 
if (this.isSame(freq1, freq2)) return true;
}
 
return false;
}
 
isSame(a, b) {
for (let i = 0; i < 26; i++) {
if (a[i] !== b[i]) return false;
}
return true;
}
    }

