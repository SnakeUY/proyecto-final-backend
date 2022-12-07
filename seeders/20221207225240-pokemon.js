'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up:(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('pokemons', [{
      id: 25,
      name: 'Pikachu',
      weight: 6,
      height: 40,
      description: 'Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas.',
      hp: 10,
      atk: 13,
      def: 33,
      satk: 33,
      sdef: 43,
      spd: 3,
      price: 900,
      },
      {
        id: 4,
        name: 'Charizard',
        weight: 6,
        height: 40,
        description: 'me quemo',
        hp: 10,
        atk: 13,
        def: 33,
        satk: 33,
        sdef: 43,
        spd: 3,
        price: 900,
        }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('pokemons', null, {});
  },
};
