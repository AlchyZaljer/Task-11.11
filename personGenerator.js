const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 15,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артём",
            "id_5": "Дмитрий",
            "id_6": "Владимир",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Алексей",
            "id_12": "Тимофей",
            "id_13": "Степан",
            "id_14": "Антон",
            "id_15": "Павел",
            "id_16": "Сергей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 15,
        "list": {     
            "id_1": "Мария",
            "id_2": "Анастасия",
            "id_3": "Ирина",
            "id_4": "Дарья",
            "id_5": "Татьяна",
            "id_6": "Юлия",
            "id_7": "Варвара",
            "id_8": "Евгения",
            "id_9": "София",
            "id_10": "Анна",
            "id_11": "Евгения",
            "id_12": "Наталья",
            "id_13": "Ксения",
            "id_14": "Екатерина",
            "id_15": "Светлана",
            "id_16": "Полина"
        }
    }`,
    patronymicJson: `{
        "count": 15,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артёмов",
            "id_5": "Дмитриев",
            "id_6": "Владимиров",
            "id_7": "Михайлов",
            "id_8": "Данилов",
            "id_9": "Егоров",
            "id_10": "Андреев",
            "id_11": "Алексеев",
            "id_12": "Тимофеев",
            "id_13": "Степанов",
            "id_14": "Антонов",
            "id_15": "Павлов",
            "id_16": "Сергеев"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Дворник",
            "id_2": "Слесарь",
            "id_3": "Солдат",
            "id_4": "Повар",
            "id_5": "Строитель",
            "id_6": "Бизнесмен",
            "id_7": "Музыкант",
            "id_8": "Актер",
            "id_9": "Журналист",
            "id_10": "Пожарный",
            "id_11": "Полицейский"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Учительница",
            "id_2": "Медсестра",
            "id_3": "Уборщица",
            "id_4": "Актриса",
            "id_5": "Дизайнер",
            "id_6": "Флористка",
            "id_7": "Певица",
            "id_8": "Машинистка",
            "id_9": "Бизнесвумен",
            "id_10": "Писательница",
            "id_11": "Учительница"
        }
    }`,
    monthJson: `{
        "count": 11,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        if (this.randomIntNumber() == 1) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE;
        }
    },

    randomFirstName: function (gender) {
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname: function (gender) {
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson)+'а';
        }
    },

    randomPatronymic: function (gender) {
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.patronymicJson)+'ич';
        } else {
            return this.randomValue(this.patronymicJson)+'на';
        }
    },

    randomBirthYear: function() {
        return this.randomIntNumber(2001, 1920);
    },

    randomBirthDay: function (month, year) {
        let oddMonthArr = ['января', 'марта', 'мая', 'июля', 'сентября', 'ноября'];
        let evenMonthArr = ['апреля', 'июня', 'августа', 'октября', 'декабря'];

        if (oddMonthArr.indexOf(month) !== -1) { // для нечетных месяцев
            return this.randomIntNumber(31, 1);
        } else if (evenMonthArr.indexOf(month) !== -1) { // для четных месяцев
            return this.randomIntNumber(30, 1);
        } else { // для "февраля"
            if (year % 4 == 0) { // проверка на високосность 
                return this.randomIntNumber(29, 1);
            } else {
                return this.randomIntNumber(28, 1);
            }
        }
    },

    randomBirthMonth: function() {
        return this.randomValue(this.monthJson);
    },


    randomProfession: function (gender) {
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.patronymic = this.randomPatronymic(this.person.gender);
        this.person.birthYear = this.randomBirthYear();
        this.person.birthMonth = this.randomBirthMonth();
        this.person.birthDay = this.randomBirthDay(this.person.birthMonth, this.person.birthYear);
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    }
};
