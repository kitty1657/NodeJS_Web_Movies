"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("actor", [
      {
        name: "Bạch Lộc",
        birthdate: "1994-09-23",
        nationality: "Trung Quốc",
        biography:
          "Là một nữ diễn viên, ca sĩ và người mẫu nổi tiếng của Trung Quốc đại lục. Cô được khán giả biết đến rộng rãi qua các bộ phim Chiêu Diêu, Học Viện Quân Sự Liệt Hoả, Châu Sinh Như Cố, Trường ...",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "La Vân Hi",
        birthdate: "1988-07-28",
        nationality: "Trung Quốc",
        biography:
          "Là một ca sĩ, diễn viên, nghệ sĩ người Trung Quốc. Năm 2010, La Vân Hi xuất đạo với thân phận là một trong hai thành viên chính của nhóm nhạc nam ...",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ken Watanabe",
        birthdate: "1959-10-21",
        nationality: "Nhật Bản",
        biography:
          'Là một trong những diễn viên Nhật Bản có tiếng tại Hollywood, Ken Watanabe được biết đến với các vai diễn trong các bộ phim như "The Last Samurai", "Inception", và "Godzilla". Ông cũng nhận được nhiều giải thưởng và đề cử quốc tế.',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Audrey Tautou",
        birthdate: "1976-08-09",
        nationality: "Pháp",
        biography:
          'Nổi tiếng với vai Amélie trong bộ phim "Amélie" từ Pháp, Audrey Tautou là biểu tượng của điện ảnh Pháp. Cô cũng tham gia trong nhiều dự án điện ảnh khác như "The Da Vinci Code".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rajinikanth",
        birthdate: "1950-12-12",
        nationality: "Ấn Độ",
        biography:
          'Là một trong những ngôi sao lớn nhất của điện ảnh Ấn Độ, Rajinikanth được mệnh danh là "Thalaiva" và đã đóng trong hàng loạt bộ phim Tamil thành công rực rỡ.',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Penélope Cruz",
        birthdate: "1974-04-28",
        nationality: "Tây Ban Nha",
        biography:
          'Là nữ diễn viên nổi tiếng đến từ Tây Ban Nha, Penélope Cruz đã giành được giải Oscar và có danh tiếng quốc tế qua các bộ phim như "Vicky Cristina Barcelona".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ryan Gosling",
        birthdate: "1980-11-12",
        nationality: "Canada",
        biography:
          'Là một diễn viên và nhà sản xuất phim người Canada, Ryan Gosling đã trở nên nổi tiếng qua nhiều vai diễn đáng chú ý, từ "The Notebook" đến "La La Land".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sofia Boutella",
        birthdate: "1982-04-03",
        nationality: "Algérie",
        biography:
          'Nổi tiếng khắp thế giới với các vai diễn trong "Kingsman: The Secret Service" và "Star Trek Beyond", Sofia Boutella là vũ công kiêm diễn viên xuất thân từ Algérie.',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Donnie Yen",
        birthdate: "1963-07-27",
        nationality: "Hồng Kông",
        biography:
          'Là một diễn viên và võ sư nổi tiếng, Donnie Yen được biết đến qua nhiều bộ phim võ thuật, đặc biệt là series "Ip Man".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marion Cotillard",
        birthdate: "1975-09-30",
        nationality: "Pháp",
        biography:
          'Cô là một trong những nữ diễn viên nổi tiếng của Pháp và đã giành được giải Oscar cho vai diễn trong phim "La Vie en Rose".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rita Moreno",
        birthdate: "1931-12-11",
        nationality: "Puerto Rico",
        biography:
          "Là một trong những nghệ sĩ đa tài, Rita Moreno đã giành được cả bốn giải thưởng lớn trong nghệ thuật biểu diễn: Emmy, Grammy, Oscar và Tony.",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tony Leung Chiu-Wai",
        birthdate: "1962-06-27",
        nationality: "Hồng Kông",
        biography:
          'Tony Leung là một trong những diễn viên châu Á được yêu thích nhất, nổi bật qua nhiều phim của đạo diễn Wong Kar-wai như "In the Mood for Love".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gael García Bernal",
        birthdate: "1978-11-30",
        nationality: "Mexico",
        biography:
          'Là một diễn viên, đạo diễn và nhà sản xuất phim người Mexico, Gael García Bernal nổi tiếng thế giới qua các phim như "Y Tu Mamá También" và "Amores Perros".',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tabu",
        birthdate: "1971-11-04",
        nationality: "Ấn Độ",
        biography:
          "Tabu là một trong những diễn viên nữ Ấn Độ chuyên nghiệp nhất và đã được khen ngợi cho sự nghiệp đa dạng của mình trong Bollywood và các dòng phim khu vực khác.",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chow Yun-fat",
        birthdate: "1955-05-18",
        nationality: "Hồng Kông",
        biography:
          'Nổi tiếng với vai trong phim "Hard Boiled" và "Crouching Tiger, Hidden Dragon", Chow Yun-fat là một biểu tượng điện ảnh Hồng Kông.',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lupita Nyong'o",
        birthdate: "1983-03-01",
        nationality: "Kenya",
        biography:
          'Lupita Nyong\'o, người đã giành được giải Oscar cho vai phụ xuất sắc trong "12 Years a Slave", là một trong những nữ diễn viên hàng đầu trong ngành công nghiệp điện ảnh hiện nay.',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Omar Sy",
        birthdate: "1978-01-20",
        nationality: "Pháp",
        biography:
          'Gặt hái thành công lớn với vai diễn trong bộ phim "The Intouchables", Omar Sy là một diễn viên Pháp được yêu mến, đã thể hiện tài năng của mình trên sân khấu quốc tế.',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Zhang Ziyi",
        birthdate: "1979-02-09",
        nationality: "Trung Quốc",
        biography:
          'Được biết đến với vai diễn trong "Crouching Tiger, Hidden Dragon" và "Memoirs of a Geisha", Zhang Ziyi là một trong những nữ diễn viên châu Á nổi tiếng trên toàn thế giới.',
        image: "",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
