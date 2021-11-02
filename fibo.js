function fibo(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibo(num-1) + fibo(num - 2);
    }
}


const n = 10;

if(n <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < n; i++) {
        console.log(fibo(i));
    }
}