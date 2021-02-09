window.onload = () => {
    document.querySelector('#surnameOutput').innerText = 'Иванов';
    document.querySelector('#firstNameOutput').innerText = 'Иван';
    document.querySelector('#patronymicOutput').innerText = 'Иванович';
    document.querySelector('#genderOutput').innerText = 'Мужчина';
    document.querySelector('#birthDayOutput').innerText = '1 ';
    document.querySelector('#birthMonthOutput').innerText = 'января ';
    document.querySelector('#birthYearOutput').innerText = '1990';
    document.querySelector('#professionOutput').innerText = 'Дворник';
} 

document.querySelector('#generationBtn').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
    document.querySelector('#birthMonthOutput').innerText = initPerson.birthMonth;
    document.querySelector('#birthDayOutput').innerText = initPerson.birthDay;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
})

document.querySelector('#cleaningBtn').addEventListener('click', () => {
    document.querySelector('#surnameOutput').innerText = 'Иванов';
    document.querySelector('#firstNameOutput').innerText = 'Иван';
    document.querySelector('#patronymicOutput').innerText = 'Иванович';
    document.querySelector('#genderOutput').innerText = 'Мужчина';
    document.querySelector('#birthDayOutput').innerText = '1 ';
    document.querySelector('#birthMonthOutput').innerText = 'января ';
    document.querySelector('#birthYearOutput').innerText = '1990';
    document.querySelector('#professionOutput').innerText = 'Дворник';
})