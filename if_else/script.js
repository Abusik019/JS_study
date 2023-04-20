

// // let variable_name = value;
// // let message = 'hello';



// // Опеределение:
// let message;

// // Объявление:
// let house = 12;

// // Инициализация:
// let notes = [1, 2, 3, 4];




// // Однострочное объявление переменных
// let a = 3, b = 2, c = 4;


// // let doc = document.getElementById('Id'), 
// //     rock = event.target.parentElement.firstChild;

// // let doc = document.getElementById('Id'), rock = event.target.parentElement.firstChild;

// // Глобальная переменная
// var variable_1 = 'value_1';

// // Локальная переменная
// let variable_1 = 'value_1';





// const COLOR_RED = '#F00';
// const COLOR_BLUE = '#0F0';
// const COLOR_GREEN = '#00F';
// const COLOR_BLACK = '#000';

// // ширина высота глубина прямоугольника
// // скорость цвет

// let street = 'Строительная 1';

// let timeLesson = 45;

// let greetings = 'Hello world';
// console.log(greetings)

// let array_1 = [12, 'board', true, 45.9];

// let country;

// let phoneNumber = '8(988)382-77-77';
// console.log(phoneNumber)

// let computerElement = 'CPU';

// let addOfNumbers = a + b;

// let sideA = 15, sideB = 25, sideC = 7;
// console.log(sideA + sideB)

// let word1 = 'hello', word2 = 'there';
// console.log(word1 + word2)

// const RECTANGLE_WIDTH = 20;
// const RECTANGLE_HEIGHT = 32;
// const RECTANGLE_DEPTH = 7;

// const COLOR_CAR = 'aquamarine';
// const CAR_BRAND = 'audi';
// const CAR_MAX_SPEED = '280'


// 1. Составить переменые с типом данных число, провести над ними все математические действия и вывести часть из них через alert. 5-10 переменных

// let num = 12;
// console.log(num ** 2);
// console.log(num + 3);
// console.log(num - 11);
// console.log(num * 4);
// console.log(num / 6);
// console.log(num % 5);

// let num1 = 48;
// console.log(num1 ** 2);
// console.log(num1 + 14);
// console.log(num1 - 110);
// console.log(num1 * 2);
// console.log(num1 / 12);
// console.log(num1 % 9);

// let num2 = 30;
// console.log(num2 ** 2);
// console.log(num2 + 30);
// console.log(num2 - 29);
// console.log(num2 * 50);
// console.log(num2 / 10);
// console.log(num2 % 24);

// let num3= 100;
// console.log(num3 ** 2);
// console.log(num3 + 342);
// console.log(num3 - 3487);
// console.log(num3 * 12);
// console.log(num3 / 25);
// console.log(num3 % 5);

// let num4 = 6;
// console.log(num4 ** 2);
// console.log(num4 + 1099);
// console.log(num4 - 2);
// console.log(num4 * 24);
// console.log(num4 / 6);
// console.log(num4 % 4);

// 2. Вывести пару сообщений подстверждения через prompt (2-3) и записать результат в переменную

// let youHuman = confirm('Вы человек');
// let media = confirm('Вы самый популярный человек в мире');
// alert(media)

// 3. Запросить у пользвателя 3 числа и 2 строки через confirm. Вывести тип данных каждого ввода в console.log()

// let input_date = prompt('Введите число',[null]);
// console.log(typeof input_date)
// let input_date2 = prompt('Введите число',[null]);
// console.log(typeof input_date2)
// let input_date3 = prompt('Введите число',12);
// console.log(typeof input_date3)

// let input_date4 = prompt('Введите текст',['текст']);
// console.log(typeof input_date4)

// let input_date5 = prompt('Введите текст',['текст']);
// console.log(typeof input_date5)



// 4. Преобразовать 3 значения в разные типы данных (2 переменные во все типы данных кромер объектов, символов, bigint, undefined/null)
// let anyNum = 19;
// anyNum = String(anyNum);
// console.log(typeof anyNum)
// anyNum = Boolean(anyNum);
// console.log(typeof anyNum)

// const number = Number('Hello');
// console.log(typeof number)
// const boolean = Boolean('Hello');
// console.log(typeof boolean)

// const number1 = Number(true);
// console.log(typeof number1)
// const string = String(true);
// console.log(typeof string)

// let orange = 200;
// let weight = 2;
// if (orange > 100){
//     console.log('У вас вышло ${orange * weight} рублей');
// } else {
//     console.log("В базу данных еще не внесли цену этих апельсинов")
// }



// // 1. Составить константы описавающие 10 погодных состояний.
// const WEATHER_RAIN = "rain";
// const WEATHER_SUNNY = "sunny";
// const WEATHER_FOGTY = "fogty";
// const WEATHER_MAINLY_CLOUDY = "mainly cloudy";
// const WEATHER_WINDY = "windy";
// const WEATHER_SNOWY = "snowy";
// const WEATHER_CLEAR = "it's clear";
// const WEATHER_DRY = "dry";
// const WEATHER_VERY_SNOWY = "very heavy snowfall";
// const WEATHER_STORMY = "stormy";

// // 2. Составить 4 переменные и прозвести с ними известные операции (конкатинации, лог операторы, мат оператыоры и т.д.). С каждой по 3-4 действия.#000
// // import Math

// let word = 'hello';
// console.log(word + 'word');
// console.log(word*2);
// console.log(word - false);

// let number = 12;
// let array = [34,'phone'];
// let float_num = 4.5;

