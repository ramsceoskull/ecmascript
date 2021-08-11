// Default params
    function newFunction(name, age, country) {
        var name = name || 'ramses';
        var age = age || 17;
        var country = country || 'MX';
        console.log(name, age, country);
    }

    // es6
    function newFunction2(name = 'ramses', age = 17, country = 'MX') {
        console.log(name, age, country);
    };

    newFunction2();
    newFunction2('Ricardo', '23', 'CO');

// Templetes literals || Concatenación
    let hello = "Hello";
    let world = "World";
    let epicPhrase = hello + ' ' + world;
    console.log(epicPhrase);

    // es6
    let epicPhrase2 = `${hello} ${world}`;
    console.log(epicPhrase2);

// Multinlinea en los strings
    let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
        + "otra frase epica que necesitamos.";

    // es6
    let lorem2 = `otra frase epica que necesitamos
    ahora es otra frase epica`

    console.log(lorem);
    console.log(lorem2);

// Destructuración de elementos
    let person = {
        'name': 'oscar',
        'age': 32,
        'country': 'MX'
    }
    console.log(person.name, person.age);

    // es6
    let {name, age, country} = person;
    console.log(name, age, country);

// Spread Operator
    let team1 = ['Oscar', 'Ramses', 'Ricardo'];
    let team2 = ['Valeria', 'Jessica', 'Camila'];
    let agrupacion = ['David', 'Oscar', 'Ramses', 'Ricardo', 'Valeria', 'Jessica', 'Camila'];
    console.log(agrupacion);

    // es6
    let education = ['David', ...team1, ...team2];
    console.log(education);

// Declaración de variables utilizando los prefijos var y let
    var holaVar = 'hola';
        // variables creadas con el prefijo var están disponibles de forma global
    let holaLet = 'hola';
        // Con el prefijo let solo está disponible
            //en el scope (bloque de código en que va a ser llamado)

    {
        var globalVar = "Global Var";
    }

    {
        let globalLet = 'Global Let';
        console.log(globalLet);
    }

    console.log(globalVar);
        // console.log(globalLet);

    // const = no se puede reasignar un valor a las variables const
    const a = 'b';
    a = 'a';
    console.log(a);

// Prpiedad de objetos mejorada
    let name = 'ramses';
    let age = 17;

    // es5
    obj = {name: name, age: age};

    // es6
    obj2 = {name, age};

    console.log(obj2);

// Arrow functions
    const names = [
        {name: 'Ramses', age: 17},
        {name: 'Yesica', age: 27}
    ]

    let listOfNames = names.map(function (item) {
        console.log(item.name);
    });

    // es6
    let listOfNames2 = names.map(item => console.log(item.name));
    const listOfNames3 = (name, age, country) => {
        ...
    }

    const listOfNames4 = name => {
        ...
    }
    
    const square = num => num * num;

// Promesas
    const helloPromise = () => {
        return new Promise((resolve, reject) => {
            if (true) {
                resolve('Hey!');
            } else {
                reject('Ups!!');
            }
        });
    }

    helloPromise()
        .then(response => console.log(response))
        // .then(() => console.log('hola')) Se pueden utilizar tantos then requieras
        .catch(error => console.log(error));

// Class
    class calculator {
        constructor() {
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA, valueB) {
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

    const calc = new calculator();
    console.log(calc.sum(2, 2));

// Trabajar con módulos (import o export)
    import { hello } from './module';
    hello();

// Generators (generadores)
    function* helloWorld() {
        if (true) {
            yield 'Hello, ';
                // Permite retonar algo y también guarda este estado de forma interna
        }
        if (true) {
            yield 'World';
        }
    };

    const generatorHello = helloWorld();
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);

// ECMASCRIPT6 June 2015