// Flat
    // devolver una matriz con una submatriz aplanada, 
        //recibe como argunmento la profundidad
    let array = [1, 2, 3, [1, 2, 3 [1, 2, 3]]];

    console.log(array.flat(2));

// Flat map
    // Permite mapear cada elemento, después pasarlo a una función
        // y aplanarlo según el resultado
    let array = [1, 2, 3, 4, 5];

    console.log(array.flatMap(value => [value, value * 2]));

// Trim
    // Nos permite eliminar los espacios en blanco de un string
    let hello = '     hello world';

    console.log(hello);
    console.log(hello.trimStart());

    let hello = 'hello world       ';
    console.log(hello);
    console.log(hello.trimEnd());

// Optional catch biding
    // Podemos pasar de forma opcional el parametro de error al valor de catch
    try {
        
    } catch (error) {
        
    }       // Antes del ecmascript10
    try {
        
    } catch {
        error
    }       // A partir del ecmascript10

// from entries
    // Va a transformar clave valor en un objeto (array to object)
    let entries = [["name", "ramses"], ["age", 17]];

    console.log(Object.fromEntries(entries));

// Symbol object
    // Nos va a permitir acceder a una descripción
    let mySymbl = `My Symbol`;
    let symbol = Symbol(mySymbl);
    console.log(symbol.description);


// ECMASCRIPT10 June 2019