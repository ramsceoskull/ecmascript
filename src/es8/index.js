// Object entries
    // Nos permite devolver la clave y los valores de una matriz
    const data = {
        frontend: 'Ramses',
        backend: 'Omar',
        design: 'Joss'
    }

    const entries = Object.entries(data);
    console.log(entries);
    console.log(entries.length);

// Object values
    // Devuelve los valores de un objeto a un arreglo
    const data = {
        frontend: 'Ramses',
        backend: 'Omar',
        design: 'Joss'
    }

    const values = Object.values(data);
    console.log(values);
    console.log(values.length);

// Padding
    const string = 'hello';
    console.log(string.padStart(7, 'hi'));
    console.log(string.padEnd(12, ' -----'));
    console.log('food'.padEnd(12, '  -----'));

// Trailing comas
    // Establece que al siguiente linea puede haber un valor o no (no afecta)
    const obj = {
        name: 'ramses',
    }

// Async y Await
    const helloWorld = () => {
        return new Promise((resolve, reject) => {
            (false)
                ? setTimeout(() => resolve('Hello World'), 3000)
                : reject(new Error('Test Error'))
        })
    };   // Esta es una promesa

    const helloAsync = async () => {
        const hello = await helloWorld();
        console.log(hello);
    };

    helloAsync();

    const anotherFunction = async () => {
        try {
            const hello = await helloWorld();
            console.log(hello);
        } catch (error) {
            console.log(error);
        }
    };

    anotherFunction();

// ECMASCRIPT8 June 2017