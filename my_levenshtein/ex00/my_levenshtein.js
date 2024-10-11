function my_levenshtein (s1, s2) {
    if(s1.length == s2.length && s1.length > 0) {
        let count = 0;
        for ( let i = 0; i < s1.length; i++ ) {
            if ( s1[i] != s2[i]) {
                count++;
            }
        }
        return count;
    }
    else if ( s1.length < s2.length || s2.length < s1.length) {
        return -1
    }
        else {
        return 0;
    }
}