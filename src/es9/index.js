// Operador de reposo
    // Nos permite extraer las propiedades de un objeto que aún no se ha construido
    const obj = {
        name: 'ramses',
        age: 17,
        country: 'MX'
    };

    let { name, ...all } = obj;
        // Utilizar el operador de reposo para separar los elementos
    console.log(name, all);

// Propiedades de propagación
    // Nos permite unir cuantos elementos queramos de objetos a un nuevo objeto
    const obj = {
        name: 'Ramses',
        age: 17
    }

    const obj1 = {
        ...obj,         // Aquí ya estamos uniendo nuestros obj al obj1
        country: 'MX'
    }

    console.log(obj1);

// Promise finally
    // Nos permite saber cuando ha terminado el llamado y poder ejecutar
    // alguna función o lógica de código según sea el caso
    const helloWorld = () => {
        return new Promise((resolve, reject) => {
            (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
        });
    };

    helloWorld()
        .then(response => console.log(response))
        .catch(error => console.log(error))
        .finally(() => console.log('Finalizo'));

// Regex
    // Nos permite agrupar bloques del regex y acceder a cada uno de ellos
    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
    const match = regexData.exec('2018-04-20');
    const year = match[1];
    const month = match[2];
    const day = match[3];

    console.log(year, month, day);

// ECMASCRIPT9 June 2018