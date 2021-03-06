/* Fisher-Yates shuffle.
   See http://bost.ocks.org/mike/shuffle/
 */
reorder.randomPermute = function(array, i, j) {
    if (arguments.length < 3) {
	j = array.length;
	if (arguments.length < 2) {
	    i = 0;
	}
    }
    var m = j-i, t, k;
    while (m > 0) {
	k = i+Math.floor(Math.random() * m--);
	t = array[i+m];
	array[i+m] = array[k];
	array[k] = t;
    }
    return array;
};

reorder.randomPermutation = function(n) {
    return reorder.randomPermute(reorder.permutation(n));
};

