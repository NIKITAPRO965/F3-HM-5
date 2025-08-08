//Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
const choice = prompt("Виберіть варіант зі списку: Кава, Чай, Сік.").trim().toLowerCase();
switch (choice) {
    case "кава":
    console.log(`Кава`);
        break;
    case "чай":
    console.log(`Чай`);
        break;
    case "сік":
    console.log(`Сік`);
        break;
    default:
    console.log(`Нажаль такого у нас нема`);
        break;
}


//Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.
const day = prompt("Вкажіть день тижня").trim().toLowerCase();
switch (day) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п’ятниця":
    console.log("Це робочий день.");
    break;
  case "субота":
  case "неділя":
    console.log("Це вихідний день.");
    break;
  default:
    console.log("Невірно вказано день тижня.");
    break;
}




//Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.
const month = Number(prompt("Вкажіть номер місяця:"));
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;
  default:
    console.log("Неправильний номер місяця.");
}



//Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".
const color = prompt("Вкажіть колір: червоний, зелений, жовтий.").trim().toLowerCase();
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
const num1 = Number(prompt("Введіть перше число"));
const num2 = Number(prompt("Введіть друге число"));
const operator = prompt("Введіть оператор");
let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 === 0) {
        console.log("Помилка: ділення на нуль неможливе!");
    } else {
        result = num1 / num2;
    }
} else {
    console.log("Невідомий оператор!");
}
if (result !== undefined) {
    console.log("Результат:", result);
}

