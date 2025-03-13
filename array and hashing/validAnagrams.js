// valid anagram
// wanna check if anagram and magranna are valid anagram
// given two string s and t
// return true if s and t are anagrams (means they have same letters)

class Solution {
  getMap(s) {
    // carrace
    let dict = {};
    for (let i = 0; i < s.length; i++) {
      if (dict[s[i]]) {
        dict[s[i]] += 1;
      } else {
        dict[s[i]] = 1;
      }
    }
    return dict;
  }
  isAnagram(s, t) {
    let sDict = this.getMap(s);
    let tDict = this.getMap(t);
    if (
      s.length !== t.length ||
      Object.keys(sDict).length !== Object.keys(tDict).length
    ) {
      return false;
    }
    for (const key in sDict) {
      if (tDict[key] !== sDict[key]) {
        return false;
      }
    }
    console.log(sDict, tDict);
    return true;
  }
}

let s = new Solution();
console.log(s.isAnagram("racecar", "racceaa"));
