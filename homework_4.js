//Технические требования:

//Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser.
//При вызове функция должна спросить у вызывающего имя и фамилию.
//Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName.
///Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko).Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko).
//Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). Вывести в консоль результат выполнения функции.
//Необязательное задание продвинутой сложности:





const firstName = prompt('What is your first name?');
const secondName = prompt('What is your second name?');

createNewUser = () => {
  let newUser = {
    firstName,
    secondName,
    getLogin() {
      return `${this.firstName.charAt(0).toLowerCase()}${this.secondName.toLowerCase()}`;
    }
  };

  return newUser;
};

const user = createNewUser();
console.log(user.getLogin());

