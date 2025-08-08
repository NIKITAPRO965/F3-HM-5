//Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
// const choice = Number(prompt("Виберіть варіант зі списку: 1-Кава, 2-Чай, 3-Сік."));
// switch (choice) {
//     case 1:
//     console.log(`Кава`);
//         break;
//     case 2:
//     console.log(`Чай`);
//         break;
//     case 3:
//     console.log(`Сік`);
//         break;
//     default:
//     console.log(`Нажаль такого у нас нема`);
//         break;
// }


//Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.
const day = prompt("Вкажіть день тижня").trim().toLocaleLowerCase();
switch (day) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "П’ятниця":
    console.log("Це робочий день.");
    break;
  case "Субота":
  case "Неділя":
    console.log("Це вихідний день.");
    break;
  default:
    console.log("Невірно вказано день тижня.");
    break;
}




//Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.
// const month = Number(prompt("Вкажіть номер місяця:"));
// switch (month) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Зима");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Весна");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Літо");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Осінь");
//     break;
//   default:
//     console.log("Неправильний номер місяця.");
// }



//Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".
const color = prompt("Вкажіть колір: червоний, зелений, жовтий.").trim().toLocaleLowerCase();
switch (color) {
  case "червоний":
    console.log("стоп");
    break;
  case "зелений":
    console.log("йти");
    break;
  case "жовтий":
    console.log("чекати");
    break;
  default:
    console.log("невідомий колір");
}




//Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.
// const a = 6;
// const b = 5;
// const op = prompt("Введіть знаки для прикладу 6 ? 5 = ?: +, -, *, /.");

// switch (op) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   default:
//     console.log("Невірна операція");
// }





