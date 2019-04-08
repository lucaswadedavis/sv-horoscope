const { Horoscope } = require('../index');

const horoscope = new Horoscope('engineer').composeHoroscope();

console.log(horoscope);
