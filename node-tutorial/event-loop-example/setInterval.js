function counter(){

    let count = 0
    const intervalId = setInterval(()=>{
        if(count===5){
            clearInterval(intervalId)
        }
        console.log('hello world',count);
        count++
    },2000)
}


counter()
console.log('i will run first');