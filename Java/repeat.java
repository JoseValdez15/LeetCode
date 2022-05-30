class Solution {
    public String solution(String S) {
        int[] count = new int[26];
        for (char ch : S.toCharArray()) {
            count[ch - 'a'] += 1;
            if (count[ch - 'a'] == 2) return String.valueOf(ch);
        }
        return "";
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("solution.solution(\"aba\") = " + solution.solution("aba"));
        System.out.println("solution.solution(\"zz\") = " + solution.solution("zz"));
        System.out.println("solution.solution(\"codility\") = " + solution.solution("codility"));
    }
}