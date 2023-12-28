numeros = [1, 4, 5, 19, 20, 23, 3, 17, 2, 8]

function suma(numeros) {
    let suma = 0;
    for (let num of numeros) {
        if (num > 3 && num < 20) {
            suma += num;
        }
    }
    return suma;
}
