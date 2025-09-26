import { Question } from "@/types/question";

export const inicial: Question[] = [
  {
    id: 1,
    title: " Escribe un programa que muestre por consola (con un print) los números de 1 a 15 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:",
    body:
      "- Múltiplos de 3 por la palabra (fizz) \n" +
      "- Múltiplos de 5 por la palabra (buzz) \n" +
      "- Múltiplos de 3 y de 5 a la vez por la palabra (fizzbuzz)",
  },
  {
    id: 2,
    title: "* Crea una única función (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.",
    body:
      "- La función recibirá por parámetro sólo UN polígono a la vez.\n" +
      "- Los polígonos soportados serán Triángulo y Rectángulo." +
      " - Imprime el cálculo del área de un polígono de cada tipo.",
  },
  {
    id: 3,
    title: " * Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.",
    body:
      "- Si le pasamos (Hola mundo) nos retornaría (odnum aloH).",
  },
  {
    id: 4,
    title: "* Crea un programa se encargue de transformar un número  decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.",
    body:
      ""
  },
  {
    id: 5,
    title: "Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).",
    body:
      "- out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2. \n" +
      "- out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.\n" 

  },
  {
    id: 7,
    title: "Escribe una función que calcule si un número dado es un número de Armstrong (o también llamado narcisista).",
    body:
      "Si no conoces qué es un número de Armstrong, debes buscar información al respecto.",
  },
  {
    id: 8,
    title: "Crea una función que reciba un String de cualquier tipo y se encargue de poner en mayúscula la primera letra de cada palabra.",
    body:
      "No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.",
  },
  {
    id: 9,
    title: "Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos.",
    body:
      "",
  },
  {
    id: 10,
    title: "Crea una función que reciba dos array, un booleano y retorne un array.",
    body:
      "- Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.\n" +
      "- Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.\n" +
      "- No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.\n" ,
  },
  {
    id: 11,
    title: "Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno).",
    body:
      "-¿De cuántas maneras eres capaz de hacerlo?\n" +
      "- Crea el código para cada una de ellas.",
  },
  {
    id: 12,
    title: "Dibujar cuadrado o triángulo con '*'",
    body:
      "Programa que dibuje un cuadrado o triángulo con '*'.\n" +
      "Indicar tamaño del lado y la figura a dibujar.\n" +
      "EXTRA: dibujar más figuras.",
  },
  {
    id: 13,
    title: "* Crea un programa que determine si dos vectores son ortogonales.",
    body: `
 - Los dos array deben tener la misma longitud.

 - Cada vector se podría representar como un array. Ejemplo: [1, -2]`,
  },
  {
    id: 14,
    title: "* Crea una función que ordene y retorne una matriz de números.",
    body: `
 - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro  adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor.

 - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.`,
  },
  {
    id: 15,
    title: "* Crea una función que imprima los 30 próximos años bisiestos siguientes a uno dado.",
    body: `*
 - Utiliza el menor número de líneas para resolver el ejercicio.`,
  },
  {
    id: 16,
    title: "* Dado un listado de números, encuentra el SEGUNDO más grande",
    body: "",
  },
  {
    id: 17,
    title: `* Crea un programa se encargue de transformar un número binario a decimal sin utilizar funciones propias del lenguaje que lo hagan directamente.`,
    body: "",
  },
  {
    id: 18,
    title: "Crea una función que retorne el número total de bumeranes de un array de números enteros e imprima cada uno de ellos.",
    body: `*
 - Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, en el que el primero y el último son iguales, y el segundo es diferente. Por ejemplo [2, 1, 2].

  - En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2] y [4, 2, 4]).`,
  },
  {
    id: 19,
    title: "* Crea un función que reciba un texto y retorne la vocal que más veces se repita.",
    body: `
 - Ten cuidado con algunos casos especiales.

 - Si no hay vocales podrá devolver vacío.`,
  },
  {
    id: 20,
    title: "* Dada una URL con parámetros, crea una función que obtenga sus valores.",
    body: `
 No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.

  *Ejemplo: En la url https://retosdeprogramacion.com?year=2023&challenge=0

 los parámetros serían ["2023", "0"]`,
  },
  {
    id: 21,
    title: "* Crea una función que sea capaz de detectar si existe un viernes 13 en el mes y el año indicados.",
    body: `
 * La función recibirá el mes y el año y retornará verdadero o falso.`,
  },
  {
    id: 22,
    title: "* Crea una función que reciba un número decimal y lo trasforme a Octal y Hexadecimal.",
    body: `

 - No está permitido usar funciones propias del lenguaje de programación que realicen esas operaciones directamente..`,
  },
  {
    id: 23,
    title: "Algoritmo que lea dos números, calculando y escribiendo el valor de su suma, resta, producto y división.",
    body: "",
  },
  {
    id: 24,
    title: `*Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual. Diseñar un algoritmo para este propósito

    (recuerda que para calcular el porcentaje puedes hacer una regla de 3).`,
    body: "",
  },
  {
    id: 25,
    title: "Obtener el IGV (18%) de una venta si esta es superior a S/ 150,000.00 aplicar un descuento del 25 %.",
    body: ``,
  },
  {
    id: 26,
    title: "Dado un número natural de dos cifras, diseñe un algoritmo que permita obtener el número invertido. Ejemplo si se ingresa 23 que se muestre 32.",
    body: ``,
  },
  {
    id: 27,
    title: "Ingresar 4 notas de un alumno y mostrar la mejor nota.",
    body: ``,
  },
  {
    id: 28,
    title: "Determinar si un alumno aprueba o reprueba un curso sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a 17; reprueba en caso contrario.",
    body: ``,
  },
  {
    id: 29,
    title: "Calcular el total que una persona debe pagar en una llantera, si el precio de cada llanta es de  800 Bs si se compran menos de 5 llantas y de 700 Bs. si se compran 5 o más.",
    body: ``,
  },
  {
    id: 30,
    title: "Ingresar dos números entero y luego determinar y mostrar:",
    body: `
        a. Si el primero es divisible por el segundo

        b. Si el segundo es divisible por el primero

        c. Cuál de los dos es mayor; en caso que sean iguales, mostrar mensaje adecuado

        d. Si ambos son impares`,
  },
];

