function PrimeNum(a){
    let count = 0;
    for(let i=2;i<=a;i++){
        if(a%i === 0){
            count++;
        }
    }

    if(count === 2){
        console.log(a + " is a Prime");
    }else{
        console.log(a + " is Not a prime");
        
    }
}

PrimeNum(1);

