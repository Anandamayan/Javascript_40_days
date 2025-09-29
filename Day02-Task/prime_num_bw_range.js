function isPrime(a){
    let count = 0;

    for(let i=1;i<=a;i++){
        if(a%i === 0){
            count++
        }
    }

    if(count === 2){
        console.log(a + " is a prime");
    }
    else{
        console.log(a + " is not a prime");
    }
    // return;
}

function primeIsInRange(start,end){
    for(let i = start; i<=end; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

primeIsInRange(1,50);

