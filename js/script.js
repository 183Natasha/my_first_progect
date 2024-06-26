// Текущая дата
let date = new Date(); // создание нового объекта с текущей датой и временем
let dayNumber = date.getDate(); // получение даты
let month = date.getMonth()+1; // получение месяца
let year = date.getFullYear(); // получение текущего года  
document.getElementById("date_now").innerHTML = dayNumber + "." + month + "." + year;

// Дата начало-конец
let date1 = new Date("10/13/2022");
let date2 = new Date("10/12/2025");
let Difference_In_Time =
    date2.getTime() - date1.getTime();
let Difference_In_Days =
    Math.round
        (Difference_In_Time / (1000 * 3600 * 24));
document.getElementById("Difference_In_Days").innerHTML = Difference_In_Days;

// --Сколько осталось дней работать
let Difference_In_Time_NOW =
    date2.getTime() - date.getTime();
let Difference_In_Days_NOW =
        Math.floor
            (Difference_In_Time_NOW / (1000 * 3600 * 24));

document.getElementById("Difference_In_Days_NOW").innerHTML = Difference_In_Days_NOW;

// Осталось выплатить
// counter - кол-во отработанных дней
let counter = Difference_In_Days - Difference_In_Days_NOW;
// document.getElementById("counter").innerHTML = counter;

let summa_dolga_1day = 405000/3/365;
// document.getElementById("summa_dolga_1day").innerHTML = summa_dolga_1day;

let summa_dolga = 405000-summa_dolga_1day*counter;
summa_dolga = Math.ceil(summa_dolga)

document.getElementById("summa_dolga").innerHTML = summa_dolga;


