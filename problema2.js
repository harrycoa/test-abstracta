
function fibonacci(n) {
    if (n <= 1) {
        return n === 0 ? [] : [0];
    }

    let resultado = [0, 1];
    for (let i = 2; i <= n; i++) {
        resultado.push(resultado[i - 1] + resultado[i - 2]);
    }
    return resultado;
}

console.log(fibonacci(10));
