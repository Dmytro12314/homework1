//Задание

//Реализовать программу на Javascript, которая будет находить все числа кратные 5 (делятся на 5 без остатка) в заданном диапазоне. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

//Технические требования:

//Считать с помощью модального окна браузера число, которое введет пользователь.
//Вывести в консоли все числа кратные 5, от 0 до введенного пользователем числа. Если таких чисел нету - вывести в консоль фразу `Sorry, no numbers'




let num = prompt('enter number?')//змінна в яку ми вносимо число 
for (let i = 1 ; i <= num; i++){//умовний цикл де ми присвоємо нову змінну від 1 до змінної num
    if(i % 5 == 0){//тут змінна виконує умову де бере залишок від 5 якщо число введене користувачем це дозволяє 
console.log(i)// виводимо число яке ввів користувач та яке має залишок від 5

    }
}if (num % 5 != 0){//умова якщо число яке ввів користувач не має залшика від 5 
    console.log(`Sorry, no numbers ${num}`)// тут виводимо текстове повідомлення 
}