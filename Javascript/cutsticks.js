function square(A,B) {
let sum = A+B;
let longer = Math.max(A,B);
let shorter = Math.min(A,B);

if (sum < 4) {
    return 0;
}

while(sum%4 != 0) {
    sum--
}

let max = sum/4;

while (max != 0) {

    if( max * 4 <= long) {
        return max;
    }

    if( max * 3 <= long && max <= short ) {
        return max;
    }

    if( max * 2 <= long && max * 2 <= short ) {
        return max;
    }

    max--;
}

return 0;}