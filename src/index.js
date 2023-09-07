function leftRS(x){
    return x*x - Math.cos(x)
}

function integrate(fun, a, b, n){
    const delta = (b - a)/n
    
    let result = 0
    for (let index = 0; index < n; index++) {
        if(index == n -1){
            result += fun(b - delta)
        }else{
            result += fun(a + index * delta)   
        }
    }

    return result*delta;
}

const result = prompt("Через пробел 2 числа: a и b")
const bounds = result.split(' ')

const a = Number(bounds[0])

const b = Number(bounds[1])

const eps = 0.001


let n = 10
let prevResult = integrate(leftRS,a,b,n)
let currentResult = null



do {
    prevResult = currentResult
    n*=2
    currentResult = integrate(leftRS,a,b,n)
} while (Math.abs(prevResult - currentResult)> eps);

alert("Результат: "+currentResult +" n"+ n)