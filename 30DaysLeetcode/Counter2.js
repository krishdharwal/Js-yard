const counter = function(num){
    const temp = num;
    return {
        increment: () => {
            return ++num;
        },
        decrement: () => {
            return --num;
        },
        reset: () => {
            return (num = temp);
        }
    }

}

const c = counter(5);
console.log(c.increment())
console.log(c.reset())
console.log(c.decrement())
