function matorial(n){
    if (n == 1){
        return 1
    } else {
    return n * matorial(n - 1)
    }
}
console.log(matorial (3))   