// console.log(Math.pow(number,2));
// console.log(number*8);
// console.log(number + 'apples');

// console.log(array[0] + number);
// delete array[1];
// alert(array.concat([12,'geo']));

// console.log(Math.round(float_num));
// console.log(float_num - number);
// console.log(Math.sqrt(float_num));



// // 3.1 Создать 3 переменные и найти наибольшее значение.
// let a = 35;
// let b = 18;
// let c = 41;

// if (a > b & c) {
//     console.log('a - наибольшее число')
// } else if (b > a & c) {
//     console.log('b - наибольшее число')
// } else {
//     console.log('c - наибольшее число')
// }
// // 3.2 Составить программу, которая запрашивает ввод температуры тела человека и определяет, здоров он или болен (здоров при 36 < t < 37)
// let temperature = 36.6;
// if (36 < temperature < 37) {
//     console.log('вы здоровы')
// } else {
//     console.log('вы больны!')
// }
// // 3.3 Найти среднее арифметическое числа. while, if-else. Range = {1, 10}.
// let min = 1,
//     max = 11,
//     sum = 0,
//     amount = 0;

// let i = 0;
// while(i < 3){
//     let number = Math.floor(Math.random() * (max - min) + min);

//     sum += number;
//     amount += 1;

//     i += 1;
// }

// console.log(sum / amount);



// Оставлять комментарии к коду, писать переменные осмысленно
// 1. Написать программу нахождения наибольшего целого числа из трех введенных с клавиатуры.
let first_number = 23,
    second_number = 41,
    third_number = 1;

// && - И
// || - ИЛИ
// ! - НЕ

if(first_number > second_number && first_number > third_number){ 
    console.log(`${first_number} - наибольшее число`);
} else if(second_number > first_number && second_number > third_number){
    console.log(`${second_number} - наибольшее число`);
} else {
    console.log(`${third_number} - наибольшее число`);
}

// 2. Составьте программу, проверяющую, что введенное число является четным или нечетным. 
let input_number = 15;

if(input_number % 2 === 0){               // Берем значение переменной и проверяем его остаток от деления на 2. Если остаток 0 - число четное
    console.log(`${input_number} - четное число`);
} else {                                 // Иначе остаток 1 - число нечетное.
    console.log(`${input_number} - нечетное число`);
}
 

// 3. Составьте программу, определяющую, лежит ли точка с указанными координатами в круге радиуса R с центром в начале координат(0; 0)
let x = 3,
    y = 7,
    R = 8,
    hypo = Math.sqrt(x ** 2 + y ** 2);
// задаем координаты точки и радиуса
if(hypo <= R){ //вычисляем расстояние от точки до центра окружности,и проверяем лежит ли точка внутри круга.Если радиус больше,либо равен гипотенузе,то лежит
    console.log('Точка принадлежит кругу');
}else{//Иначе не лежит
    console.log('Точка не принадлежит кругу');
}



// 4. Составьте программу, определяющую, лежит ли точка с указанными координатами внутри квадрата с углами (0,0) и (а1, b1).
let coord_x0 = 0,
    coord_y0 = 0,
    coord_x1 = 4,
    coord_y1 = 4,
    user_x = 1,
    user_y = 3;

if(user_x <= coord_x1 && user_y <= coord_y1){
    console.log('Точка принадлежит квадрату')
}else{
    console.log('Точка не принадлежит квадрату')
}
    



// 5. Вычислоить и вывести в консоль, что больше: sin(x-3) или tg(x-10)
let i = 14;


if(Math.tan(i - 10) > Math.sin(i - 3)){
    console.log(`${Math.tan(i - 10)} - тангенс больше`)
}else {
    console.log(`${Math.sin(i - 3)} - синус больше`)
}


// 6. Найти наименьшее из 4-х введенных с клавиатуры чисел. Попробовать решить через вложенное ветвление
//variant 1
let number_1 = 4,
    number_2 = 30,
    number_3 = 7,
    number_4 = 9;

if(number_1 < number_2 && number_1 < number_3 && number_1 < number_4) {
    console.log(`${number_1} - наименьшее число`)
}else if(number_2 < number_1 && number_2 < number_3 && number_2 < number_4) {
    console.log(`${number_2} - наименьшее число`)
}else if(number_3 < number_1 && number_3 < number_2 && number_3 < number_4) {
    console.log(`${number_3} - наименьшее число`)
}else {
    console.log(`${number_4} - наименьшее число`)
}

// 7. Составьте программу вычисления суммы четных цифр введенного с клавиатуры  любого натурального числа. Использовать цикл while и if-else
let sum = 0,
    number = 0;

while(number < 40) {
    number += 2
    sum += number
    console.log(sum)
}












////////////////////////
let num = 0;
while(num < 5) {
    console.log(num);
    num++;
}

let num2 = 0;
for(let num2 = 0;num2 < 5;num2++) {
    console.log(num2);
}

let num3 = 0;
do {
    console.log(num3);
    num3++;
} while(num3 < 5);

//////////////////////
let num1 = 8;
while(num1) {
    console.log(num1);
    num1--;
}
//////////////////////
let num4 = 0;
while(num4 < 3) {
    console.log(num4);
    num4++;
}
//////////////////////
FirstFor: for(let num5 = 0;num5 < 2;num5++) {
    for(let size = 0;size < 3;size++){
        if(size == 1){
           break FirstFor;
        }
        console.log(size)
    }
}

  


