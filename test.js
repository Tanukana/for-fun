const fibArr = [1, 1];
    let a = 0;
    let b = 1;
    let fibSum = 0;
    function addFib() {
        fibSum = fibArr[a] + fibArr[b];
        fibArr.push(fibSum);
        a++;
        b++;
    }