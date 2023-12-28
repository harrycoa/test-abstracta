numeros = [1, 4, 5, 19, 20, 23, 3, 17, 2, 8, 9, 17, 63]

// funcion utilizando for
function suma(array) {
    let suma = 0;
    for (let num of array) {
        if (num > 3 && num < 20) {
            suma += num;
        }
    }
    return suma;
}

// funcion utilizando while
function sumaConWhile(array) {
    let suma = 0;
    let i = 0;
    while (i < array.length) {
        if (array[i] > 3 && array[i] < 20) {
            suma += array[i];
        }
        i++;
    }
    return suma;
}

// funcion utilizando recursion
function sumaConRecursion(array, index = 0) {
    if (index >= array.length) {
        return 0;
    }

    const valorActual = (array[index] > 3 && array[index] < 20) ? array[index] : 0;
    return valorActual + sumaConRecursion(array, index + 1);
}



console.log(suma(numeros));