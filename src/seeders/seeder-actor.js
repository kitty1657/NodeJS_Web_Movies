'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('actor', [
			{
				name: 'Bạch Lộc',
				birthdate: '1994-09-23',
				nationality: 'Trung Quốc',
				biography:
					'Là một nữ diễn viên, ca sĩ và người mẫu nổi tiếng của Trung Quốc đại lục. Cô được khán giả biết đến rộng rãi qua các bộ phim Chiêu Diêu, Học Viện Quân Sự Liệt Hoả, Châu Sinh Như Cố, Trường Nguyệt Tẫn Minh, Dĩ Ái Vi Doanh và Ninh An Như Mộng.',
				image:
					'https://upload.wikimedia.org/wikipedia/vi/thumb/b/bd/B%E1%BA%A1ch_L%E1%BB%99c_t%E1%BA%A1i_s%E1%BB%B1_ki%E1%BB%87n.jpg/200px-B%E1%BA%A1ch_L%E1%BB%99c_t%E1%BA%A1i_s%E1%BB%B1_ki%E1%BB%87n.jpg',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'La Vân Hi',
				birthdate: '1988-07-28',
				nationality: 'Trung Quốc',
				biography:
					'là một ca sĩ, diễn viên, nghệ sĩ người Trung Quốc. Năm 2010, La Vân Hi xuất đạo với thân phận là một trong hai thành viên chính của nhóm nhạc nam Song Tử JL. Năm 2015, bằng vai diễn "Hà Dĩ Thâm thời niên thiếu" trong bộ phim Bên Nhau Trọn Đời (tên tiếng Trung: 何以笙箫默), La Vân Hi lần đầu tiên bộc lộ tài năng về mặt diễn xuất, bắt đầu nhận được sự chú ý và độ thảo luận từ phía khán giả. Năm 2017, anh tham gia vào bộ phim Bác sĩ Nhi Khoa (tên tiếng Trung: 儿科医生) được phát sóng tại đài truyền hình Sơn Đông với vai nam chính "Thân Hách". Năm 2018, anh tham gia vào bộ phim tiên hiệp, huyền huyễn Hương Mật Tựa Khói Sương (tên tiếng Trung: 香蜜沉沉燼如霜) với vai Dạ Thần Nhuận Ngọc. Diễn xuất của La Vân Hi trong bộ phim này đã thuyết phục người xem bởi nhan sắc thần tiên, thoát tục, khí chất và phong thái đĩnh đạc, điềm đạm nhưng lại rất bản lĩnh, mạnh mẽ. Đây cũng là vai diễn góp phần đưa tên tuổi của anh đến gần hơn với khán giả.',
				image:
					'https://ss-images.saostar.vn/w800/2023/10/25/pc/1698222879474/xh7ws1xzqa1-zjbil8pp0p2-sj07nm3ivv3.jpg',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {},
};
