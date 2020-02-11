let i = 1, prime =0;

while (prime <10) {
    let acum = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            acum++;
        }
    }
    if(i===1 || acum==2){
        console.log(i);
        prime++;
    }
    i++;
}