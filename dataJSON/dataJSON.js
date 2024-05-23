const data = {
  array: [
    1,
    2,
    3
  ],
  boolean: true,
  color: "gold",
  null: null,
  number: 123,
  object: {
    "a": "b",
    "c": "d"
  },
  string: "Hello World",
  hacer: function () {
    console.log("hola");
  }
}

delete data.number;
data.boolean = false;
data.age = 23;

// ctrl + ñ para abrir la terminal o consola de visual studio code

//convertir objeto nativo a plano
//stringify método para convertir a string plano

console.log(JSON.stringify(data));

const data2 = '{"name": "pepito","age": 34,"tasks":["play", "sleep"]}'
//convertir objeto plano a nativo
//parse método para convertir a objeto nativo o vota error

const data2Obj = JSON.parse(data2);
console.log(data2Obj.name);

/*
console.log(data.age);
console.log(data.null);
console.log(data);
data.hacer();
*/
