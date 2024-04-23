"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("director", [
      {
        name: "Christopher Nolan",
        birthdate: "1970-07-30",
        nationality: "Anh",
        biography:
          'Christopher Nolan là một đạo diễn, biên kịch và nhà sản xuất phim người Anh, nổi tiếng với những tác phẩm sáng tạo như "Inception", "Interstellar" và loạt phim "The Dark Knight".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Quentin Tarantino",
        birthdate: "1963-03-27",
        nationality: "Mỹ",
        biography:
          'Quentin Tarantino là đạo diễn phim nổi tiếng người Mỹ với phong cách độc đáo và các tác phẩm điện ảnh như "Pulp Fiction", "Kill Bill", và "Once Upon a Time in Hollywood".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Park Chan-wook",
        birthdate: "1963-08-23",
        nationality: "Hàn Quốc",
        biography:
          'Park Chan-wook là một đạo diễn và biên kịch Hàn Quốc, nổi tiếng với các bộ phim như "Oldboy" và "The Handmaiden".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wong Kar-wai",
        birthdate: "1958-07-17",
        nationality: "Hong Kong",
        biography:
          'Wong Kar-wai là một đạo diễn phim nổi tiếng từ Hong Kong, được biết đến với cách kể chuyện tinh tế và những tác phẩm như "In the Mood for Love" và "Chungking Express".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hayao Miyazaki",
        birthdate: "1941-01-05",
        nationality: "Nhật Bản",
        biography:
          'Hayao Miyazaki là đạo diễn phim hoạt hình người Nhật, người sáng lập của Studio Ghibli, nổi tiếng với các phim như "Spirited Away" và "My Neighbor Totoro".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alfonso Cuarón",
        birthdate: "1961-11-28",
        nationality: "Mexico",
        biography:
          'Alfonso Cuarón là một đạo diễn phim người Mexico, người đã đạo diễn các bộ phim ấn tượng như "Gravity" và "Roma".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bong Joon-ho",
        birthdate: "1969-09-14",
        nationality: "Hàn Quốc",
        biography:
          'Bong Joon-ho là đạo diễn Hàn Quốc đã tạo ra các tác phẩm nổi tiếng như "Parasite" và "Snowpiercer".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pedro Almodóvar",
        birthdate: "1949-09-25",
        nationality: "Tây Ban Nha",
        biography:
          'Pedro Almodóvar là một đạo diễn, biên kịch và nhà sản xuất phim người Tây Ban Nha, được biết đến với các tác phẩm như "Pain and Glory" và "All About My Mother".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Martin Scorsese",
        birthdate: "1942-11-17",
        nationality: "Mỹ",
        biography:
          'Martin Scorsese là một đạo diễn phim nổi tiếng người Mỹ với những bộ phim như "Goodfellas", "The Wolf of Wall Street", và "Taxi Driver".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wes Anderson",
        birthdate: "1969-05-01",
        nationality: "Mỹ",
        biography:
          'Wes Anderson là một đạo diễn phim Mỹ nổi tiếng với phong cách độc đáo và các bộ phim như "The Grand Budapest Hotel" và "Isle of Dogs".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Campion",
        birthdate: "1954-04-30",
        nationality: "New Zealand",
        biography:
          'Jane Campion là một đạo diễn phim người New Zealand, người đã tạo ra các tác phẩm như "The Piano" và "The Power of the Dog".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Guillermo del Toro",
        birthdate: "1964-10-09",
        nationality: "Mexico",
        biography: `Guillermo del Toro là đạo diễn người Mexico với các bộ phim phép thuật như "Pan's Labyrinth" và "The Shape of Water".`,
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Denis Villeneuve",
        birthdate: "1967-10-03",
        nationality: "Canada",
        biography:
          'Denis Villeneuve là một đạo diễn phim người Canada, nổi tiếng với các tác phẩm như "Blade Runner 2049" và "Dune".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ang Lee",
        birthdate: "1954-10-23",
        nationality: "Đài Loan",
        biography:
          'Ang Lee là một đạo diễn phim người Đàiđạo diễn phim ngườKhông chỉ hỗ trợ kinh tế, mà các cuộc biểu tình còn mang theo giấc mơ đổi mới của thế hệ đi lên giời Loan nổi tiếng với các tác phẩm như "Brokeback Mountain" và "Life of Pi".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sofia Coppola",
        birthdate: "1971-05-14",
        nationality: "Mỹ",
        biography:
          'Sofia Coppola là một đạo diễn, biên kịch và nhà sản xuất phim người Mỹ, nổi tiếng với các bộ phim như "Lost in Translation" và "The Virgin Suicides".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
