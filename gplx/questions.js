/**
 * BỘ ĐỀ 600 CÂU HỎI SÁT HẠCH LÝ THUYẾT LÁI XE Ô TÔ QUỐC GIA
 * Đầy đủ 60 Câu Điểm Liệt (isCritical: true), 6 Chương, 270 Ảnh Sa Hình & Biển Báo, 20 Đề Thi 30 Câu Chuẩn
 */

export const GPLX_CHAPTERS = [
  {
    "id": 1,
    "name": "Chương 1: Khái niệm & Quy tắc giao thông",
    "desc": "180 câu - Khái niệm làn đường, nồng độ cồn, tốc độ và khoảng cách an toàn",
    "icon": "book-open",
    "color": "#BA4A1B"
  },
  {
    "id": 2,
    "name": "Chương 2: Nghiệp vụ vận tải",
    "desc": "25 câu - Thời gian làm việc lái xe, quyền và nghĩa vụ vận tải",
    "icon": "truck",
    "color": "#2563EB"
  },
  {
    "id": 3,
    "name": "Chương 3: Văn hóa giao thông & Đạo đức",
    "desc": "58 câu - Trách nhiệm, văn hóa ứng xử, cứu giúp người bị nạn",
    "icon": "heart",
    "color": "#DC2626"
  },
  {
    "id": 4,
    "name": "Chương 4: Kỹ thuật lái xe & Sửa chữa xe",
    "desc": "37 câu - Thao tác lái xe an toàn, cấu tạo động cơ, phanh, lốp",
    "icon": "tool",
    "color": "#059669"
  },
  {
    "id": 5,
    "name": "Chương 5: Hệ thống biển báo hiệu đường bộ",
    "desc": "185 câu - Toàn bộ biển báo cấm, nguy hiểm, hiệu lệnh, chỉ dẫn",
    "icon": "shield",
    "color": "#D97706"
  },
  {
    "id": 6,
    "name": "Chương 6: Giải các thế sa hình & Tình huống",
    "desc": "115 câu - Quy tắc ưu tiên giao lộ, vòng xuyến, vượt xe, nhường đường",
    "icon": "navigation",
    "color": "#4F46E5"
  }
];

export const GPLX_QUESTIONS = [
  {
    "id": 1,
    "chapter": 1,
    "isCritical": false,
    "question": "Phần của đường bộ được sử dụng cho phương tiện giao thông đường bộ đi lại là gì?",
    "options": [
      "Phần mặt đường và lề đường.",
      "Phần đường xe chạy.",
      "Phần đường xe cơ giới."
    ],
    "answer": 2,
    "explanation": "Phần đường xe chạy là phần của đường bộ được sử dụng cho phương tiện giao thông qua lại.",
    "tip": "",
    "image": ""
  },
  {
    "id": 2,
    "chapter": 1,
    "isCritical": false,
    "question": "Làn đường là gì?",
    "options": [
      "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, sử dụng cho xe chạy.",
      "Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ chiều rộng cho xe chạy an toàn.",
      "Là đường cho xe ô tô chạy, dừng, đỗ an toàn."
    ],
    "answer": 2,
    "explanation": "Làn đường có bề rộng đủ cho xe chạy an toàn.",
    "tip": "",
    "image": ""
  },
  {
    "id": 3,
    "chapter": 1,
    "isCritical": false,
    "question": "Khổ giới hạn của đường bộ được hiểu như thế nào là đúng?",
    "options": [
      "Khổ giới hạn của đường bộ là khoảng trống có kích thước giới hạn về chiều rộng, chiều cao của đường bộ để các xe, bao gồm cả hàng hoá xếp trên xe đi qua được an toàn và được xác định theo quy chuẩn, tiêu chuẩn kỹ thuật của đường bộ.",
      "Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",
      "Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn."
    ],
    "answer": 1,
    "explanation": "Khổ giới hạn đường bộ có giới hạn về chiều cao, chiều rộng.",
    "tip": "",
    "image": ""
  },
  {
    "id": 4,
    "chapter": 1,
    "isCritical": false,
    "question": "Dải phân cách được lắp đặt để làm gì?",
    "options": [
      "Để phân chia các làn đường dành cho xe cơ giới và xe thô sơ trên đường cao tốc.",
      "Để phân chia phần đường xe chạy thành hai chiều riêng biệt hoặc để phân chia phần đường dành cho xe cơ giới và xe thô sơ hoặc của nhiều loại xe khác nhau trên cùng một chiều đường.",
      "Để phân tách phần đường xe chạy và hành lang an toàn giao thông."
    ],
    "answer": 2,
    "explanation": "Dải phân cách phân chia mặt đường thành hai chiều xe chạy riêng biệt.",
    "tip": "",
    "image": ""
  },
  {
    "id": 5,
    "chapter": 1,
    "isCritical": false,
    "question": "Vạch kẻ đường là gì?",
    "options": [
      "Là báo hiệu đường bộ để hỗ trợ cảnh báo nguy hiểm cho người tham gia giao thông đường bộ.",
      "Là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.",
      "Là báo hiệu cho người tham gia giao thông đường bộ về các thông tin của đường bộ.",
      "Cả ba ý trên."
    ],
    "answer": 2,
    "explanation": "Vạch kẻ đường chỉ sự phân chia làn đường.",
    "tip": "",
    "image": ""
  },
  {
    "id": 6,
    "chapter": 1,
    "isCritical": false,
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ được hiểu như thế nào là đúng?",
    "options": [
      "Là người điều khiển xe cơ giới, người điều khiển xe thô sơ, người điều khiển xe máy chuyên dùng.",
      "Là người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Người điều khiển phương tiện xe cơ giới, xe thô sơ và xe máy chuyên dùng.",
    "tip": "",
    "image": ""
  },
  {
    "id": 7,
    "chapter": 1,
    "isCritical": false,
    "question": "Người lái xe được hiểu như thế nào là đúng?",
    "options": [
      "Là người điều khiển xe cơ giới.",
      "Là người điều khiển xe thô sơ.",
      "Là người điều khiển xe máy chuyên dùng."
    ],
    "answer": 1,
    "explanation": "Người lái xe là người điều khiển xe cơ giới.",
    "tip": "",
    "image": ""
  },
  {
    "id": 8,
    "chapter": 1,
    "isCritical": false,
    "question": "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe cơ giới?",
    "options": [
      "Xe ô tô; máy kéo; xe mô tô hai bánh; xe mô tô ba bánh; xe gắn máy; xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng; xe đạp, xe đạp máy, xe đạp điện.",
      "Xe ô tô; rơ moóc được kéo bởi xe ô tô; sơ mi rơ moóc được kéo bởi ô tô đầu kéo; xe chở người bốn bánh có gắn động cơ; xe chở hàng bốn bánh có gắn động cơ; xe mô tô, xe gắn máy và các loại xe tương tự."
    ],
    "answer": 2,
    "explanation": "Xe cơ giới không có xe đạp.",
    "tip": "",
    "image": ""
  },
  {
    "id": 9,
    "chapter": 1,
    "isCritical": false,
    "question": "Trong nhóm các phương tiện giao thông đường bộ dưới đây, nhóm phương tiện nào là xe thô sơ?",
    "options": [
      "Xe đạp, xe đạp máy, xe đạp điện; xe xích lô; xe lăn dùng cho người khuyết tật; xe vật nuôi kéo và các loại xe tương tự.",
      "Xe đạp (kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng.",
      "Xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo."
    ],
    "answer": 1,
    "explanation": "Xe thô sơ không có máy.",
    "tip": "",
    "image": ""
  },
  {
    "id": 10,
    "chapter": 1,
    "isCritical": false,
    "question": "Phương tiện giao thông đường bộ gồm những loại nào?",
    "options": [
      "Phương tiện giao thông cơ giới đường bộ.",
      "Phương tiện giao thông thô sơ đường bộ, xe máy chuyên dùng và các loại xe tương tự.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Phương tiện giao thông gồm tất cả các loại phương tiện.",
    "tip": "",
    "image": ""
  },
  {
    "id": 11,
    "chapter": 1,
    "isCritical": false,
    "question": "Người tham gia giao thông đường bộ gồm những đối tượng nào?",
    "options": [
      "Người điều khiển, người được chở trên phương tiện tham gia giao thông đường bộ.",
      "Người điều khiển, dẫn dắt vật nuôi trên đường bộ; người đi bộ trên đường bộ.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Người tham gia giao thông gồm người sử dụng phương tiện và người đi bộ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 12,
    "chapter": 1,
    "isCritical": false,
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ gồm những đối tượng nào dưới đây?",
    "options": [
      "Người điều khiển xe cơ giới, người điều khiển xe thô sơ.",
      "Người điều khiển xe máy chuyên dùng.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Người điều khiển phương tiện cả xe cơ giới và xe máy chuyên dùng.",
    "tip": "",
    "image": ""
  },
  {
    "id": 13,
    "chapter": 1,
    "isCritical": false,
    "question": "Người điều khiển giao thông đường bộ được hiểu như thế nào là đúng?",
    "options": [
      "Là người điều khiển phương tiện tham gia giao thông đường bộ.",
      "Là Cảnh sát giao thông và người được giao nhiệm vụ hướng dẫn giao thông trên đường bộ.",
      "Là người tham gia giao thông đường bộ."
    ],
    "answer": 2,
    "explanation": "Người điều khiển giao thông là cảnh sát giao thông.",
    "tip": "",
    "image": ""
  },
  {
    "id": 14,
    "chapter": 1,
    "isCritical": false,
    "question": "Dừng xe được hiểu như thế nào là đúng?",
    "options": [
      "Là trạng thái đứng yên của xe không giới hạn thời gian để cho người lên, xuống xe, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
      "Là trạng thái đứng yên tạm thời của xe trong một khoảng thời gian cần thiết đủ để cho người lên xe, xuống xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe hoặc hoạt động khác. Khi dừng xe không được tắt máy và không được rời khỏi vị trí lái, trừ trường hợp rời khỏi vị trí lái để đóng, mở cửa xe, xếp dỡ hàng hóa, kiểm tra kỹ thuật xe nhưng phải sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác.",
      "Là trạng thái đứng yên của xe không giới hạn thời gian giữa 02 lần vận chuyển hàng hóa hoặc hành khách."
    ],
    "answer": 2,
    "explanation": "Dừng xe là đứng yên tạm thời.",
    "tip": "",
    "image": ""
  },
  {
    "id": 15,
    "chapter": 1,
    "isCritical": false,
    "question": "Đỗ xe được hiểu như thế nào là đúng?",
    "options": [
      "Là trạng thái đứng yên của xe có giới hạn thời gian trong một khoảng thời gian cần thiết đủ để cho người lên, xuống xe đó, xếp dỡ hàng hóa hoặc thực hiện công việc khác.",
      "Là trạng thái đứng yên của xe không giới hạn thời gian. Khi đỗ xe, người điều khiển phương tiện tham gia giao thông đường bộ chỉ được rời khỏi xe khi đã sử dụng phanh đỗ xe hoặc thực hiện biện pháp an toàn khác. Xe đỗ trên đoạn đường dốc phải đánh lái về phía lề đường, chèn bánh."
    ],
    "answer": 2,
    "explanation": "ĐỖ XE là trạng thái đứng yên của xe KHÔNG GIỚI HẠN THỜI GIAN.",
    "tip": "",
    "image": ""
  },
  {
    "id": 16,
    "chapter": 1,
    "isCritical": false,
    "question": "Đường cao tốc được hiểu như thế nào là đúng?",
    "options": [
      "Là một cấp kỹ thuật của đường bộ, chỉ dành cho một số loại xe cơ giới, xe máy chuyên dùng tham gia giao thông theo quy định của pháp luật. Có dải phân cách phân chia hai chiều xe chạy riêng biệt, không giao nhau cùng mức với một hoặc các đường khác, chỉ cho xe ra, vào ở những điểm nhất định. Có hàng rào bảo vệ, trang thiết bị phục vụ, bảo đảm giao thông liên tục, an toàn, rút ngắn thời gian hành trình.",
      "Là đường nối liền Thủ đô Hà Nội với trung tâm hành chính cấp tỉnh; đường nối liền các trung tâm hành chính cấp tỉnh; đường có vị trí quan trọng đối với sự phát triển kinh tế - xã hội, bảo đảm quốc phòng, an ninh của vùng, khu vực."
    ],
    "answer": 1,
    "explanation": "Đường cao tốc là một cấp kỹ thuật của đường bộ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 17,
    "chapter": 1,
    "isCritical": false,
    "question": "Thiết bị an toàn cho trẻ em được hiểu như thế nào là đúng?",
    "options": [
      "Là thiết bị có đủ khả năng bảo đảm an toàn cho trẻ em ở tư thế ngồi hoặc nằm trên xe ô tô, được thiết kế để giảm nguy cơ chấn thương cho người dùng trong trường hợp xảy ra va chạm hoặc xe ô tô giảm tốc độ đột ngột, bằng cách hạn chế sự di chuyển của cơ thể trẻ em.",
      "Là thiết bị có đủ khả năng bảo đảm an toàn cho trẻ em ở tư thế đứng hoặc nằm trên xe ô tô, được thiết kế để giảm nguy cơ chấn thương cho người dùng trong trường hợp xe ô tô lưu thông bình thường."
    ],
    "answer": 1,
    "explanation": "Thiết bị đảm bảo an toàn cho trẻ em ở tư thế ngồi hoặc nằm.",
    "tip": "",
    "image": ""
  },
  {
    "id": 18,
    "chapter": 1,
    "isCritical": false,
    "question": "Theo chức năng phục vụ thì đường bộ được phân loại như thế nào?",
    "options": [
      "Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
      "Đường chính, đường nhánh, đường gom, đường dành cho giao thông công cộng, đường nội bộ, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác.",
      "Đường chính, đường nhánh, đường gom, đường bên, đường dành cho giao thông công cộng, đường dành riêng cho người đi bộ, người đi xe đạp và các đường khác."
    ],
    "answer": 1,
    "explanation": "Đường bộ gồm cả đường bên và đường nội bộ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 19,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi nào dưới đây bị nghiêm cấm?",
    "options": [
      "Sử dụng xe đạp đi trên các tuyến quốc lộ.",
      "Rải vật sắc nhọn, đổ chất gây trơn trượt trên đường bộ.",
      "Cả hai ý trên."
    ],
    "answer": 2,
    "explanation": "Cấm rải vật sắc nhọn",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 20,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi đưa xe cơ giới, xe máy chuyên dùng tham gia giao thông đường bộ nào dưới đây bị cấm?",
    "options": [
      "Không có chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường.",
      "Hết niên hạn sử dụng.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Cả hai ý không có giấy chứng nhận hoặc hết niên hạn.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 21,
    "chapter": 1,
    "isCritical": true,
    "question": "Tổ chức đua xe được phép thực hiện khi nào?",
    "options": [
      "Trên đường phố không có người qua lại.",
      "Được người dân ủng hộ.",
      "Được cơ quan có thẩm quyền cấp phép."
    ],
    "answer": 3,
    "explanation": "Được cơ quan có thẩm quyền cấp phép.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 22,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi đua xe trái phép bị xử lý như thế nào?",
    "options": [
      "Chỉ bị nhắc nhở.",
      "Tùy theo mức độ của hành vi vi phạm có thể bị xử lý hành chính hoặc xử lý hình sự."
    ],
    "answer": 2,
    "explanation": "Xử lý hành chính hoặc hình sự.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 23,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi của người điều khiển xe ô tô và các loại xe tương tự khi tham gia giao thông đường bộ mà trong cơ thể có chất ma túy thì bị áp dụng hình thức xử phạt vi phạm hành chính nào dưới đây?",
    "options": [
      "Bị phạt tiền.",
      "Bị tước giấy phép lái xe.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Cơ thể có chất ma túy bị phạt tiền và bị tước giấy phép lái xe.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 24,
    "chapter": 1,
    "isCritical": true,
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
    "options": [
      "Bị nghiêm cấm.",
      "Không bị nghiêm cấm.",
      "Không bị nghiêm cấm, nếu nồng độ cồn trong máu ở mức nhẹ, có thể điều khiển phương tiện tham gia giao thông."
    ],
    "answer": 1,
    "explanation": "Cấm tham gia giao thông khi có nồng độ cồn.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 25,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi của người điều khiển xe ô tô và các loại xe tương tự khi tham gia giao thông đường bộ mà trong máu hoặc hơi thở có nồng độ cồn thì bị áp dụng hình thức xử phạt vi phạm hành chính nào dưới đây?",
    "options": [
      "Bị phạt tiền.",
      "Có thể bị tước giấy phép lái xe.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Có nồng độ cồn thì bị phạt tiền và có thể bị tước giấy phép lái xe.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 26,
    "chapter": 1,
    "isCritical": true,
    "question": "Theo Luật Phòng chống tác hại của rượu, bia, đối tượng nào dưới đây bị cấm sử dụng rượu, bia khi tham gia giao thông?",
    "options": [
      "Người điều khiển xe ô tô, xe mô tô, xe đạp, xe gắn máy.",
      "Người được chở trên xe cơ giới.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Người điều khiển xe cấm sử dụng rượu, bia.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 27,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi giao xe ô tô, mô tô cho người nào sau đây tham gia giao thông đường bộ bị nghiêm cấm?",
    "options": [
      "Người chưa đủ tuổi theo quy định.",
      "Người không có giấy phép lái xe.",
      "Người có giấy phép lái xe nhưng đã bị trừ hết 12 điểm.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Cấm giao xe cho người không đủ điều kiện về tuổi, giấy phép hoặc bị trừ hết 12 điểm.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 28,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi nào sau đây bị nghiêm cấm?",
    "options": [
      "Điều khiển xe cơ giới lạng lách, đánh võng, rú ga liên tục khi tham gia giao thông trên đường.",
      "Xúc phạm, đe dọa, cản trở, chống đối hoặc không chấp hành hiệu lệnh, hướng dẫn, yêu cầu kiểm tra, kiểm soát của người thi hành công vụ về bảo đảm trật tự, an toàn giao thông đường bộ.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Cấm lạng lách, đánh võng và xúc phạm",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 29,
    "chapter": 1,
    "isCritical": false,
    "question": "Các hành vi nào sau đây bị cấm đối với phương tiện tham gia giao thông đường bộ?",
    "options": [
      "Cải tạo xe ô tô loại khác thành xe ô tô chở người phục vụ mục đích quốc phòng, an ninh.",
      "Cải tạo trái phép; cố ý can thiệp làm sai lệch chỉ số trên đồng hồ báo quãng đường đã chạy của xe ô tô; cắt, hàn, tẩy xóa, đục sửa, đóng lại trái phép số khung, số động cơ của xe cơ giới, xe máy chuyên dùng."
    ],
    "answer": 2,
    "explanation": "Cấm cải tạo xe trái phép.",
    "tip": "",
    "image": ""
  },
  {
    "id": 30,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi nào sau đây bị cấm?",
    "options": [
      "Lắp đặt, sử dụng thiết bị âm thanh, ánh sáng trên xe cơ giới, xe máy chuyên dùng gây mất trật tự, an toàn giao thông đường bộ.",
      "Cản trở người, phương tiện tham gia giao thông trên đường bộ; ném gạch, đất, đá, cát hoặc vật thể khác vào người, phương tiện đang tham gia giao thông trên đường bộ.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Cấm lắp đặt thiết bị gây mất trật tự và cản trở người, phương tiện tham gia giao thông.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 31,
    "chapter": 1,
    "isCritical": false,
    "question": "Việc sản xuất, sử dụng, mua, bán trái phép biển số xe có bị nghiêm cấm hay không?",
    "options": [
      "Không bị nghiêm cấm.",
      "Bị nghiêm cấm.",
      "Bị nghiêm cấm tùy trường hợp."
    ],
    "answer": 2,
    "explanation": "Cấm mua bán trái phép biển số xe.",
    "tip": "",
    "image": ""
  },
  {
    "id": 32,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi điều khiển phương tiện tham gia giao thông, những hành vi nào dưới đây bị nghiêm cấm?",
    "options": [
      "Thay đổi tốc độ của xe nhiều lần.",
      "Điều khiển phương tiện sau 23 giờ trong ngày.",
      "Lạng lách, đánh võng, rú ga liên tục."
    ],
    "answer": 3,
    "explanation": "Cấm lạng lách đánh võng.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 33,
    "chapter": 1,
    "isCritical": false,
    "question": "Có bao nhiêu nhóm biển báo hiệu đường bộ?",
    "options": [
      "Ba nhóm: Biển báo cấm, biển báo nguy hiểm và biển hiệu lệnh.",
      "Bốn nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh và biển phụ.",
      "Năm nhóm: Biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh, biển chỉ dẫn, biển phụ."
    ],
    "answer": 3,
    "explanation": "Có 5 nhóm biển báo.",
    "tip": "",
    "image": ""
  },
  {
    "id": 34,
    "chapter": 1,
    "isCritical": true,
    "question": "Tại nơi có vạch kẻ đường hoặc tại nơi mà người đi bộ, xe lăn của người khuyết tật đang qua đường, người điều khiển phương tiện tham gia giao thông phải thực hiện như thế nào?",
    "options": [
      "Giảm tốc độ và nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường đảm bảo an toàn.",
      "Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn cho người đi bộ, xe lăn của người khuyết tật qua đường.",
      "Quan sát, tăng tốc độ và điều khiển phương tiện nhanh chóng đi qua."
    ],
    "answer": 2,
    "explanation": "Quan sát, giảm tốc độ hoặc dừng lại.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 35,
    "chapter": 1,
    "isCritical": true,
    "question": "Người điều khiển xe mô tô phải phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
    "options": [
      "Đường hẹp, đường vòng, đường quanh co, đường đèo, dốc.",
      "Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ.",
      "Trời mưa, gió, sương, khói, bụi, mặt đường trơn trượt, lầy lội, có nhiều đất đá, vật liệu rơi vãi ảnh hưởng đến an toàn giao thông đường bộ.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Giảm tốc độ ở đường hẹp, cầu cống hẹp hoặc trời mưa.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 36,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi gặp hiệu lệnh điều khiển của Cảnh sát giao thông như hình dưới đây thì người tham gia giao thông đường bộ phải đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Người tham gia giao thông đường bộ ở các hướng phải dừng lại.",
      "Người tham gia giao thông đường bộ ở các hướng được đi theo chiều gậy chỉ của Cảnh sát giao thông.",
      "Người tham gia giao thông đường bộ ở phía trước và phía sau người điều khiển được đi tất cả các hướng; người tham gia giao thông đường bộ ở phía bên phải và phía bên trái người điều khiển phải dừng lại.",
      "Người tham gia giao thông đường bộ ở phía trước và phía sau người điều khiển phải dừng lại; người tham gia giao thông đường bộ ở phía bên phải và phía bên trái người điều khiển được đi tất cả các hướng."
    ],
    "answer": 4,
    "explanation": "Người điều khiển giao thông tay giang ngang thì trước mặt và sau lưng dừng lại.",
    "tip": "",
    "image": "images/questions/q82.png"
  },
  {
    "id": 37,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi gặp hiệu lệnh điều khiển của Cảnh sát giao thông như hình dưới đây thì người tham gia giao thông đường bộ phải đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Người tham gia giao thông đường bộ ở phía sau Cảnh sát giao thông được đi, các hướng khác phải dừng lại.",
      "Người tham gia giao thông đường bộ được rẽ phải theo chiều mũi tên màu xanh ở bục Cảnh sát giao thông.",
      "Người tham gia giao thông đường bộ ở tất cả các hướng phải dừng lại, trừ các xe đã ở trong khu vực giao nhau.",
      "Người tham gia giao thông đường bộ ở phía trước Cảnh sát giao thông phải dừng lại, các hướng khác được đi."
    ],
    "answer": 3,
    "explanation": "Người điều khiển giao thông giơ tay thẳng đứng thì ở các hướng phải dừng lại.",
    "tip": "",
    "image": "images/questions/q83.png"
  },
  {
    "id": 38,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi hiệu lệnh của người điều khiển giao thông trái với tín hiệu đèn giao thông hoặc biển báo hiệu đường bộ thì người tham gia giao thông đường bộ phải chấp hành báo hiệu đường bộ nào dưới đây?",
    "options": [
      "Theo hiệu lệnh của người điều khiển giao thông.",
      "Theo tín hiệu đèn giao thông.",
      "Theo biển báo hiệu đường bộ."
    ],
    "answer": 1,
    "explanation": "Ưu tiên hiệu lệnh của người điều khiển giao thông.",
    "tip": "",
    "image": ""
  },
  {
    "id": 39,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi ở một vị trí vừa có biển báo hiệu đặt cố định vừa có biển báo hiệu tạm thời mà hai biển có ý nghĩa khác nhau, người tham gia giao thông đường bộ phải chấp hành hiệu lệnh của biển báo hiệu nào?",
    "options": [
      "Biển báo hiệu đặt cố định.",
      "Biển báo hiệu tạm thời.",
      "Theo quyết định của người tham gia giao thông nhưng phải bảo đảm an toàn."
    ],
    "answer": 2,
    "explanation": "Ưu tiên biển báo tạm thời.",
    "tip": "",
    "image": ""
  },
  {
    "id": 40,
    "chapter": 1,
    "isCritical": false,
    "question": "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu màu vàng, người điều khiển phương tiện tham gia giao thông phải chấp hành như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Dừng lại trước vạch dừng; trường hợp đang đi trên vạch dừng hoặc đã đi qua vạch dừng mà tín hiệu đèn màu vàng thì được đi tiếp; trường hợp tín hiệu đèn màu vàng nhấp nháy, người điều khiển phương tiện tham gia giao thông đường bộ được đi nhưng phải quan sát, giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ, xe lăn của người khuyết tật qua đường hoặc các phương tiện khác.",
      "Tăng tốc độ nhanh chóng vượt qua nút giao.",
      "Quan sát, giảm tốc độ, từ từ vượt qua nút giao."
    ],
    "answer": 1,
    "explanation": "Đèn vàng dừng lại trước vạch dừng.",
    "tip": "",
    "image": ""
  },
  {
    "id": 41,
    "chapter": 1,
    "isCritical": false,
    "question": "Người lái xe trên đường cần chấp hành quy định về tốc độ tối đa như thế nào?",
    "options": [
      "Chỉ lớn hơn tốc độ tối đa cho phép khi đường vắng.",
      "Chỉ lớn hơn tốc độ tối đa cho phép khi vào ban đêm.",
      "Không vượt quá tốc độ tối đa cho phép."
    ],
    "answer": 3,
    "explanation": "Không vượt quá tốc độ tối đa.",
    "tip": "",
    "image": ""
  },
  {
    "id": 42,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi chở trẻ em dưới 10 tuổi và chiều cao dưới 1,35 mét trên xe ô tô, người lái xe phải thực hiện quy tắc nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Không được cho trẻ em ngồi cùng hàng ghế với người lái xe, trừ loại xe ô tô chỉ có một hàng ghế; người lái xe phải sử dụng, hướng dẫn sử dụng thiết bị an toàn phù hợp cho trẻ em.",
      "Cho trẻ em ngồi cùng hàng ghế với người lái xe, người lái xe phải sử dụng, hướng dẫn sử dụng thiết bị an toàn phù hợp cho trẻ em."
    ],
    "answer": 1,
    "explanation": "Trẻ dưới 10 tuổi không được ngồi cùng hàng ghế với người lái xe.",
    "tip": "",
    "image": ""
  },
  {
    "id": 43,
    "chapter": 1,
    "isCritical": false,
    "question": "Phương tiện tham gia giao thông đường bộ di chuyển với tốc độ thấp hơn phải đi như thế nào?",
    "options": [
      "Đi về bên trái theo chiều đi của mình.",
      "Đi về bên phải theo chiều đi của mình.",
      "Đi ở bất cứ bên nào nhưng phải bấm đèn cảnh báo nguy hiểm để báo hiệu cho các phương tiện khác."
    ],
    "answer": 2,
    "explanation": "Tốc độ thấp đi về bên phải.",
    "tip": "",
    "image": ""
  },
  {
    "id": 44,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên một chiều đường có vạch kẻ phân làn đường, người lái xe cơ giới, xe máy chuyên dùng phải điều khiển xe đi trên làn đường nào?",
    "options": [
      "Đi trên làn đường bên phải trong cùng.",
      "Đi trên làn đường bên trái.",
      "Đi ở bất cứ làn nào nhưng phải bảo đảm tốc độ cho phép."
    ],
    "answer": 2,
    "explanation": "Xe cơ giới, xe máy chuyên dùng đi bên trái.",
    "tip": "",
    "image": ""
  },
  {
    "id": 45,
    "chapter": 1,
    "isCritical": false,
    "question": "Người lái xe phải giảm tốc độ, có tín hiệu rẽ phải và đi sát về bên phải của phần đường xe chạy trong các trường hợp nào dưới đây?",
    "options": [
      "Khi xe chạy phía trước có tín hiệu vượt xe khác.",
      "Khi phía trước có xe chạy ngược chiều.",
      "Khi xe sau xin vượt nếu đủ điều kiện an toàn.",
      "Khi xe sau có tín hiệu vượt bên phải."
    ],
    "answer": 3,
    "explanation": "Xe sau xin vượt thì giảm tốc độ, tín hiệu rẽ phải nếu an toàn.",
    "tip": "",
    "image": ""
  },
  {
    "id": 46,
    "chapter": 1,
    "isCritical": false,
    "question": "Vượt xe là gì?",
    "options": [
      "Là tình huống giao thông trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, xe đi phía sau di chuyển sang bên trái để di chuyển lên trước xe phía trước.",
      "Là tình huống giao thông trên đường có từ hai làn đường dành cho xe cơ giới cùng chiều trở lên được phân biệt bằng vạch kẻ đường, xe đi phía sau di chuyển lên trước xe phía trước theo quy tắc sử dụng làn đường."
    ],
    "answer": 1,
    "explanation": "Vượt xe khi chiều đường chỉ có 1 làn đường.",
    "tip": "",
    "image": ""
  },
  {
    "id": 47,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe được phép vượt xe trên cầu hẹp có một làn đường, đường cong có tầm nhìn bị hạn chế hay không?",
    "options": [
      "Được phép vượt khi đường vắng.",
      "Không được phép vượt.",
      "Được phép vượt khi có việc gấp."
    ],
    "answer": 2,
    "explanation": "Không được phép vượt trên cầu hẹp có 1 làn đường.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 48,
    "chapter": 1,
    "isCritical": true,
    "question": "Muốn vượt xe phía trước, người lái xe mô tô phải có tín hiệu như thế nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Bấm còi liên tục để xe phía trước biết xe mình xin vượt.",
      "Rú ga liên tục để xe phía trước biết xe mình xin vượt.",
      "Báo hiệu nhấp nháy bằng đèn chiếu sáng phía trước hoặc còi."
    ],
    "answer": 3,
    "explanation": "Báo hiệu nhấp nháy đèn khi muốn vượt.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 49,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi lái xe trong khu đông dân cư, khu vực cơ sở khám bệnh, chữa bệnh trừ các khu vực có biển cấm sử dụng còi, người lái xe được sử dụng còi trong thời gian nào?",
    "options": [
      "Từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau.",
      "Từ 05 giờ đến 22 giờ.",
      "Từ 23 giờ ngày hôm trước đến 05 giờ sáng hôm sau."
    ],
    "answer": 2,
    "explanation": "Được sử dụng còi từ 5 giờ đến 22 giờ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 50,
    "chapter": 1,
    "isCritical": false,
    "question": "Phương tiện tham gia giao thông đường bộ chỉ được sử dụng tín hiệu còi trong các trường hợp nào sau đây?",
    "options": [
      "Để báo hiệu cho người tham gia giao thông đường bộ khi xuất hiện tình huống có thể mất an toàn giao thông hoặc báo hiệu chuẩn bị vượt xe.",
      "Để báo hiệu cho người tham gia giao thông đường bộ từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau trong khu đông dân cư, khu vực cơ sở khám bệnh, chữa bệnh, trừ xe ưu tiên.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Dùng còi để báo  tình huống mất an toàn.",
    "tip": "",
    "image": ""
  },
  {
    "id": 51,
    "chapter": 1,
    "isCritical": false,
    "question": "Người lái xe sử dụng đèn như thế nào khi đi trên các đoạn đường qua khu đông dân cư có hệ thống chiếu sáng đang hoạt động?",
    "options": [
      "Chỉ bật đèn chiếu xa (đèn pha).",
      "Bật đèn chiếu xa (đèn pha) khi đường vắng, bật đèn chiếu gần (đèn cốt) khi có xe đi ngược chiều.",
      "Chỉ bật đèn chiếu gần (đèn cốt)."
    ],
    "answer": 3,
    "explanation": "Chỉ bật đèn chiếu gần trong khu dân cư.",
    "tip": "",
    "image": ""
  },
  {
    "id": 52,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi điều khiển phương tiện tham gia giao thông, hành vi nào sau đây bị cấm?",
    "options": [
      "Dùng tay cầm và sử dụng điện thoại hoặc thiết bị điện tử khác.",
      "Chỉ được chở người trên thùng xe ô tô chở hàng trong trường hợp chở người đi làm nhiệm vụ cứu nạn, cứu hộ, phòng, chống thiên tai, dịch bệnh hoặc thực hiện nhiệm vụ khẩn cấp."
    ],
    "answer": 1,
    "explanation": "Cấm cầm và sử dụng điện thoại khi đang tham gia giao thông.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 53,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe không được vượt xe khác khi gặp trường hợp nào dưới đây?",
    "options": [
      "Trên cầu hẹp có một làn đường; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt; khi gặp xe ưu tiên.",
      "Trên cầu có từ 02 làn xe trở lên.",
      "Trên đường có 02 làn đường được phân chia làn bằng vạch kẻ nét đứt."
    ],
    "answer": 1,
    "explanation": "Cầu hẹp có 1 làn đường không được vượt.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 54,
    "chapter": 1,
    "isCritical": false,
    "question": "Nơi nào cấm quay đầu xe?",
    "options": [
      "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, gầm cầu vượt, ngầm.",
      "Tại nơi đường bộ giao nhau cùng mức với đường sắt, đường hẹp, đường dốc, đoạn đường cong tầm nhìn bị che khuất, trên đường cao tốc, trong hầm đường bộ, trên đường một chiều.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Cấm quay đầu xe trên cầu, đường hẹp.",
    "tip": "",
    "image": ""
  },
  {
    "id": 55,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe không được quay đầu xe trong các trường hợp nào dưới đây?",
    "options": [
      "Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, trên đường cao tốc, tại nơi đường bộ giao nhau cùng mức với đường sắt, đường hẹp, đường dốc.",
      "Ở phía trước hoặc phía sau của phần đường dành cho người đi bộ qua đường, trên đường quốc lộ.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Không quay đầu xe trên cầu.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 56,
    "chapter": 1,
    "isCritical": false,
    "question": "Trước khi cho xe chuyển hướng, người lái xe phải làm gì để bảo đảm an toàn giao thông?",
    "options": [
      "Phải quan sát, bảo đảm khoảng cách an toàn với xe phía sau.",
      "Giảm tốc độ và có tín hiệu báo hướng rẽ.",
      "Chuyển dần sang làn gần nhất với hướng rẽ. Khi bảo đảm an toàn, không gây trở ngại cho người và phương tiện khác mới được chuyển hướng.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Cho xe chuyển hướng phải quan sát, giảm tốc độ và chuyền dần.",
    "tip": "",
    "image": ""
  },
  {
    "id": 57,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi chuyển làn đường, người lái xe phải bật đèn tín hiệu báo rẽ như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Khi bắt đầu chuyển làn đường.",
      "Trước khi thay đổi làn đường.",
      "Sau khi thay đổi làn đường."
    ],
    "answer": 2,
    "explanation": "Bật tín hiệu đèn khi thay đổi làn đường.",
    "tip": "",
    "image": ""
  },
  {
    "id": 58,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe không được lùi xe ở những khu vực nào dưới đây?",
    "options": [
      "Ở đường một chiều, khu vực cấm dừng, trên phần đường dành cho người đi bộ qua đường.",
      "Nơi đường bộ giao nhau, đường bộ giao nhau cùng mức với đường sắt.",
      "Nơi tầm nhìn bị che khuất, trong hầm đường bộ, trên đường cao tốc.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Không lùi xe ở đường một chiều, nơi giao nhau hoặc tầm nhìn bị che khuất.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 59,
    "chapter": 1,
    "isCritical": false,
    "question": "Người điều khiển phương tiện tham gia giao thông không được dừng xe, đỗ xe ở những vị trí nào sau đây?",
    "options": [
      "Trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước.",
      "Trong phạm vi an toàn của đường sắt.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Không dừng, đỗ xe: miệng cống, hầm, phạm vi an toàn đường sắt.",
    "tip": "",
    "image": ""
  },
  {
    "id": 60,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường phố, người điều khiển phương tiện tham gia giao thông đường bộ được dừng xe, đỗ xe sát theo lề đường, vỉa hè phía bên phải theo chiều đi của mình; bánh xe gần nhất không được cách xa lề đường, vỉa hè không quá bao nhiêu mét trong các trường hợp dưới đây và không gây cản trở, nguy hiểm cho người và phương tiện tham gia giao thông đường bộ?",
    "options": [
      "0,25 mét.",
      "0,3 mét.",
      "0,4 mét.",
      "0,5 mét."
    ],
    "answer": 1,
    "explanation": "Dừng xe, đỗ xe cách lề đường, hè phố không quá 0,25 mét.",
    "tip": "",
    "image": ""
  },
  {
    "id": 61,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi dừng, đỗ xe trên đường phố hẹp, người lái xe ô tô phải dừng, đỗ xe ở vị trí cách xe ô tô đang đỗ ngược chiều khoảng cách tối thiểu là bao nhiêu mét trong các trường hợp dưới đây để bảo đảm an toàn?",
    "options": [
      "10 mét.",
      "15 mét.",
      "20 mét.",
      "25 mét."
    ],
    "answer": 3,
    "explanation": "Dừng xe, đỗ xe trên đường hẹp cách xe khác 20 mét.",
    "tip": "",
    "image": ""
  },
  {
    "id": 62,
    "chapter": 1,
    "isCritical": false,
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ không được dừng xe, đỗ xe tại các vị trí nào sau đây?",
    "options": [
      "Nơi có lề đường rộng hoặc khu đất ở bên ngoài phần đường xe chạy.",
      "Song song cùng chiều với một xe khác đang dừng, đỗ trên đường; trên đoạn đường cong hoặc gần đầu dốc mà tầm nhìn bị che khuất; bên trái đường một chiều.",
      "Cả hai ý trên."
    ],
    "answer": 2,
    "explanation": "Không được dừng, đỗ xe song song xe khác, nơi đường cong, dốc khuất tầm nhìn, bên trái đường một chiều.",
    "tip": "",
    "image": ""
  },
  {
    "id": 63,
    "chapter": 1,
    "isCritical": true,
    "question": "Người điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy có được phép sử dụng xe để kéo hoặc đẩy các phương tiện khác khi tham gia giao thông không?",
    "options": [
      "Được phép.",
      "Nếu phương tiện được kéo, đẩy có khối lượng nhỏ hơn phương tiện của mình.",
      "Tùy trường hợp.",
      "Không được phép."
    ],
    "answer": 4,
    "explanation": "Xe mô tô, xe gắn máy không được kéo đẩy xe khác.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 64,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào sau đây không được phép?",
    "options": [
      "Buông cả hai tay; đứng, nằm trên xe điều khiển xe; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
      "Chở tối đa hai người phía sau khi chở người bệnh đi cấp cứu, áp giải người có hành vi vi phạm pháp luật, trẻ em dưới 12 tuổi và người già yếu hoặc người khuyết tật."
    ],
    "answer": 1,
    "explanation": "Xe mô tô, xe gắn máy không được buông cả 2 tay.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 65,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào sau đây không được phép?",
    "options": [
      "Buông cả hai tay; sử dụng xe để kéo, đẩy xe khác, vật khác; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
      "Sử dụng xe để chở người hoặc hàng hóa; để chân chạm xuống đất khi khởi hành.",
      "Đội mũ bảo hiểm; chạy xe đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ.",
      "Chở người ngồi sau dưới 16 tuổi."
    ],
    "answer": 1,
    "explanation": "Xe mô tô, xe gắn máy không được buông cả 2 tay.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 66,
    "chapter": 1,
    "isCritical": true,
    "question": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ không được thực hiện hành vi nào sau đây?",
    "options": [
      "Mang, vác vật cồng kềnh.",
      "Bám, kéo hoặc đẩy các phương tiện khác.",
      "Dùng tay cầm điện thoại hoặc các thiết bị điện tử khác.",
      "Ý 1 và ý 2."
    ],
    "answer": 4,
    "explanation": "Người ĐƯỢC CHỞ trên xe mô tô, xe gắn máy không được mang vác đồ cồng kềnh và bám kéo đẩy xe khác.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 67,
    "chapter": 1,
    "isCritical": true,
    "question": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ có được bám, kéo hoặc đẩy các phương tiện khác không?",
    "options": [
      "Được phép.",
      "Được bám trong trường hợp phương tiện của mình bị hỏng.",
      "Được kéo, đẩy trong trường hợp phương tiện khác bị hỏng.",
      "Không được phép."
    ],
    "answer": 4,
    "explanation": "Người ĐƯỢC CHỞ trên xe mô tô, xe gắn máy không được mang vác đồ cồng kềnh và bám kéo đẩy xe khác.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 68,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe, người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy phải thực hiện quy định nào dưới đây?",
    "options": [
      "Đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách.",
      "Người lái xe phải đội mũ bảo hiểm, người được chở trên xe không nhất thiết phải đội mũ bảo hiểm.",
      "Phải đội mũ bảo hiểm nhưng không nhất thiết phải cài quai."
    ],
    "answer": 1,
    "explanation": "Đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 69,
    "chapter": 1,
    "isCritical": false,
    "question": "Người lái xe mô tô hai bánh, xe gắn máy được phép chở tối đa hai người trong những trường hợp nào?",
    "options": [
      "Chở người bệnh đi cấp cứu; áp giải người có hành vi vi phạm pháp luật; trẻ em dưới 12 tuổi; người già yếu hoặc người khuyết tật.",
      "Người đã uống rượu, bia; người trong cơ thể có chất ma tuý.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Xe mô tô, xe gắn máy chỉ được phép chở tối đa 2 người khi chờ người đi cấp cứu.",
    "tip": "",
    "image": ""
  },
  {
    "id": 70,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện các hành vi nào dưới đây?",
    "options": [
      "Đi xe dàn hàng ngang; buông cả hai tay.",
      "Sử dụng xe để kéo, đẩy xe khác, vật khác, dẫn dắt vật nuôi, mang, vác và chở vật cồng kềnh; chở người đứng trên xe, giá đèo hàng hoặc ngồi trên tay lái; xếp hàng hóa trên xe quá giới hạn quy định.",
      "Ngồi về một bên điều khiển xe; đứng, nằm trên xe điều khiển xe; thay người lái xe khi xe đang chạy; quay người về phía sau để điều khiển xe hoặc bịt mắt điều khiển xe; sử dụng chân chống hoặc vật khác quệt xuống đường khi xe đang chạy.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Cấm tất cả hành vi nguy hiểm: dàn hàng, kéo đẩy, buông tay, chở cồng kềnh, thay người lái khi xe chạy.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 71,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện các hành vi nào sau đây?",
    "options": [
      "Đi xe dàn hàng ngang; đi xe vào phần đường dành cho người đi bộ và phương tiện khác.",
      "Sử dụng ô, thiết bị âm thanh, trừ thiết bị trợ thính.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Cấm dàn hàng ngang, vào đường người đi bộ, dùng ô; thiết bị âm thanh (trừ trợ thính).",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 72,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy không được thực hiện hành vi nào sau đây?",
    "options": [
      "Đi trên phần đường, làn đường quy định, chấp hành hiệu lệnh của người điều khiển giao thông, đèn tín hiệu giao thông.",
      "Đi xe dàn hàng ngang, đi xe vào phần đường dành cho người đi bộ.",
      "Cả hai ý trên."
    ],
    "answer": 2,
    "explanation": "Không được: đi dàn hàng ngang, vào đường người đi bộ.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 73,
    "chapter": 1,
    "isCritical": true,
    "question": "Người được chở trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông đường bộ có được sử dụng ô khi trời mưa hay không?",
    "options": [
      "Được sử dụng.",
      "Chỉ người ngồi sau được sử dụng.",
      "Không được sử dụng.",
      "Được sử dụng nếu không có áo mưa."
    ],
    "answer": 3,
    "explanation": "Người được chở trên xe máy không được dùng ô.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 74,
    "chapter": 1,
    "isCritical": true,
    "question": "Người được chở trên xe mô tô có được kéo theo người đang điều khiển xe đạp hay không?",
    "options": [
      "Chỉ được phép nếu cả hai đội mũ bảo hiểm.",
      "Không được phép.",
      "Chỉ được thực hiện trên đường vắng."
    ],
    "answer": 2,
    "explanation": "Người ngồi sau xe máy không được kéo theo xe đạp.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 75,
    "chapter": 1,
    "isCritical": false,
    "question": "Trường hợp người được chở trên xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô và các loại xe tương tự xe gắn máy không đội “mũ bảo hiểm cho người đi mô tô, xe máy” hoặc không cài quai đúng quy cách (trừ trường hợp chở người bệnh đi cấp cứu, trẻ em dưới 06 tuổi, áp giải người có hành vi vi phạm pháp luật) thì việc xử phạt vi phạm hành chính được quy định như thế nào?",
    "options": [
      "Không bị xử phạt chỉ bị nhắc nhở.",
      "Người được chở không bị xử phạt, chỉ xử phạt người điều khiển xe mô tô, xe gắn máy.",
      "Người được chở bị xử phạt, không xử phạt người điều khiển xe mô tô, xe gắn máy.",
      "Xử phạt cả người điều khiển và người được chở trên xe mô tô, xe gắn máy."
    ],
    "answer": 4,
    "explanation": "Người ngồi sau không đội mũ bảo hiểm: Phạt cả người lái và người ngồi sau.",
    "tip": "",
    "image": ""
  },
  {
    "id": 76,
    "chapter": 1,
    "isCritical": false,
    "question": "Trong các trường hợp dưới đây, để bảo đảm an toàn khi tham gia giao thông, người lái xe mô tô cần thực hiện như thế nào?",
    "options": [
      "Phải đội mũ bảo hiểm theo đúng quy chuẩn kỹ thuật quốc gia và cài quai đúng quy cách, không sử dụng ô, điện thoại di động, thiết bị âm thanh (trừ thiết bị trợ thính).",
      "Phải đội mũ bảo hiểm khi trời mưa gió hoặc trời quá nắng; có thể sử dụng ô, điện thoại di động, thiết bị âm thanh nhưng phải bảo đảm an toàn.",
      "Phải đội mũ bảo hiểm khi cảm thấy mất an toàn giao thông hoặc khi chuẩn bị di chuyển quãng đường xa."
    ],
    "answer": 1,
    "explanation": "Lái xe mô tô an toàn: Đội mũ đúng chuẩn, cài quai, không dùng ô, điện thoại, thiết bị âm thanh (trừ trợ thính).",
    "tip": "",
    "image": ""
  },
  {
    "id": 77,
    "chapter": 1,
    "isCritical": false,
    "question": "Thứ tự xuống phà như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe thô sơ, người đi bộ xuống trước, xe cơ giới, xe máy chuyên dùng xuống sau.",
      "Xe cơ giới, xe máy chuyên dùng xuống trước, xe thô sơ, người đi bộ xuống sau.",
      "Xe cơ giới, xe thô sơ xuống trước, xe máy chuyên dùng, người đi bộ xuống sau."
    ],
    "answer": 2,
    "explanation": "Xuống phà: Xe cơ giới, xe máy chuyên dùng xuống trước; xe thô sơ, người đi bộ xuống sau.",
    "tip": "",
    "image": ""
  },
  {
    "id": 78,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện tham gia giao thông đường bộ phải cho xe đi như thế nào?",
    "options": [
      "Cho xe đi trên bất kỳ làn đường nào hoặc giữa 02 làn đường nếu không có xe đi phía trước; khi cần thiết phải chuyển làn đường, người lái xe phải quan sát xe phía trước để bảo đảm an toàn.",
      "Phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; mỗi lần chuyển làn đường chỉ được phép chuyển sang một làn đường liền kề; khi chuyển làn đường phải có tín hiệu báo trước; phải quan sát bảo đảm khoảng cách an toàn với xe phía trước, phía sau và hai bên mới được chuyển làn.",
      "Phải cho xe đi trong một làn đường, chỉ được chuyển làn đường khi vượt xe phía trước cùng làn đường."
    ],
    "answer": 2,
    "explanation": "Đi đường có nhiều làn: Đi trong 1 làn, chuyển làn nơi cho phép, tín hiệu, quan sát an toàn.",
    "tip": "",
    "image": ""
  },
  {
    "id": 79,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ và xe cơ giới phải đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe thô sơ phải đi trên làn đường bên trái, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải trong cùng.",
      "Xe thô sơ phải đi trên làn đường bên phải trong cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái.",
      "Xe thô sơ phải đi trên làn đường bên phải trong cùng, xe cơ giới, xe máy chuyên dùng được đi trên tất cả các làn đường."
    ],
    "answer": 2,
    "explanation": "Đường 1 chiều nhiều làn: Xe thô sơ đi phải trong cùng, xe cơ giới/chuyên dùng đi làn trái.",
    "tip": "",
    "image": ""
  },
  {
    "id": 80,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi lái xe trong đô thị và khu đông dân cư trong thời gian từ 22 giờ ngày hôm trước đến 05 giờ ngày hôm sau, nếu cần vượt một xe khác, người lái xe phải báo hiệu như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Chỉ được báo hiệu bằng còi.",
      "Phải báo hiệu bằng cả còi và đèn.",
      "Chỉ được báo hiệu bằng đèn."
    ],
    "answer": 3,
    "explanation": "Vượt xe ban đêm (22h-5h) trong khu dân cư: Chỉ báo hiệu bằng đèn.",
    "tip": "",
    "image": ""
  },
  {
    "id": 81,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi điều khiển xe chạy trên đường, biết có xe sau xin vượt, nếu đủ điều kiện an toàn người điều khiển phương tiện phải làm gì?",
    "options": [
      "Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt.",
      "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
      "Cho xe đi sát về bên trái của phần đường xe chạy và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe xin vượt."
    ],
    "answer": 2,
    "explanation": "Xe sau xin vượt (an toàn): Giảm tốc độ, có tín hiệu rẽ phải, đi sát phải, không cản trở.",
    "tip": "",
    "image": ""
  },
  {
    "id": 82,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi điều khiển xe chạy trên đường, biết có xe sau xin vượt, nếu không đủ điều kiện an toàn người điều khiển phương tiện phải làm gì?",
    "options": [
      "Có tín hiệu rẽ trái để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết là chưa được vượt.",
      "Tiếp tục đi cho đến khi đủ điều kiện an toàn, nếu xe sau vẫn xin vượt thì báo hiệu cho xe sau vượt.",
      "Tăng tốc độ để báo hiệu cho xe xin vượt biết là chưa được vượt."
    ],
    "answer": 1,
    "explanation": "Xe sau xin vượt (không an toàn): Có tín hiệu rẽ trái báo chưa an toàn không được vượt.",
    "tip": "",
    "image": ""
  },
  {
    "id": 83,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi chuyển hướng, người lái xe, người điều khiển xe máy chuyên dùng phải làm gì để bảo đảm an toàn?",
    "options": [
      "Phải nhường đường cho người đi bộ, xe thô sơ, xe đi ngược chiều và chỉ chuyển hướng khi không gây trở ngại hoặc nguy hiểm cho người, phương tiện khác.",
      "Nhanh chóng chuyển hướng để không gây trở ngại hoặc nguy hiểm cho người, phương tiện khác.",
      "Ra tín hiệu chuyển hướng để yêu cầu các phương tiện khác dừng lại cho xe chuyển hướng di chuyển."
    ],
    "answer": 1,
    "explanation": "Chuyển hướng an toàn: Nhường đường người đi bộ, xe thô sơ, xe ngược chiều; không gây trở ngại.”",
    "tip": "",
    "image": ""
  },
  {
    "id": 84,
    "chapter": 1,
    "isCritical": false,
    "question": "Trước khi chuyển hướng, người điều khiển phương tiện tham gia giao thông đường bộ phải thực hiện như thế nào để bảo đảm an toàn?",
    "options": [
      "Quan sát gương, nếu không có phương tiện gần hướng rẽ thì nhanh chóng chuyển hướng.",
      "Quan sát, bảo đảm khoảng cách an toàn với xe phía sau, giảm tốc độ và có tín hiệu báo hướng rẽ hoặc có tín hiệu bằng tay theo hướng rẽ đối với xe thô sơ không có đèn báo hướng rẽ, chuyển dần sang làn gần nhất với hướng rẽ. Tín hiệu báo hướng rẽ hoặc tín hiệu bằng tay phải sử dụng liên tục trong quá trình chuyển hướng. Khi bảo đảm an toàn, không gây trở ngại cho người và phương tiện khác mới được chuyển hướng.",
      "Quan sát gương, tăng tốc độ, ra tín hiệu và chuyển hướng."
    ],
    "answer": 2,
    "explanation": "Trước khi chuyển hướng: Quan sát, giảm tốc độ, tín hiệu rẽ, chuyển làn từ từ, không gây trở ngại.",
    "tip": "",
    "image": ""
  },
  {
    "id": 85,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi lùi xe, người điều khiển phương tiện tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
    "options": [
      "Quan sát phía sau và cho lùi xe ở tốc độ chậm.",
      "Có tín hiệu báo lùi, nếu phía sau không có người hoặc phương tiện khác thì nhanh chóng lùi để bảo đảm an toàn.",
      "Phải quan sát hai bên và phía sau xe, có tín hiệu lùi và chỉ lùi xe khi bảo đảm an toàn."
    ],
    "answer": 3,
    "explanation": "Lùi xe an toàn: Quan sát kỹ 2 bên và sau, có tín hiệu, chỉ lùi khi an toàn.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 86,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi muốn lùi xe ở nơi có tầm nhìn bị che khuất, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
    "options": [
      "Phải lùi thật chậm.",
      "Bấm còi 3 lần liên tiếp trước khi lùi.",
      "Không được lùi xe."
    ],
    "answer": 3,
    "explanation": "Lùi xe nơi tầm nhìn che khuất: Không được lùi.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 87,
    "chapter": 1,
    "isCritical": true,
    "question": "Trên đường không phân chia thành hai chiều xe chạy riêng biệt, người điều khiển phương tiện tham gia giao thông đường bộ phải tránh xe đi ngược chiều như thế nào để bảo đảm an toàn?",
    "options": [
      "Giảm tốc độ và cho xe đi về bên phải theo chiều xe chạy của mình.",
      "Một trong hai xe phải dừng lại cho xe kia đi qua mới được đi.",
      "Tăng tốc độ, cho xe đi về bên phải theo chiều xe chạy của mình để nhanh chóng vượt qua."
    ],
    "answer": 1,
    "explanation": "Tránh xe ngược chiều (đường không phân chia): Giảm tốc độ, đi về bên phải.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 88,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe đi ngược chiều.",
      "Xe xuống dốc phải nhường đường cho xe lên dốc.",
      "Xe có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật phía trước.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Nhường đường khi tránh xe (cả 3 ý): Gần chỗ tránh hơn, xe xuống dốc, xe có chướng ngại vật.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 89,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi đang lái xe xuống dốc gặp một xe đang đi lên dốc, người lái xe phải làm gì?",
    "options": [
      "Tiếp tục đi và phát tín hiệu cho xe lên dốc nhường đường cho xe bạn.",
      "Nhường đường cho xe lên dốc.",
      "Chỉ nhường đường khi xe lên dốc nháy đèn."
    ],
    "answer": 2,
    "explanation": "Xuống dốc gặp xe lên dốc: Nhường đường cho xe lên dốc.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 90,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe phải làm gì để bảo đảm an toàn khi lái xe trên đường cong có tầm nhìn bị hạn chế?",
    "options": [
      "Quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn.",
      "Đi sang làn đường của xe ngược chiều để mở rộng tầm nhìn và vượt xe khác.",
      "Cho xe đi sát bên phải làn đường, bật tín hiệu báo hiệu để vượt bên phải xe khác."
    ],
    "answer": 1,
    "explanation": "Đường cong tầm nhìn hạn chế: Quan sát, giảm tốc độ, hoặc dừng lại.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 91,
    "chapter": 1,
    "isCritical": true,
    "question": "Tại nơi đường giao nhau, người lái xe đang đi trên đường không ưu tiên, đường nhánh phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Nhường đường cho xe đi ở bên phải mình tới.",
      "Nhường đường cho xe đi ở bên trái mình tới.",
      "Nhường đường cho xe đi trên đường ưu tiên hoặc đường chính từ bất kỳ hướng nào tới."
    ],
    "answer": 3,
    "explanation": "Đi từ đường không ưu tiên/nhánh: Nhường đường xe trên đường ưu tiên/chính.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 92,
    "chapter": 1,
    "isCritical": true,
    "question": "Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, người lái xe phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Nhường đường cho xe đi đến từ bên phải.",
      "Nhường đường cho xe đi đến từ bên trái.",
      "Không phải nhường đường."
    ],
    "answer": 2,
    "explanation": "Giao nhau có vòng xuyến: Nhường đường cho xe đến từ bên trái.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 93,
    "chapter": 1,
    "isCritical": true,
    "question": "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Phải nhường đường cho xe đi đến từ bên phải.",
      "Xe báo hiệu xin đường trước, xe đó được đi trước.",
      "Phải nhường đường cho xe đi đến từ bên trái."
    ],
    "answer": 1,
    "explanation": "Giao nhau không có vòng xuyến: Nhường đường cho xe đến từ bên phải.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 94,
    "chapter": 1,
    "isCritical": false,
    "question": "Người lái xe phải nhanh chóng giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường cho các loại xe nào dưới đây?",
    "options": [
      "Xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác; xe của lực lượng quân sự, công an và kiểm sát; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương; xe hộ đê không có tín hiệu ưu tiên theo quy định.",
      "Xe ưu tiên gồm xe chữa cháy của Cảnh sát phòng cháy, chữa cháy và cứu nạn, cứu hộ và xe chữa cháy của các lực lượng khác được huy động đi làm nhiệm vụ chữa cháy; xe của lực lượng quân sự, công an và kiểm sát đi làm nhiệm vụ khẩn cấp; đoàn xe có xe Cảnh sát giao thông dẫn đường; xe cứu thương đi làm nhiệm vụ cấp cứu; xe hộ đê đi làm nhiệm vụ; xe đi làm nhiệm vụ cứu nạn, cứu hộ, khắc phục sự cố thiên tai, dịch bệnh hoặc xe đi làm nhiệm vụ trong tình trạng khẩn cấp theo quy định của pháp luật; đoàn xe tang.",
      "Xe ô tô, xe máy, đoàn xe đang diễu hành có tổ chức có báo tín hiệu xin vượt bằng còi và đèn."
    ],
    "answer": 2,
    "explanation": "Nhường đường xe ưu tiên: Chữa cháy, quân sự, công an (khẩn cấp), CSGT dẫn đoàn, cứu thương, hộ đê, cứu nạn, đoàn xe tang.",
    "tip": "",
    "image": ""
  },
  {
    "id": 95,
    "chapter": 1,
    "isCritical": false,
    "question": "Xe ưu tiên (trừ đoàn xe tang) tham gia giao thông đường bộ khi đi làm nhiệm vụ được quyền ưu tiên nào dưới đây?",
    "options": [
      "Không bị hạn chế tốc độ.",
      "Được phép đi không phụ thuộc vào tín hiệu đèn giao thông, đi vào đường ngược chiều, các đường khác có thể đi được.",
      "Được đi ngược chiều trên làn dừng xe khẩn cấp trên đường cao tốc.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Xe ưu tiên (trừ xe tang) khi làm nhiệm vụ: Không hạn chế tốc độ, không phụ thuộc đèn, được đi ngược chiều, ngược chiều trên làn dừng khẩn cấp cao tốc.",
    "tip": "",
    "image": ""
  },
  {
    "id": 96,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi có tín hiệu của xe ưu tiên, người và phương tiện tham gia giao thông đường bộ phải tuân thủ quy định nào dưới đây?",
    "options": [
      "Giảm tốc độ, đi sát lề đường bên phải hoặc dừng lại để nhường đường.",
      "Tăng tốc độ và đi sát lề đường bên phải để nhường đường.",
      "Giảm tốc độ, đi sát lề đường bên trái để nhường đường."
    ],
    "answer": 1,
    "explanation": "Gặp tín hiệu xe ưu tiên: Giảm tốc độ, sát lề phải hoặc dừng lại nhường đường.",
    "tip": "",
    "image": ""
  },
  {
    "id": 97,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi đang lái xe, phía trước có một xe Cảnh sát giao thông không phát tín hiệu ưu tiên, người lái xe có được phép vượt hay không?",
    "options": [
      "Không được vượt.",
      "Được phép vượt ở phần đường dành cho người đi bộ qua đường.",
      "Được vượt khi bảo đảm an toàn."
    ],
    "answer": 3,
    "explanation": "Xe CSGT không phát tín hiệu ưu tiên: Được vượt khi đảm bảo an toàn.”",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 98,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi đang lái xe, phía trước có một xe cứu thương đang phát tín hiệu ưu tiên, người lái xe có được phép vượt hay không?",
    "options": [
      "Không được vượt.",
      "Được vượt khi đang đi trên cầu.",
      "Được phép vượt khi đi qua nơi giao nhau có ít phương tiện cùng tham gia giao thông.",
      "Được vượt khi bảo đảm an toàn."
    ],
    "answer": 1,
    "explanation": "Xe cứu thương đang phát tín hiệu ưu tiên: Không được vượt.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 99,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi tới đường ngang không có người gác, chắn đường bộ, chuông, đèn tín hiệu, người tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
    "options": [
      "Dừng lại về bên phải đường của mình, trước vạch dừng xe và quan sát hai phía, khi không có phương tiện giao thông đường sắt tới mới được đi qua.",
      "Quan sát hai phía, khi không có phương tiện giao thông đường sắt tới thì nhanh chóng đi qua.",
      "Dừng lại khoảng cách tối thiểu 3 mét tính từ ray đường sắt gần nhất, khi không có phương tiện giao thông đường sắt tới thì nhanh chóng đi qua."
    ],
    "answer": 1,
    "explanation": "Đường sắt KHÔNG rào chắn/tín hiệu: Dừng phải, trước vạch, quan sát 2 phía, an toàn mới qua.",
    "tip": "",
    "image": ""
  },
  {
    "id": 100,
    "chapter": 1,
    "isCritical": false,
    "question": "Tại đường ngang, cầu chung đường sắt, khi có hiệu lệnh của nhân viên gác chắn, đèn đỏ sáng nhấp nháy, chuông kêu, chắn đường bộ đang dịch chuyển hoặc đã đóng, người tham gia giao thông đường bộ phải làm gì để bảo đảm an toàn?",
    "options": [
      "Dừng lại về bên trái đường của mình, trước vạch dừng xe.",
      "Dừng lại giữa đường của mình, trước vạch dừng xe.",
      "Dừng lại về bên phải đường của mình, trước vạch dừng xe."
    ],
    "answer": 3,
    "explanation": "Đường sắt có tín hiệu/rào chắn đang hoạt động: Dừng lại bên phải, trước vạch dừng.",
    "tip": "",
    "image": ""
  },
  {
    "id": 101,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi xe ô tô bị hư hỏng, bị tai nạn trên đường ngang, cầu chung đường sắt mà không thể di chuyển ngay khỏi phạm vi an toàn đường sắt, người lái xe và người có mặt xử lý như thế nào là đúng quy định?",
    "options": [
      "Người lái xe và người có mặt phải ngay lập tức báo hiệu để dừng tàu, thực hiện các biện pháp bảo đảm an toàn.",
      "Để xe lại, tìm cách báo cho người quản lý đường sắt, nhà ga nơi gần nhất.",
      "Không di chuyển phương tiện, tự khắc phục sửa chữa."
    ],
    "answer": 1,
    "explanation": "Xe hỏng/tai nạn trên đường sắt: Báo hiệu dừng tàu ngay, đảm bảo an toàn.",
    "tip": "",
    "image": ""
  },
  {
    "id": 102,
    "chapter": 1,
    "isCritical": true,
    "question": "Người tham gia giao thông đường bộ phải dừng lại về bên phải đường của mình trước vạch dừng xe tại đường ngang, cầu chung đường sắt khi có báo hiệu nào dưới đây?",
    "options": [
      "Hiệu lệnh của nhân viên gác chắn.",
      "Đèn đỏ sáng nhấp nháy, chuông kêu.",
      "Chắn đường bộ đang dịch chuyển hoặc đã đóng.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Dừng xe ở đường sắt khi: Có hiệu lệnh nhân viên, đèn đỏ/chuông, chắn đang đóng/đã đóng.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 103,
    "chapter": 1,
    "isCritical": false,
    "question": "Người điều khiển phương tiện tham gia giao thông trong hầm đường bộ ngoài việc phải tuân thủ các quy tắc giao thông còn phải thực hiện những quy định nào dưới đây?",
    "options": [
      "Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu gần; xe thô sơ phải bật đèn hoặc có vật phát sáng báo hiệu; không dừng xe, đỗ xe trong hầm đường bộ; trường hợp gặp sự cố kỹ thuật hoặc bất khả kháng khác buộc phải dừng xe, đỗ xe, người lái xe, người điều khiển xe máy chuyên dùng phải đưa xe vào vị trí dừng xe, đỗ xe khẩn cấp, nếu không di chuyển được, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách bảo đảm an toàn.",
      "Xe cơ giới, xe máy chuyên dùng phải bật đèn chiếu xa; được dừng xe, đỗ xe khi cần thiết.",
      "Phải cho xe chạy trên một làn đường và chỉ chuyển làn ở nơi được phép; được quay đầu xe, lùi xe khi cần thiết."
    ],
    "answer": 1,
    "explanation": "Trong hầm: Bật đèn gần (xe cơ giới/chuyên dùng), đèn/phát sáng (xe thô sơ), không dừng/đỗ (trừ sự cố).",
    "tip": "",
    "image": ""
  },
  {
    "id": 104,
    "chapter": 1,
    "isCritical": false,
    "question": "Việc nối giữa xe kéo với xe được kéo trong trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng cách nào?",
    "options": [
      "Nối bằng dây cáp có độ dài 6 mét.",
      "Nối bằng dây cáp có độ dài 8 mét.",
      "Nối bằng thanh nối cứng."
    ],
    "answer": 3,
    "explanation": "Kéo xe hỏng phanh: Nối bằng thanh nối cứng.",
    "tip": "",
    "image": ""
  },
  {
    "id": 105,
    "chapter": 1,
    "isCritical": false,
    "question": "Xe kéo rơ moóc, xe ô tô đầu kéo khi tham gia giao thông đường bộ phải tuân thủ quy tắc giao thông nào ghi ở dưới đây?",
    "options": [
      "Chỉ được kéo rơ moóc, sơ mi rơ moóc phù hợp với thiết kế của xe; việc kết nối xe kéo với rơ moóc, xe ô tô đầu kéo với sơ mi rơ moóc phải bảo đảm chắc chắn, an toàn.",
      "Phải có tổng trọng lượng tương đương tổng trọng lượng của rơ moóc hoặc phải có hệ thống hãm có hiệu lực cho rơ moóc.",
      "Phải được lắp phanh phụ theo quy định để đảm bảo an toàn."
    ],
    "answer": 1,
    "explanation": "Kéo rơ moóc: Phải phù hợp thiết kế, kết nối chắc chắn, an toàn.",
    "tip": "",
    "image": ""
  },
  {
    "id": 106,
    "chapter": 1,
    "isCritical": false,
    "question": "Luật Trật tự, an toàn giao thông đường bộ quy định về xe kéo xe, xe kéo rơ moóc và xe ô tô đầu kéo kéo sơ mi rơ moóc như thế nào dưới đây?",
    "options": [
      "Một xe ô tô được kéo theo nhiều xe ô tô hoặc xe máy chuyên dùng khác khi xe được kéo không tự chạy được (trừ trường hợp xe vận chuyển hàng siêu trường, siêu trọng).",
      "Xe được kéo phải có người điều khiển và hệ thống lái của xe đó phải còn hiệu lực; việc nối xe kéo với xe được kéo phải bảo đảm chắc chắn, an toàn; trường hợp hệ thống hãm của xe được kéo không còn hiệu lực thì xe kéo nhau phải nối bằng thanh nối cứng. Phía trước của xe kéo và phía sau của xe được kéo phải có biển báo hiệu, có đèn cảnh báo nhấp nháy màu vàng.",
      "Cả hai ý trên."
    ],
    "answer": 2,
    "explanation": "Xe được kéo: Người lái, hệ thống lái còn hiệu lực, nối chắc chắn (thanh cứng nếu hỏng phanh), biển báo/đèn vàng.",
    "tip": "",
    "image": ""
  },
  {
    "id": 107,
    "chapter": 1,
    "isCritical": false,
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
    "options": [
      "Có báo hiệu cảnh báo nguy hiểm hoặc có chướng ngại vật trên đường; chuyển hướng xe chạy hoặc tầm nhìn bị hạn chế.",
      "Nơi cầu, cống hẹp, đập tràn, đường ngầm, hầm chui, hầm đường bộ; có vật nuôi đi trên đường hoặc chăn thả ở ven đường.",
      "Điểm dừng xe, đỗ xe trên đường bộ có khách đang lên, xuống xe.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Giảm tốc độ/dừng lại khi: Cảnh báo nguy hiểm, chướng ngại vật, chuyển hướng, tầm nhìn hạn chế, cầu cống hẹp, vật nuôi, điểm dừng xe có khách.",
    "tip": "",
    "image": ""
  },
  {
    "id": 108,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường mà mỗi chiều đường xe chạy chỉ có một làn đường dành cho xe cơ giới, người lái xe không được vượt xe khác trong trường hợp nào dưới đây?",
    "options": [
      "Có chướng ngại vật phía trước, xe chạy phía trước có tín hiệu vượt xe khác.",
      "Xe chạy phía trước đã có tín hiệu rẽ phải và tránh về bên phải.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Không vượt (1 làn/chiều): Có chướng ngại vật phía trước, hoặc xe trước đang xin vượt.",
    "tip": "",
    "image": ""
  },
  {
    "id": 109,
    "chapter": 1,
    "isCritical": false,
    "question": "Người lái xe được phép vượt xe khác về bên phải trong trường hợp nào dưới đây?",
    "options": [
      "Xe phía trước có tín hiệu rẽ trái hoặc đang rẽ trái hoặc khi xe chuyên dùng đang làm việc trên đường mà không thể vượt bên trái.",
      "Xe phía trước đang đi sát lề đường bên trái.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Vượt phải khi: Xe trước rẽ trái, hoặc xe chuyên dùng đang làm việc (không thể vượt trái).",
    "tip": "",
    "image": ""
  },
  {
    "id": 110,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi có xe xin vượt, người lái xe mô tô xử lý như thế nào nếu đủ điều kiện an toàn cho xe phía sau vượt?",
    "options": [
      "Giảm tốc độ, có tín hiệu rẽ phải để báo hiệu cho người điều khiển phương tiện tham gia giao thông đường bộ phía sau biết được vượt và đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được cản trở đối với xe xin vượt.",
      "Lái xe vào lề đường bên trái và giảm tốc độ để xe phía sau vượt qua, không được gây trở ngại đối với xe xin vượt.",
      "Tăng tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua."
    ],
    "answer": 1,
    "explanation": "Xe máy bị xin vượt (an toàn): Giảm tốc độ, báo hiệu rẽ phải, đi sát phải, không cản trở.",
    "tip": "",
    "image": ""
  },
  {
    "id": 111,
    "chapter": 1,
    "isCritical": false,
    "question": "Những trường hợp nào dưới đây không được đi trên đường cao tốc, trừ người, phương tiện giao thông đường bộ và thiết bị phục vụ việc quản lý, bảo trì đường cao tốc?",
    "options": [
      "Xe máy chuyên dùng có tốc độ thiết kế nhỏ hơn tốc độ tối thiểu quy định đối với đường cao tốc, xe chở người bốn bánh có gắn động cơ, xe chở hàng bốn bánh có gắn động cơ, xe mô tô, xe gắn máy, các loại xe tương tự xe mô tô, xe gắn máy, xe thô sơ, người đi bộ.",
      "Xe máy chuyên dùng có tốc độ thiết kế lớn hơn tốc độ tối thiểu quy định đối với đường cao tốc.",
      "Xe ô tô và xe máy chuyên dùng có tốc độ thiết kế lớn hơn 80 km/h."
    ],
    "answer": 1,
    "explanation": "Cấm vào cao tốc: Xe tốc độ thiết kế < tốc độ tối thiểu cao tốc, xe 4 bánh gắn động cơ (chở người/hàng), mô tô, gắn máy, xe thô sơ, người đi bộ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 112,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi tham gia giao thông trên đường cao tốc, xe ưu tiên đi làm nhiệm vụ khẩn cấp được đi ngược chiều trong trường hợp nào dưới đây?",
    "options": [
      "Được đi ngược chiều bất cứ làn đường nào của đường cao tốc có thể đi được.",
      "Chỉ được đi ngược chiều trên làn dừng xe khẩn cấp.",
      "Chỉ được đi ngược chiều trên làn đường sát dải phân cách của đường cao tốc."
    ],
    "answer": 2,
    "explanation": "Xe ưu tiên đi ngược chiều trên cao tốc: Chỉ trên làn dừng khẩn cấp.",
    "tip": "",
    "image": ""
  },
  {
    "id": 113,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi tham gia giao thông trên đường cao tốc, người lái xe không được thực hiện hành vi nào sau đây?",
    "options": [
      "Dừng, đỗ xe trên phần đường xe chạy, trừ trường hợp xe không thể di chuyển được vào làn đường khẩn cấp.",
      "Lùi xe, quay đầu xe.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Trên cao tốc cấm: Dừng/đỗ trên đường xe chạy (trừ bất khả kháng), lùi xe, quay đầu xe.",
    "tip": "",
    "image": ""
  },
  {
    "id": 114,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi xe gặp sự cố kỹ thuật trên đường cao tốc, bạn phải xử lý như thế nào để bảo đảm an toàn giao thông?",
    "options": [
      "Bật đèn tín hiệu khẩn cấp, dừng xe ngay lập tức và đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
      "Bật tín hiệu khẩn cấp, lập tức đưa xe vào làn đường xe chạy bên phải trong cùng, đặt biển báo hiệu nguy hiểm để cảnh báo cho các xe khác.",
      "Dừng xe, đỗ xe ở làn dừng khẩn cấp cùng chiều xe chạy và phải có báo hiệu bằng đèn khẩn cấp; trường hợp xe không thể di chuyển được vào làn dừng khẩn cấp, phải có báo hiệu bằng đèn khẩn cấp và đặt biển hoặc đèn cảnh báo về phía sau xe khoảng cách tối thiểu 150 mét, nhanh chóng báo cho cơ quan Cảnh sát giao thông thực hiện nhiệm vụ bảo đảm trật tự, an toàn giao thông trên tuyến hoặc cơ quan quản lý đường cao tốc."
    ],
    "answer": 3,
    "explanation": "Sự cố trên cao tốc: Vào làn dừng khẩn cấp, đèn khẩn cấp, đặt biển/đèn báo sau xe (tối thiểu 150m), báo CSGT/quản lý đường.",
    "tip": "",
    "image": ""
  },
  {
    "id": 115,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường cao tốc, người lái xe xử lý như thế nào khi đã vượt quá lối ra của đường định rẽ?",
    "options": [
      "Quay đầu xe, chạy trên lề đường có lối ra và rẽ khỏi đường cao tốc.",
      "Lùi xe trên lề đường có lối ra và rẽ khỏi đường cao tốc.",
      "Tiếp tục lái xe và rẽ ở lối ra tiếp theo."
    ],
    "answer": 3,
    "explanation": "Vượt quá lối ra cao tốc: Tiếp tục đi, rẽ ở lối ra tiếp theo.",
    "tip": "",
    "image": ""
  },
  {
    "id": 116,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi xảy ra ùn tắc trên đường cao tốc có làn dừng xe khẩn cấp, người lái xe có được cho xe chạy ở làn dừng xe khẩn cấp để nhanh chóng thoát khỏi khu vực ùn tắc không (trừ xe ưu tiên)?",
    "options": [
      "Có.",
      "Không."
    ],
    "answer": 2,
    "explanation": "Trên cao tốc KHÔNG được chạy trên làn dừng khẩn cấp trừ xe ưu tiên.",
    "tip": "",
    "image": ""
  },
  {
    "id": 117,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi chuẩn bị nhập vào làn đường của đường cao tốc, người lái xe, người điều khiển xe máy chuyên dùng phải thực hiện như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Có tín hiệu xin vào và phải nhường đường cho xe đang chạy trên đường.",
      "Quan sát xe phía sau bảo đảm khoảng cách an toàn mới cho xe nhập vào làn đường sát bên phải.",
      "Nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi nhập vào làn đường của đường cao tốc.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Nhập làn cao tốc: Tín hiệu, nhường đường, (nếu có làn tăng tốc thì chạy trên đó trước).",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 118,
    "chapter": 1,
    "isCritical": false,
    "question": "Theo quy định về độ tuổi, người đủ bao nhiêu tuổi trở lên thì được cấp giấy phép lái xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 3.500 kg đến 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg?",
    "options": [
      "18 tuổi.",
      "17 tuổi.",
      "16 tuổi."
    ],
    "answer": 1,
    "explanation": "Hạng C1 = 18 tuổi; Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi).<br/>Xe dưới 50cm3: 16 tuổi; Hạng A1, A, B1, B, C1: 18 tuổi;<br/>Hạng C, BE: 21 tuổi;<br/>Hạng D1, D2, C1E, CE: 24 tuổi;<br/>Hạng D, D1E, D2E, DE: 27 tuổi.",
    "tip": "",
    "image": ""
  },
  {
    "id": 119,
    "chapter": 1,
    "isCritical": false,
    "question": "Theo quy định về độ tuổi, người đủ bao nhiêu tuổi trở lên thì được cấp giấy phép lái xe mô tô hai bánh có dung tích xi lanh đến 125 cm3 và xe ô tô chở người đến 8 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg?",
    "options": [
      "16 tuổi.",
      "17 tuổi.",
      "18 tuổi."
    ],
    "answer": 3,
    "explanation": "Hạng A1 và B là 18 tuổi. Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi).<br/>Xe dưới 50cm3: 16 tuổi; Hạng A1, A, B1, B, C1: 18 tuổi;<br/>Hạng C, BE: 21 tuổi;<br/>Hạng D1, D2, C1E, CE: 24 tuổi;<br/>Hạng D, D1E, D2E, DE: 27 tuổi.",
    "tip": "",
    "image": ""
  },
  {
    "id": 120,
    "chapter": 1,
    "isCritical": false,
    "question": "Theo quy định về độ tuổi, người lái xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe); xe ô tô chở người giường nằm; các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg phải đủ bao nhiêu tuổi trở lên?",
    "options": [
      "23 tuổi.",
      "24 tuổi.",
      "27 tuổi.",
      "30 tuổi."
    ],
    "answer": 3,
    "explanation": "Hạng D là 27 tuổi. Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi).<br/>Xe dưới 50cm3: 16 tuổi; Hạng A1, A, B1, B, C1: 18 tuổi;<br/>Hạng C, BE: 21 tuổi;<br/>Hạng D1, D2, C1E, CE: 24 tuổi;<br/>Hạng D, D1E, D2E, DE: 27 tuổi.",
    "tip": "",
    "image": ""
  },
  {
    "id": 121,
    "chapter": 1,
    "isCritical": false,
    "question": "Tuổi tối đa của người lái xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe), xe ô tô chở người giường nằm là bao nhiêu tuổi?",
    "options": [
      "Đủ 55 tuổi đối với nam và đủ 50 tuổi đối với nữ.",
      "Đủ 55 tuổi đối với nam và nữ.",
      "Đủ 57 tuổi đối với nam và đủ 55 tuổi đối với nữ."
    ],
    "answer": 3,
    "explanation": "Độ tuổi tối đa người lái xe ô tô trên 29 chỗ: Nam 57 tuổi và nữ 55 tuổi.",
    "tip": "",
    "image": ""
  },
  {
    "id": 122,
    "chapter": 1,
    "isCritical": false,
    "question": "Theo quy định về độ tuổi, người lái xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D2 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg phải đủ bao nhiêu tuổi trở lên?",
    "options": [
      "23 tuổi.",
      "24 tuổi.",
      "22 tuổi."
    ],
    "answer": 2,
    "explanation": "Hạng D2 là 24 tuổi. Độ tuổi lấy bằng theo hạng (cách nhau 3 tuổi).<br/>Xe dưới 50cm3: 16 tuổi; Hạng A1, A, B1, B, C1: 18 tuổi;<br/>Hạng C, BE: 21 tuổi;<br/>Hạng D1, D2, C1E, CE: 24 tuổi;<br/>Hạng D, D1E, D2E, DE: 27 tuổi.",
    "tip": "",
    "image": ""
  },
  {
    "id": 123,
    "chapter": 1,
    "isCritical": false,
    "question": "Người đủ 16 tuổi đến dưới 18 tuổi chỉ được điều khiển các loại xe nào dưới đây?",
    "options": [
      "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3.",
      "Xe gắn máy.",
      "Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe); xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg; các loại xe ô tô quy định cho giấy phép lái xe hạng B kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "Cả ba ý trên."
    ],
    "answer": 2,
    "explanation": "Xe gắn máy từ 16 tuổi;",
    "tip": "",
    "image": ""
  },
  {
    "id": 124,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có Giấy phép lái xe mô tô hạng A1 không được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe mô tô hai bánh có dung tích xi-lanh 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
      "Xe mô tô ba bánh.",
      "Cả hai ý trên."
    ],
    "answer": 2,
    "explanation": "Hạng A1 không được chạy mô tô ba bánh.",
    "tip": "",
    "image": ""
  },
  {
    "id": 125,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có Giấy phép lái xe mô tô hạng A1 được cấp sau ngày 01/01/2025 được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
      "Xe mô tô ba bánh.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Hạng A1 lái xe mô tô hai bánh đến 125 cm3 hoặc đến 11 kW.",
    "tip": "",
    "image": ""
  },
  {
    "id": 126,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có Giấy phép lái xe mô tô hạng A được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe mô tô hai bánh có dung tích xi-lanh đến 125 cm3 hoặc có công suất động cơ điện đến 11 kW.",
      "Xe mô tô hai bánh có dung tích xi-lanh trên 125 cm3 hoặc có công suất động cơ điện trên 11 kW.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Hạng A lái xe mô tô hai bánh trên 125 cm3 hoặc trên 11 kW và xe hạng A1. Nên cả 2 ý là đáp án đúng.",
    "tip": "",
    "image": ""
  },
  {
    "id": 127,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có Giấy phép lái xe ô tô hạng B được phép điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe ô tô chở người đến 08 chỗ (không kể chỗ của người lái xe).",
      "Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế đến 3.500 kg.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Hạng B: đến 08 chỗ (không kể lái xe); ô tô tải và chuyên dùng đến 3.500 kg; kéo rơ moóc đến 750 kg;",
    "tip": "",
    "image": ""
  },
  {
    "id": 128,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có Giấy phép lái xe hạng C1 được điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 3.500 kg đến 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "Cả hai ý trên."
    ],
    "answer": 2,
    "explanation": "Hạng C1: ô tô tải và chuyên dùng trên 3.500 kg đến 7.500 kg và lái xe Hạng B.",
    "tip": "",
    "image": ""
  },
  {
    "id": 129,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có Giấy phép lái xe hạng C được điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 3.500 kg đến 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "Xe ô tô tải và ô tô chuyên dùng có khối lượng toàn bộ theo thiết kế trên 7.500 kg; các loại xe ô tô tải quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Hạng C: ô tô tải và chuyên dùng trên 7.500 kg và lái xe Hạng B, C1.",
    "tip": "",
    "image": ""
  },
  {
    "id": 130,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có Giấy phép lái xe hạng D1 được điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "Xe ô tô chở người trên 08 chỗ (không kể chỗ của người lái xe) đến 16 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "Cả hai ý trên."
    ],
    "answer": 2,
    "explanation": "Hạng D1: trên 08 chỗ đến 16 chỗ (không kể lái xe); và lái xe Hạng B, C1, C;",
    "tip": "",
    "image": ""
  },
  {
    "id": 131,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có Giấy phép lái xe hạng D2 được điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D2 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "Xe ô tô chở người trên 08 chỗ (không kể chỗ của người lái xe) đến 16 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Hạng D2: trên 16 chỗ đến 29 chỗ (không kể lái xe); và lái xe hạng B, C1, C, D1;",
    "tip": "",
    "image": ""
  },
  {
    "id": 132,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có Giấy phép lái xe hạng D được điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe); xe ô tô chở người giường nằm; các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg.",
      "Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe).",
      "Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
      "Ý 1 và ý 2."
    ],
    "answer": 4,
    "explanation": "Hạng D: trên 29 chỗ (không kể lái xe); xe giường nằm; và lái xe hạng B, C1, C, D1, D2;",
    "tip": "",
    "image": ""
  },
  {
    "id": 133,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có Giấy phép lái xe hạng BE được điều khiển loại xe nào dưới đây?",
    "options": [
      "Xe ô tô chở người (kể cả xe buýt) trên 29 chỗ (không kể chỗ của người lái xe); xe ô tô chở người giường nằm.",
      "Các loại xe ô tô quy định cho giấy phép lái xe hạng B kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg.",
      "Xe ô tô chở người (kể cả xe buýt) trên 16 chỗ (không kể chỗ của người lái xe) đến 29 chỗ (không kể chỗ của người lái xe); các loại xe ô tô chở người quy định cho giấy phép lái xe hạng D2 kéo rơ moóc có khối lượng toàn bộ theo thiết kế đến 750 kg."
    ],
    "answer": 2,
    "explanation": "Hạng BE: lái xe hạng B kéo rơ moóc trên 750kg.",
    "tip": "",
    "image": ""
  },
  {
    "id": 134,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có Giấy phép lái xe hạng CE được điều khiển loại xe nào dưới đây?",
    "options": [
      "Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
      "Các loại xe ô tô quy định cho giấy phép lái xe hạng D1 kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Hạng CE: lái xe hạng C kéo rơ moóc trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc;",
    "tip": "",
    "image": ""
  },
  {
    "id": 135,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có Giấy phép lái xe hạng DE được điều khiển loại xe nào dưới đây?",
    "options": [
      "Các loại xe ô tô quy định cho giấy phép lái xe hạng D kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô chở khách nối toa.",
      "Các loại xe ô tô quy định cho giấy phép lái xe hạng C kéo rơ moóc có khối lượng toàn bộ theo thiết kế trên 750 kg; xe ô tô đầu kéo kéo sơ mi rơ moóc.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Hạng DE: lái xe hạng D kéo rơ moóc trên 750 kg; xe ô tô chở khách nối toa.",
    "tip": "",
    "image": ""
  },
  {
    "id": 136,
    "chapter": 1,
    "isCritical": false,
    "question": "Người tập lái xe ô tô khi tham gia giao thông đường bộ phải bảo đảm các điều kiện nào dưới đây?",
    "options": [
      "Phải thực hành trên xe tập lái, trên tuyến đường tập lái và có giáo viên dạy lái bảo trợ tay lái.",
      "Phải mang theo giấy phép xe tập lái.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Người tập lái: Thực hành trên xe tập lái, đúng tuyến, có giáo viên bảo trợ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 137,
    "chapter": 1,
    "isCritical": false,
    "question": "Người lái xe khi tham gia giao thông đường bộ phải đảm bảo các điều kiện nào dưới đây?",
    "options": [
      "Phải đủ tuổi, sức khỏe theo quy định của pháp luật; có giấy phép lái xe đang còn điểm, còn hiệu lực phù hợp với loại xe đang điều khiển do cơ quan có thẩm quyền cấp (trừ người lái xe gắn máy).",
      "Phải là người đứng tên trong đăng ký xe.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Điều kiện lái xe: Đủ tuổi, sức khỏe, GPLX còn điểm/hiệu lực, phù hợp loại xe (trừ xe gắn máy).",
    "tip": "",
    "image": ""
  },
  {
    "id": 138,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi tham gia giao thông đường bộ, người lái xe phải mang theo các giấy tờ gì?",
    "options": [
      "Chứng nhận đăng ký xe hoặc bản sao Chứng nhận đăng ký xe có chứng thực kèm bản gốc giấy tờ xác nhận của tổ chức tín dụng, chi nhánh ngân hàng nước ngoài còn hiệu lực trong trường hợp xe đang được thế chấp tại tổ chức tín dụng, chi nhánh ngân hàng nước ngoài.",
      "Giấy phép lái xe phù hợp với loại xe đang điều khiển; chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường đối với xe cơ giới theo quy định của pháp luật; chứng nhận bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới.",
      "Trường hợp các giấy tờ nêu trên đã được tích hợp vào tài khoản định danh điện tử thì việc xuất trình, kiểm tra có thể thực hiện thông qua tài khoản định danh điện tử.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Mang theo khi lái xe: Đăng ký xe (hoặc bản sao), GPLX, Kiểm định, Bảo hiểm TNDS; hoặc xuất trình qua VNeID.",
    "tip": "",
    "image": ""
  },
  {
    "id": 139,
    "chapter": 1,
    "isCritical": false,
    "question": "Giấy phép lái xe bị thu hồi trong các trường hợp nào sau đây?",
    "options": [
      "Người được cấp giấy phép lái xe không đủ điều kiện sức khỏe theo kết luận của cơ sở khám bệnh, chữa bệnh đối với từng hạng giấy phép lái xe.",
      "Giấy phép lái xe được cấp sai quy định.",
      "Giấy phép lái xe đã quá thời hạn tạm giữ hoặc hết thời hiệu thi hành quyết định xử phạt vi phạm hành chính theo quy định của pháp luật về xử lý vi phạm hành chính nếu người vi phạm không đến nhận mà không có lý do chính đáng.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Thu hồi GPLX: Không đủ sức khỏe, cấp sai, quá hạn tạm giữ/phạt không đến nhận (không lý do chính đáng).",
    "tip": "",
    "image": ""
  },
  {
    "id": 140,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có giấy phép lái xe chưa bị trừ hết 12 điểm, được phục hồi điểm giấy phép lái xe trong trường hợp nào sau đây?",
    "options": [
      "Không được phục hồi.",
      "Được phục hồi đủ 12 điểm, nếu không bị trừ điểm trong thời hạn 12 tháng từ ngày bị trừ điểm gần nhất."
    ],
    "answer": 2,
    "explanation": "Phục hồi điểm GPLX (chưa hết điểm): Không bị trừ điểm trong 12 tháng (từ lần trừ gần nhất) -> phục hồi đủ 12 điểm.",
    "tip": "",
    "image": ""
  },
  {
    "id": 141,
    "chapter": 1,
    "isCritical": false,
    "question": "Người có giấy phép lái xe đã bị trừ hết điểm phải làm gì để phục hồi điểm giấy phép lái xe?",
    "options": [
      "Không vi phạm pháp luật trật tự, an toàn giao thông đường bộ trong thời gian 12 tháng kể từ ngày bị trừ hết điểm.",
      "Sau thời hạn ít nhất là 06 tháng kể từ ngày bị trừ hết điểm, người có phép lái xe được tham gia kiểm tra nội dung kiến thức pháp luật về trật tự, an toàn giao thông đường bộ theo quy định, có kết quả đạt yêu cầu thì được phục hồi đủ 12 điểm.",
      "Cả hai ý trên."
    ],
    "answer": 2,
    "explanation": "Phục hồi điểm GPLX (đã hết điểm): Sau ít nhất 6 tháng, kiểm tra kiến thức pháp luật đạt -> phục hồi đủ 12 điểm.",
    "tip": "",
    "image": ""
  },
  {
    "id": 142,
    "chapter": 1,
    "isCritical": false,
    "question": "Trách nhiệm của tổ chức, cá nhân đứng tên trong giấy chứng nhận đăng ký xe khi chưa thực hiện thu hồi chứng nhận đăng ký xe, biển số xe được quy định như thế nào?",
    "options": [
      "Tiếp tục chịu trách nhiệm của chủ xe.",
      "Không chịu trách nhiệm sau khi đã chuyển nhượng, trao đổi, tặng, cho."
    ],
    "answer": 1,
    "explanation": "Chưa thu hồi đăng ký/biển số xe (sau bán/cho): Vẫn chịu trách nhiệm chủ xe.",
    "tip": "",
    "image": ""
  },
  {
    "id": 143,
    "chapter": 1,
    "isCritical": false,
    "question": "Để bảo đảm điều kiện tham gia giao thông đường bộ, loại phương tiện nào phải lắp thiết bị giám sát hành trình?",
    "options": [
      "Xe ô tô kinh doanh vận tải.",
      "Xe ô tô chở người từ 08 chỗ trở lên (không kể chỗ của người lái xe) kinh doanh vận tải, xe ô tô đầu kéo, xe cứu thương.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Lắp giám sát hành trình: Xe ô tô kinh doanh vận tải và xe chở người >=8 chỗ, xe đầu kéo, xe cứu thương.",
    "tip": "",
    "image": ""
  },
  {
    "id": 144,
    "chapter": 1,
    "isCritical": false,
    "question": "Tốc độ khai thác tối đa cho phép đối với xe máy chuyên dùng, xe gắn máy và các loại xe tương tự tham gia giao thông trên đường bộ (trừ đường cao tốc) là bao nhiêu km/h?",
    "options": [
      "50 km/h.",
      "40 km/h.",
      "60 km/h."
    ],
    "answer": 2,
    "explanation": "Xe gắn máy tối đa 40km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 145,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường bộ, trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?",
    "options": [
      "60 km/h.",
      "50 km/h.",
      "40 km/h."
    ],
    "answer": 1,
    "explanation": "Xe cơ giới không bao gồm xe gắn máy: Trong khu vực đông dân cư, đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên: 60km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 146,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, xe mô tô hai bánh, ô tô chở người đến 28 chỗ không kể chỗ của người lái xe tham gia giao thông với tốc độ khai thác tối đa cho phép là bao nhiêu?",
    "options": [
      "60 km/h.",
      "50 km/h.",
      "40 km/h."
    ],
    "answer": 2,
    "explanation": "Xe cơ giới không bao gồm xe gắn máy: Trong khu vực đông dân cư, đường hai chiều; đường một chiều có một làn xe cơ giới: 50km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 147,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới, loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 50 km/h?",
    "options": [
      "Ô tô tải, ô tô chở người trên 28 chỗ không kể chỗ của người lái xe.",
      "Xe gắn máy, xe máy chuyên dùng.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Xe cơ giới không bao gồm xe gắn máy: Trong khu vực đông dân cư, đường hai chiều; đường một chiều có một làn xe cơ giới: 50km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 148,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường bộ (trừ đường cao tốc) trong khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn cơ giới trở lên, loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa là 60 km/h?",
    "options": [
      "Ô tô tải, ô tô chở người trên 28 chỗ không kể chỗ của người lái xe.",
      "Xe gắn máy, xe máy chuyên dùng.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Xe cơ giới không bao gồm xe gắn máy: Trong khu vực đông dân cư, đường đôi; đường một chiều có từ hai làn xe cơ giới trở lên: 60km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 149,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường bộ (trừ đường cao tốc) ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên, loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 90 km/h?",
    "options": [
      "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động)."
    ],
    "answer": 1,
    "explanation": "Đường có giải phân cách được xem là đường đôi.<br/>Ngoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 90km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 150,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 80 km/h?",
    "options": [
      "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc)."
    ],
    "answer": 2,
    "explanation": "Đường có giải phân cách được xem là đường đôi.<br/>Ngoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 90km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 151,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?",
    "options": [
      "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "answer": 3,
    "explanation": "Đường có giải phân cách được xem là đường đôi.<br/>Ngoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 90km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 152,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường bộ ngoài khu vực đông dân cư, đường đôi hoặc đường một chiều có từ hai làn xe cơ giới trở lên (trừ đường cao tốc) loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 60 km/h?",
    "options": [
      "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "answer": 4,
    "explanation": "Đường có giải phân cách được xem là đường đôi.<br/>Ngoài khu vực dân cư; đường đôi; đường một chiều có hai làn xe cơ giới trở lên: ô tô kéo rơ moóc 60km/h; mô tô, xe buýt, ôtô đầu kéo: 70km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 80km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 90km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 153,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 80 km/h?",
    "options": [
      "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động)."
    ],
    "answer": 1,
    "explanation": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 80km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 154,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 70 km/h?",
    "options": [
      "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "answer": 2,
    "explanation": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 80km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 155,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 60 km/h?",
    "options": [
      "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "answer": 3,
    "explanation": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 80km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 156,
    "chapter": 1,
    "isCritical": false,
    "question": "Trên đường bộ ngoài khu vực đông dân cư, đường hai chiều hoặc đường một chiều có một làn xe cơ giới (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 50 km/h?",
    "options": [
      "Xe ô tô chở người đến 28 chỗ không kể chỗ của người lái xe (trừ xe buýt); ô tô tải có trọng tải không lớn hơn 3,5 tấn.",
      "Xe ô tô chở người trên 28 chỗ không kể chỗ người lái xe (trừ xe buýt); ô tô tải có trọng tải trên 3,5 tấn (trừ ô tô xi téc).",
      "Xe buýt; ô tô đầu kéo kéo sơ mi rơ moóc (trừ ô tô đầu kéo kéo sơ mi rơ moóc xi téc); xe mô tô; ô tô chuyên dùng (trừ ô tô trộn vữa, ô tô trộn bê tông lưu động).",
      "Ô tô kéo rơ moóc; ô tô kéo xe khác; ô tô trộn vữa, ô tô trộn bê tông lưu động, ô tô xi téc, ô tô đầu kéo kéo sơ mi rơ moóc xi téc, ô tô kéo theo rơ moóc xi téc."
    ],
    "answer": 4,
    "explanation": "Ngoài khu vực dân cư; đường hai chiều; đường một chiều có một làn xe: ô tô kéo rơ moóc 50km/h; mô tô, xe buýt, ôtô đầu kéo: 60km/h; xe trên 29 chỗ, xe tải trên 3,5 tấn: 70km/h; xe con, xe đến 29 chỗ, tải dưới 3,5 tấn: 80km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 157,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi tham gia giao thông trên đường bộ (trừ đường cao tốc), loại xe nào dưới đây được tham gia giao thông với tốc độ khai thác tối đa cho phép là 50 km/h?",
    "options": [
      "Xe máy chuyên dùng, xe gắn máy và các loại xe tương tự.",
      "Xe chở người bốn bánh có gắn động cơ khi tham gia giao thông trong phạm vi và thời gian cho phép hoạt động.",
      "Xe chở hàng bốn bánh có gắn động cơ khi tham gia giao thông trong phạm vi và thời gian cho phép hoạt động."
    ],
    "answer": 3,
    "explanation": "Xe chở hàng bốn bánh có gắn động cơ: 50km/h.",
    "tip": "",
    "image": ""
  },
  {
    "id": 158,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi tham gia giao thông trên đoạn đường không có biển báo “Cự ly tối thiểu giữa hai xe”, trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ từ trên 80 km/h đến 100 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
    "options": [
      "35 m.",
      "55 m.",
      "70 m."
    ],
    "answer": 3,
    "explanation": "Khoảng cách an toàn tối thiểu: 60km/h = 35m; 60 - 80km/h = 55m; 80 - 100km/h = 70m; 100 - 120km/h = 100m.",
    "tip": "",
    "image": ""
  },
  {
    "id": 159,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi tham gia giao thông trên đoạn đường không có biển báo “cự ly tối thiểu giữa hai xe”, trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ từ trên 100 km/h đến 120 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
    "options": [
      "55 m.",
      "70 m.",
      "100 m."
    ],
    "answer": 3,
    "explanation": "Khoảng cách an toàn tối thiểu: 60km/h = 35m; 60 - 80km/h = 55m; 80 - 100km/h = 70m; 100 - 120km/h = 100m.",
    "tip": "",
    "image": ""
  },
  {
    "id": 160,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi tham gia giao thông trên đoạn đường không có biển báo “cự ly tối thiểu giữa hai xe”, trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ từ trên 60 km/h đến 80 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
    "options": [
      "55 m.",
      "70 m.",
      "100 m."
    ],
    "answer": 1,
    "explanation": "Khoảng cách an toàn tối thiểu: 60km/h = 35m; 60 - 80km/h = 55m; 80 - 100km/h = 70m; 100 - 120km/h = 100m.",
    "tip": "",
    "image": ""
  },
  {
    "id": 161,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi tham gia giao thông trên đoạn đường không có biển báo “cự ly tối thiểu giữa hai xe”, trong điều kiện mặt đường khô ráo, không có sương mù, mặt đường không trơn trượt, địa hình bằng phẳng, đường thẳng, tầm nhìn bảo đảm, xe cơ giới đang chạy với tốc độ 60 km/h, người lái xe phải giữ khoảng cách an toàn với xe đang chạy liền trước tối thiểu là bao nhiêu?",
    "options": [
      "35 m.",
      "55 m.",
      "70 m."
    ],
    "answer": 1,
    "explanation": "Khoảng cách an toàn tối thiểu: 60km/h = 35m; 60 - 80km/h = 55m; 80 - 100km/h = 70m; 100 - 120km/h = 100m.",
    "tip": "",
    "image": ""
  },
  {
    "id": 162,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi điều khiển xe chạy với tốc độ dưới 60 km/h, để bảo đảm khoảng cách an toàn giữa hai xe, người lái xe phải điều khiển xe như thế nào?",
    "options": [
      "Chủ động giữ khoảng cách an toàn phù hợp với xe chạy liền trước xe của mình.",
      "Bảo đảm khoảng cách an toàn tùy thuộc vào mật độ phương tiện, tình hình giao thông thực tế.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Chủ động giữ khoảng cách và bảo đảm khoảng cách an toàn.",
    "tip": "",
    "image": ""
  },
  {
    "id": 163,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe phải giảm tốc độ thấp hơn tốc độ tối đa cho phép đến mức cần thiết, chú ý quan sát và chuẩn bị sẵn sàng những tình huống có thể xảy ra để phòng ngừa tai nạn trong các trường hợp nào dưới đây?",
    "options": [
      "Gặp biển báo nguy hiểm và cảnh báo trên đường.",
      "Gặp biển chỉ dẫn trên đường.",
      "Gặp biển báo hết mọi lệnh cấm.",
      "Gặp biển báo hết hạn chế tốc độ tối đa cho phép."
    ],
    "answer": 1,
    "explanation": "Quan sát biển báo nguy hiểm và cảnh báo trên đường.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 164,
    "chapter": 1,
    "isCritical": false,
    "question": "Xe đưa đón trẻ em mầm non, học sinh được ưu tiên gì khi tham gia giao thông đường bộ?",
    "options": [
      "Tổ chức phân luồng, điều tiết giao thông, bố trí nơi dừng xe, đỗ xe tại khu vực trường học và tại các điểm trên lộ trình đưa đón trẻ em mầm non, học sinh.",
      "Được bố trí xe dẫn đường để bảo đảm an toàn giao thông.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Xe đưa đón học sinh: Được ưu tiên phân luồng, điều tiết, bố trí nơi dừng/đỗ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 165,
    "chapter": 1,
    "isCritical": true,
    "question": "Người điều khiển phương tiện tham gia giao thông đường bộ phải quan sát, giảm tốc độ hoặc dừng lại để bảo đảm an toàn trong các trường hợp nào dưới đây?",
    "options": [
      "Tại nơi có vạch kẻ đường hoặc báo hiệu khác dành cho người đi bộ hoặc tại nơi mà người đi bộ, xe lăn của người khuyết tật đang qua đường.",
      "Nơi đường bộ giao nhau cùng mức với đường bộ, đường bộ giao nhau cùng mức với đường sắt; đường hẹp, đường vòng, đường quanh co, đường đèo, dốc.",
      "Khu vực có trường học, bệnh viện, bến xe, công trình công cộng tập trung đông người, khu vực đông dân cư, chợ, khu vực đang thi công trên đường bộ, hiện trường vụ tai nạn giao thông đường bộ.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Quan sát, giảm tốc độ/dừng khi: Vạch/nơi người đi bộ qua đường, giao nhau, đường hẹp/vòng/dốc, khu vực trường học/bệnh viện/chợ/công trình.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 166,
    "chapter": 1,
    "isCritical": false,
    "question": "Tại những đoạn đường không bố trí biển báo hạn chế tốc độ, không bố trí biển báo khoảng cách an toàn tối thiểu giữa hai xe, người lái xe phải thực hiện quy định nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Được phép lái xe không hạn chế tốc độ và khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường.",
      "Được phép lái xe không hạn chế tốc độ và khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường khi tham gia giao thông trên đường nhánh.",
      "Chấp hành quy định về tốc độ, khoảng cách an toàn tối thiểu với xe phía trước cùng làn đường hoặc phần đường."
    ],
    "answer": 3,
    "explanation": "Không có biển báo tốc độ/khoảng cách: Vẫn phải tuân thủ quy định chung về tốc độ, khoảng cách.",
    "tip": "",
    "image": ""
  },
  {
    "id": 167,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi gặp xe buýt đang dừng đón, trả khách, người điều khiển xe mô tô phải xử lý như thế nào dưới đây?",
    "options": [
      "Tăng tốc độ để nhanh chóng vượt qua xe buýt.",
      "Quan sát, giảm tốc độ đi qua xe buýt hoặc dừng lại để bảo đảm an toàn."
    ],
    "answer": 2,
    "explanation": "Gặp xe buýt dừng đón/trả khách: Quan sát, giảm tốc độ hoặc dừng lại an toàn.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 168,
    "chapter": 1,
    "isCritical": false,
    "question": "Việc vận chuyển hành khách bằng xe ô tô phải tuân thủ các quy định nào dưới đây?",
    "options": [
      "Đón, trả hành khách đúng nơi quy định; hướng dẫn sử dụng trang thiết bị an toàn trên xe; có biện pháp giữ gìn vệ sinh trong xe; vận chuyển hành khách đúng lịch trình, lộ trình đã đăng ký, trừ trường hợp bất khả kháng; không chở hành khách trên nóc xe, trong khoang chở hành lý hoặc để hành khách đu, bám bên ngoài xe.",
      "Đón, trả hành khách theo yêu cầu của hành khách trên xe; hướng dẫn sử dụng trang thiết bị an toàn trên xe; có biện pháp giữ gìn vệ sinh trong xe; vận chuyển hành khách đúng lịch trình, lộ trình đã đăng ký, trừ trường hợp bất khả kháng; không chở hành khách trên nóc xe, trong khoang chở hành lý hoặc để hành khách đu, bám bên ngoài xe."
    ],
    "answer": 1,
    "explanation": "Vận chuyển ô tô khách: Đón/trả đúng nơi, hướng dẫn an toàn, vệ sinh, đúng lịch trình, không chở nóc/khoang hành lý/đu bám.",
    "tip": "",
    "image": ""
  },
  {
    "id": 169,
    "chapter": 1,
    "isCritical": false,
    "question": "Trong hoạt động vận tải đường bộ, các hành vi nào dưới đây bị nghiêm cấm?",
    "options": [
      "Vận chuyển hàng hóa cấm lưu hành.",
      "Vận chuyển trái phép hoặc không thực hiện đầy đủ các quy định của pháp luật về vận chuyển hàng hóa nguy hiểm.",
      "Vận chuyển động vật hoang dã.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Cấm trong vận tải: Chở hàng cấm, hàng nguy hiểm (trái phép/không đúng quy định), động vật hoang dã.",
    "tip": "",
    "image": ""
  },
  {
    "id": 170,
    "chapter": 1,
    "isCritical": false,
    "question": "Trong hoạt động vận tải hành khách, những hành vi nào dưới đây bị nghiêm cấm?",
    "options": [
      "Cạnh tranh nhau nhằm tăng lợi nhuận.",
      "Giảm giá để thu hút khách.",
      "Đe dọa, xúc phạm, tranh giành, lôi kéo hành khách; đe dọa, cưỡng ép hành khách sử dụng dịch vụ ngoài ý muốn; chuyển tải, xuống khách hoặc các hành vi khác nhằm trốn tránh phát hiện xe chở quá tải, quá số người theo quy định của pháp luật.",
      "Cả ba ý trên."
    ],
    "answer": 3,
    "explanation": "Vận tải khách cấm: Đe dọa, xúc phạm, tranh giành khách; cưỡng ép dịch vụ; chuyển tải/xuống khách trốn tránh quá tải.",
    "tip": "",
    "image": ""
  },
  {
    "id": 171,
    "chapter": 1,
    "isCritical": false,
    "question": "Thời gian lái xe liên tục của người lái xe ô tô kinh doanh vận tải được quy định như thế nào để bảo đảm an toàn giao thông?",
    "options": [
      "Không quá 4 giờ.",
      "Không quá 6 giờ.",
      "Không quá 8 giờ.",
      "Liên tục tùy thuộc vào sức khỏe và khả năng của người lái xe."
    ],
    "answer": 1,
    "explanation": "Lái xe liên tục: Không quá 4 giờ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 172,
    "chapter": 1,
    "isCritical": false,
    "question": "Thời gian làm việc của người lái xe ô tô kinh doanh vận tải trong một ngày được quy định như thế nào để bảo đảm an toàn giao thông?",
    "options": [
      "Không quá 6 giờ trong một ngày.",
      "Không quá 8 giờ trong một ngày.",
      "Không quá 10 giờ trong một ngày.",
      "Không hạn chế tùy thuộc vào sức khỏe và khả năng của người lái xe."
    ],
    "answer": 3,
    "explanation": "Lái xe làm việc: Không quá 10 giờ 1 ngày.",
    "tip": "",
    "image": ""
  },
  {
    "id": 173,
    "chapter": 1,
    "isCritical": false,
    "question": "Trước khi xe khởi hành, người lái xe, nhân viên phục vụ trên xe ô tô vận chuyển hành khách có trách nhiệm nào sau đây?",
    "options": [
      "Kiểm tra các điều kiện bảo đảm an toàn của xe.",
      "Hướng dẫn cho hành khách về an toàn giao thông đường bộ và thoát hiểm khi gặp sự cố.",
      "Kiểm tra nhân thân và hành lý của hành khách đi xe.",
      "Ý 1 và ý 2."
    ],
    "answer": 4,
    "explanation": "Trước khi xe khách khởi hành: Kiểm tra an toàn xe, hướng dẫn khách an toàn & thoát hiểm.",
    "tip": "",
    "image": ""
  },
  {
    "id": 174,
    "chapter": 1,
    "isCritical": false,
    "question": "Xe ô tô kinh doanh vận tải chở trẻ em mầm non, học sinh phải đáp ứng các yêu cầu nào dưới đây?",
    "options": [
      "Có thiết bị ghi nhận hình ảnh trẻ em mầm non, học sinh và thiết bị có chức năng cảnh báo, chống bỏ quên trẻ em trên xe; có niên hạn sử dụng không quá 20 năm; có màu sơn theo quy định của Chính phủ.",
      "Có dây đai an toàn phù hợp với lứa tuổi hoặc sử dụng xe có ghế ngồi phù hợp với lứa tuổi theo quy định của pháp luật.",
      "Được cấp chứng nhận đăng ký xe và gắn biển số xe, bảo đảm an toàn kỹ thuật và bảo vệ môi trường theo quy định của pháp luật; xe ô tô chở người từ 08 chỗ trở lên (không kể chỗ của người lái xe) phải lắp thiết bị giám sát hành trình và thiết bị ghi nhận hình ảnh người lái xe.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Xe chở học sinh: Thiết bị ghi hình/chống bỏ quên, niên hạn <=20 năm, màu sơn quy định, dây đai/ghế phù hợp, đủ giấy tờ/thiết bị giám sát.",
    "tip": "",
    "image": ""
  },
  {
    "id": 175,
    "chapter": 1,
    "isCritical": false,
    "question": "Việc vận chuyển động vật sống khi tham gia giao thông đường bộ phải thực hiện các yêu cầu nào dưới đây?",
    "options": [
      "Người lái xe phải mang đủ giấy tờ theo quy định của pháp luật.",
      "Phương tiện vận chuyển phải có kết cấu phù hợp với loại động vật chuyên chở.",
      "Trong quá trình vận chuyển phải chấp hành các quy định của pháp luật về trật tự, an toàn giao thông đường bộ, vệ sinh dịch tễ, phòng dịch và bảo đảm vệ sinh môi trường.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Vận chuyển động vật sống: Đủ giấy tờ, phương tiện phù hợp, tuân thủ luật GT, vệ sinh dịch tễ, môi trường.",
    "tip": "",
    "image": ""
  },
  {
    "id": 176,
    "chapter": 1,
    "isCritical": false,
    "question": "Việc vận chuyển hàng hóa nguy hiểm khi tham gia giao thông đường bộ phải chấp hành các quy định nào dưới đây?",
    "options": [
      "Phải có giấy phép vận chuyển; trong trường hợp cần thiết, đơn vị vận chuyển hàng hóa nguy hiểm phải bố trí người áp tải để bảo đảm trật tự, an toàn giao thông đường bộ.",
      "Phải có giấy phép vận chuyển; không phải bố trí người áp tải khi tham gia giao thông đường bộ."
    ],
    "answer": 1,
    "explanation": "Chở hàng nguy hiểm: Phải có giấy phép, (nếu cần) có người áp tải.",
    "tip": "",
    "image": ""
  },
  {
    "id": 177,
    "chapter": 1,
    "isCritical": false,
    "question": "Việc lưu hành xe ô tô của người nước ngoài đăng ký tại nước ngoài có tay lái ở bên phải tham gia giao thông tại Việt Nam, xe cơ giới nước ngoài do người nước ngoài đưa vào Việt Nam du lịch được quy định như như thế nào?",
    "options": [
      "Phải chấp hành quy định của pháp luật về trật tự, an toàn giao thông đường bộ của Việt Nam. Trường hợp điều ước quốc tế mà nước Cộng hòa xã hội chủ nghĩa Việt Nam là thành viên có quy định khác thì áp dụng theo điều ước quốc tế đó.",
      "Tham gia giao thông đúng trong phạm vi, tuyến đường, thời gian đã được cơ quan có thẩm quyền của Việt Nam cấp phép.",
      "Xe ô tô của người nước ngoài đăng ký tại nước ngoài có tay lái ở bên phải phải đi theo đoàn và có người, phương tiện hỗ trợ, hướng dẫn giao thông.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Xe nước ngoài (tay lái phải/du lịch): Tuân thủ luật VN (hoặc điều ước quốc tế), đúng phạm vi/tuyến/thời gian cấp phép, (tay lái phải) phải đi đoàn có hỗ trợ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 178,
    "chapter": 1,
    "isCritical": false,
    "question": "Việc sử dụng xe mô tô, xe gắn máy, xe thô sơ để vận chuyển hành khách, hàng hóa phải thực hiện các quy định nào dưới đây để đảm bảo an toàn giao thông?",
    "options": [
      "Kiểm tra điều kiện bảo đảm an toàn của xe trước khi tham gia giao thông đường bộ; mang đủ giấy tờ theo quy định của pháp luật.",
      "Kiểm tra việc sắp xếp hàng hóa bảo đảm an toàn; không chở quá số người, chở hành lý, hàng hóa vượt quá khối lượng cho phép hoặc vượt quá khổ giới hạn của xe.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Chở người/hàng bằng xe máy/thô sơ: Kiểm tra xe, đủ giấy tờ, sắp xếp hàng an toàn, không chở quá tải/khổ/số người.",
    "tip": "",
    "image": ""
  },
  {
    "id": 179,
    "chapter": 1,
    "isCritical": false,
    "question": "Xe vận chuyển hàng siêu trường, siêu trọng phải thực hiện các quy định nào dưới đây để bảo đảm an toàn giao thông?",
    "options": [
      "Phải chạy với tốc độ quy định trong giấy phép và phải có báo hiệu kích thước của hàng; trường hợp cần thiết, phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông khi vận chuyển hàng siêu trường, siêu trọng trên đường bộ.",
      "Phải chạy với tốc độ quy định trong giấy phép; phải có người, phương tiện hỗ trợ lái xe, cảnh báo cho người, phương tiện tham gia giao thông đường bộ khác và thực hiện các biện pháp bảo đảm an toàn giao thông đường khi vận chuyển hàng siêu trường, siêu trọng trên đường dành cho giao thông công cộng."
    ],
    "answer": 1,
    "explanation": "Chở hàng siêu trường/trọng: Chạy tốc độ trong giấy phép, báo hiệu kích thước, (nếu cần) có người/phương tiện hỗ trợ, cảnh báo.",
    "tip": "",
    "image": ""
  },
  {
    "id": 180,
    "chapter": 1,
    "isCritical": false,
    "question": "Xe cứu hộ giao thông đường bộ cần thực hiện yêu cầu nào sau đây để bảo đảm trật tự an toàn giao thông?",
    "options": [
      "Xe cứu hộ giao thông đường bộ phải có dấu hiệu nhận diện, niêm yết thông tin trên xe, gắn thiết bị giám sát hành trình và thiết bị ghi nhận hình ảnh người lái xe.",
      "Phải tuân thủ quy định của pháp luật về khối lượng hàng hóa chuyên chở của xe cứu hộ và khối lượng của xe được cứu hộ ghi trên Chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Xe cứu hộ: Dấu hiệu nhận diện, thông tin, GSHT, ghi hình lái; Tuân thủ khối lượng quy định.",
    "tip": "",
    "image": ""
  },
  {
    "id": 181,
    "chapter": 2,
    "isCritical": false,
    "question": "Người lái xe kinh doanh vận tải khi thực hiện tốt việc rèn luyện, nâng cao trách nhiệm, đạo đức nghề nghiệp sẽ thu được kết quả như thế nào dưới đây?",
    "options": [
      "Được khách hàng, xã hội tôn trọng; được đồng nghiệp quý mến, giúp đỡ; được doanh nghiệp tin dùng và đóng góp nhiều cho xã hội; thu hút được khách hàng, góp phần quan trọng trong xây dựng thương hiệu, kinh doanh có hiệu quả cao.",
      "Được cộng điểm vào giấy phép lái xe.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Đạo đức nghề nghiệp tốt (lái xe KDVT): Được tôn trọng, quý mến, tin dùng, thu hút khách, hiệu quả cao.",
    "tip": "",
    "image": ""
  },
  {
    "id": 182,
    "chapter": 2,
    "isCritical": false,
    "question": "Những hành vi nào sau đây thể hiện là người có văn hóa giao thông?",
    "options": [
      "Luôn tuân thủ pháp luật về trật tự, an toàn giao thông đường bộ, nhường nhịn và giúp đỡ người khác.",
      "Đi nhanh, vượt đèn đỏ nếu không có lực lượng Công an.",
      "Bấm còi và nháy đèn liên tục để cảnh báo xe khác.",
      "Tránh nhường đường để đi nhanh hơn."
    ],
    "answer": 1,
    "explanation": "Văn hóa giao thông: Tuân thủ pháp luật, nhường nhịn, giúp đỡ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 183,
    "chapter": 2,
    "isCritical": false,
    "question": "Người lái xe kinh doanh vận tải cần thực hiện những công việc gì ghi ở dưới đây để thường xuyên rèn luyện nâng cao đạo đức nghề nghiệp?",
    "options": [
      "Quản lý và sử dụng xe tốt; bảo dưỡng xe đúng định kỳ; thực hành tiết kiệm vật tư, nhiên liệu; luôn tu dưỡng bản thân, có lối sống lành mạnh, tác phong làm việc công nghiệp.",
      "Nắm vững và tự giác chấp hành các quy định của pháp luật về trật tự, an toàn giao thông đường bộ, lái xe an toàn; thực hiện đầy đủ trách nhiệm với khách hàng; có ý thức tổ chức kỷ luật và xây dựng doanh nghiệp vững mạnh; có tinh thần hợp tác, tương trợ, giúp đỡ đồng nghiệp.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Rèn luyện đạo đức lái xe KDVT: Quản lý xe tốt, tu dưỡng bản thân, chấp hành luật, trách nhiệm với khách, hợp tác.",
    "tip": "",
    "image": ""
  },
  {
    "id": 184,
    "chapter": 2,
    "isCritical": false,
    "question": "Người lái xe ô tô vận chuyển hành khách phải có những phẩm chất, đạo đức nghề nghiệp gì dưới đây?",
    "options": [
      "Phải có thái độ lịch sự, tôn trọng, thân mật với hành khách; giúp đỡ những người có hoàn cảnh khó khăn, người già, người khuyết tật, phụ nữ có thai, có con nhỏ và trẻ em.",
      "Luôn tu dưỡng bản thân, có lối sống lành mạnh, khiêm tốn, có tác phong làm việc công nghiệp, không tham gia vào các tệ nạn xã hội; tôn trọng người cùng tham gia giao thông đường bộ và có ý thức bảo vệ môi trường.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Lái xe khách về đạo đức: Lịch sự, giúp đỡ khách; Tu dưỡng bản thân, tôn trọng người khác, bảo vệ môi trường.",
    "tip": "",
    "image": ""
  },
  {
    "id": 185,
    "chapter": 2,
    "isCritical": false,
    "question": "Khái niệm về văn hóa giao thông được hiểu như thế nào là đúng?",
    "options": [
      "Là sự hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông, là ý thức trách nhiệm với cộng đồng khi tham gia giao thông.",
      "Là sự tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa giữa những người tham gia giao thông với nhau.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Văn hóa giao thông = Hiểu biết và chấp hành luật, ý thức trách nhiệm + Tôn trọng, nhường nhịn, giúp đỡ, ứng xử văn hóa.",
    "tip": "",
    "image": ""
  },
  {
    "id": 186,
    "chapter": 2,
    "isCritical": false,
    "question": "Trên làn đường dành cho ô tô có vũng nước lớn, người lái xe ô tô bắt buộc phải đi qua vũng nước, trên làn đường bên cạnh có nhiều người đang lái xe mô tô tham gia giao thông, người lái xe ô tô xử lý như thế nào khi lái xe qua vũng nước là có văn hóa giao thông?",
    "options": [
      "Cho xe chạy thật nhanh qua vũng nước.",
      "Giảm tốc độ cho xe chạy chậm qua vũng nước.",
      "Giảm tốc độ cho xe chạy qua làn đường dành cho mô tô để tránh vũng nước."
    ],
    "answer": 2,
    "explanation": "Qua vũng nước (có xe máy bên cạnh): Giảm tốc độ, chạy chậm.",
    "tip": "",
    "image": ""
  },
  {
    "id": 187,
    "chapter": 2,
    "isCritical": false,
    "question": "Người lái xe không điều khiển xe đi đúng làn đường quy định, phóng nhanh, vượt ẩu, vượt đèn đỏ, đi vào đường cấm được coi là hành vi nào trong các hành vi dưới đây?",
    "options": [
      "Là thiếu văn hóa giao thông, vi phạm pháp luật về trật tự, an toàn giao thông đường bộ.",
      "Là thiếu văn hóa giao thông."
    ],
    "answer": 1,
    "explanation": "Sai làn, phóng nhanh, vượt ẩu/đèn đỏ, vào đường cấm = Thiếu văn hóa + Vi phạm pháp luật.",
    "tip": "",
    "image": ""
  },
  {
    "id": 188,
    "chapter": 2,
    "isCritical": false,
    "question": "Khi sơ cứu người bị tai nạn giao thông đường bộ, có vết thương chảy máu ngoài, phun thành tia và phun mạnh khi mạch đập, bạn phải làm gì dưới đây?",
    "options": [
      "Thực hiện cầm máu trực tiếp.",
      "Thực hiện cầm máu không trực tiếp (chặn động mạch)."
    ],
    "answer": 2,
    "explanation": "Máu phun thành tia (tai nạn GT): Cầm máu không trực tiếp (chặn động mạch).",
    "tip": "",
    "image": ""
  },
  {
    "id": 189,
    "chapter": 2,
    "isCritical": false,
    "question": "Người lái xe có văn hóa giao thông khi tham gia giao thông đường bộ phải đáp ứng các điều kiện nào dưới đây?",
    "options": [
      "Hiểu biết và chấp hành nghiêm chỉnh pháp luật về giao thông đường bộ; có ý thức trách nhiệm với cộng đồng khi tham gia giao thông; tôn trọng, nhường nhịn, giúp đỡ và ứng xử có văn hóa với những người cùng tham gia giao thông.",
      "Điều khiển xe vượt quá tốc độ, đi không đúng làn đường."
    ],
    "answer": 1,
    "explanation": "Lái xe văn hóa: Hiểu và chấp hành luật, ý thức trách nhiệm, tôn trọng, nhường nhịn, giúp đỡ, ứng xử văn hóa.",
    "tip": "",
    "image": ""
  },
  {
    "id": 190,
    "chapter": 2,
    "isCritical": false,
    "question": "Người lái xe có văn hóa giao thông khi tham gia giao thông phải tuân thủ những quy định nào dưới đây?",
    "options": [
      "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông, chỉ đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm.",
      "Chấp hành hiệu lệnh, chỉ dẫn của người điều khiển giao thông, quy định về tốc độ, tín hiệu đèn, biển báo hiệu, vạch kẻ đường khi lái xe; nhường đường cho người đi bộ, người già, trẻ em, người khuyết tật."
    ],
    "answer": 2,
    "explanation": "Lái xe văn hóa tuân thủ: Hiệu lệnh người ĐKGT, tốc độ, đèn, biển báo, vạch kẻ; nhường đường người đi bộ/già/trẻ/khuyết tật.",
    "tip": "",
    "image": ""
  },
  {
    "id": 191,
    "chapter": 2,
    "isCritical": false,
    "question": "Người lái xe mô tô có văn hóa giao thông khi tham gia giao thông phải tuân thủ những quy định nào dưới đây?",
    "options": [
      "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; đội mũ bảo hiểm đúng quy chuẩn kỹ thuật quốc gia, cài quai đúng quy cách.",
      "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện tham gia giao thông.",
      "Điều khiển xe và đội mũ bảo hiểm ở nơi có biển báo bắt buộc đội mũ bảo hiểm."
    ],
    "answer": 1,
    "explanation": "Lái xe mô tô văn hóa: Đi đúng bên phải, đúng phần đường/làn; đội mũ đúng chuẩn, cài quai.",
    "tip": "",
    "image": ""
  },
  {
    "id": 192,
    "chapter": 2,
    "isCritical": false,
    "question": "Trong các hành vi dưới đây, người lái xe có văn hóa giao thông phải ứng xử như thế nào?",
    "options": [
      "Điều khiển xe đi bên phải theo chiều đi của mình; đi đúng phần đường, làn đường quy định; dừng, đỗ xe đúng nơi quy định; đã uống rượu, bia thì không lái xe.",
      "Điều khiển xe đi trên phần đường, làn đường có ít phương tiện giao thông; dừng xe, đỗ xe ở nơi thuận tiện hoặc theo yêu cầu của hành khách, của người thân.",
      "Dừng và đỗ xe ở nơi thuận tiện cho việc chuyên chở hành khách và giao nhận hàng hóa; sử dụng ít rượu, bia thì có thể lái xe."
    ],
    "answer": 1,
    "explanation": "Ứng xử văn hóa khi lái xe: Đi đúng bên phải, đúng phần đường/làn, dừng/đỗ đúng nơi; không rượu bia khi lái xe.",
    "tip": "",
    "image": ""
  },
  {
    "id": 193,
    "chapter": 2,
    "isCritical": false,
    "question": "Khi tham gia giao thông việc sử dụng còi xe nên dùng như thế nào để thể hiện là người có văn hóa giao thông?",
    "options": [
      "Chỉ bấm còi khi thật sự cần thiết, không bấm còi liên tục hoặc kéo dài, sử dụng còi với mức âm lượng theo quy định.",
      "Bấm còi liên tục để các xe khác nhường đường.",
      "Bấm còi to khi đi qua khu vực đông dân cư.",
      "Không cần dùng còi, tránh gây tiếng ồn là văn minh."
    ],
    "answer": 1,
    "explanation": "Sử dụng còi văn hóa: Chỉ khi cần thiết, không liên tục/kéo dài, đúng âm lượng.",
    "tip": "",
    "image": ""
  },
  {
    "id": 194,
    "chapter": 2,
    "isCritical": false,
    "question": "Người điều khiển phương tiện tham giao thông đường bộ gây ra tai nạn giao thông đường bộ, người liên quan đến vụ tai nạn giao thông đường bộ có trách nhiệm gì dưới đây?",
    "options": [
      "Dừng ngay phương tiện, cảnh báo nguy hiểm, giữ nguyên hiện trường, trợ giúp người bị nạn và báo tin cho cơ quan Công an, cơ sở khám bệnh, chữa bệnh.",
      "Ở lại hiện trường vụ tai nạn giao thông đường bộ cho đến khi người của cơ quan Công an đến, trừ trường hợp phải đi cấp cứu, đưa người bị nạn đi cấp cứu hoặc xét thấy bị đe dọa đến tính mạng, sức khỏe nhưng phải đến trình báo ngay cơ quan Công an, Ủy ban nhân dân nơi gần nhất.",
      "Cung cấp thông tin xác định danh tính về bản thân, người liên quan đến vụ tai nạn giao thông đường bộ và thông tin liên quan của vụ tai nạn giao thông đường bộ cho cơ quan có thẩm quyền.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Trách nhiệm khi gây tai nạn/liên quan: Dừng xe, cảnh báo, giữ hiện trường, cứu người, báo tin; Ở lại hiện trường (trừ trường hợp khẩn cấp nhưng phải trình báo); Cung cấp thông tin.",
    "tip": "",
    "image": ""
  },
  {
    "id": 195,
    "chapter": 2,
    "isCritical": false,
    "question": "Người có mặt tại nơi xảy ra vụ tai giao thông đường bộ có trách nhiệm gì dưới đây?",
    "options": [
      "Giúp đỡ, cứu chữa kịp thời người bị nạn; báo tin ngay cho cơ quan Công an, cơ sở khám bệnh, chữa bệnh hoặc Ủy ban nhân dân nơi gần nhất; tham gia bảo vệ hiện trường; tham gia bảo vệ tài sản của người bị nạn; cung cấp thông tin liên quan về vụ tai nạn theo yêu cầu của cơ quan có thẩm quyền.",
      "Chụp lại hình ảnh vụ tai nạn (nếu có thiết bị ghi hình) và nhanh chóng rời khỏi hiện trường vụ tai nạn."
    ],
    "answer": 1,
    "explanation": "Người có mặt tại tai nạn: Giúp đỡ/cứu người, báo tin, bảo vệ hiện trường/tài sản, cung cấp thông tin.",
    "tip": "",
    "image": ""
  },
  {
    "id": 196,
    "chapter": 2,
    "isCritical": false,
    "question": "Khi sơ cứu ban đầu cho người bị tai nạn giao thông đường bộ không còn hô hấp, người lái xe và người có mặt tại hiện trường vụ tai nạn phải thực hiện các công việc gì dưới đây?",
    "options": [
      "Đặt nạn nhân nằm ngửa, khai thông đường thở của nạn nhân; thực hiện các biện pháp hô hấp nhân tạo.",
      "Thực hiện các biện pháp hô hấp nhân tạo."
    ],
    "answer": 1,
    "explanation": "Sơ cứu người không hô hấp (TNGT): Nằm ngửa, khai thông đường thở, hô hấp nhân tạo.",
    "tip": "",
    "image": ""
  },
  {
    "id": 197,
    "chapter": 2,
    "isCritical": true,
    "question": "Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông có bị nghiêm cấm hay không?",
    "options": [
      "Không bị nghiêm cấm.",
      "Nghiêm cấm tùy từng trường hợp cụ thể.",
      "Bị nghiêm cấm."
    ],
    "answer": 3,
    "explanation": "Bỏ trốn/không cứu giúp sau tai nạn: Bị nghiêm cấm.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 198,
    "chapter": 2,
    "isCritical": true,
    "question": "Khi đang lái xe, thấy một người đi bộ đang sang đường trên vạch kẻ đường dành cho người đi bộ, người lái xe nên làm gì?",
    "options": [
      "Giảm tốc độ và nhường đường cho người đi bộ.",
      "Bấm còi để họ đi nhanh hơn.",
      "Tiếp tục đi nếu đang vội.",
      "Vượt qua nếu thấy khoảng trống đủ rộng."
    ],
    "answer": 1,
    "explanation": "Thấy người đi bộ qua vạch: Giảm tốc độ, nhường đường.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 199,
    "chapter": 2,
    "isCritical": false,
    "question": "Khi gặp vụ tai nạn giao thông, người lái xe nên hành động như thế nào?",
    "options": [
      "Chạy đi để tránh rắc rối.",
      "Dừng xe, hỗ trợ nạn nhân và báo cho cơ quan chức năng.",
      "Chỉ quan sát rồi tiếp tục di chuyển.",
      "Chỉ giúp đỡ nếu có người thân trong vụ tai nạn."
    ],
    "answer": 2,
    "explanation": "Gặp tai nạn giao thông: Dừng xe, hỗ trợ nạn nhân, báo cơ quan chức năng.",
    "tip": "",
    "image": ""
  },
  {
    "id": 200,
    "chapter": 2,
    "isCritical": false,
    "question": "Trong đoạn đường hai chiều tại khu đông dân cư đang ùn tắc, người điều khiển xe mô tô có văn hóa giao thông sẽ lựa chọn cách xử lý tình huống nào dưới đây?",
    "options": [
      "Cho xe lấn sang làn ngược chiều để nhanh chóng thoát khỏi nơi ùn tắc.",
      "Điều khiển xe trên vỉa hè để nhanh chóng thoát khỏi nơi ùn tắc.",
      "Kiên nhẫn tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu đèn giao thông, di chuyển trên đúng phần đường bên phải theo chiều đi, nhường đường cho các phương tiện đi ngược chiều."
    ],
    "answer": 3,
    "explanation": "Ùn tắc (đường 2 chiều, khu dân cư): Kiên nhẫn, tuân thủ hướng dẫn/đèn, đi đúng phần đường, nhường xe ngược chiều.",
    "tip": "",
    "image": ""
  },
  {
    "id": 201,
    "chapter": 2,
    "isCritical": false,
    "question": "Khi điều khiển phương tiện tham gia giao thông trên đoạn đường bộ đang xảy ra ùn tắc, những hành vi nào dưới đây là thiếu văn hóa?",
    "options": [
      "Bấm còi liên tục thúc giục các phương tiện phía trước nhường đường; đi trên vỉa hè, tận dụng mọi khoảng trống để nhanh chóng thoát khỏi nơi ùn tắc; lấn sang trái đường cố gắng vượt lên xe khác.",
      "Tuân thủ hướng dẫn của người điều khiển giao thông hoặc tín hiệu giao thông, đi đúng phần đường, làn đường quy định."
    ],
    "answer": 1,
    "explanation": "Ùn tắc (khu dân cư) - THIẾU văn hóa: Bấm còi, đi trên vỉa hè, chen lấn, lấn làn.",
    "tip": "",
    "image": ""
  },
  {
    "id": 202,
    "chapter": 2,
    "isCritical": false,
    "question": "Người lái xe, chủ phương tiện giao thông cơ giới đường bộ nên thực hiện các biện pháp phòng cháy, chữa cháy như thế nào dưới đây?",
    "options": [
      "Không lắp đặt thêm thiết bị điện, phụ kiện không đúng theo thiết kế của nhà sản xuất; tuân thủ quy trình vận hành bảo trì bảo dưỡng định kỳ; thường xuyên kiểm tra phương tiện, khi phát hiện thấy dấu hiệu khác lạ (khó nổ, có hơi xăng, có tiếng kêu bất thường, nhiệt độ của máy cao, có mùi khét) cần khắc phục ngay.",
      "Khi để xe trong nhà, ở nơi trông giữ xe phải tắt khóa điện, để xa nguồn lửa, nguồn nhiệt; không mua xăng, dầu ở các điểm bán tự phát, không rõ nguồn gốc; không sử dụng các biện pháp “tiết kiệm xăng, dầu” khi chưa được kiểm chứng về mức độ an toàn có thể gây hỏng xe hoặc dẫn đến nguy cơ xảy ra cháy cao.",
      "Không để các chất dễ cháy, dễ bắt lửa trong xe, dưới yên xe, trong cốp xe, trong khoang động cơ. Đối với xe điện cần chọn địa điểm sạc an toàn, sử dụng các thiết bị sạc đúng cách và giám sát quá trình sạc.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Phòng cháy xe: Không lắp thêm thiết bị điện sai thiết kế + Phải tắt khóa điện + Không để chất dễ cháy trong xe.",
    "tip": "",
    "image": ""
  },
  {
    "id": 203,
    "chapter": 2,
    "isCritical": false,
    "question": "Người điều khiển phương tiện cơ giới đường bộ phải thực hiện những biện pháp gì dưới đây để chữa cháy trong trường hợp phương tiện bị cháy, xét thấy có khả năng dập tắt đám cháy?",
    "options": [
      "Tắt khoá điện, hô hoán để mọi người đến trợ giúp chữa cháy, gọi Cảnh sát phòng cháy chữa cháy và cứu nạn cứu hộ (điện thoại 114).",
      "Nếu nhiên liệu chưa trào ra ngoài (ngọn lửa chưa cháy dữ dội) thì có thể sử dụng nước, hoặc bất kỳ chất, phương tiện chữa cháy có được để dập lửa; nếu nhiên liệu đã trào ra ngoài (ngọn lửa cháy dữ dội) thì phải sử dụng các bình chữa cháy, cát, chăn chiên, bao tải, vải nhúng nước để dập lửa.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Chữa cháy xe (nếu có khả năng dập): Tắt khóa điện + Sử dụng nước.",
    "tip": "",
    "image": ""
  },
  {
    "id": 204,
    "chapter": 2,
    "isCritical": false,
    "question": "Khi phát hiện thấy có ngọn lửa, khói hoặc nhiệt độ cao bất thường từ phương tiện giao thông do mình điều khiển người lái xe phải làm gì trước tiên?",
    "options": [
      "Bình tĩnh, đưa xe sát vào lề đường, tránh xa nơi có nhiều người, nhiều chất dễ cháy và tắt khóa điện, thực hiện các bước chữa cháy.",
      "Hô hoán để mọi người đến trợ giúp chữa cháy, gọi Cảnh sát giao thông, Cảnh sát phòng cháy chữa cháy và cứu nạn, cứu hộ, lực lượng y tế để sẵn sàng hỗ trợ cứu người.",
      "Nếu nhiên liệu trào ra ngoài, ngọn lửa chưa cháy dữ dội thì tiếp tục sử dụng nước, hoặc bất kỳ chất, phương tiện chữa cháy có được để dập lửa.",
      "Cả ba ý trên."
    ],
    "answer": 1,
    "explanation": "Phát hiện xe có dấu hiệu cháy: Bình tĩnh, đưa xe sát lề, tắt khóa điện, thực hiện chữa cháy.",
    "tip": "",
    "image": ""
  },
  {
    "id": 205,
    "chapter": 2,
    "isCritical": false,
    "question": "Khi gặp nạn nhân bị bỏng trong vụ tai nạn giao thông, người lái xe cần làm gì?",
    "options": [
      "Gọi số 115 để thông báo về tình trạng tai nạn và yêu cầu hỗ trợ y tế ngay lập tức. Quan sát hiện trường để giúp nạn nhân, đồng thời tránh gây tổn thương cho mình.",
      "Nhanh chóng loại bỏ nguyên nhân gây bỏng bằng cách tách nạn nhân khỏi vật gây cháy, cởi bỏ quần áo nếu bén lửa, ngâm vùng da bị bỏng vào nước sạch hoặc đắp khăn mát, lưu ý không dùng khăn hoặc nước quá lạnh.",
      "Nếu nạn nhân còn tỉnh, cần cho uống bù nước. Trong thời tiết lạnh, cần giữ ấm cho cơ thể nạn nhân, sau đó nhanh chóng đưa đến cơ sở y tế gần nhất.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Sơ cứu người bị bỏng (TNGT): Gọi 115 +  Loại bỏ nguyên nhân gây bỏng + Cho uống nước (nếu tỉnh), giữ ấm (nếu lạnh), đưa đến y tế.",
    "tip": "",
    "image": ""
  },
  {
    "id": 206,
    "chapter": 3,
    "isCritical": true,
    "question": "Khi điều khiển xe mô tô tay ga xuống đường dốc dài, độ dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Giữ tay ga ở mức độ phù hợp, sử dụng phanh trước và phanh sau để giảm tốc độ.",
      "Nhả hết tay ga, tắt động cơ, sử dụng phanh trước và phanh sau để giảm tốc độ.",
      "Sử dụng phanh trước để giảm tốc độ kết hợp với tắt chìa khóa điện của xe."
    ],
    "answer": 1,
    "explanation": "Mô tô tay ga xuống dốc dài: Giữ ga ở mức phù hợp, phanh trước và phanh sau giảm tốc độ.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 207,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi vào số để khởi hành xe ô tô có số tự động, người lái xe phải thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "Đạp bàn đạp phanh chân hết hành trình, vào số và nhả phanh đỗ, kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.",
      "Đạp bàn đạp để tăng ga với mức độ phù hợp, vào số và kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh."
    ],
    "answer": 1,
    "explanation": "Khởi hành xe số tự động: Đạp phanh chân hết cỡ, vào số, nhả phanh đỗ, kiểm tra số rồi mới lăn bánh.",
    "tip": "",
    "image": ""
  },
  {
    "id": 208,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi nhả phanh đỗ cơ khí điều khiển bằng tay (phanh tay), người lái xe cần phải thực hiện các thao tác nào?",
    "options": [
      "Dùng lực tay phải kéo cần phanh tay về phía sau hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm.",
      "Dùng lực tay phải bóp khóa hãm đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải kéo cần phanh tay về phía sau đồng thời bóp khóa hãm.",
      "Dùng lực tay phải đẩy cần phanh tay về phía trước hết hành trình; nếu khóa hãm bị kẹt cứng phải đẩy mạnh phanh tay về phía trước, sau đó bóp khóa hãm."
    ],
    "answer": 2,
    "explanation": "Nhả phanh tay: Bóp khóa hãm, đẩy cần về trước; (kẹt) kéo lại đồng thời bóp khóa.",
    "tip": "",
    "image": ""
  },
  {
    "id": 209,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi khởi hành ô tô sử dụng hộp số cơ khí trên đường bằng, người lái xe cần thực hiện các thao tác nào theo trình tự dưới đây?",
    "options": [
      "Kiểm tra an toàn xung quanh xe ô tô; nhả từ từ đến 1/2 hành trình bàn đạp ly hợp (côn) và giữ trong khoảng 3 giây; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát, sau đó vừa tăng ga vừa nhả hết côn để cho xe ô tô chuyển động.",
      "Kiểm tra an toàn xung quanh xe ô tô; đạp ly hợp (côn) hết hành trình; vào số 1; nhả hết phanh tay, báo hiệu bằng còi, đèn trước khi xuất phát; tăng ga đủ để xuất phát; nhả từ từ đến 1/2 hành trình bàn đạp côn và giữ trong khoảng 3 giây, sau đó vừa tăng ga vừa nhả hết côn để cho xe ô tô chuyển động."
    ],
    "answer": 2,
    "explanation": "Khởi hành xe số sàn (đường bằng): Kiểm tra an toàn; Đạp côn hết cỡ; Vào số 1; Nhả phanh tay, báo hiệu; Ga đủ, nhả côn từ từ (giữ 1/2 khoảng 3s) rồi nhả hết.",
    "tip": "",
    "image": ""
  },
  {
    "id": 210,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi quay đầu xe, người lái xe cần phải quan sát và thực hiện các thao tác nào để bảo đảm an toàn giao thông?",
    "options": [
      "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe cho thích hợp; quay đầu xe với tốc độ thấp; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đầu xe về phía nguy hiểm, đưa đuôi xe về phía an toàn.",
      "Quan sát biển báo hiệu để biết nơi được phép quay đầu; quan sát kỹ địa hình nơi chọn để quay đầu; lựa chọn quỹ đạo quay đầu xe; quay đầu xe với tốc độ tối đa; thường xuyên báo tín hiệu để người, các phương tiện xung quanh được biết; nếu quay đầu xe ở nơi nguy hiểm thì đưa đuôi xe về phía nguy hiểm và đầu xe về phía an toàn."
    ],
    "answer": 1,
    "explanation": "Quay đầu xe an toàn: Quay đầu xe với tốc độ thấp.",
    "tip": "",
    "image": ""
  },
  {
    "id": 211,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi ngồi lái ô tô tư thế chân, lưng, tay của người lái xe như thế nào là đúng để bảo đảm an toàn và thoải mái?",
    "options": [
      "Điều chỉnh ghế sao cho chân có thể đạp phanh và ga dễ dàng, ngồi thẳng lưng, hai tay nắm vô lăng, tay trái nắm ở vị trí 9 đến 10 giờ và tay phải nắm ở vị trí từ 2 đến 4 giờ.",
      "Ngồi sát vô lăng để dễ quan sát hoặc ngồi tự do, không cần điều chỉnh ghế.",
      "Ngồi ngả người về phía sau nhiều để thư giãn, chân trái để ở vị trí chân ga, hai tay nắm vô lăng ở vị trí bất kỳ."
    ],
    "answer": 1,
    "explanation": "Tư thế lái đúng: Chân đạp phanh/ga dễ, lưng thẳng, tay nắm vô lăng (trái 9-10h, phải 2-4h).",
    "tip": "",
    "image": ""
  },
  {
    "id": 212,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển ô tô lên dốc cao, người lái xe cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Tăng lên số cao từ chân dốc, điều chỉnh ga cho xe nhanh lên dốc; đến gần đỉnh dốc phải tăng ga để xe nhanh chóng qua dốc; về số thấp, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết.",
      "Về số thấp từ chân dốc, điều chỉnh ga cho xe từ từ lên dốc; đến gần đỉnh dốc phải đi chậm, đi sát về phía bên phải đường, có tín hiệu (còi, đèn) để báo cho người lái xe đi ngược chiều biết."
    ],
    "answer": 2,
    "explanation": "Lên dốc cao: Về số thấp từ chân dốc.",
    "tip": "",
    "image": ""
  },
  {
    "id": 213,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển ô tô xuống dốc dài, người lái xe cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Tăng lên số cao, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
      "Về số thấp, nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ.",
      "Về số không (0), nhả bàn đạp ga ở mức độ phù hợp, kết hợp với phanh chân để khống chế tốc độ."
    ],
    "answer": 2,
    "explanation": "Xuống dốc dài: Về số thấp.",
    "tip": "",
    "image": ""
  },
  {
    "id": 214,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi xuống dốc, muốn dừng xe, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số 1, đạp 1/2 ly hợp (côn) cho xe đến chỗ dừng; khi xe đã dừng, về số không (N), đạp phanh chân, sử dụng phanh đỗ.",
      "Có tín hiệu rẽ phải, điều khiển xe sát vào lề đường bên trái; đạp hết hành trình ly hợp (côn) và nhả bàn đạp ga để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được tại chỗ dừng; khi xe đã dừng, đạp và giữ phanh chân.",
      "Có tín hiệu rẽ trái, điều khiển xe sát vào lề đường bên phải; đạp phanh sớm và mạnh hơn lúc dừng xe trên đường bằng để xe đi với tốc độ chậm đến mức dễ dàng dừng lại được; về số không (N) để xe đi đến chỗ dừng, khi xe đã dừng, sử dụng phanh đỗ."
    ],
    "answer": 1,
    "explanation": "Dừng xe khi xuống dốc: Tín hiệu rẽ phải, sát lề phải.",
    "tip": "",
    "image": ""
  },
  {
    "id": 215,
    "chapter": 3,
    "isCritical": true,
    "question": "Khi điều khiển xe trên đường vòng người lái xe cần phải làm gì để bảo đảm an toàn?",
    "options": [
      "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; giảm tốc độ tới mức cần thiết, về số thấp và thực hiện quay vòng với tốc độ phù hợp với bán kính cong của đường vòng.",
      "Quan sát cẩn thận các chướng ngại vật và báo hiệu bằng còi, đèn; tăng tốc để nhanh chóng qua đường vòng và giảm tốc độ sau khi qua đường vòng."
    ],
    "answer": 1,
    "explanation": "Đi đường vòng: Giảm tốc độ, về số thấp.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 216,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe ô tô rẽ phải, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "Có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe sang làn đường bên trái; giảm tốc độ và quan sát an toàn phía bên phải để điều khiển xe qua chỗ đường giao nhau.",
      "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; giảm tốc độ, quan sát an toàn phía trước, sau, bên phải và điều khiển xe từ từ rẽ phải.",
      "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ phải; quan sát an toàn phía sau; điều khiển xe bám sát vào phía phải đường; tăng tốc độ và quan sát an toàn phía bên trái để điều khiển xe qua chỗ đường giao nhau."
    ],
    "answer": 2,
    "explanation": "Rẽ phải ô tô: Tín hiệu rẽ phải sớm, giảm tốc độ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 217,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe ô tô rẽ trái, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái; giảm tốc độ, quan sát an toàn xung quanh đặc biệt là bên trái; đổi sang làn đường bên trái và điều khiển xe từ từ rẽ trái.",
      "Cách chỗ rẽ một khoảng cách an toàn có tín hiệu rẽ trái, tăng tốc độ để xe nhanh chóng qua chỗ đường giao nhau; có tín hiệu xin đổi làn đường; quan sát an toàn xung quanh đặc biệt là bên trái; đổi làn đường sang phải để mở rộng vòng cua."
    ],
    "answer": 1,
    "explanation": "Rẽ trái ô tô: Tín hiệu rẽ trái sớm, giảm tốc độ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 218,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe sử dụng hộp số cơ khí vượt qua rãnh lớn cắt ngang mặt đường, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
    "options": [
      "Vào số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tăng số, tăng tốc độ để bánh xe sau vượt qua rãnh.",
      "Tăng ga, tăng số để hai bánh xe trước và bánh xe sau vượt qua khỏi rãnh và chạy bình thường.",
      "Vào số một (1) và từ từ cho hai bánh xe trước xuống rãnh, tăng ga cho hai bánh xe trước vượt lên khỏi rãnh, tiếp tục để bánh xe sau từ từ xuống rãnh rồi tăng dần ga cho xe ô tô lên khỏi rãnh."
    ],
    "answer": 3,
    "explanation": "Qua rãnh lớn (số sàn): Về số 1, từ từ và KHÔNG tăng số.",
    "tip": "",
    "image": ""
  },
  {
    "id": 219,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe qua đường sắt, người lái xe cần phải thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Khi có chuông báo hoặc thanh chắn đã hạ xuống, người lái xe phải dừng xe tạm thời đúng khoảng cách an toàn, kéo phanh tay nếu đường dốc hoặc phải chờ lâu.",
      "Khi không có chuông báo hoặc thanh chắn không hạ xuống, người lái xe cần phải quan sát nếu thấy đủ điều kiện an toàn thì về số thấp, tăng ga nhẹ và không thay đổi số trong quá trình vượt qua đường sắt để tránh động cơ chết máy cho xe cho vượt qua.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Qua đường sắt: (Có chuông/chắn hạ) Dừng an toàn, kéo phanh tay nếu chờ lâu + (Không chuông/chắn) Quan sát, an toàn thì về số thấp, ga nhẹ, không đổi số khi qua.",
    "tip": "",
    "image": ""
  },
  {
    "id": 220,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe ô tô tự đổ, người lái xe cần chú ý những điểm gì để bảo đảm an toàn?",
    "options": [
      "Khi chạy trên đường xấu, nhiều ổ gà nên chạy chậm để thùng xe không bị lắc mạnh, không gây hiện tượng lệch “ben”; khi chạy vào đường vòng, cần giảm tốc độ, không lấy lái gấp và không phanh gấp.",
      "Khi chạy trên đường quốc lộ, đường bằng phẳng không cần hạ hết thùng xe xuống.",
      "Khi đổ hàng phải chọn vị trí có nền đường cứng và phẳng, dừng hẳn xe, kéo hết phanh đỗ; sau đó mới điều khiển cơ cấu nâng “ben” để đổ hàng, đổ xong hàng mới hạ thùng xuống.",
      "Ý 1 và ý 3."
    ],
    "answer": 4,
    "explanation": "Lái xe tự đổ: Chạy chậm đường xấu + Khi đổ hàng phải chọn vị trí.",
    "tip": "",
    "image": ""
  },
  {
    "id": 221,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe tăng số, người lái xe cần chú ý những điểm gì để bảo đảm an toàn?",
    "options": [
      "Không được nhìn xuống buồng lái, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, chính xác.",
      "Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải tăng thứ tự từ thấp đến cao, phối hợp các động tác phải nhịp nhàng, vù ga phải phù hợp với tốc độ."
    ],
    "answer": 1,
    "explanation": "Tăng số: Không nhìn xuống buồng lái.",
    "tip": "",
    "image": ""
  },
  {
    "id": 222,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe giảm số, người lái xe cần phải chú ý những điểm gì để bảo đảm an toàn?",
    "options": [
      "Nhìn xuống buồng lái để biết chính xác vị trí các tay số, cần phải giảm thứ tự từ cao xuống thấp, phối hợp các động tác phải nhịp nhàng, chính xác.",
      "Không được nhìn xuống buồng lái, cần phải giảm thứ tự từ cao xuống thấp, phối hợp các động tác phải nhịp nhàng, chính xác, vù ga phải phù hợp với tốc độ."
    ],
    "answer": 2,
    "explanation": "Giảm số: Không nhìn xuống buồng lái.",
    "tip": "",
    "image": ""
  },
  {
    "id": 223,
    "chapter": 3,
    "isCritical": false,
    "question": "Để giảm tốc độ khi ô tô đi xuống đường dốc dài, người lái xe phải thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "Nhả bàn đạp ga, đạp ly hợp (côn) hết hành trình, đạp mạnh phanh chân để giảm tốc độ.",
      "Về số thấp phù hợp, nhả bàn đạp ga, kết hợp đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
      "Nhả bàn đạp ga, tăng lên số cao, đạp phanh chân với mức độ phù hợp để giảm tốc độ."
    ],
    "answer": 2,
    "explanation": "Giảm tốc độ xuống dốc dài: Về số thấp.",
    "tip": "",
    "image": ""
  },
  {
    "id": 224,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển ô tô qua đường ngập nước, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
    "options": [
      "Tăng lên số cao, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
      "Đạp ly hợp (côn) hết hành trình, tăng ga và giảm ga liên tục để thay đổi tốc độ, giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước.",
      "Quan sát, ước lượng độ ngập nước mà xe ô tô có thể vượt qua an toàn, về số thấp, giữ đều ga và giữ vững tay lái để ô tô vượt qua đoạn đường ngập nước."
    ],
    "answer": 3,
    "explanation": "Qua đường ngập nước: Ước lượng độ ngập, về số thấp, giữ đều ga, vững tay lái.",
    "tip": "",
    "image": ""
  },
  {
    "id": 225,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe ô tô tới gần xe chạy ngược chiều vào ban đêm, người lái xe cần thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "Chuyển từ đèn chiếu xa sang đèn chiếu gần; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
      "Chuyển từ đèn chiếu gần sang đèn chiếu xa; không nhìn thẳng vào đèn của xe chạy ngược chiều mà nhìn chếch sang phía phải theo chiều chuyển động của xe mình.",
      "Chuyển từ đèn chiếu xa sang đèn chiếu gần; nhìn thẳng vào đèn của xe chạy ngược chiều để tránh xe bảo đảm an toàn."
    ],
    "answer": 1,
    "explanation": "Gặp xe ngược chiều ban đêm: Chuyển đèn xa về gần; không nhìn thẳng đèn xe đối diện, nhìn chếch phải.",
    "tip": "",
    "image": ""
  },
  {
    "id": 226,
    "chapter": 3,
    "isCritical": true,
    "question": "Khi điều khiển xe ô tô trên đường trơn cần chú ý những điểm gì để bảo đảm an toàn?",
    "options": [
      "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm, giữ đều ga, đánh lái ngoặt và phanh gấp khi cần thiết.",
      "Giữ vững tay lái cho xe đi đúng vệt bánh xe đi trước, sử dụng số thấp đi chậm, gài cầu (nếu có), giữ đều ga, không lấy nhiều lái, không đánh lái ngoặt và phanh gấp."
    ],
    "answer": 2,
    "explanation": "Lái xe đường trơn: Gài cầu (nếu có), đều ga, không lấy nhiều lái/đánh lái ngoặt/phanh gấp.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 227,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
    "options": [
      "Đang sử dụng phanh đỗ.",
      "Nhiệt độ nước làm mát quá mức cho phép.",
      "Cửa xe đang mở."
    ],
    "answer": 1,
    "explanation": "BRAKE hiển thị thì đang sử dụng phanh đỗ xe (phanh tay).",
    "tip": "",
    "image": "images/questions/q235.png"
  },
  {
    "id": 228,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
    "options": [
      "Đang sử dụng phanh đỗ.",
      "Thiếu dầu phanh.",
      "Nhiệt độ nước làm mát tăng quá mức cho phép.",
      "Áp suất dầu ở mức thấp."
    ],
    "answer": 4,
    "explanation": "Thấy cảnh báo giọt dầu là do áp suất dầu ở mức thấp.",
    "tip": "",
    "image": "images/questions/q236.png"
  },
  {
    "id": 229,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
    "options": [
      "Cửa xe đóng chưa chặt hoặc có cửa xe chưa đóng.",
      "Bộ nạp ắc quy gặp sự cố kỹ thuật.",
      "Dầu bôi trơn bị thiếu.",
      "Ý 2 và ý 3."
    ],
    "answer": 1,
    "explanation": "Biểu tượng này báo Cửa xe đóng chưa chặt hoặc có cửa xe chưa đóng.",
    "tip": "",
    "image": "images/questions/q237.png"
  },
  {
    "id": 230,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
    "options": [
      "Thiếu dầu phanh, phanh tay đang hãm.",
      "Hệ thống túi khí an toàn gặp sự cố.",
      "Lái xe và người ngồi ghế trước chưa cài dây đai an toàn.",
      "Cửa đóng chưa chặt, có cửa chưa đóng."
    ],
    "answer": 3,
    "explanation": "Biểu tượng này báo lái xe hoặc người ngồi ghế trước chưa cài dây an toàn.",
    "tip": "",
    "image": "images/questions/q238.png"
  },
  {
    "id": 231,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi động cơ xe ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây là báo hiệu tình trạng gì của xe ô tô?",
    "options": [
      "Báo hiệu thiếu dầu phanh.",
      "Áp suất lốp không đủ.",
      "Đang sử dụng phanh đỗ.",
      "Sắp hết nhiên liệu."
    ],
    "answer": 4,
    "explanation": "Biểu tượng này báo xe sắp xếp nhiên liệu.",
    "tip": "",
    "image": "images/questions/q239.png"
  },
  {
    "id": 232,
    "chapter": 3,
    "isCritical": false,
    "question": "Trong các loại nhiên liệu dưới đây, loại nhiên liệu nào giảm thiểu ô nhiễm môi trường?",
    "options": [
      "Xăng và dầu diesel.",
      "Xăng sinh học và khí sinh học.",
      "Ý 1 và ý 2."
    ],
    "answer": 2,
    "explanation": "Nhiên liệu giảm ô nhiễm: Xăng sinh học, khí sinh học.",
    "tip": "",
    "image": ""
  },
  {
    "id": 233,
    "chapter": 3,
    "isCritical": false,
    "question": "Các biện pháp tiết kiệm nhiên liệu khi chạy xe?",
    "options": [
      "Bảo dưỡng xe theo định kỳ và có kế hoạch lộ trình trước khi xe chạy.",
      "Kiểm tra áp suất lốp theo quy định và chạy xe với tốc độ phù hợp với tình trạng mặt đường và mật độ giao thông trên đường.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Tiết kiệm nhiên liệu: Bảo dưỡng định kỳ + Kiểm tra áp suất lốp, chạy tốc độ phù hợp.",
    "tip": "",
    "image": ""
  },
  {
    "id": 234,
    "chapter": 3,
    "isCritical": true,
    "question": "Khi đã đỗ xe ô tô sát lề đường bên phải, người lái xe phải thực hiện các thao tác nào dưới đây khi mở cửa xuống xe để đảm bảo an toàn?",
    "options": [
      "Quan sát tình hình giao thông phía trước, phía sau và phía bên mở cửa xe, mở hé cánh cửa, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
      "Mở cánh cửa và quan sát tình hình giao thông phía trước, nếu đảm bảo an toàn thì mở cửa ở mức cần thiết để xuống xe ô tô.",
      "Mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô."
    ],
    "answer": 1,
    "explanation": "Mở cửa xe: Mở hé cửa, an toàn mới mở đủ để xuống.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 235,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe phải xử lý như thế nào?",
    "options": [
      "Giảm tốc độ, dừng lại trước vạch dừng, quan sát cả hai phía, nếu không có tàu đi tới, tăng ga nhẹ vượt qua đường sắt.",
      "Nếu thấy có tàu đi tới thì dừng lại trước vạch dừng, chỉ khi tàu đi qua mới được đi.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Qua đường sắt không rào chắn: Giảm tốc + Nếu có tàu: dừng hẳn chờ tàu qua.",
    "tip": "",
    "image": ""
  },
  {
    "id": 236,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi lái xe ô tô qua đường sắt không có rào chắn, không có người điều khiển giao thông, người lái xe thực hiện thao tác: “giảm tốc độ, dừng lại trước vạch dừng, quan sát cả hai phía, nếu không có tàu đi tới, tăng ga nhẹ vượt qua đường sắt. Nếu thấy có tàu đi tới thì dừng lại trước vạch dừng, chỉ khi tàu đi qua mới được đi” để đảm bảo an toàn là đúng hay không?",
    "options": [
      "Không đúng.",
      "Đúng.",
      "Không cần thiết, vì nếu nhìn thấy tàu còn cách xa, người lái xe có thể tăng số cao, tăng ga để cho xe nhanh chóng vượt qua đường sắt."
    ],
    "answer": 2,
    "explanation": "Qua đường sắt không rào chắn: dừng, quan sát, an toàn mới qua là ĐÚNG.",
    "tip": "",
    "image": ""
  },
  {
    "id": 237,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe ô tô có hộp số tự động đi vào đường trơn trượt, lầy lội, người lái xe phải xử lý như thế nào để đảm bảo an toàn?",
    "options": [
      "Về số thấp, kết hợp phanh chân để giảm tốc độ.",
      "Giữ nguyên tay số D, kết hợp phanh đỗ để giảm tốc độ.",
      "Về số N (số 0), kết hợp phanh chân để giảm tốc độ."
    ],
    "answer": 1,
    "explanation": "Xe số tự động (đường trơn/lầy): Về số thấp, kết hợp phanh chân giảm tốc.",
    "tip": "",
    "image": ""
  },
  {
    "id": 238,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi động cơ ô tô đã khởi động, muốn điều chỉnh ghế của người lái, người lái xe phải để cần số ở vị trí nào?",
    "options": [
      "Vị trí N hoặc vị trí P hoặc số 0.",
      "Vị trí D hoặc số 1.",
      "Vị trí R."
    ],
    "answer": 1,
    "explanation": "Điều chỉnh ghế (động cơ đã nổ): Cần số ở N, P, hoặc số 0.",
    "tip": "",
    "image": ""
  },
  {
    "id": 239,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe ô tô có hộp số tự động, người lái xe sử dụng chân như thế nào là đúng để bảo đảm an toàn?",
    "options": [
      "Không sử dụng chân trái; chân phải điều khiển bàn đạp phanh và bàn đạp ga.",
      "Chân trái điều khiển bàn đạp phanh, chân phải điều khiển bàn đạp ga.",
      "Không sử dụng chân phải; chân trái điều khiển bàn đạp phanh và bàn đạp ga."
    ],
    "answer": 1,
    "explanation": "Lái xe số tự động: Không dùng chân trái, chân phải điều khiển phanh và ga.",
    "tip": "",
    "image": ""
  },
  {
    "id": 240,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi tầm nhìn bị hạn chế bởi sương mù hoặc mưa to, người lái xe phải thực hiện các thao tác nào để bảo đảm an toàn?",
    "options": [
      "Tăng tốc độ, chạy gần xe trước, nhìn đèn hậu để định hướng.",
      "Giảm tốc độ, chạy cách xa xe trước với khoảng cách an toàn, bật đèn sương mù và đèn chiếu gần.",
      "Tăng tốc độ, bật đèn pha vượt qua xe chạy trước."
    ],
    "answer": 2,
    "explanation": "Sương mù/mưa to: Giảm tốc độ, giữ khoảng cách, bật đèn sương mù và đèn gần.",
    "tip": "",
    "image": ""
  },
  {
    "id": 241,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi đèn pha của xe đi ngược chiều gây chói mắt, làm giảm khả năng quan sát trên đường, người lái xe xử lý như thế nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Giảm tốc độ, giữ vững tay lái, nhìn chếch sang lề đường bên phải.",
      "Bật đèn pha chiếu xa và giữ nguyên tốc độ.",
      "Tăng tốc độ, bật đèn pha đối diện xe phía trước."
    ],
    "answer": 1,
    "explanation": "Đèn pha xe ngược chiều chói mắt: Giảm tốc độ, vững tay lái, nhìn chếch lề phải.",
    "tip": "",
    "image": ""
  },
  {
    "id": 242,
    "chapter": 3,
    "isCritical": false,
    "question": "Để đạt được hiệu quả phanh cao nhất, người lái xe mô tô phải sử dụng các kỹ năng như thế nào dưới đây?",
    "options": [
      "Sử dụng phanh trước.",
      "Sử dụng phanh sau.",
      "Giảm hết ga, sử dụng đồng thời cả phanh sau và phanh trước."
    ],
    "answer": 3,
    "explanation": "Phanh xe mô tô hiệu quả: Giảm hết ga, dùng đồng thời phanh sau và phanh trước.",
    "tip": "",
    "image": ""
  },
  {
    "id": 243,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi lái xe ô tô trên mặt đường có nhiều “ổ gà”, người lái xe phải thực hiện thao tác như thế nào để bảo đảm an toàn?",
    "options": [
      "Giảm tốc độ, về số thấp và giữ đều ga.",
      "Tăng tốc độ cho xe lướt qua nhanh.",
      "Tăng tốc độ, đánh lái liên tục để tránh “ổ gà”."
    ],
    "answer": 1,
    "explanation": "Đường nhiều ổ gà: Giảm tốc độ, về số thấp, giữ đều ga.",
    "tip": "",
    "image": ""
  },
  {
    "id": 244,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe ô tô gặp mưa to hoặc sương mù, người lái xe phải làm gì để bảo đảm an toàn?",
    "options": [
      "Bật đèn chiếu gần và đèn vàng (nếu có), điều khiển gạt nước, điều khiển ô tô đi với tốc độ chậm để có thể quan sát được; tìm chỗ an toàn dừng xe, bật đèn dừng khẩn cấp báo hiệu cho các xe khác biết.",
      "Bật đèn chiếu xa và đèn vàng, điều khiển gạt nước, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa hoặc sương mù.",
      "Tăng tốc độ, bật đèn pha vượt qua xe chạy phía trước."
    ],
    "answer": 1,
    "explanation": "Mưa to/sương mù: Bật đèn chiếu gần.",
    "tip": "",
    "image": ""
  },
  {
    "id": 245,
    "chapter": 3,
    "isCritical": true,
    "question": "Điều khiển xe ô tô trong trời mưa, người lái xe phải xử lý như thế nào để bảo đảm an toàn?",
    "options": [
      "Giảm tốc độ, tăng cường quan sát, không nên phanh gấp, không nên tăng ga hay đánh vô lăng đột ngột, bật đèn chiếu gần, mở chế độ gạt nước ở chế độ phù hợp để đảm bảo quan sát.",
      "Phanh gấp khi xe đi vào vũng nước và tăng ga ngay sau khi ra khỏi vũng nước.",
      "Bật đèn chiếu xa, tăng tốc độ điều khiển ô tô qua khỏi khu vực mưa."
    ],
    "answer": 1,
    "explanation": "Lái xe trời mưa: Giảm tốc, tăng quan sát, không phanh/ga/lái đột ngột, bật đèn gần, gạt nước.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 246,
    "chapter": 3,
    "isCritical": true,
    "question": "Khi lùi xe, người lái xe phải xử lý như thế nào để bảo đảm an toàn giao thông?",
    "options": [
      "Quan sát bên trái, bên phải, phía sau xe, có tín hiệu cần thiết và lùi xe với tốc độ phù hợp.",
      "Quan sát phía trước xe và lùi xe với tốc độ nhanh.",
      "Quan sát bên trái và phía trước của xe và lùi xe với tốc độ nhanh."
    ],
    "answer": 1,
    "explanation": "Lùi xe an toàn: Quan sát trái/phải/sau, có tín hiệu, lùi tốc độ phù hợp.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 247,
    "chapter": 3,
    "isCritical": false,
    "question": "Điều khiển xe ô tô trong khu vực đông dân cư cần lưu ý điều gì dưới đây?",
    "options": [
      "Giảm tốc độ đến mức an toàn, quan sát, nhường đường cho người đi bộ, giữ khoảng cách an toàn với các xe phía trước.",
      "Đi đúng làn đường quy định, chỉ được chuyển làn đường ở nơi cho phép, nhưng phải quan sát.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Lái xe khu đông dân cư: Giảm tốc độ an toàn + Đi đúng làn.",
    "tip": "",
    "image": ""
  },
  {
    "id": 248,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe ô tô nhập vào đường cao tốc người lái xe cần thực hiện như thế nào dưới đây để bảo đảm an toàn giao thông?",
    "options": [
      "Quan sát, phát tín hiệu, nhường đường cho các xe đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì tăng tốc độ cho xe nhập vào làn đường cao tốc, nếu có làn đường tăng tốc thì phải cho xe chạy trên làn đường đó trước khi cho xe nhập vào làn của đường cao tốc.",
      "Phát tín hiệu, quan sát các xe đang chạy phía trước, nếu bảo đảm các điều kiện an toàn thì tăng tốc độ cho xe nhập ngay vào làn đường cao tốc.",
      "Phát tín hiệu và lái xe nhập vào làn đường tăng tốc, quan sát các xe phía sau đang chạy trên đường cao tốc, khi đủ điều kiện an toàn thì giảm tốc độ, từ từ cho xe nhập vào làn đường cao tốc."
    ],
    "answer": 1,
    "explanation": "Nhập làn cao tốc: Quan sát, tín hiệu, nhường xe trên cao tốc.",
    "tip": "",
    "image": ""
  },
  {
    "id": 249,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe ô tô ra khỏi đường cao tốc người lái xe cần thực hiện như thế nào dưới đây để bảo đảm an toàn giao thông?",
    "options": [
      "Quan sát phía trước để tìm biển báo chỉ dẫn “lối ra đường cao tốc”, kiểm tra tình trạng giao thông phía sau và bên phải, nếu bảo đảm điều kiện an toàn thì phát tín hiệu và điều khiển xe chuyển dần sang làn bên phải, nếu có làn đường giảm tốc thì phải cho xe di chuyển trên làn đường đó trước khi ra khỏi đường cao tốc.",
      "Quan sát phía trước để tìm biển báo chỉ dẫn “lối ra đường cao tốc”, trường hợp vượt qua “lối ra đường cao tốc” thì phát tín hiệu, di chuyển sang làn đường giảm tốc và lùi xe quay trở lại."
    ],
    "answer": 1,
    "explanation": "Ra khỏi cao tốc: Tìm biển lối ra, quan sát sau/phải, an toàn thì tín hiệu, chuyển dần sang phải; KHÔNG lùi xe.",
    "tip": "",
    "image": ""
  },
  {
    "id": 250,
    "chapter": 3,
    "isCritical": false,
    "question": "Người lái xe được dừng xe, đỗ xe trên làn dừng khẩn cấp của đường cao tốc trong trường hợp nào dưới đây?",
    "options": [
      "Xe gặp sự cố, tai nạn hoặc trường hợp khẩn cấp không thể di chuyển bình thường.",
      "Để nghỉ ngơi, đi vệ sinh, chụp ảnh, làm việc riêng...",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Dừng/đỗ làn khẩn cấp cao tốc: Chỉ khi xe sự cố, tai nạn, khẩn cấp không đi được.",
    "tip": "",
    "image": ""
  },
  {
    "id": 251,
    "chapter": 3,
    "isCritical": false,
    "question": "Trên đường đôi muốn vượt xe kéo rơ moóc phía trước, người lái xe phải xử lý như thế nào?",
    "options": [
      "Giữ khoảng cách an toàn, tránh đi vào vị trí điểm mù của xe kéo rơ moóc, bật xi nhan trái đồng thời kết hợp đèn, còi xin vượt.",
      "Khi xe kéo rơ moóc đã có tín hiệu cho vượt (không có chướng ngại vật phía trước và xe đi ngược chiều), thấy đủ điều kiện an toàn thì vượt dứt khoát, không di chuyển song song bên cạnh xe kéo rơ moóc.",
      "Khi vượt qua, phải quan sát gương chiếu hậu bên phải nếu có khoảng trống an toàn mới được cho xe chạy vào làn của mình, tắt xi nhan và tiếp tục hành trình.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Vượt xe kéo rơ moóc (đường đôi): Giữ khoảng cách + Chờ tín hiệu cho vượt + Vượt qua thì về lại làn và tắt xi nhan.",
    "tip": "",
    "image": ""
  },
  {
    "id": 252,
    "chapter": 3,
    "isCritical": true,
    "question": "Khi điều khiển xe ô tô xuống đường dốc dài, độ dốc cao, người lái xe số tự động cần thực hiện các thao tác nào dưới đây để bảo đảm an toàn?",
    "options": [
      "Nhả bàn đạp ga, về số thấp, đạp phanh chân với mức độ phù hợp để giảm tốc độ.",
      "Nhả bàn đạp ga, về số N đạp phanh chân và kéo phanh tay để giảm tốc độ."
    ],
    "answer": 1,
    "explanation": "Xuống dốc dài (số tự động): Nhả ga, về số thấp, phanh chân phù hợp.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 253,
    "chapter": 3,
    "isCritical": true,
    "question": "Khi đi từ đường nhánh ra đường chính, người lái xe phải xử lý như thế nào là đúng?",
    "options": [
      "Quan sát, giảm tốc độ, phát tín hiệu, nhường đường cho xe trên đường chính từ bất kỳ hướng nào tới.",
      "Nháy đèn, bấm còi để xe đi trên đường chính biết và tăng tốc độ cho xe đi ra đường chính.",
      "Quan sát xe đang đi trên đường chính, nếu là xe có kích thước lớn hơn thì nhường đường, xe có kích thước nhỏ hơn thì tăng tốc độ cho xe đi ra đường chính."
    ],
    "answer": 1,
    "explanation": "Từ đường nhánh ra đường chính: Quan sát, giảm tốc, tín hiệu, nhường xe đường chính.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 254,
    "chapter": 3,
    "isCritical": true,
    "question": "Khi đang lái xe mô tô hoặc ô tô, nếu có nhu cầu sử dụng điện thoại để nhắn tin hoặc gọi điện, người lái xe phải thực hiện như thế nào trong các tình huống nêu dưới đây?",
    "options": [
      "Giảm tốc độ để bảo đảm an toàn với xe phía trước và sử dụng điện thoại để liên lạc.",
      "Giảm tốc độ để dừng xe ở nơi cho phép sau đó sử dụng điện thoại để liên lạc.",
      "Tăng tốc độ để cách xa xe phía sau và sử dụng điện thoại để liên lạc."
    ],
    "answer": 2,
    "explanation": "Muốn dùng điện thoại khi lái xe: Giảm tốc độ, dừng xe nơi cho phép rồi mới dùng.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 255,
    "chapter": 3,
    "isCritical": true,
    "question": "Những thói quen nào dưới đây khi điều khiển xe mô tô tay ga tham gia giao thông dễ gây tai nạn nguy hiểm?",
    "options": [
      "Sử dụng còi.",
      "Phanh đồng thời cả phanh trước và phanh sau.",
      "Chỉ sử dụng phanh trước."
    ],
    "answer": 3,
    "explanation": "Thói quen nguy hiểm (xe tay ga): Chỉ dùng phanh trước.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 256,
    "chapter": 3,
    "isCritical": false,
    "question": "Người ngồi trên xe ô tô cần thực hiện những thao tác mở cửa như thế nào dưới đây để xuống xe để bảo đảm an toàn?",
    "options": [
      "Quan sát phía trước, phía sau và bên phía mở cửa để phát hiện các phương tiện đang di chuyển tới gần, khi đủ điều kiện an toàn, mở hé cửa, sau đó mở ở mức cần thiết để xuống xe.",
      "Quan sát tình hình giao thông phía trước, không cần quan sát phía sau và bên mở cửa; mở cánh cửa hết hành trình và nhanh chóng ra khỏi xe ô tô."
    ],
    "answer": 1,
    "explanation": "Mở cửa ô tô xuống xe: Quan sát, an toàn thì mở hé, rồi mở đủ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 257,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi điều khiển xe mô tô quay đầu, người lái xe cần thực hiện như thế nào để bảo đảm an toàn?",
    "options": [
      "Bật tín hiệu báo rẽ trước khi quay đầu, từ từ giảm tốc độ đến mức có thể dừng lại.",
      "Chỉ quay đầu xe tại những nơi được phép quay đầu.",
      "Quan sát an toàn các phương tiện tới từ phía trước, phía sau, hai bên đồng thời nhường đường cho xe từ bên phải và phía trước đi tới.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Xe mô tô quay đầu: Tín hiệu trước, giảm tốc + Chỉ nơi cho phép + Quan sát, nhường đường.",
    "tip": "",
    "image": ""
  },
  {
    "id": 258,
    "chapter": 3,
    "isCritical": false,
    "question": "Tay ga trên xe mô tô hai bánh có tác dụng gì dưới đây?",
    "options": [
      "Để điều khiển xe chạy về phía trước.",
      "Để điều tiết công suất động cơ qua đó điều khiển tốc độ của xe.",
      "Để điều khiển xe chạy lùi.",
      "Ý 1 và ý 2."
    ],
    "answer": 4,
    "explanation": "Tay ga xe mô tô: Điều khiển xe chạy về trước + Điều khiển tốc độ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 259,
    "chapter": 3,
    "isCritical": false,
    "question": "Gương chiếu hậu của xe mô tô hai bánh có tác dụng gì dưới đây?",
    "options": [
      "Để quan sát an toàn phía bên trái khi chuẩn bị rẽ trái.",
      "Để quan sát an toàn phía bên phải khi chuẩn bị rẽ phải.",
      "Để quan sát an toàn phía sau của bên trái và bên phải trước khi chuyển hướng.",
      "Để quan sát an toàn phía trước cả bên trái và bên phải trước khi chuyển hướng."
    ],
    "answer": 3,
    "explanation": "Gương chiếu hậu xe mô tô: Quan sát an toàn sau trái, phải trước khi chuyển hướng.",
    "tip": "",
    "image": ""
  },
  {
    "id": 260,
    "chapter": 3,
    "isCritical": true,
    "question": "Để bảo đảm an toàn khi tham gia giao thông, người lái xe mô tô hai bánh cần điều khiển tay ga như thế nào?",
    "options": [
      "Tăng ga thật mạnh, giảm ga từ từ.",
      "Tăng ga thật mạnh, giảm ga thật nhanh.",
      "Tăng ga từ từ, giảm ga thật nhanh.",
      "Tăng ga từ từ, giảm ga từ từ."
    ],
    "answer": 3,
    "explanation": "Điều khiển tay ga mô tô an toàn: Tăng từ từ, giảm nhanh.",
    "tip": "⚠️ CÂU ĐIỂM LIỆT: Bắt buộc trả lời đúng 100%, sai câu này sẽ trượt trực tiếp.",
    "image": ""
  },
  {
    "id": 261,
    "chapter": 3,
    "isCritical": false,
    "question": "Để tránh đổ, ngã khi điều khiển xe mô tô hai bánh ở nơi đường xấu, nhỏ và hẹp, người lái xe cần xử lý như thế nào?",
    "options": [
      "Đi ở tốc độ thấp, quan sát liên tục khoảng cách từ 05 m đến 10 m phía trước để điều chỉnh sớm hướng di chuyển.",
      "Trong quá trình di chuyển không nên dùng phanh trước tránh làm khóa bánh dẫn hướng.",
      "Không được lắc người sang trái hoặc phải nhiều, trọng tâm cơ thể cần trùng với trọng tâm của xe.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Tránh ngã xe máy (đường xấu/hẹp): Tốc độ thấp + Không nên dùng phanh trước + Không lắc người.",
    "tip": "",
    "image": ""
  },
  {
    "id": 262,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi lái xe ô tô điện xuống dốc dài, đổ đèo, người lái xe cần chú ý những vấn đề gì để bảo đảm an toàn?",
    "options": [
      "Kiểm tra hệ thống an toàn, pin của xe trước khi xuất phát.",
      "Nhả chân ga để phanh tái sinh hoạt động.",
      "Rà phanh chân để kịp thời xử lý tình huống khẩn cấp.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Lái ô tô điện xuống dốc dài/đèo: Kiểm tra hệ thống an toàn/pin + Nhả ga + Rà phanh chân.",
    "tip": "",
    "image": ""
  },
  {
    "id": 263,
    "chapter": 3,
    "isCritical": false,
    "question": "Khi lái xe ô tô điện qua khu vực ngập nước, người lái xe cần phải chú ý những vấn đề gì?",
    "options": [
      "Người lái xe phải tìm hiểu khả năng chìm trong nước của xe để xác định cung đường di chuyển.",
      "Giữ vững tay lái, đi đều ga, tránh không để xe chết máy giữa dòng, không nên dừng xe trên đường ngập nước.",
      "Lái xe tốc độ chậm, không tạo sóng và giữ khoảng cách an toàn với các phương tiện xung quanh, nhất là người đi bộ.",
      "Cả ba ý trên."
    ],
    "answer": 4,
    "explanation": "Ô tô điện qua ngập nước: Biết khả năng chìm của xe + Vững lái, đều ga + Chạy chậm.",
    "tip": "",
    "image": ""
  },
  {
    "id": 264,
    "chapter": 4,
    "isCritical": false,
    "question": "Phương pháp kiểm tra mức dầu bôi trơn động cơ nào dưới đây là đúng?",
    "options": [
      "Kiểm tra que thăm dầu trên các-te. Quan sát vệt dầu trên que thăm, mức dầu này phải nằm ở mức tối đa được thể hiện trên que thăm.",
      "Rút que thăm dầu trên các-te. Quan sát vệt dầu trên que thăm, mức dầu này phải nằm ở mức tối thiểu được thể hiện trên que thăm.",
      "Rút que thăm dầu trên các-te, lau sạch que thăm sau đó cắm vào các-te và rút ra quan sát vệt dầu trên que thăm, mức dầu phải nằm trong khoảng vạch mức tối thiểu và tối đa được thể hiện trên que thăm."
    ],
    "answer": 3,
    "explanation": "Kiểm tra dầu bôi trơn: Rút que, lau sạch.",
    "tip": "",
    "image": ""
  },
  {
    "id": 265,
    "chapter": 4,
    "isCritical": false,
    "question": "Xe ô tô tham gia giao thông đường bộ phải bảo đảm các quy định về chất lượng, an toàn kỹ thuật và bảo vệ môi trường nào dưới đây?",
    "options": [
      "Kính chắn gió, kính cửa phải là loại kính an toàn, bảo đảm tầm nhìn cho người điều khiển; có đủ hệ thống hãm và hệ thống chuyển hướng có hiệu lực, tay lái xe ô tô ở bên trái của xe, có còi với âm lượng đúng quy chuẩn kỹ thuật.",
      "Có đủ đèn chiếu sáng gần và xa, đèn soi biển số, đèn báo hãm, đèn tín hiệu; có đủ bộ phận giảm thanh, giảm khói, các kết cấu phải đủ độ bền và bảo đảm tính năng vận hành ổn định.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Xe ô tô tham gia giao thông: Kính chắn gió + Đủ đèn chiếu sáng gần xa.",
    "tip": "",
    "image": ""
  },
  {
    "id": 266,
    "chapter": 4,
    "isCritical": false,
    "question": "Xe mô tô và xe ô tô tham gia giao thông trên đường bộ có bắt buộc phải đủ bộ phận giảm thanh không?",
    "options": [
      "Không bắt buộc.",
      "Bắt buộc.",
      "Tùy từng trường hợp."
    ],
    "answer": 2,
    "explanation": "Bộ phận giảm thanh: Bắt buộc.",
    "tip": "",
    "image": ""
  },
  {
    "id": 267,
    "chapter": 4,
    "isCritical": false,
    "question": "Xe ô tô tham gia giao thông trên đường bộ phải có đủ các loại đèn nào dưới đây?",
    "options": [
      "Đèn chiếu sáng gần và xa.",
      "Đèn soi biển số, đèn báo hãm và đèn tín hiệu.",
      "Dàn đèn pha trên nóc xe.",
      "Ý 1 và ý 2."
    ],
    "answer": 4,
    "explanation": "Đèn bắt buộc trên ô tô: Chiếu sáng gần xa + Soi biển số.",
    "tip": "",
    "image": ""
  },
  {
    "id": 268,
    "chapter": 4,
    "isCritical": false,
    "question": "Kính chắn gió của xe ô tô phải bảo đảm yêu cầu nào dưới đây?",
    "options": [
      "Là loại kính an toàn, kính nhiều lớp, đúng quy cách, không rạn nứt, bảo đảm hình ảnh quan sát rõ ràng, không bị méo mó.",
      "Là loại kính trong suốt, không rạn nứt, bảo đảm tầm nhìn cho người điều khiển về phía trước mặt và hai bên."
    ],
    "answer": 1,
    "explanation": "Kính chắn gió ô tô: Kính an toàn.",
    "tip": "",
    "image": ""
  },
  {
    "id": 269,
    "chapter": 4,
    "isCritical": false,
    "question": "Bánh xe, lốp lắp cho xe ô tô phải bảo đảm an toàn kỹ thuật như thế nào dưới đây?",
    "options": [
      "Bánh xe phải có kết cấu chắc chắn, lắp đặt đúng quy cách của nhà sản xuất.",
      "Lốp phải đủ số lượng, đủ áp suất, không phồng rộp, đúng cỡ lốp của nhà sản xuất hoặc tài liệu kỹ thuật quy định; lốp trên cùng một trục của xe sử dụng trong điều kiện hoạt động bình thường phải cùng kiểu loại.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Bánh xe/lốp ô tô: Bánh xe chắc chắn + Lốp đủ số lượng/áp suất.",
    "tip": "",
    "image": ""
  },
  {
    "id": 270,
    "chapter": 4,
    "isCritical": false,
    "question": "Hệ thống lái trên xe ô tô phải bảo đảm yêu cầu nào dưới đây?",
    "options": [
      "Bảo đảm cho xe chuyển hướng chính xác, điều khiển nhẹ nhàng, an toàn ở mọi vận tốc và tải trọng trong phạm vi tính năng kỹ thuật cho phép của xe.",
      "Khi hoạt động các cơ cấu chuyển động của hệ thống lái không được va chạm với bất kỳ bộ phận nào của xe; khi quay vô lăng lái về bên phải và bên trái thì không được có sự khác biệt đáng kể về lực tác động lên vành tay lái.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Hệ thống lái ô tô: Chuyển hướng chính xác + Cơ cấu không va chạm, quay vô lăng 2 bên lực không khác biệt nhiều.",
    "tip": "",
    "image": ""
  },
  {
    "id": 271,
    "chapter": 4,
    "isCritical": false,
    "question": "Mục đích của bảo dưỡng thường xuyên đối với xe ô tô có tác dụng gì dưới đây?",
    "options": [
      "Bảo dưỡng ô tô thường xuyên làm cho ô tô luôn luôn có tính năng kỹ thuật tốt, giảm cường độ hao mòn của các chi tiết, kéo dài tuổi thọ của xe.",
      "Ngăn ngừa và phát hiện kịp thời các hư hỏng và sai lệch kỹ thuật để khắc phục, giữ gìn được hình thức bên ngoài.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Bảo dưỡng thường xuyên ô tô: Giữ tính năng kỹ thuật tốt + Ngăn ngừa/phát hiện hư hỏng, giữ hình thức.",
    "tip": "",
    "image": ""
  },
  {
    "id": 272,
    "chapter": 4,
    "isCritical": false,
    "question": "Trong các nguyên nhân nêu dưới đây, nguyên nhân nào làm động cơ diesel không nổ?",
    "options": [
      "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, tạp chất.",
      "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí, không có tia lửa điện.",
      "Hết nhiên liệu, lõi lọc nhiên liệu bị tắc, lọc khí bị tắc, nhiên liệu lẫn không khí và nước, không có tia lửa điện."
    ],
    "answer": 1,
    "explanation": "Động cơ diesel không nổ: có tạp chất.",
    "tip": "",
    "image": ""
  },
  {
    "id": 273,
    "chapter": 4,
    "isCritical": false,
    "question": "Ống xả lắp trên xe ô tô phải bảo đảm yêu cầu an toàn kỹ thuật nào dưới đây?",
    "options": [
      "Ống xả không được đặt ở vị trí có thể gây cháy xe hoặc ảnh hưởng đến người ngồi trên xe và gây cản trở hoạt động của hệ thống khác.",
      "Miệng thoát khí thải của ống xả không được hướng về phía trước và không được hướng về bên phải theo chiều tiến của xe.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Ống xả ô tô: Không gây cháy + Miệng thoát không hướng trước/phải.",
    "tip": "",
    "image": ""
  },
  {
    "id": 274,
    "chapter": 4,
    "isCritical": false,
    "question": "Dây đai an toàn lắp trên xe ô tô phải bảo đảm yêu cầu an toàn kỹ thuật nào dưới đây?",
    "options": [
      "Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm giữ chặt dây khi giật dây đột ngột.",
      "Đủ số lượng, lắp đặt chắc chắn không bị rách, đứt, khóa cài đóng, mở nhẹ nhàng, không tự mở, không bị kẹt; kéo ra thu vào dễ dàng, cơ cấu hãm mở ra khi giật dây đột ngột.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Dây đai an toàn: cơ cấu hãm giữ chặt khi giật.",
    "tip": "",
    "image": ""
  },
  {
    "id": 275,
    "chapter": 4,
    "isCritical": false,
    "question": "Thế nào là động cơ 4 kỳ?",
    "options": [
      "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 2 (hai) hành trình, trong đó có một lần sinh công.",
      "Là loại động cơ: để hoàn thành một chu trình công tác của động cơ, pít tông thực hiện 4 (bốn) hành trình, trong đó có một lần sinh công."
    ],
    "answer": 2,
    "explanation": "Động cơ 4 kỳ: Pít tông 4 hành trình / 1 lần sinh công.",
    "tip": "",
    "image": ""
  },
  {
    "id": 276,
    "chapter": 4,
    "isCritical": false,
    "question": "Công dụng của hệ thống bôi trơn đối với động cơ ô tô?",
    "options": [
      "Cung cấp một lượng dầu bôi trơn đủ và sạch dưới áp suất nhất định đi bôi trơn cho các chi tiết của động cơ để giảm ma sát, giảm mài mòn, làm kín, làm sạch, làm mát và chống gỉ.",
      "Cung cấp một lượng nhiên liệu đầy đủ và sạch để cho động cơ ô tô hoạt động.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Hệ thống bôi trơn: Giảm ma sát/mài mòn, làm kín/sạch/mát, chống gỉ.",
    "tip": "",
    "image": ""
  },
  {
    "id": 277,
    "chapter": 4,
    "isCritical": false,
    "question": "Niên hạn sử dụng của xe ô tô tải (tính bắt đầu từ năm sản xuất) không quá bao nhiêu năm?",
    "options": [
      "15 năm.",
      "20 năm.",
      "25 năm."
    ],
    "answer": 3,
    "explanation": "Niên hạn xe tải: Không quá 25 năm.",
    "tip": "",
    "image": ""
  },
  {
    "id": 278,
    "chapter": 4,
    "isCritical": false,
    "question": "Niên hạn sử dụng của xe ô tô chở người trên 8 chỗ ngồi (không kể chỗ của người lái xe) tính bắt đầu từ năm sản xuất không quá bao nhiêu năm?",
    "options": [
      "5 năm.",
      "20 năm.",
      "25 năm."
    ],
    "answer": 2,
    "explanation": "Niên hạn xe khách (>8 chỗ): Không quá 20 năm.",
    "tip": "",
    "image": ""
  },
  {
    "id": 279,
    "chapter": 4,
    "isCritical": false,
    "question": "Hãy nêu công dụng của động cơ xe ô tô?",
    "options": [
      "Khi làm việc, nhiệt năng được biến đổi thành cơ năng làm trục khủy động cơ quay, truyền lực đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.",
      "Khi làm việc, cơ năng được biến đổi thành nhiệt năng và truyền đến các bánh xe chủ động tạo ra chuyển động tịnh tiến cho xe ô tô.",
      "Cả hai ý trên."
    ],
    "answer": 1,
    "explanation": "Động cơ ô tô: Biến nhiệt năng thành cơ năng.",
    "tip": "",
    "image": ""
  },
  {
    "id": 280,
    "chapter": 4,
    "isCritical": false,
    "question": "Hãy nêu công dụng hệ thống truyền lực của xe ô tô?",
    "options": [
      "Dùng để truyền mô men quay từ động cơ tới các bánh xe chủ động của xe ô tô.",
      "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
      "Dùng để làm giảm tốc độ, dừng chuyển động của xe ô tô."
    ],
    "answer": 1,
    "explanation": "Hệ thống truyền lực: Truyền mô men quay từ động cơ đến bánh xe chủ động.",
    "tip": "",
    "image": ""
  },
  {
    "id": 281,
    "chapter": 4,
    "isCritical": false,
    "question": "Hãy nêu công dụng ly hợp (côn) của xe ô tô?",
    "options": [
      "Dùng để truyền mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình xe ô tô chuyển động.",
      "Dùng để truyền hoặc ngắt truyền động từ động cơ đến hộp số của xe ô tô.",
      "Dùng để truyền truyền động từ hộp số đến bánh xe chủ động của ô tô."
    ],
    "answer": 2,
    "explanation": "Ly hợp (côn): Truyền hoặc ngắt truyền động từ động cơ đến hộp số.",
    "tip": "",
    "image": ""
  },
  {
    "id": 282,
    "chapter": 4,
    "isCritical": false,
    "question": "Hãy nêu công dụng hộp số của xe ô tô?",
    "options": [
      "Truyền và tăng mô men xoắn giữa các trục vuông góc nhau, bảo đảm cho các bánh xe chủ động quay với tốc độ khác nhau khi sức cản chuyển động ở bánh xe hai bên không bằng nhau.",
      "Truyền và thay đổi mô men xoắn giữa các trục không cùng nằm trên một đường thẳng và góc lệch trục luôn thay đổi trong quá trình ô tô chuyển động, chuyển số êm dịu, dễ điều khiển.",
      "Truyền và thay đổi mô men từ động cơ đến bánh xe chủ động, cắt truyền động từ động cơ đến bánh xe chủ động, bảo đảm cho xe ô tô chuyển động lùi."
    ],
    "answer": 3,
    "explanation": "Hộp số ô tô: Giúp xe lùi.",
    "tip": "",
    "image": ""
  },
  {
    "id": 283,
    "chapter": 4,
    "isCritical": false,
    "question": "Hãy nêu công dụng hệ thống lái của xe ô tô?",
    "options": [
      "Dùng để thay đổi mô men từ động cơ tới các bánh xe chủ động khi xe ô tô chuyển động theo hướng xác định.",
      "Dùng để thay đổi mô men giữa các trục vuông góc nhau khi xe ô tô chuyển động theo hướng xác định.",
      "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định."
    ],
    "answer": 3,
    "explanation": "Hệ thống lái: Thay đổi hướng chuyển động hoặc giữ xe ổn định.",
    "tip": "",
    "image": ""
  },
  {
    "id": 284,
    "chapter": 4,
    "isCritical": false,
    "question": "Hãy nêu công dụng hệ thống phanh của xe ô tô?",
    "options": [
      "Dùng để giảm tốc độ, dừng chuyển động của xe ô tô và giữ cho xe ô tô đứng yên trên dốc.",
      "Dùng để thay đổi hướng chuyển động hoặc giữ cho xe ô tô chuyển động ổn định theo hướng xác định.",
      "Dùng để truyền hoặc ngắt truyền động từ động cơ đến bánh xe chủ động của xe ô tô."
    ],
    "answer": 1,
    "explanation": "Hệ thống phanh: Giảm tốc độ, dừng xe, giữ xe đứng yên trên dốc.",
    "tip": "",
    "image": ""
  },
  {
    "id": 285,
    "chapter": 4,
    "isCritical": false,
    "question": "Đèn phanh trên xe mô tô có tác dụng gì dưới đây?",
    "options": [
      "Có tác dụng cảnh báo cho các xe phía sau biết xe đang giảm tốc để chủ động tránh hoặc giảm tốc để tránh va chạm.",
      "Có tác dụng định vị vào ban đêm với các xe từ phía sau tới để tránh va chạm.",
      "Cả hai ý trên."
    ],
    "answer": 3,
    "explanation": "Đèn phanh mô tô: Cảnh báo xe sau (đang giảm tốc) + Định vị ban đêm.",
    "tip": "",
    "image": ""
  },
  {
    "id": 286,
    "chapter": 4,
    "isCritical": false,
    "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
    "options": [
      "Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
      "Áp suất lốp không đủ.",
      "Đang hãm phanh tay.",
      "Cần kiểm tra động cơ."
    ],
    "answer": 1,
    "explanation": "Biểu tượng này báo nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
    "tip": "",
    "image": "images/questions/q292.png"
  },
  {
    "id": 287,
    "chapter": 4,
    "isCritical": false,
    "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
    "options": [
      "Báo hiệu hệ thống chống bó cứng khi phanh bị lỗi.",
      "Áp suất lốp không đủ.",
      "Đang hãm phanh tay.",
      "Cần kiểm tra động cơ."
    ],
    "answer": 4,
    "explanation": "Biểu tượng này báo cần kiểm tra động cơ.",
    "tip": "",
    "image": "images/questions/q293.png"
  },
  {
    "id": 288,
    "chapter": 4,
    "isCritical": false,
    "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
    "options": [
      "Báo hiệu thiếu dầu phanh.",
      "Áp suất lốp không đủ.",
      "Đang hãm phanh tay.",
      "Sắp hết nhiên liệu."
    ],
    "answer": 2,
    "explanation": "Biểu tượng này báo áp suất lốp không đủ.",
    "tip": "",
    "image": "images/questions/q294.png"
  },
  {
    "id": 289,
    "chapter": 4,
    "isCritical": false,
    "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe ô tô?",
    "options": [
      "Báo hiệu hệ thống chống bó cứng phanh bị lỗi.",
      "Áp suất lốp không đủ.",
      "Đang hãm phanh tay.",
      "Sắp hết nhiên liệu."
    ],
    "answer": 1,
    "explanation": "Biểu tượng này báo hệ thống chống bó cứng phanh bị lỗi.",
    "tip": "",
    "image": "images/questions/q295.png"
  },
  {
    "id": 290,
    "chapter": 4,
    "isCritical": false,
    "question": "Khi khởi động xe ô tô số tự động có trang bị chìa khóa thông minh có cần đạp hết hành trình bàn đạp chân phanh hay không?",
    "options": [
      "Phải đạp hết hành trình bàn đạp chân phanh.",
      "Không cần đạp phanh.",
      "Tùy từng trường hợp."
    ],
    "answer": 1,
    "explanation": "Để khởi động xe, bạn phải đạp hết hành trình bàn đạp chân phanh.",
    "tip": "",
    "image": "images/questions/q296.png"
  },
  {
    "id": 291,
    "chapter": 4,
    "isCritical": false,
    "question": "Ắc quy được trang bị trên xe ô tô có tác dụng gì dưới đây?",
    "options": [
      "Giúp người lái xe kịp thời tạo xung lực tối đa lên hệ thống phanh trong khoảnh khắc đầu tiên của tình huống khẩn cấp.",
      "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
      "Hỗ trợ người lái xe khởi hành ngang dốc.",
      "Để tích trữ điện năng, cung cấp cho các phụ tải khi máy phát chưa làm việc."
    ],
    "answer": 4,
    "explanation": "Để tích trữ điện năng cung cấp cho các phụ tải khi máy phát chưa làm việc.",
    "tip": "",
    "image": ""
  },
  {
    "id": 292,
    "chapter": 4,
    "isCritical": false,
    "question": "Máy phát điện được trang bị trên xe ô tô có tác dụng gì dưới đây?",
    "options": [
      "Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy.",
      "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
      "Hỗ trợ người lái xe khởi hành ngang dốc.",
      "Để tích trữ điện năng và cung cấp điện cho các phụ tải làm việc."
    ],
    "answer": 1,
    "explanation": "Để phát điện năng cung cấp cho các phụ tải làm việc và nạp điện cho ắc quy.",
    "tip": "",
    "image": ""
  },
  {
    "id": 293,
    "chapter": 4,
    "isCritical": false,
    "question": "Dây đai an toàn được trang bị trên xe ô tô có tác dụng gì dưới đây?",
    "options": [
      "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
      "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại."
    ],
    "answer": 2,
    "explanation": "Dây đai giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
    "tip": "",
    "image": ""
  },
  {
    "id": 294,
    "chapter": 4,
    "isCritical": false,
    "question": "Túi khí được trang bị trên xe ô tô có tác dụng gì dưới đây?",
    "options": [
      "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại.",
      "Giảm khả năng va đập của một số bộ phận cơ thể quan trọng với các vật thể trong xe.",
      "Hấp thụ một phần lực va đập lên người lái và hành khách.",
      "Ý 2 và ý 3."
    ],
    "answer": 4,
    "explanation": "Túi khí giúp giảm khả năng va đập và hấp thụ một phần lực va đập.",
    "tip": "",
    "image": ""
  },
  {
    "id": 295,
    "chapter": 4,
    "isCritical": false,
    "question": "Khi động cơ ô tô đã khởi động, bảng đồng hồ xuất hiện ký hiệu như hình vẽ dưới đây không tắt trong thời gian dài, báo hiệu tình trạng như thế nào của xe ô tô?",
    "options": [
      "Nhiệt độ nước làm mát động cơ quá ngưỡng cho phép.",
      "Áp suất lốp không đủ.",
      "Đang hãm phanh tay.",
      "Hệ thống lái gặp sự cố."
    ],
    "answer": 4,
    "explanation": "Biểu tượng này báo hệ thống lái đang gặp sự cố.",
    "tip": "",
    "image": "images/questions/q301.png"
  },
  {
    "id": 296,
    "chapter": 4,
    "isCritical": false,
    "question": "Trên xe ô tô có trang bị thiết bị như hình vẽ dưới đây có tác dụng gì?",
    "options": [
      "Dùng để kích (hay nâng) xe ô tô.",
      "Vặn ốc lắp bánh xe.",
      "Ổn định chuyển động của xe ô tô khi đi vào đường vòng.",
      "Giữ chặt người lái và hành khách trên ghế ngồi khi xe ô tô đột ngột dừng lại."
    ],
    "answer": 1,
    "explanation": "Thiết bị hình kích nâng: Dùng để kích (nâng) xe ô tô.",
    "tip": "",
    "image": "images/questions/q302.png"
  },
  {
    "id": 297,
    "chapter": 4,
    "isCritical": false,
    "question": "Trên xe ô tô có trang bị thiết bị như hình vẽ dưới đây, dùng để làm gì?",
    "options": [
      "Thay lốp xe.",
      "Chữa cháy.",
      "Phá cửa kính xe ô tô trong các trường hợp khẩn cấp.",
      "Vặn ốc để tháo lắp bánh xe."
    ],
    "answer": 3,
    "explanation": "Thiết bị hình chữ T: Dùng để phá cửa kính xe khi khẩn cấp.",
    "tip": "",
    "image": "images/questions/q303.png"
  },
  {
    "id": 298,
    "chapter": 4,
    "isCritical": false,
    "question": "Trên xe ô tô có trang bị thiết bị như hình vẽ dưới đây, dùng để làm gì?",
    "options": [
      "Thay lốp xe.",
      "Chữa cháy trong các trường hợp hỏa hoạn.",
      "Cầm máu cho người bị nạn."
    ],
    "answer": 2,
    "explanation": "Thiết bị hình bình chữa cháy: Dùng để chữa cháy.",
    "tip": "",
    "image": "images/questions/q304.png"
  },
  {
    "id": 299,
    "chapter": 4,
    "isCritical": false,
    "question": "Nút bấm biểu tượng như hình vẽ trên xe ô tô có ý nghĩa như thế nào?",
    "options": [
      "Báo hiệu xin đường cho xe đi thẳng.",
      "Báo hiệu hệ thống phanh bị lỗi.",
      "Báo hiệu xe đang ở tình huống nguy hiểm.",
      "Báo hiệu đến thời gian cần bảo dưỡng."
    ],
    "answer": 3,
    "explanation": "Biểu tượng 2 hình tam giác: Báo hiệu xe đang tình huống nguy hiểm.",
    "tip": "",
    "image": "images/questions/q299.png"
  },
  {
    "id": 300,
    "chapter": 4,
    "isCritical": false,
    "question": "Khi động cơ đã hoạt động, bảng đồng hồ xuất hiện biểu tượng hình vẽ dưới đây, báo hiệu tình trạng như thế nào của xe?",
    "options": [
      "Báo hiệu hệ thống túi khí đã bật.",
      "Báo hiệu đèn chiếu sáng xa đã bật.",
      "Báo hiệu chế độ lái tiết kiệm nhiên liệu đã bật.",
      "Báo hiệu đèn cảnh báo khoảng cách đã bật."
    ],
    "answer": 3,
    "explanation": "Biểu tượng ECO: Chế độ lái tiết kiệm.",
    "tip": "",
    "image": "images/questions/q300.png"
  },
  {
    "id": 301,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm các loại xe cơ giới đi vào, trừ xe máy hai bánh, xe gắn máy và các loại xe ưu tiên theo quy định?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 1 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 1,
    "explanation": "Biển 2: P.103a “Cấm xe ô tô”; Biển 2: P.107a “Cấm xe ô tô khách”; Biển 3: P.108 “Cấm xe kéo rơ-moóc”.<br/>Biển 2 và Biển 3 không cấm ô tô con nên chỉ có Biển 1 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q305.png"
  },
  {
    "id": 302,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm xe ô tô tải?",
    "options": [
      "Cả ba biển.",
      "Biển 2 và biển 3.",
      "Biển 1 và biển 3.",
      "Biển 1 và biển 2."
    ],
    "answer": 4,
    "explanation": "Biển 2: P.103a “Cấm xe ô tô”; Biển 2: P.107a “Cấm xe ô tô khách”; Biển 3: P.108 “Cấm xe kéo rơ-moóc”.<br/>Biển 3 không cấm ô tô tải nên Biển 1 và Biển 2 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q305.png"
  },
  {
    "id": 303,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm máy kéo?",
    "options": [
      "Biển 1.",
      "Biển 2 và biển 3.",
      "Biển 1 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: P.104 “Cấm mô tô”; Biển 2: P.106 “Cấm xe ôtô tải” sẽ cấm cả máy kéo và các xe máy chuyên dùng; Biển 3: P.109 “Cấm máy kéo” nên Biển 2 và Biển 3 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q307.png"
  },
  {
    "id": 304,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu cấm xe mô tô ba bánh chở hàng đi qua?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: P.104 “Cấm mô tô” thì cấm cả mô tô 3 bánh; Biển 2: P.103a “Cấm ô tô” cấm ô tô và và cả phương tiện 3 bánh đi vào.",
    "tip": "",
    "image": "images/questions/q308.png"
  },
  {
    "id": 305,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào dưới đây xe gắn máy được phép đi vào?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 3,
    "explanation": "Biển 104 “Cấm mô tô” và biển 103a “Cấm ô tô” không cấm xe gắn máy (không phải mô tô). Nên cả 2 biển đều cho phép xe gắn máy đi vào.",
    "tip": "",
    "image": "images/questions/q309.png"
  },
  {
    "id": 306,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu cấm xe mô tô đi vào?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: P.104 “Cấm xe máy” cấm xe mô tô đi vào.",
    "tip": "",
    "image": "images/questions/q308.png"
  },
  {
    "id": 307,
    "chapter": 5,
    "isCritical": false,
    "question": "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?",
    "options": [
      "Không biển nào.",
      "Biển 1 và biển 2.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: P.104 “Cấm xe máy” thì xe mô tô hai bánh không được đi vào.",
    "tip": "",
    "image": "images/questions/q308.png"
  },
  {
    "id": 308,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cho phép xe ô tô con được vượt?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3."
    ],
    "answer": 3,
    "explanation": "Biển 1: DP.133 “Hết cấm vượt”; Biển 2: P.125 “Cấm vượt”; Biển 3: P.126 “Cấm ô tô tải vượt”. Chỉ có biển 2 cấm ô tô con vượt nên là đáp án đúng Biển 1 và biển 3.",
    "tip": "",
    "image": "images/questions/q312.png"
  },
  {
    "id": 309,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào không cho phép xe ô tô con vượt?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: DP.133 “Hết cấm vượt”; Biển 2: P.125 “Cấm vượt”; Biển 3: P.126 “Cấm ô tô tải vượt”. Biển 2 cấm ô tô con vượt nên là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q312.png"
  },
  {
    "id": 310,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm xe ô tô tải vượt?",
    "options": [
      "Biển 1.",
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3."
    ],
    "answer": 4,
    "explanation": "Biển 1: DP.133 “Hết cấm vượt”; Biển 2: P.125 “Cấm vượt”; Biển 3: P.126 “Cấm ô tô tải vượt”. Biển 2 áp dụng với xe tải nên đáp án đúng là Biển 2 và Biển 3.",
    "tip": "",
    "image": "images/questions/q312.png"
  },
  {
    "id": 311,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm xe tải vượt?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: P.125 “Cấm vượt”; Biển 3: P.126 “Cấm ô tô tải vượt”. Biển 1 áp dụng cho cả xe tải nên đáp án đúng là cả 2 biển.",
    "tip": "",
    "image": "images/questions/q315.png"
  },
  {
    "id": 312,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào xe ô tô con được phép vượt?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "answer": 2,
    "explanation": "Biển 1: P.125 “Cấm vượt”; Biển 3: P.126 “Cấm ô tô tải vượt”. Biển 2  KHÔNG áp dụng cho xe ô tô con nên là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q315.png"
  },
  {
    "id": 313,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm quay đầu xe?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Không biển nào.",
      "Cả hai biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: P.123a “Cấm rẽ trái” không cấm quay đầu xe; Biển 2: P.124a “Cấm quay xe” không cấm rẽ trái. Nên Biển 2 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q317.png"
  },
  {
    "id": 314,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm xe rẽ trái?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 1,
    "explanation": "Biển 1: P.123a “Cấm rẽ trái” không cấm quay đầu xe; Biển 2: P.124a “Cấm quay xe” không cấm rẽ trái. Nên Biển 1 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q317.png"
  },
  {
    "id": 315,
    "chapter": 5,
    "isCritical": false,
    "question": "Khi gặp biển nào xe được rẽ trái?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Không biển nào."
    ],
    "answer": 2,
    "explanation": "Biển 1: P.123a “Cấm rẽ trái” không cấm quay đầu xe; Biển 2: P.124a “Cấm quay xe” không cấm rẽ trái.<br/>Nên Biển 2 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q317.png"
  },
  {
    "id": 316,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm xe ô tô rẽ trái?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: P.123a “Cấm rẽ trái”; Biển 2: P.124e “Cấm ô tô rẽ trái và quay xe” nên cả 2 biển đều cấm rẽ trái.",
    "tip": "",
    "image": "images/questions/q320.png"
  },
  {
    "id": 317,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm các phương tiện rẽ phải?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 1,
    "explanation": "Biển 1: P.123b “Cấm rẽ phải”; Biển 2: P.124d “Cấm rẽ phải và quay xe”; Biển 3: P.124f “Cấm ô tô rẽ phải và quay xe”.<br/>Nên biển 3 chỉ cấm xe ô tô, còn biển 1 và biển 2 cấm toàn bộ phương tiện rẽ phải.",
    "tip": "",
    "image": "images/questions/q321.png"
  },
  {
    "id": 318,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm các phương tiện rẽ trái?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 1,
    "explanation": "Biển 1: P.123a “Cấm rẽ trái”; Biển 2: P.124c “Cấm rẽ trái và quay xe”; Biển 3: P.124e “Cấm ô tô rẽ trái và quay xe”.<br/>Nên biển 3 chỉ cấm xe ô tô, còn biển 1 và biển 2 cấm toàn bộ phương tiện rẽ trái.",
    "tip": "",
    "image": "images/questions/q322.png"
  },
  {
    "id": 319,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào dưới đây chỉ cấm xe ô tô quay đầu?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 1 và biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: P.124b “Cấm ô tô quay đầu xe” không cấm rẽ trái; Biển 2: P.124e “Cấm ôtô rẽ trái và quay xe”; Biển 3: P.124f “Cấm ô tô rẽ phải và quay xe”. Nên Biển 1 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q323.png"
  },
  {
    "id": 320,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào dưới đây cấm xe ô tô rẽ trái và quay đầu?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 1 và biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: P.124b “Cấm ô tô quay đầu xe” không cấm rẽ trái; Biển 2: P.124e “Cấm ôtô rẽ trái và quay xe”; Biển 3: P.124f “Cấm ô tô rẽ phải và quay xe”. Nên Biển 2 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q323.png"
  },
  {
    "id": 321,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm xe taxi mà không cấm các phương tiện khác?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Không biển nào."
    ],
    "answer": 2,
    "explanation": "Biển 2 chỉ cấm xe taxi nhưng không cấm các phương tiện khác.",
    "tip": "",
    "image": "images/questions/q325.png"
  },
  {
    "id": 322,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào xe được phép rẽ trái?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Không biển nào."
    ],
    "answer": 2,
    "explanation": "Theo QCVN41:2024 thì Biển 2: I.410 “Khu vực quay xe” chỉ dẫn khu vực được phép quay đầu xe. Biển này thuộc nhóm biển chỉ dẫn nên KHÔNG cấm rẽ trái. Do đó, đáp án đúng là câu 2.",
    "tip": "",
    "image": "images/questions/q326.png"
  },
  {
    "id": 323,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào xe quay đầu không bị cấm?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: P.123a “Cấm rẽ trái” không cấm quay đầu; Biển 2: I.410 “Khu vực quay xe” chỉ dẫn khu vực được phép quay đầu xe. Nên cả 2 biển là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q326.png"
  },
  {
    "id": 324,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào xe được phép quay đầu nhưng không được rẽ trái?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 1,
    "explanation": "Biển 1: 123a “Cấm rẽ trái” nhưng không cấm quay đầu xe. Biển 2: R.301e đặt trước ngã ba ngã tư chỉ được rẽ trái ở phạm vi ngã ba, ngã tư phía sau mặt biển nên không thể quay đầu xe.",
    "tip": "",
    "image": "images/questions/q328.png"
  },
  {
    "id": 325,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào là biển “Cấm đi ngược chiều”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả ba biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: P.101 “Đường cấm”; Biển 2: P.102 “Cấm đi ngược chiều”; Biển 3: P.301a “Cấm đỗ xe”. Nên biển 2 là cấm đi ngược chiều.",
    "tip": "",
    "image": "images/questions/q329.png"
  },
  {
    "id": 326,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào dưới đây các phương tiện không được phép đi vào?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 1 và biển 2."
    ],
    "answer": 3,
    "explanation": "Biển 1: P.101 “Đường cấm”; Biển 2: P.102 “Cấm đi ngược chiều” cấm đi vào theo chiều đặt biển; Biển 3: P.301a “Cấm đỗ xe”. Nên biển 1 và biển 2 là cấm các phương tiện không được phép đi vào.",
    "tip": "",
    "image": "images/questions/q329.png"
  },
  {
    "id": 327,
    "chapter": 5,
    "isCritical": false,
    "question": "Gặp biển nào người lái xe không được đỗ xe vào ngày chẵn?",
    "options": [
      "Biển 1.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: P.301a “Cấm đỗ xe” bất kỳ ngày nào; Biển 2: P301b “Cấm đỗ xe” vào ngày lẻ; Biển 3: P301c “Cấm đỗ xe” vào ngày chẵn. Nên biển 1 và biển 3 là cấm đỗ xe ngày chẵn.",
    "tip": "",
    "image": "images/questions/q331.png"
  },
  {
    "id": 328,
    "chapter": 5,
    "isCritical": false,
    "question": "Gặp biển nào người lái xe không được đỗ xe vào ngày lẻ?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 2.",
      "Biển 2 và biển 3.",
      "Biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: P.301a “Cấm đỗ xe” bất kỳ ngày nào; Biển 2: P301b “Cấm đỗ xe” vào ngày lẻ; Biển 3: P301c “Cấm đỗ xe” vào ngày chẵn. Nên biển 1 và biển 2 là cấm đỗ xe ngày lẻ.",
    "tip": "",
    "image": "images/questions/q331.png"
  },
  {
    "id": 329,
    "chapter": 5,
    "isCritical": false,
    "question": "Khi gặp biển nào xe ưu tiên theo luật định vẫn phải dừng lại?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả ba biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: P.101 “Đường cấm” không cấm xe ưu tiên;<br/>Biển 2: R.122 “Dừng lại” áp dụng với cả xe ưu tiên;<br/>Biển 3: P.102 “Cấm đi ngược chiều” không áp dụng với xe ưu tiên;<br/>Nên Biển 2 là đáp án đúng, áp dụng với cả xe ưu tiên.",
    "tip": "",
    "image": "images/questions/q333.png"
  },
  {
    "id": 330,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm tất cả các loại xe cơ giới và thô sơ đi lại trên đường, trừ xe ưu tiên theo luật định (nếu đường vẫn cho xe chạy được)?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 1,
    "explanation": "Biển 1: P.101 “Đường cấm” không cấm xe ưu tiên;<br/>Biển 2: R.122 “Dừng lại” áp dụng với cả xe ưu tiên;<br/>Nên Biển 1 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q334.png"
  },
  {
    "id": 331,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào là biển “Cấm xe chở hàng nguy hiểm”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 3,
    "explanation": "Biển 1: P.106a “Cấm xe tải”; Biển 2: P.106b “Cấm xe tải có khối lượng chuyên chở lớn hơn 2.5 tấn”; P.106c: “Cấm xe chở hàng nguy hiểm”.",
    "tip": "",
    "image": "images/questions/q335.png"
  },
  {
    "id": 332,
    "chapter": 5,
    "isCritical": false,
    "question": "Gặp biển nào xe xích lô được phép đi vào?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 1 và biển 2."
    ],
    "answer": 4,
    "explanation": "BIển 1 và 2: P.111 (b,c) “Cấm xe ba bánh loại có động cơ”: Biển 3: P.111d “Cấm xe ba bánh loại không có động cơ”. Nên đáp án Biển 1 và Biển 2 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q336.png"
  },
  {
    "id": 333,
    "chapter": 5,
    "isCritical": false,
    "question": "Gặp biển nào xe lam, xe xích lô máy được phép đi vào?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 3,
    "explanation": "BIển 1 và 2: P.111 (b,c) “Cấm xe ba bánh loại có động cơ”: Biển 3: P.111d “Cấm xe ba bánh loại không có động cơ”. Nên Biển 3 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q336.png"
  },
  {
    "id": 334,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "Đường cấm súc vật vận tải hàng hóa.",
      "Đường cấm súc vật vận tải hành khách.",
      "Đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua."
    ],
    "answer": 3,
    "explanation": "Để báo đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua, đặt biển số P.114 “Cấm xe vật nuôi kéo”.",
    "tip": "",
    "image": "images/questions/q338.png"
  },
  {
    "id": 335,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "Tốc độ tối đa cho phép về ban đêm cho các phương tiện là 70 km/h.",
      "Tốc độ tối thiểu cho phép về ban đêm cho các phương tiện là 70 km/h."
    ],
    "answer": 1,
    "explanation": "Biển số P.127a “Tốc độ tối đa cho phép về ban đêm”.",
    "tip": "",
    "image": "images/questions/q339.png"
  },
  {
    "id": 336,
    "chapter": 5,
    "isCritical": false,
    "question": "Khi gặp các biển này xe ưu tiên theo luật định (có tải trọng hay chiều cao toàn bộ vượt quá chỉ số ghi trên biển) có được phép đi qua hay không?",
    "options": [
      "Được phép.",
      "Không được phép."
    ],
    "answer": 2,
    "explanation": "P.117 “Hạn chế chiều cao”, P.116 “Hạn chế tải trọng trên trục xe”, P.115 “Hạn chế trọng tải toàn bộ xe”. Cả 3 biển này đều áp dụng với xe ưu tiên.",
    "tip": "",
    "image": "images/questions/q340.png"
  },
  {
    "id": 337,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào hạn chế chiều cao của xe và hàng?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 1,
    "explanation": "P.117 “Hạn chế chiều cao”, P.116 “Hạn chế tải trọng trên trục xe”, P.115 “Hạn chế trọng tải toàn bộ xe”. Biển 1 hạn chế chiều cao.",
    "tip": "",
    "image": "images/questions/q340.png"
  },
  {
    "id": 338,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển số 2 có ý nghĩa như thế nào?",
    "options": [
      "Cho phép xe ô tô có tải trọng trục lớn hơn 7 tấn đi qua.",
      "Cho phép xe ô tô có tải trọng trên trục xe từ 7 tấn trở xuống đi qua."
    ],
    "answer": 2,
    "explanation": "P.117 “Hạn chế chiều cao”, P.116 “Hạn chế tải trọng trên trục xe”, P.115 “Hạn chế trọng tải toàn bộ xe”. Biển 2 hạn chế tải trọng trên trục xe.",
    "tip": "",
    "image": "images/questions/q340.png"
  },
  {
    "id": 339,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển số 3 có ý nghĩa như thế nào?",
    "options": [
      "Cấm các loại xe có tải trọng toàn bộ trên 10 tấn đi qua.",
      "Hạn chế khối lượng hàng hóa chở trên xe.",
      "Hạn chế tải trọng trên trục xe."
    ],
    "answer": 1,
    "explanation": "P.117 “Hạn chế chiều cao”, P.116 “Hạn chế tải trọng trên trục xe”, P.115 “Hạn chế trọng tải toàn bộ xe”. Biển 3 hạn chế tải trọng toàn bộ xe.",
    "tip": "",
    "image": "images/questions/q340.png"
  },
  {
    "id": 340,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm máy kéo kéo theo rơ moóc?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: P.108 “Cấm ô tô kéo moóc”; Biển 2: P.109 “Cấm máy kéo”. Đáp án đúng là cả 2 biển.",
    "tip": "",
    "image": "images/questions/q344.png"
  },
  {
    "id": 341,
    "chapter": 5,
    "isCritical": false,
    "question": "Khi gặp biển số 1, xe ô tô tải có được đi vào không?",
    "options": [
      "Được đi vào.",
      "Không được đi vào."
    ],
    "answer": 1,
    "explanation": "Biển 1: P.108 “Cấm ô tô kéo moóc” không áp dụng với xe ô tô tải (không kéo rơ moóc).",
    "tip": "",
    "image": "images/questions/q345.png"
  },
  {
    "id": 342,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào không có hiệu lực đối với xe ô tô tải không kéo moóc?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 2 và biển 3.",
      "Biển 1 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 1,
    "explanation": "Biển 1: P.108 “Cấm ô tô kéo moóc” không áp dụng với ô tô tải không kéo rơ moóc;<br/>Biển 2: P.109 “Cấm máy kéo” không áp dụng với xe ô tô tải.<br/>Biển 3: P.103a “Cấm ô tô” thì cấm ô tô tải.<br/>Do đó đáp án đúng là biển 1 và 2.",
    "tip": "",
    "image": "images/questions/q346.png"
  },
  {
    "id": 343,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cấm máy kéo?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: P.108 “Cấm ô tô kéo moóc”; Biển 2: P.109 “Cấm máy kéo”; Biển 3: P.106a “Cấm ô tô tải” thì cấm máy kéo. Nên đáp án đúng là Biển 2 và Biển 3.",
    "tip": "",
    "image": "images/questions/q347.png"
  },
  {
    "id": 344,
    "chapter": 5,
    "isCritical": false,
    "question": "Khi gặp biển này, xe mô tô ba bánh chở hàng có được phép rẽ trái hoặc rẽ phải hay không?",
    "options": [
      "Được phép.",
      "Không được phép."
    ],
    "answer": 2,
    "explanation": "P.105 “Cấm xe ô tô và xe máy”. Biển phụ S.503b để chỉ đồng thời hai hướng tác dụng (trái và phải). Nên cấm xe mô tô (gồm cả ba bánh) và xe máy rẽ trái và rẽ phải.",
    "tip": "",
    "image": "images/questions/q348.png"
  },
  {
    "id": 345,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển này có hiệu lực đối với xe mô tô hai bánh, ba bánh chở hàng không?",
    "options": [
      "Có.",
      "Không."
    ],
    "answer": 1,
    "explanation": "P.105 “Cấm xe ô tô và xe máy”. Biển phụ S.503b để chỉ đồng thời hai hướng tác dụng (trái và phải). Cấm xe máy rẽ trái và rẽ phải thì gồm cả xe ba bánh.",
    "tip": "",
    "image": "images/questions/q348.png"
  },
  {
    "id": 346,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "Cấm xe cơ giới (trừ xe ưu tiên theo luật định) đi thẳng.",
      "Cấm các loại xe cơ giới và xe mô tô (trừ xe ưu tiên theo luật định) đi về bên trái và bên phải.",
      "Hướng trái và phải không cấm xe cơ giới."
    ],
    "answer": 2,
    "explanation": "P.105 “Cấm xe ô tô và xe máy”. Biển phụ S.503b để chỉ đồng thời hai hướng tác dụng (trái và phải). Cấm xe cơ giới và xe máy (trừ xe ưu tiên) đi về bên trái và bên phải.",
    "tip": "",
    "image": "images/questions/q348.png"
  },
  {
    "id": 347,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển phụ đặt dưới biển cấm bóp còi có ý nghĩa như thế nào?",
    "options": [
      "Báo khoảng cách đến nơi cấm bóp còi.",
      "Chiều dài đoạn đường cấm bóp còi từ nơi đặt biển.",
      "Báo cấm dùng còi có độ vang xa 500m."
    ],
    "answer": 2,
    "explanation": "Biển phụ là biển S.501 “Phạm vi tác dụng của biển” xác định chiều dài áp dụng biển chính từ nơi đặt biển.",
    "tip": "",
    "image": "images/questions/q351.png"
  },
  {
    "id": 348,
    "chapter": 5,
    "isCritical": false,
    "question": "Chiều dài đoạn đường 500 m từ nơi đặt biển này, người lái xe có được phép bấm còi không?",
    "options": [
      "Được phép.",
      "Không được phép."
    ],
    "answer": 2,
    "explanation": "Biển phụ là biển S.501 “Phạm vi tác dụng của biển” xác định chiều dài áp dụng biển chính từ nơi đặt biển.",
    "tip": "",
    "image": "images/questions/q351.png"
  },
  {
    "id": 349,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào xe mô tô hai bánh được đi vào?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3."
    ],
    "answer": 2,
    "explanation": "Biển chính là P.101 “Đường cấm”, có biển phụ thì áp dụng cấm theo biển phụ. Nên Biển 1 và Biển 3 không áp dụng với xe mô tô là câu trả lời đúng.",
    "tip": "",
    "image": "images/questions/q353.png"
  },
  {
    "id": 350,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào xe mô tô hai bánh không được đi vào?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển chính là P.101 “Đường cấm”, có biển phụ thì áp dụng kèm theo biển phụ. Nên Biển 2 áp dụng với xe mô tô là câu trả lời đúng.",
    "tip": "",
    "image": "images/questions/q353.png"
  },
  {
    "id": 351,
    "chapter": 5,
    "isCritical": false,
    "question": "Ba biển này có hiệu lực như thế nào?",
    "options": [
      "Cấm các loại xe ở biển phụ đi vào.",
      "Cấm các loại xe cơ giới đi vào trừ loại xe ở biển phụ."
    ],
    "answer": 1,
    "explanation": "Biển chính là P.101 “Đường cấm”, có biển phụ thì áp dụng cấm các loại xe theo biển phụ.",
    "tip": "",
    "image": "images/questions/q353.png"
  },
  {
    "id": 352,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu chiều dài đoạn đường phải giữ cự ly tối thiểu giữa hai xe?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 1,
    "explanation": "Biển phụ 1: S.501 “Phạm vi tác dụng của biển”; Biển phụ 2: S.502 “Khoảng cách đến đối tượng báo hiệu”. Biển 1 báo hiệu chiều dài đoạn đường áp dụng biển chính.",
    "tip": "",
    "image": "images/questions/q356.png"
  },
  {
    "id": 353,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu khoảng cách thực tế từ nơi đặt biển đến nơi cần cự ly tối thiểu giữa hai xe?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 2,
    "explanation": "Biển phụ 1: S.501 “Phạm vi tác dụng của biển”; Biển phụ 2: S.502 “Khoảng cách đến đối tượng báo hiệu”. Biển 2 báo hiệu khoảng cách thực tế đến nơi áp dụng biển chính.",
    "tip": "",
    "image": "images/questions/q356.png"
  },
  {
    "id": 354,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "Cấm dừng xe về hướng bên trái.",
      "Cấm dừng và đỗ xe theo hướng bên phải.",
      "Được phép đỗ xe và dừng xe theo hướng bên phải."
    ],
    "answer": 2,
    "explanation": "P.130 “Cấm dừng xe và đỗ xe”, biển phụ chỉ hướng áp dụng. Cấm dừng và đỗ xe theo hướng bên phải.",
    "tip": "",
    "image": "images/questions/q358.png"
  },
  {
    "id": 355,
    "chapter": 5,
    "isCritical": false,
    "question": "Theo hướng bên phải có được phép đỗ xe, dừng xe không?",
    "options": [
      "Không được phép.",
      "Được phép."
    ],
    "answer": 1,
    "explanation": "P.130 “Cấm dừng xe và đỗ xe”, biển phụ chỉ hướng áp dụng. Cấm dừng và đỗ xe theo hướng bên phải.",
    "tip": "",
    "image": "images/questions/q358.png"
  },
  {
    "id": 356,
    "chapter": 5,
    "isCritical": false,
    "question": "Gặp biển này, xe ô tô sơ mi rơ moóc có chiều dài toàn bộ kể cả xe, moóc và hàng lớn hơn trị số ghi trên biển có được phép đi vào hay không?",
    "options": [
      "Không được phép.",
      "Được phép."
    ],
    "answer": 1,
    "explanation": "Biển P.120 “Hạn chế chiều dài xe cơ giới kéo theo rơ-moóc hoặc sơ-mi rơ moóc”.",
    "tip": "",
    "image": "images/questions/q360.png"
  },
  {
    "id": 357,
    "chapter": 5,
    "isCritical": false,
    "question": "Xe ô tô chở hàng vượt quá phía trước và sau thùng xe, mỗi phía quá 10% chiều dài toàn bộ thân xe, tổng chiều dài xe (cả hàng) từ trước đến sau nhỏ hơn trị số ghi trên biển thì có được phép đi vào không?",
    "options": [
      "Không được phép.",
      "Được phép."
    ],
    "answer": 1,
    "explanation": "Biển P.120 “Hạn chế chiều dài xe cơ giới kéo theo rơ-moóc hoặc sơ-mi rơ moóc”.",
    "tip": "",
    "image": "images/questions/q360.png"
  },
  {
    "id": 358,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "Cấm ô tô buýt.",
      "Cấm xe ô tô khách.",
      "Cấm xe ô tô con."
    ],
    "answer": 2,
    "explanation": "Biển P.107a “Cấm xe ô tô khách”.",
    "tip": "",
    "image": "images/questions/q362.png"
  },
  {
    "id": 359,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "Hạn chế chiều cao của xe và hàng.",
      "Hạn chế chiều ngang của xe và hàng.",
      "Hạn chế chiều dài của xe và hàng."
    ],
    "answer": 2,
    "explanation": "Biển P.118 “Hạn chế chiều ngang xe”: Để báo hạn chế chiều ngang của xe và hàng.",
    "tip": "",
    "image": "images/questions/q363.png"
  },
  {
    "id": 360,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào là biển “Tốc độ tối đa cho phép về ban đêm”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 1,
    "explanation": "Biển 1: P.127a “Tốc độ tối đa cho phép về ban đêm”; Biển 2: P.127 “Tốc độ tối đa cho phép”.",
    "tip": "",
    "image": "images/questions/q364.png"
  },
  {
    "id": 361,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển báo nào báo hiệu bắt đầu đoạn đường vào phạm vi khu dân cư, các phương tiện tham gia giao thông phải tuân theo các quy định đi đường được áp dụng ở khu đông dân cư?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "answer": 1,
    "explanation": "Biển 1: R.420 “Bắt đầu khu đông dân cư”; Biển 2: R.421 “Hết khu đông dân cư”.",
    "tip": "",
    "image": "images/questions/q365.png"
  },
  {
    "id": 362,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu hạn chế tốc độ của phương tiện không vượt quá trị số ghi trên biển?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "answer": 2,
    "explanation": "Biển 1: R.306 “Tốc độ tối thiểu cho phép”; Biển 2: P.127 “Tốc độ tối đa cho phép”.",
    "tip": "",
    "image": "images/questions/q362n.png"
  },
  {
    "id": 363,
    "chapter": 5,
    "isCritical": false,
    "question": "Trong các biển báo dưới đây biển nào báo hiệu “Kết thúc đường cao tốc”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: I.401 “Bắt đầu đường ưu tiên”: Biển 2: IE.453c “Hết đường cao tốc”; Biển 3: R. 404a “Hết đoạn đường dành cho xe ô tô”.",
    "tip": "",
    "image": "images/questions/q363n.png"
  },
  {
    "id": 364,
    "chapter": 5,
    "isCritical": false,
    "question": "Số 50 ghi trên biển báo dưới đây có ý nghĩa như thế nào?",
    "options": [
      "Tốc độ tối đa các xe cơ giới được phép chạy.",
      "Tốc độ tối thiểu các xe cơ giới được phép chạy."
    ],
    "answer": 1,
    "explanation": "Ghi tốc độ tối đa cho phép của biển P.127 “Tốc độ tối đa cho phép”.",
    "tip": "",
    "image": "images/questions/q368.png"
  },
  {
    "id": 365,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào dưới đây chỉ dẫn bắt đầu đường cao tốc phân làn đường có tốc độ khác nhau?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.238 “Đường cao tốc phía trước”; Biển 2: IE.452 chỉ dẫn bắt đầu đường cao tốc, giá trị hạn chế tốc độ tối đa và tốc độ tối thiểu.",
    "tip": "",
    "image": "images/questions/q365n.png"
  },
  {
    "id": 366,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển báo dưới đây có ý nghĩa như thế nào?",
    "options": [
      "Báo hiệu tốc độ tối đa cho phép các xe cơ giới chạy.",
      "Báo hiệu tốc độ tối thiểu cho phép các xe cơ giới chạy."
    ],
    "answer": 2,
    "explanation": "Biển 1: R.306 “Tốc độ tối thiểu cho phép”.",
    "tip": "",
    "image": "images/questions/q370.png"
  },
  {
    "id": 367,
    "chapter": 5,
    "isCritical": false,
    "question": "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: W.224 “Đường người đi bộ cắt ngang”; Biển 2: P.112 “Cấm người đi bộ”; Biển 3: R.305 “Đường dành cho người đi bộ”. Biển 1 báo ưu tiên cho người đi bộ nên phải nhường đường.",
    "tip": "",
    "image": "images/questions/q371.png"
  },
  {
    "id": 368,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?",
    "options": [
      "Biển 1.",
      "Biển 1 và biển 3.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: W.224 “Đường người đi bộ cắt ngang”; Biển 2: P.112 “Cấm người đi bộ”; Biển 3: R.305 “Đường dành cho người đi bộ”. Biển 3 cấm các loại xe đi vào đường dành cho người đi bộ.",
    "tip": "",
    "image": "images/questions/q371.png"
  },
  {
    "id": 369,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Đường dành cho xe thô sơ”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: R. 304 “Đường dành cho xe thô sơ”; Biển 2: P.110a “Cấm xe đạp”; Biển 3: W.226 “Đường người đi xe đạp cắt ngang”.",
    "tip": "",
    "image": "images/questions/q373.png"
  },
  {
    "id": 370,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu sắp đến chỗ giao nhau nguy hiểm?",
    "options": [
      "Biển 1.",
      "Biển 1 và biển 2.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 4,
    "explanation": "Biển 1: W.210 “Giao nhau với đường sắt có rào chắn”; Biển 2: W.208 “Giao nhau với đường ưu tiên”; Biển 3: W.209 “Giao nhau có tín hiệu đèn”.",
    "tip": "",
    "image": "images/questions/q374.png"
  },
  {
    "id": 371,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Giao nhau với đường sắt có rào chắn”?",
    "options": [
      "Biển 1.",
      "Biển 2 và biển 3.",
      "Biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: W.210 “Giao nhau với đường sắt có rào chắn”; Biển 2: W.208 “Giao nhau với đường ưu tiên”; Biển 3: W.209 “Giao nhau có tín hiệu đèn”.",
    "tip": "",
    "image": "images/questions/q374.png"
  },
  {
    "id": 372,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Giao nhau có tín hiệu đèn”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: W.210 “Giao nhau với đường sắt có rào chắn”; Biển 2: W.208 “Giao nhau với đường ưu tiên”; Biển 3: W.209 “Giao nhau có tín hiệu đèn”.",
    "tip": "",
    "image": "images/questions/q374.png"
  },
  {
    "id": 373,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu nguy hiểm giao nhau với đường sắt?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.210 “Giao nhau với đường sắt có rào chắn”; Biển 2: W.234 “Giao nhau với đường hai chiều”; Biển 3: W.242a “Nơi đường sắt giao vuông góc với đường bộ”.",
    "tip": "",
    "image": "images/questions/q377.png"
  },
  {
    "id": 374,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu đường bộ giao nhau với đường sắt không có rào chắn?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: W.210 “Giao nhau với đường sắt có rào chắn”; Biển 2: W.211a “Giao nhau với đường sắt không có rào chắn”; Biển 3: W.242a “Nơi đường sắt giao vuông góc với đường bộ” bổ sung cho biển W.211a. Nên cả 2 biển 2 và 3 đều đúng.",
    "tip": "",
    "image": "images/questions/q378.png"
  },
  {
    "id": 375,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu sắp đến chỗ giao nhau giữa đường bộ và đường sắt?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 1 và biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: Biển 211a Giao nhau với đường sắt không có rào chắn.<br/>Biển 2: Biển 208 Giao nhau với đường ưu tiên.<br/>Biển 3: Biển 211b Giao nhau với tàu điện.",
    "tip": "",
    "image": "images/questions/q379.png"
  },
  {
    "id": 376,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Cửa chui”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.237 “Cầu vồng”; Biển 2: W.218 “Cửa chui”; Biển 3: W.240 “Đường hầm”. Đáp án đúng là đáp án 2.",
    "tip": "",
    "image": "images/questions/q380.png"
  },
  {
    "id": 377,
    "chapter": 5,
    "isCritical": false,
    "question": "Hai biển này có ý nghĩa như thế nào?",
    "options": [
      "Để chỉ nơi đường sắt giao vuông góc với đường bộ không có rào chắn.",
      "Để báo trước sắp đến vị trí giao cắt đường bộ với đường sắt cùng mức, không vuông góc và không có người gác, không có rào chắn.",
      "Nơi đường sắt giao nhau với đường bộ."
    ],
    "answer": 1,
    "explanation": "Hai biển này là 242a và 242b “Nơi đường sắt giao nhau vuông góc với đường bộ” bổ sung cho biển 211 “Giao nhau với đường sắt không có rào chắn”. Do đó câu trả lời 1 đúng.",
    "tip": "",
    "image": "images/questions/q381.png"
  },
  {
    "id": 378,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Nơi đường sắt giao vuông góc với đường bộ”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 1 và biển 2."
    ],
    "answer": 4,
    "explanation": "Biển 1 và Biển 2 là 242a và 242b “Nơi đường sắt giao nhau vuông góc với đường bộ” bổ sung cho biển 211 “Giao nhau với đường sắt không có rào chắn”.<br/> Biển 3 là 243a “Nơi giao nhau không vuông góc với đường bộ”.",
    "tip": "",
    "image": "images/questions/q382.png"
  },
  {
    "id": 379,
    "chapter": 5,
    "isCritical": false,
    "question": "Các biển này có ý nghĩa như thế nào?",
    "options": [
      "Nơi đường sắt giao nhau với đường bộ.",
      "Nơi đường sắt giao vuông góc với đường bộ.",
      "Để báo trước sắp đến vị trí đường sắt giao không vuông góc với đường bộ, không có người gác và không có rào chắn."
    ],
    "answer": 3,
    "explanation": "Ba biển này là 243a, a43b và 243c Nơi giao nhau không vuông góc với đường sắt, không có người gác và không có rào chắn với đường sắt.",
    "tip": "",
    "image": "images/questions/q383.png"
  },
  {
    "id": 380,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Hết đoạn đường ưu tiên”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 3,
    "explanation": "Biển 1: W.207a “Giao nhau với đường không ưu tiên”;<br/>Biển 2: W.208 “Giao nhau với đường ưu tiên”;<br/>Biển 3: I.402 “Hết đường ưu tiên”.",
    "tip": "",
    "image": "images/questions/q384.png"
  },
  {
    "id": 381,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu, chỉ dẫn xe đi trên đường này được quyền ưu tiên qua nơi giao nhau?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.207a “Giao nhau với đường không ưu tiên”;<br/>Biển 2: W.208 “Giao nhau với đường ưu tiên”;<br/>Biển 3: I.401 “Bắt đầu đường ưu tiên”. Nên Biển 1 và Biển 3 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q385.png"
  },
  {
    "id": 382,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Giao nhau với đường không ưu tiên”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 2 và biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: W.207a “Giao nhau với đường không ưu tiên”;<br/>Biển 2: W.208 “Giao nhau với đường ưu tiên”;<br/>Biển 3: I.401 “Bắt đầu đường ưu tiên”.",
    "tip": "",
    "image": "images/questions/q385.png"
  },
  {
    "id": 383,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Giao nhau với đường ưu tiên”?",
    "options": [
      "Biển 1 và biển 3.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.207a “Giao nhau với đường không ưu tiên”;<br/>Biển 2: W.208 “Giao nhau với đường ưu tiên”;<br/>Biển 3: I.401 “Bắt đầu đường ưu tiên”.",
    "tip": "",
    "image": "images/questions/q385.png"
  },
  {
    "id": 384,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Đường bị thu hẹp”?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 1,
    "explanation": "Biển 1: W.203a “Đường bị hẹp cả hai bên”; Biển 2: W203b “Đường bị hẹp về phía trái”; Biển 3: W.201b “Chỗ ngoặt nguy hiểm vòng bên phải”. Nên đáp án đúng là Biển 1 và Biển 2.",
    "tip": "",
    "image": "images/questions/q388.png"
  },
  {
    "id": 385,
    "chapter": 5,
    "isCritical": false,
    "question": "Khi gặp biển nào, người lái xe phải giảm tốc độ, chú ý xe đi ngược chiều, xe đi ở phía đường bị hẹp phải nhường đường cho xe đi ngược chiều?",
    "options": [
      "Biển 1.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: W.236 “Hết đường đôi”; Biển 2: W203b “Đường bị hẹp về phía trái”; Biển 3: W203c “Đường bị hẹp về phía phải”.<br/>Câu này hỏi về việc đường bị thu hẹp nên câu trả lời đúng là Biển 2 và Biển 3.",
    "tip": "",
    "image": "images/questions/q389.png"
  },
  {
    "id": 386,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Giao nhau với đường ưu tiên”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: W.205a “Đường giao nhau” cùng cấp; Biển 2: W.207a “Giao nhau với đường không ưu tiên”; Biển 3: W.208 “Giao nhau với đường ưu tiên”;",
    "tip": "",
    "image": "images/questions/q390.png"
  },
  {
    "id": 387,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Đường giao nhau” của các tuyến đường cùng cấp?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: W.205a “Đường giao nhau” cùng cấp; Biển 2: W.207a “Giao nhau với đường không ưu tiên”; Biển 3: W.208 “Giao nhau với đường ưu tiên”;",
    "tip": "",
    "image": "images/questions/q390.png"
  },
  {
    "id": 388,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Giao nhau với đường không ưu tiên”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.205a “Đường giao nhau” cùng cấp; Biển 2: W.207a “Giao nhau với đường không ưu tiên”; Biển 3: W.208 “Giao nhau với đường ưu tiên”;",
    "tip": "",
    "image": "images/questions/q390.png"
  },
  {
    "id": 389,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Đường hai chiều”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: W.204 “Đường hai chiều”;<br/>Biển 2: P.132 “Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp”;<br/>Biển 3: I.406 “Được ưu tiên qua đường hẹp”.",
    "tip": "",
    "image": "images/questions/q393.png"
  },
  {
    "id": 390,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu phải giảm tốc độ, nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.204 “Đường hai chiều”;<br/>Biển 2: P.132 “Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp”;<br/>Biển 3: I.406 “Được ưu tiên qua đường hẹp”.",
    "tip": "",
    "image": "images/questions/q393.png"
  },
  {
    "id": 391,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào chỉ dẫn “Được ưu tiên qua đường hẹp”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 2 và biển 3."
    ],
    "answer": 3,
    "explanation": "Biển 1: W.204 “Đường hai chiều”;<br/>Biển 2: P.132 “Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp”;<br/>Biển 3: I.406 “Được ưu tiên qua đường hẹp”.",
    "tip": "",
    "image": "images/questions/q393.png"
  },
  {
    "id": 392,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Đường đôi”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: I.406 “Được ưu tiên qua đường hẹp”; Biển 2: W.235 “Đường đôi”; Biển 3: W.236 “Kết thúc đường đôi”.",
    "tip": "",
    "image": "images/questions/q396.png"
  },
  {
    "id": 393,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Đường đôi”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 3,
    "explanation": "Biển 1: W.204 “Đường hai chiều”; Biển 2: W.234 “Giao nhau với đường hai chiều”; Biển 3: W.235 “Đường đôi”.",
    "tip": "",
    "image": "images/questions/q397.png"
  },
  {
    "id": 394,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Kết thúc đường đôi”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 3,
    "explanation": "Biển 1: W.204 “Đường hai chiều”; Biển 2: W.235 “Đường đôi”; Biển 3: W.236 “Kết thúc đường đôi”.",
    "tip": "",
    "image": "images/questions/q398.png"
  },
  {
    "id": 395,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Giao nhau với đường hai chiều”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: W.234 “Giao nhau với đường hai chiều”; Biển 2: W.235 “Đường đôi”; Biển 3: W.205a “Đường giao nhau” đồng cấp. Biển 1 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q399.png"
  },
  {
    "id": 396,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Đường hai chiều”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.205a “Đường giao nhau” cùng cấp; Biển 2: W.204 “Đường hai chiều”; Biển 3: W.236 “Kết thúc đường đôi”. Biển 2 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q400.png"
  },
  {
    "id": 397,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Giao nhau với đường hai chiều”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.204 “Đường hai chiều”; Biển 2: W.234 “Giao nhau với đường hai chiều”; Biển 3: W.205a “Đường giao nhau” đồng cấp. Đáp án 2 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q401.png"
  },
  {
    "id": 398,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Chú ý chướng ngại vật”?",
    "options": [
      "Biển 1.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.236 “Kết thúc đường đôi”; Biển 2: W.246a “Chú ý chướng ngại vật - Vòng tránh ra hai bên”; Biển 3: W.246c “Chý ý chướng ngại vật - Vòng tránh sang bên phải”. Nên cả 2 biển 2 và 3 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q402.png"
  },
  {
    "id": 399,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào chỉ dẫn cho người tham gia giao thông biết vị trí và khoảng cách có làn đường cứu nạn hay làn thoát xe khẩn cấp?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: I.416 “Đường tránh”; Biển 2: I448 “Làn đường cứu nạn hay làn thoát xe khẩn cấp”. Nên Biển 2 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q403.png"
  },
  {
    "id": 400,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Đường hầm”?",
    "options": [
      "Cả ba biển.",
      "Biển 2.",
      "Biển 2 và biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.218 “Cửa chui”; Biển 2: W.240 “Đường hầm”; Biển 3: W.237 “Cầu vồng”. Nên biển 2 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q404.png"
  },
  {
    "id": 401,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào dưới đây là biển “Cầu hẹp”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.213 “Cầu tạm”; Biển 2: W.212 “Cầu hẹp”; Biển 3: W.214 “Cầu xoay - cầu cất”.",
    "tip": "",
    "image": "images/questions/q405.png"
  },
  {
    "id": 402,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào dưới đây là biển “Cầu quay - cầu cất”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 3,
    "explanation": "Biển 1: W.213 “Cầu tạm”; Biển 2: W.212 “Cầu hẹp”; Biển 3: W.214 “Cầu xoay - cầu cất”.",
    "tip": "",
    "image": "images/questions/q406.png"
  },
  {
    "id": 403,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào dưới đây là biển “Kè, vực sâu phía trước”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: W.215a “Kè, vực sâu phía trước”;<br/>Biển 2: W.215b “Kè, vực sâu bên đường phía bên phải”;<br/>Biển 3: W.215c “Kè, vực sâu bên đường phía bên trái”.",
    "tip": "",
    "image": "images/questions/q407.png"
  },
  {
    "id": 404,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào sau đây là biển “Kè, vực sâu bên đường phía bên trái”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 1 và biển 2."
    ],
    "answer": 3,
    "explanation": "Biển 1: W.215a “Kè, vực sâu phía trước”;<br/>Biển 2: W.215b “Kè, vực sâu bên đường phía bên phải”;<br/>Biển 3: W.215c “Kè, vực sâu bên đường phía bên trái”.",
    "tip": "",
    "image": "images/questions/q407.png"
  },
  {
    "id": 405,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào sau đây là biển “Kè, vực sâu bên đường phía bên phải”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.215a “Kè, vực sâu phía trước”;<br/>Biển 2: W.215b “Kè, vực sâu bên đường phía bên phải”;<br/>Biển 3: W.215c “Kè, vực sâu bên đường phía bên trái”.",
    "tip": "",
    "image": "images/questions/q407.png"
  },
  {
    "id": 406,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào sau đây là biển “Đường trơn”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: W201c “Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái”; Biển 2: W.222a “Đường trơn”; Biển 3: W217 “Bến phà”.",
    "tip": "",
    "image": "images/questions/q410.png"
  },
  {
    "id": 407,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào sau đây là biển “Lề đường nguy hiểm”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.215b “Kè, vực sâu bên đường phía bên phải”; Biển 2: W.222b “Lề đường nguy hiểm”; Biển 3: W201c “Chỗ ngoặt nguy hiểm có nguy cơ lật xe”.",
    "tip": "",
    "image": "images/questions/q411.png"
  },
  {
    "id": 408,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào sau đây báo trước gần tới đoạn đường đang tiến hành thi công sửa chữa?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Không biển nào."
    ],
    "answer": 1,
    "explanation": "Biển 1: W.227 “Công trường”; Biển 2: W.228b “Đá lở”; Biển 3: W.228c “Sỏi đá bắn lên”.",
    "tip": "",
    "image": "images/questions/q412.png"
  },
  {
    "id": 409,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào sau đây cảnh báo nguy hiểm đoạn đường thường xảy ra tai nạn?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.241 “Ùn tắc giao thông”; Biển 2: W.244 “Đoạn đường hay xảy ra tai nạn”; Biển 3: W.201c “Chỗ ngoặt nguy hiểm có nguy cơ lật xe”.",
    "tip": "",
    "image": "images/questions/q413.png"
  },
  {
    "id": 410,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào dưới đây báo hiệu đoạn đường hay xảy ra ùn tắc giao thông?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.240 “Đường hầm”; Biển 2: W.241 “Ùn tắc giao thông”; Biển 3: W.244 “Đoạn đường hay xảy ra tai nạn”",
    "tip": "",
    "image": "images/questions/q414.png"
  },
  {
    "id": 411,
    "chapter": 5,
    "isCritical": false,
    "question": "Gặp biển nào người tham gia giao thông phải đi chậm và thận trọng đề phòng khả năng xuất hiện và di chuyển bất ngờ của trẻ em trên mặt đường?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.224 “Đường người đi bộ cắt ngang”; Biển 2: W.225 “Trẻ em”.",
    "tip": "",
    "image": "images/questions/q415.png"
  },
  {
    "id": 412,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào chỉ dẫn nơi bắt đầu đoạn đường dành cho người đi bộ?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.224 “Đường người đi bộ cắt ngang”; Biển 2: I.423c “Điểm bắt đầu đường đi bộ”; Biển 3: W.225 “Trẻ em”.",
    "tip": "",
    "image": "images/questions/q416.png"
  },
  {
    "id": 413,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào dưới đây báo hiệu gần đến đoạn đường thường có trẻ em đi ngang qua?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.224 “Đường người đi bộ cắt ngang”; Biển 2: W.225 “Trẻ em”; Biển 3: W.226 “Đường người đi xe đạp cắt ngang”.",
    "tip": "",
    "image": "images/questions/q417.png"
  },
  {
    "id": 414,
    "chapter": 5,
    "isCritical": false,
    "question": "Gặp biển nào dưới đây người tham gia giao thông cần phải điều chỉnh tốc độ xe chạy cho thích hợp, đề phòng gió ngang thổi mạnh gây lật xe?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 1,
    "explanation": "Biển 1: W.232 “Gió ngang”; Biển 2: W201c “Chỗ ngoặt nguy hiểm có nguy cơ lật xe”.",
    "tip": "",
    "image": "images/questions/q418.png"
  },
  {
    "id": 415,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào sau đây là biển “Dốc xuống nguy hiểm”?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "answer": 1,
    "explanation": "Biển 1: W.219 “Dốc xuống nguy hiểm”; Biển 2: W.220 “Dốc lên nguy hiểm”.",
    "tip": "",
    "image": "images/questions/q420.png"
  },
  {
    "id": 416,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào sau đây là biển “Dốc lên nguy hiểm”?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "answer": 2,
    "explanation": "Biển 1: W.219 “Dốc xuống nguy hiểm”; Biển 2: W.220 “Dốc lên nguy hiểm”.",
    "tip": "",
    "image": "images/questions/q420.png"
  },
  {
    "id": 417,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái.",
      "Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên trái khi đường cong vòng sang phải."
    ],
    "answer": 1,
    "explanation": "Biển W201c “Chỗ ngoặt nguy hiểm có nguy cơ lật xe bên phải khi đường cong vòng sang trái”.",
    "tip": "",
    "image": "images/questions/q421.png"
  },
  {
    "id": 418,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "Báo trước đoạn đường có gió ngang.",
      "Báo trước đoạn đường trơn trượt.",
      "Báo trước sắp đến bến phà."
    ],
    "answer": 3,
    "explanation": "Biển W.217 “Bến phà”.",
    "tip": "",
    "image": "images/questions/q422.png"
  },
  {
    "id": 419,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "Báo hiệu đường có ổ gà, lồi lõm.",
      "Báo hiệu đường có gồ giảm tốc phía trước."
    ],
    "answer": 1,
    "explanation": "Biển W.221a “Đường ổ gà, sống trâu”.",
    "tip": "",
    "image": "images/questions/q423.png"
  },
  {
    "id": 420,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "Báo hiệu đường có ổ gà, lồi lõm.",
      "Báo hiệu đường có gồ giảm tốc phía trước."
    ],
    "answer": 2,
    "explanation": "Biển W221b “Đường có sóng mấp mô nhân tạo”.",
    "tip": "",
    "image": "images/questions/q424.png"
  },
  {
    "id": 421,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển báo dưới đây có ý nghĩa như thế nào?",
    "options": [
      "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
      "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
      "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm."
    ],
    "answer": 3,
    "explanation": "Biển W.228d “Nền đường yếu”.",
    "tip": "",
    "image": "images/questions/q425.png"
  },
  {
    "id": 422,
    "chapter": 5,
    "isCritical": false,
    "question": "Các biển báo này có ý nghĩa như thế nào?",
    "options": [
      "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
      "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
      "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm."
    ],
    "answer": 1,
    "explanation": "Biển số W.228 (a, b) “Đá lở”.",
    "tip": "",
    "image": "images/questions/q426.png"
  },
  {
    "id": 423,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "Để báo trước gần tới đoạn đường có hiện tượng đất đá từ trên ta luy dương sụt lở bất ngờ gây nguy hiểm cho xe cộ và người đi đường.",
      "Để báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi văng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
      "Để cảnh báo những đoạn nền đường yếu, đoạn đường đang theo dõi lún mà việc vận hành xe ở tốc độ cao có thể gây nguy hiểm."
    ],
    "answer": 2,
    "explanation": "Biển số W.228c “Sỏi đá bắn lên”.",
    "tip": "",
    "image": "images/questions/q427.png"
  },
  {
    "id": 424,
    "chapter": 5,
    "isCritical": false,
    "question": "Gặp biển báo này người lái xe phải xử lý thế nào?",
    "options": [
      "Đi chậm, quan sát và dừng lại nếu gặp gia súc trên đường.",
      "Bấm còi to để gia súc tránh đường và nhanh chóng di chuyển qua đoạn đường có gia súc."
    ],
    "answer": 1,
    "explanation": "Biển số W.230 “Gia súc”.",
    "tip": "",
    "image": "images/questions/q428.png"
  },
  {
    "id": 425,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển báo này có ý nghĩa như thế nào?",
    "options": [
      "Báo hiệu khu vực nguy hiểm thường xuyên có sét đánh.",
      "Báo hiệu khu vực có đường dây điện cắt ngang phía trên tuyến đường."
    ],
    "answer": 2,
    "explanation": "Biển số W.239a “Đường cáp điện ở phía trên”.",
    "tip": "",
    "image": "images/questions/q429.png"
  },
  {
    "id": 426,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu các phương tiện phải đi đúng làn đường quy định và tuân thủ tốc độ tối đa cho phép?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: P.127b “Biển ghép tốc độ tối đa cho phép trên từng làn đường”;<br/>Biển 2: P.127c “Biển ghép tốc độ tối đa cho phép theo phương tiện, trên từng làn đường”.<br/>Biển 2 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q430.png"
  },
  {
    "id": 427,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu các phương tiện phải tuân thủ tốc độ tối đa cho phép trên từng làn đường?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: P.127b “Biển ghép tốc độ tối đa cho phép trên từng làn đường”;<br/>Biển 2: P.127c “Biển ghép tốc độ tối đa cho phép theo phương tiện, trên từng làn đường”.<br/>Nên cả 2 biển đều là đáp án đúng (Quy định tốc độ tối đa theo làn đường).",
    "tip": "",
    "image": "images/questions/q430.png"
  },
  {
    "id": 428,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Đường dành cho xe ô tô”?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "answer": 1,
    "explanation": "Biển 1: R.403a “Đường dành cho xe ôtô”;<br/>Biển 2: R.404a “Hết đoạn đường dành cho xe ôtô”.",
    "tip": "",
    "image": "images/questions/q432.png"
  },
  {
    "id": 429,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Hết đoạn đường dành cho xe ô tô”?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "answer": 2,
    "explanation": "Biển 1: R.403a “Đường dành cho xe ôtô”;<br/>Biển 2: R.404a “Hết đoạn đường dành cho xe ôtô”.",
    "tip": "",
    "image": "images/questions/q432.png"
  },
  {
    "id": 430,
    "chapter": 5,
    "isCritical": false,
    "question": "Khi gặp biển nào thì các phương tiện không được đi vào, trừ xe ô tô và xe mô tô?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "answer": 1,
    "explanation": "Biển 1: R.403b “Đường dành cho xe ôtô, xe máy”;<br/>Biển 2: R.404b “Hết đoạn đường dành cho xe ôtô, xe máy”.",
    "tip": "",
    "image": "images/questions/q434.png"
  },
  {
    "id": 431,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "Chỉ hướng đi phải theo.",
      "Biển báo hiệu cho người lái xe biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường phải theo.",
      "Chỉ hướng đường phải theo."
    ],
    "answer": 2,
    "explanation": "Biển số R.411 “Hướng đi trên mỗi làn đường phải theo”.",
    "tip": "",
    "image": "images/questions/q435.png"
  },
  {
    "id": 432,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào (đặt trước ngã ba, ngã tư) cho phép xe được rẽ sang hướng khác?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Không biển nào."
    ],
    "answer": 3,
    "explanation": "Biển 1: R.301a “Hướng đi phải theo” chỉ được đi thẳng đặt trước ngã ba, ngã tư;<br/>Biển 2: R.301h “Hướng đi phải theo” chỉ được rẽ trái hoặc rẽ phải đặt sau ngã ba, ngã tư;<br/>Nên đáp án đúng là không có biển nào.",
    "tip": "",
    "image": "images/questions/q436.png"
  },
  {
    "id": 433,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Hướng đi thẳng phải theo”?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "answer": 1,
    "explanation": "Biển 1: R.301a “Hướng đi phải theo” chỉ được đi thẳng đặt trước ngã ba, ngã tư;<br/>Biển 2: I.407a “Đường một chiều” không liên quan hướng đi phải theo.<br/>Nên Biển 1 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q437.png"
  },
  {
    "id": 434,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Đường một chiều”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: R.301a “Hướng đi phải theo” chỉ được đi thẳng đặt trước ngã ba, ngã tư;<br/>Biển 2: I.407a “Đường một chiều”;<br/>Nên Biển 2 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q437.png"
  },
  {
    "id": 435,
    "chapter": 5,
    "isCritical": false,
    "question": "Trong các biển dưới đây biển nào là biển “Hết tốc độ tối đa cho phép”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "answer": 1,
    "explanation": "Biển 1: DP134 “Hết hạn chế tốc độ tối đa”; Biển 2: DP135 “Hết mọi lệnh cấm”; Biển 3: R307 “Hết hạn chế tốc độ tối thiểu”. Nên Biển 1 là biển “Hết hạn chế tốc độ tối đa”.<br/>Chú ý câu này hỏi ý nghĩa của biển.",
    "tip": "",
    "image": "images/questions/q439.png"
  },
  {
    "id": 436,
    "chapter": 5,
    "isCritical": false,
    "question": "Hiệu lực của biển “Tốc độ tối đa cho phép” hết tác dụng khi gặp biển nào dưới đây?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 1 và biển 2."
    ],
    "answer": 4,
    "explanation": "Biển 1: DP134 “Hết hạn chế tốc độ tối đa”; Biển 2: DP135 “Hết mọi lệnh cấm”; Biển 3: R307 “Hết hạn chế tốc độ tối thiểu”. Nên Biển 1 và Biển 2 là đều hết hạn chế tốc độ tối đa.<br/>Chú ý câu hỏi các biển hết hạn chế, không phải ý nghĩa của biển.",
    "tip": "",
    "image": "images/questions/q439.png"
  },
  {
    "id": 437,
    "chapter": 5,
    "isCritical": false,
    "question": "Trong các biển dưới đây biển nào là biển “Hết tốc độ tối thiểu”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: DP134 “Hết hạn chế tốc độ tối đa”; Biển 2: DP135 “Hết mọi lệnh cấm”; Biển 3: R307 “Hết hạn chế tốc độ tối thiểu”. Nên Biển 3 là biển “Hết hạn chế tốc độ tối thiểu”.<br/>Chú ý câu này hỏi ý nghĩa của biển.",
    "tip": "",
    "image": "images/questions/q439.png"
  },
  {
    "id": 438,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào dưới đây báo hiệu hết cấm vượt?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 2 và biển 3."
    ],
    "answer": 4,
    "explanation": "Biển 1: DP.134 “Hết hạn chế tốc độ tối đa”; Biển 2: DP.135 “Hết tất cả các lệnh cấm”; Biển 3: DP.133 “Hết cấm vượt”;<br/>Nên đáp án đúng phải là Biển 2 và Biển 3.",
    "tip": "",
    "image": "images/questions/q442.png"
  },
  {
    "id": 439,
    "chapter": 5,
    "isCritical": false,
    "question": "Trong các biển dưới đây biển nào là biển “Hết mọi lệnh cấm”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Cả ba biển."
    ],
    "answer": 2,
    "explanation": "Biển 1: DP.134 “Hết hạn chế tốc độ tối đa”; Biển 2: DP.135 “Hết tất cả các lệnh cấm”; Biển 3: R.307 “Hết hạn chế tốc độ tối thiểu”.",
    "tip": "",
    "image": "images/questions/q439.png"
  },
  {
    "id": 440,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cho phép được quay đầu xe đi theo hướng ngược lại khi đặt biển trước ngã ba, ngã tư?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Không biển nào."
    ],
    "answer": 3,
    "explanation": "R.301 (a,b,c,d,e,f,g,h) “Hướng đi phải theo”;<br/>Biển 1: R.301e được đặt ở trước nơi đường giao nhau, chỉ được rẽ trái ở phạm vi nơi đường giao nhau đằng sau mặt biển.<br/>Biển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.<br/>Biển 3: R.301g được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng, rẽ trái hoặc quay đầu xe để đi theo hướng ngược lại.<br/>Biển 3 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q444.png"
  },
  {
    "id": 441,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào không cho phép rẽ phải?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 1 và biển 3."
    ],
    "answer": 1,
    "explanation": "R.301 (a,b,c,d,e,f,g,h) “Hướng đi phải theo”;<br/>Biển 1: R.301e được đặt ở trước nơi đường giao nhau, chỉ được rẽ trái ở phạm vi nơi đường giao nhau đằng sau mặt biển.<br/>Biển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.<br/>Biển 3: R.301f được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng hay rẽ phải ở phạm vi nơi đường giao nhau đằng sau mặt biển.<br/>Biển 1 không cho phép rẽ phải là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q445.png"
  },
  {
    "id": 442,
    "chapter": 5,
    "isCritical": false,
    "question": "Khi đến chỗ giao nhau, gặp biển nào thì người lái xe không được cho xe đi thẳng, phải rẽ sang hướng khác?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 1,
    "explanation": "R.301 (a,b,c,d,e,f,g,h) “Hướng đi phải theo”;<br/>Biển 1: R.301e được đặt ở trước nơi đường giao nhau, chỉ được rẽ trái ở phạm vi nơi đường giao nhau đằng sau mặt biển.<br/>Biển 2: R.301h đặt sau ngã ba, ngã tư, chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.<br/>Biển 3: R.301f được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng hay rẽ phải ở phạm vi nơi đường giao nhau đằng sau mặt biển.<br/>Biển 1 và Biển 2 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q445.png"
  },
  {
    "id": 443,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào cho phép quay đầu xe?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: I.409 “Chỗ quay xe” và Biển 2: I.410 “Khu vực quay xe” nên cả 2 biển đều cho phép quay đầu xe.",
    "tip": "",
    "image": "images/questions/q447.png"
  },
  {
    "id": 444,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào chỉ dẫn tên đường trên các tuyến đường đối ngoại?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3.",
      "Biển 1 và biển 2."
    ],
    "answer": 3,
    "explanation": "Biển 1: R.E,9a “Cấm đỗ xe trong khu vực”;<br/>Biển 2: R.E,9b “Cấm đỗ xe theo giờ trong khu vực”.<br/>Biển 3: I.449  “Biển tên đường”.",
    "tip": "",
    "image": "images/questions/q448.png"
  },
  {
    "id": 445,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển số 1 có ý nghĩa như thế nào?",
    "options": [
      "Biển chỉ dẫn hết cấm đỗ xe theo giờ trong khu vực.",
      "Biển chỉ dẫn hết hiệu lực khu vực đỗ xe trên các tuyến đường đối ngoại.",
      "Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại."
    ],
    "answer": 1,
    "explanation": "Biển 1: R.E,10b “Hết cấm đỗ xe theo giờ trong khu vực”;<br/>Biển 2: R.E,10a “Hết cấm đỗ xe trong khu vực”;<br/>Biển 3: R.E,10c: “Hết khu vực đỗ xe”.",
    "tip": "",
    "image": "images/questions/q449.png"
  },
  {
    "id": 446,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển số 3 có ý nghĩa như thế nào?",
    "options": [
      "Biển chỉ dẫn khu vực cấm đỗ xe trên các tuyến đường đối ngoại.",
      "Biển chỉ dẫn khu vực đỗ xe trên các tuyến đường đối ngoại.",
      "Biển hạn chế tốc độ tối đa trong khu vực.",
      "Biển chỉ dẫn hết hiệu lực khu vực cấm đỗ xe theo giờ trên các tuyến đường đối ngoại."
    ],
    "answer": 3,
    "explanation": "Biển 1: R.E,9a “Cấm đỗ xe trong khu vực”; Biển 2: Biển R.E,10c “Hết khu vực đỗ xe”; Biển 3: Biển R.E,9d “Hạn chế tốc độ tối đa trong khu vực”.",
    "tip": "",
    "image": "images/questions/q450.png"
  },
  {
    "id": 447,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Đường phía trước có làn đường dành cho ô tô khách”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: R.412f “Làn đường dành cho xe ôtô”;<br/>Biển 2: I.413a “Đường phía trước có làn đường dành cho ô tô khách”;<br/>Biển 3 I.413c “Rẽ ra đường có làn đường dành cho ô tô khách”.",
    "tip": "",
    "image": "images/questions/q451.png"
  },
  {
    "id": 448,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Rẽ ra đường có làn đường dành cho ô tô khách”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 3,
    "explanation": "Biển 1: R.412f “Làn đường dành cho xe ôtô”;<br/>Biển 2: I.413a “Đường phía trước có làn đường dành cho ô tô khách”;<br/>Biển 3 I.413c “Rẽ ra đường có làn đường dành cho ô tô khách”.",
    "tip": "",
    "image": "images/questions/q451.png"
  },
  {
    "id": 449,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào đặt trên đường chính trước khi đến nơi đường giao nhau để rẽ vào đường cụt?",
    "options": [
      "Biển 1 và 2.",
      "Cả ba biển.",
      "Không biển nào."
    ],
    "answer": 1,
    "explanation": "Biển số I.405(a,b,c) “Đường cụt”. Biển 1 và 2: Biển số I.405 (a,b) để chỉ lối rẽ vào đường cụt; Biển 3: Biển số I.405c để chỉ dẫn phía trước là đường cụt.",
    "tip": "",
    "image": "images/questions/q453.png"
  },
  {
    "id": 450,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào chỉ dẫn cho người đi bộ sử dụng cầu vượt qua đường?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển.",
      "Không biển nào."
    ],
    "answer": 1,
    "explanation": "Biển 1: I424a “Cầu vượt qua đường cho người đi bộ”; Biển 2: I424c “Hầm chui qua đường cho người đi bộ” nên đáp án đúng là biển 1.",
    "tip": "",
    "image": "images/questions/q454.png"
  },
  {
    "id": 451,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào chỉ dẫn cho người đi bộ sử dụng hầm chui qua đường?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển.",
      "Không biển nào."
    ],
    "answer": 2,
    "explanation": "Biển 1: I424b “Cầu vượt qua đường cho người đi bộ”; Biển 2: I424d “Hầm chui qua đường cho người đi bộ” nên đáp án đúng là biển 2.",
    "tip": "",
    "image": "images/questions/q455.png"
  },
  {
    "id": 452,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Nơi đỗ xe dành cho người khuyết tật”?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: R.304 “Đường dành cho xe thô sơ”;<br/>Biển 2: I.446 “Nơi đỗ xe dành cho người khuyết tật”;<br/>Biển 3: R.305 “Đường dành cho người đi bộ”.",
    "tip": "",
    "image": "images/questions/q456.png"
  },
  {
    "id": 453,
    "chapter": 5,
    "isCritical": false,
    "question": "Gặp biển báo này, người lái xe phải đỗ xe như thế nào?",
    "options": [
      "Đỗ xe hoàn toàn trên hè phố.",
      "Đỗ xe hoàn toàn dưới lòng đường.",
      "Đỗ từ 1/2 thân xe trở lên trên hè phố."
    ],
    "answer": 3,
    "explanation": "Biển số 408a “Nơi đỗ xe một phần trên hè phố”.",
    "tip": "",
    "image": "images/questions/q457.png"
  },
  {
    "id": 454,
    "chapter": 5,
    "isCritical": false,
    "question": "Gặp biển báo này, người tham gia giao thông phải xử lý như thế nào?",
    "options": [
      "Dừng xe tại khu vực có trạm Cảnh sát giao thông.",
      "Tiếp tục lưu thông với tốc độ bình thường.",
      "Phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này."
    ],
    "answer": 3,
    "explanation": "Biển I.436 “Trạm cảnh sát giao thông”. Các phương tiện phải giảm tốc độ đến mức an toàn và không được vượt khi đi qua khu vực này.",
    "tip": "",
    "image": "images/questions/q458.png"
  },
  {
    "id": 455,
    "chapter": 5,
    "isCritical": false,
    "question": "Gặp biển báo dưới đây, người lái xe có bắt buộc phải chạy vòng theo đảo an toàn theo hướng mũi tên khi muốn chuyển hướng hay không?",
    "options": [
      "Bắt buộc.",
      "Không bắt buộc."
    ],
    "answer": 1,
    "explanation": "Biển số R.303 “Nơi giao nhau chạy theo vòng xuyến”.",
    "tip": "",
    "image": "images/questions/q459.png"
  },
  {
    "id": 456,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào dưới đây chỉ dẫn địa giới hành chính giữa các thành phố, tỉnh, huyện?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: I.414a “Chỉ hướng đường”; Biển 2: I.419a “Chỉ dẫn địa giới”; Biển 3: I.422 “Di tích lịch sử”.",
    "tip": "",
    "image": "images/questions/q460.png"
  },
  {
    "id": 457,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Cầu vượt liên thông”?",
    "options": [
      "Biển 2 và biển 3.",
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Cả ba biển."
    ],
    "answer": 3,
    "explanation": "Biển 1: I.447d “Cầu vượt liên thông”; Biển 2: R.308b “Tuyến đường cầu vượt cắt qua”; Biển 3: I.447a “Cầu vượt liên thông”;",
    "tip": "",
    "image": "images/questions/q461.png"
  },
  {
    "id": 458,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển số 1 có ý nghĩa như thế nào?",
    "options": [
      "Đi thẳng hoặc rẽ trái trên cầu vượt.",
      "Đi thẳng hoặc rẽ phải trên cầu vượt.",
      "Báo hiệu cầu vượt liên thông."
    ],
    "answer": 3,
    "explanation": "Biển 1: I.447d “Cầu vượt liên thông”; Biển 2, Biển 3: R.308 (a,b) “Tuyến đường cầu vượt cắt qua”.",
    "tip": "",
    "image": "images/questions/q462.png"
  },
  {
    "id": 459,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu “Tuyến đường cầu vượt cắt qua”?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2 và biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1, Biển 2: R.308 (a,b) “Tuyến đường cầu vượt cắt qua”; Biển 3: W.237 “Cầu vồng”.",
    "tip": "",
    "image": "images/questions/q463.png"
  },
  {
    "id": 460,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển báo dưới đây có ý nghĩa như thế nào?",
    "options": [
      "Chỉ dẫn khoảng cách đến làn đường cứu nạn (làn thoát xe khẩn cấp).",
      "Báo hiệu đường cụt phía trước.",
      "Báo hiệu nút giao gần nhất phía trước.",
      "Báo hiệu trạm dừng nghỉ phía trước."
    ],
    "answer": 1,
    "explanation": "Biển số I.448 “Làn đường cứu nạn hay làn thoát xe khẩn cấp”.",
    "tip": "",
    "image": "images/questions/q464.png"
  },
  {
    "id": 461,
    "chapter": 5,
    "isCritical": false,
    "question": "Tại đoạn đường có biển “Làn đường dành riêng cho từng loại xe” dưới đây, các phương tiện có được phép chuyển sang làn khác để đi theo hành trình mong muốn khi đến gần nơi đường bộ giao nhau hay không?",
    "options": [
      "Được phép chuyển sang làn khác.",
      "Không được phép chuyển sang làn khác, chỉ được đi trong làn quy định theo biển."
    ],
    "answer": 1,
    "explanation": "Biển số R.412 (a,b,c,d,e,f,g,h) “Làn đường dành riêng cho từng loại xe hoặc nhóm xe”: Khi đến gần nơi đường bộ giao nhau, xe được phép chuyển làn để đi theo hành trình mong muốn. Việc chuyển làn phải thực hiện theo đúng các quy định.",
    "tip": "",
    "image": "images/questions/q465.png"
  },
  {
    "id": 462,
    "chapter": 5,
    "isCritical": false,
    "question": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
    "options": [
      "Có.",
      "Không."
    ],
    "answer": 1,
    "explanation": "Biển số R.403a “Đường dành cho ôtô” nên xe tải và xe khách đi vào được.",
    "tip": "",
    "image": "images/questions/q466.png"
  },
  {
    "id": 463,
    "chapter": 5,
    "isCritical": false,
    "question": "Tại đoạn đường có cắm biển dưới đây, xe tải và xe khách có được phép đi vào không?",
    "options": [
      "Có.",
      "Không."
    ],
    "answer": 2,
    "explanation": "Biển số R.403d “Đường dành cho ôtô con” nên xe tải và xe khách KHÔNG được phép đi vào.",
    "tip": "",
    "image": "images/questions/q467.png"
  },
  {
    "id": 464,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào báo hiệu kết thúc đường cao tốc?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: I.402 “Hết đoạn đường ưu tiên”; Biển 2: IE.453b chỉ dẫn điểm kết thúc đường cao tốc; Biển 3: R.404a “Hết đoạn đường dành cho xe ôtô”.",
    "tip": "",
    "image": "images/questions/q468.png"
  },
  {
    "id": 465,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "Chỉ dẫn sắp đến vị trí nhập làn xe.",
      "Chỉ dẫn vị trí nhập làn xe cách 250 m.",
      "Chỉ dẫn vị trí nhập làn cách trạm thu phí 250 m."
    ],
    "answer": 2,
    "explanation": "Biển IE.467b chỉ dẫn cho người điều khiển phương tiện giao thông biết trước sắp đến vị trí nhập làn xe.",
    "tip": "",
    "image": "images/questions/q469.png"
  },
  {
    "id": 466,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào chỉ dẫn nhập làn xe?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Cả hai biển."
    ],
    "answer": 3,
    "explanation": "",
    "tip": "",
    "image": "images/questions/q466n.png"
  },
  {
    "id": 467,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "Bắt đầu đường cao tốc.",
      "Chỉ dẫn địa giới đường cao tốc, chiều dài đường cao tốc.",
      "Tên và ký hiệu đường cao tốc, giá trị hạn chế tốc độ tối đa và tối thiểu.",
      "Ý 1 và ý 3."
    ],
    "answer": 4,
    "explanation": "Biển số IE.452 chỉ dẫn bắt đầu đường cao tốc, bao gồm các thông tin về tên và ký hiệu đường cao tốc, giá trị hạn chế tốc độ tối đa và tốc độ tối thiểu.",
    "tip": "",
    "image": "images/questions/q470.png"
  },
  {
    "id": 468,
    "chapter": 5,
    "isCritical": false,
    "question": "Ý nghĩa các biểu tượng ghi trên biển chỉ dẫn là như thế nào?",
    "options": [
      "Xăng dầu, ăn uống, thông tin, sửa chữa xe.",
      "Xăng dầu, ăn uống, nhà nghỉ, sửa chữa xe.",
      "Xăng dầu, ăn uống, cấp cứu, sửa chữa xe."
    ],
    "answer": 1,
    "explanation": "Biển số IE.456a thông báo khoảng cách đến trạm dừng nghỉ với 4 dịch vụ: xăng dầu, ăn uống, thông tin và sửa chữa xe.",
    "tip": "",
    "image": "images/questions/q471.png"
  },
  {
    "id": 469,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "Chỉ dẫn đến trạm kiểm tra tải trọng xe.",
      "Chỉ dẫn hướng rẽ vào nơi đặt trạm kiểm tra tải trọng xe.",
      "Chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe cách 750 m."
    ],
    "answer": 3,
    "explanation": "Biển số IE.463a chỉ dẫn khoảng cách đến trạm kiểm tra tải trọng xe",
    "tip": "",
    "image": "images/questions/q472.png"
  },
  {
    "id": 470,
    "chapter": 5,
    "isCritical": false,
    "question": "Trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên trái để tránh chướng ngại vật?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 1,
    "explanation": "Biển 1: IE.468a chỉ dẫn đi theo hướng bên trái;<br/>Biển 2: IE.468b chỉ dẫn đi được cả hai hướng;<br/>Biển 3: IE.468c chỉ dẫn đi theo hướng bên phải.",
    "tip": "",
    "image": "images/questions/q473.png"
  },
  {
    "id": 471,
    "chapter": 5,
    "isCritical": false,
    "question": "Trên đường cao tốc, gặp biển nào thì người lái xe đi theo hướng bên phải để tránh chướng ngại vật?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 3,
    "explanation": "Biển 1: IE.468a chỉ dẫn đi theo hướng bên trái;<br/>Biển 2: IE.468b chỉ dẫn đi được cả hai hướng;<br/>Biển 3: IE.468c chỉ dẫn đi theo hướng bên phải.",
    "tip": "",
    "image": "images/questions/q473.png"
  },
  {
    "id": 472,
    "chapter": 5,
    "isCritical": false,
    "question": "Trên đường cao tốc, gặp biển nào thì người lái xe đi được cả hai hướng (bên trái hoặc bên phải) để tránh chướng ngại vật?",
    "options": [
      "Biển 1.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1: IE.468a chỉ dẫn đi theo hướng bên trái;<br/>Biển 2: IE.468b chỉ dẫn đi được cả hai hướng;<br/>Biển 3: IE.468c chỉ dẫn đi theo hướng bên phải.",
    "tip": "",
    "image": "images/questions/q473.png"
  },
  {
    "id": 473,
    "chapter": 5,
    "isCritical": false,
    "question": "Trên đường cao tốc, gặp biển nào người lái xe phải chú ý đổi hướng đi khi sắp vào đường cong nguy hiểm?",
    "options": [
      "Biển 1 và biển 2.",
      "Biển 1 và biển 3.",
      "Biển 2.",
      "Biển 3."
    ],
    "answer": 2,
    "explanation": "Biển 1 và Biển 3: Biển số IE.469 (tiêu phản quang) chỉ dẫn hướng rẽ để nhắc người điều khiển phương tiện chuẩn bị đổi hướng đi khi sắp vào đường cong nguy hiểm;<br/>Biển 2: IE.468b chỉ dẫn đi được cả hai hướng.",
    "tip": "",
    "image": "images/questions/q476.png"
  },
  {
    "id": 474,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển nào chỉ dẫn người lái xe đi được cả hai hướng?",
    "options": [
      "Biển 1.",
      "Biển 2."
    ],
    "answer": 2,
    "explanation": "",
    "tip": "",
    "image": "images/questions/q474n.png"
  },
  {
    "id": 475,
    "chapter": 5,
    "isCritical": false,
    "question": "Biển này có ý nghĩa như thế nào?",
    "options": [
      "Chỉ dẫn chướng ngại vật phía trước để cảnh báo phía trước có sự cản trở lưu thông bình thường (nằm bên trong phần xe chạy hay ngay sát phần đường xe chạy) và chỉ dẫn hướng đi qua đó cần đặt biển.",
      "Chỉ dẫn hướng rẽ để nhắc người điều khiển phương tiện chuẩn bị đổi hướng đi khi sắp vào đường cong nguy hiểm, có bán kính cong nhỏ."
    ],
    "answer": 2,
    "explanation": "",
    "tip": "",
    "image": "images/questions/q475n.png"
  },
  {
    "id": 476,
    "chapter": 5,
    "isCritical": false,
    "question": "Vạch mũi tên chỉ hướng trên mặt đường nào dưới đây cho phép xe chỉ được đi thẳng và rẽ phải?",
    "options": [
      "Vạch 1.",
      "Vạch 2 và vạch 3.",
      "Vạch 3.",
      "Vạch 1 và vạch 2."
    ],
    "answer": 3,
    "explanation": "Vạch 9.3: Vạch mũi tên chỉ hướng trên mặt đường chỉ hướng xe phải đi: Vạch 1 chỉ được rẽ phải; Vạch 2 đi thẳng và rẽ trái; Vạch 3 đi thẳng và rẽ phải;",
    "tip": "",
    "image": "images/questions/q477.png"
  },
  {
    "id": 477,
    "chapter": 5,
    "isCritical": false,
    "question": "Vạch kẻ đường nào dưới đây là vạch phân chia các làn xe cùng chiều?",
    "options": [
      "Vạch 1.",
      "Vạch 2.",
      "Vạch 3.",
      "Vạch 1 và vạch 2."
    ],
    "answer": 4,
    "explanation": "Vạch 1: Phân chia các làn xe cùng chiều, cho phép lấn làn đè vạch;<br/>Vạch 2: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;<br/> Vạch 3: Phân chia hai chiều xe chạy ngược chiều, xe không được lấn làn, không được đè lên vạch.",
    "tip": "",
    "image": "images/questions/q478.png"
  },
  {
    "id": 478,
    "chapter": 5,
    "isCritical": false,
    "question": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường), xe không được lấn làn, không được đè lên vạch?",
    "options": [
      "Vạch 1.",
      "Vạch 2.",
      "Vạch 3.",
      "Cả ba vạch."
    ],
    "answer": 2,
    "explanation": "Vạch 1: Phân chia các làn xe cùng chiều, cho phép lấn làn đè vạch;<br/>Vạch 2: Phân chia hai chiều xe chạy ngược chiều; xe không được lấn làn, không được đè lên vạch.<br/>Vạch 3: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;",
    "tip": "",
    "image": "images/questions/q479.png"
  },
  {
    "id": 479,
    "chapter": 5,
    "isCritical": false,
    "question": "Vạch kẻ đường nào dưới đây là vạch phân chia hai chiều xe chạy (vạch tim đường)?",
    "options": [
      "Vạch 1.",
      "Vạch 2.",
      "Vạch 3.",
      "Vạch 1 và vạch 3."
    ],
    "answer": 4,
    "explanation": "Vạch 1: Phân chia hai chiều xe chạy ngược chiều. Xe được phép cắt qua để sử dụng làn ngược chiều từ cả hai phía;<br/>Vạch 2: Phân chia các làn xe cùng chiều, cho phép lấn làn đè vạch;<br/>Vạch 3: Phân chia hai chiều xe chạy ngược chiều; xe không được lấn làn, không được đè lên vạch.",
    "tip": "",
    "image": "images/questions/q480.png"
  },
  {
    "id": 480,
    "chapter": 5,
    "isCritical": false,
    "question": "Các vạch dưới đây có tác dụng như thế nào?",
    "options": [
      "Phân chia hai chiều xe chạy ngược chiều nhau.",
      "Phân chia các làn xe chạy cùng chiều nhau."
    ],
    "answer": 1,
    "explanation": "Vạch 1: Phân chia hai chiều xe chạy ngược chiều, cho phép lấn làn, đè vạch ở cả 2 chiều;<br/>Vạch 2: Phân chia hai chiều xe chạy ngược chiều; xe không được lấn làn, không được đè lên vạch;<br/>Vạch 3: Phân chia hai chiều xe chạy ngược chiều có 4 làn xe cơ giới trở lên; xe không được lấn làn, không được đè lên vạch.",
    "tip": "",
    "image": "images/questions/q481.png"
  },
  {
    "id": 481,
    "chapter": 5,
    "isCritical": false,
    "question": "Các vạch dưới đây có tác dụng như thế nào?",
    "options": [
      "Phân chia hai chiều xe chạy ngược chiều nhau.",
      "Phân chia các làn xe chạy cùng chiều nhau."
    ],
    "answer": 2,
    "explanation": "Vạch 1: Phân chia các làn xe cùng chiều, cho phép lấn làn đè vạch;<br/>Vạch 2: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;",
    "tip": "",
    "image": "images/questions/q482.png"
  },
  {
    "id": 482,
    "chapter": 5,
    "isCritical": false,
    "question": "Khi gặp vạch kẻ đường nào các xe được phép đè vạch?",
    "options": [
      "Vạch 1.",
      "Vạch 2.",
      "Vạch 3.",
      "Vạch 1 và vạch 3."
    ],
    "answer": 4,
    "explanation": "Vạch 1: Phân chia hai chiều xe chạy ngược chiều, cho phép lấn làn, đè vạch ở cả 2 chiều;<br/>Vạch 2: Phân chia các làn xe cùng chiều, không cho phép lấn làn, không cho phép đè vạch;<br/>Vạch 3: Phân chia các làn xe cùng chiều, cho phép lấn làn đè vạch;",
    "tip": "",
    "image": "images/questions/q483.png"
  },
  {
    "id": 483,
    "chapter": 5,
    "isCritical": false,
    "question": "Vạch dưới đây có tác dụng như thế nào?",
    "options": [
      "Để xác định làn đường.",
      "Báo hiệu người lái xe chỉ được phép đi thẳng.",
      "Dùng để xác định khoảng cách giữa các phương tiện trên đường."
    ],
    "answer": 3,
    "explanation": "Vạch 7.8: Vạch xác định khoảng cách xe trên đường.",
    "tip": "",
    "image": "images/questions/q484.png"
  },
  {
    "id": 484,
    "chapter": 5,
    "isCritical": false,
    "question": "Vạch dưới đây có ý nghĩa như thế nào?",
    "options": [
      "Báo cho người điều khiển không được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
      "Báo hiệu sắp đến chỗ có bố trí vạch đi bộ qua đường.",
      "Dùng để xác định khoảng cách giữa các phương tiện trên đường."
    ],
    "answer": 2,
    "explanation": "Vạch 7.6: Vạch chỉ dẫn sắp đến chỗ có bố trí vạch đi bộ qua đường.",
    "tip": "",
    "image": "images/questions/q485.png"
  },
  {
    "id": 485,
    "chapter": 5,
    "isCritical": false,
    "question": "Vạch dưới đây có ý nghĩa như thế nào?",
    "options": [
      "Vị trí dừng xe của các phương tiện vận tải hành khách công cộng.",
      "Báo cho người điều khiển được dừng phương tiện trong phạm vi phần mặt đường có bố trí vạch để tránh ùn tắc giao thông.",
      "Dùng để xác định vị trí giữa các phương tiện trên đường."
    ],
    "answer": 1,
    "explanation": "Vạch 9.2: Vạch quy định vị trí dừng đỗ của phương tiện giao thông công cộng trên đường.",
    "tip": "",
    "image": "images/questions/q486.png"
  },
  {
    "id": 486,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
    "options": [
      "Xe khách, xe tải, xe mô tô.",
      "Xe tải, xe mô tô.",
      "Chỉ xe con."
    ],
    "answer": 3,
    "explanation": "1. Xe khách: Sai làn, Đi thẳng đèn đang đỏ;<br/>2. Xe tải: Sai làn: Đi trên làn đi thẳng trong khi thực hiện rẽ trái.<br/>3. Xe mô tô: Sai làn: Đi trên làn rẽ trái trong khi thực hiện rẽ phải,<br/>4. Xe con: Đèn xanh rẽ phải: Đúng đèn đúng làn.",
    "tip": "",
    "image": "images/questions/q503.png"
  },
  {
    "id": 487,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe tải, xe khách, xe con, xe mô tô.",
      "Xe tải, xe mô tô, xe khách, xe con.",
      "Xe khách, xe tải, xe con, xe mô tô.",
      "Xe mô tô, xe khách, xe tải, xe con."
    ],
    "answer": 2,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>1. Xe tải: Đường ưu tiên và đi thẳng;<br/>2. Mô tô: Đường ưu tiên và rẽ trái;<br/>3. Xe khách: Đường không ưu tiên, đi thẳng.<br/>4. Xe con: Đường không ưu tiên, rẽ trái.",
    "tip": "",
    "image": "images/questions/q487.png"
  },
  {
    "id": 488,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách.",
      "Xe công an đi làm nhiệm vụ khẩn cấp, xe khách, xe con, xe tải.",
      "Xe công an đi làm nhiệm vụ khẩn cấp, xe tải, xe khách, xe con.",
      "Xe con, xe công an đi làm nhiệm vụ khẩn cấp, xe tải, xe khách."
    ],
    "answer": 1,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>1. Xe công an: Xe ưu tiên.<br/>2. Xe con: Đường ưu tiên.<br/>3. Xe tải: Đường không ưu tiên, đi thẳng.<br/>4. Xe khách: Đường không ưu tiên, rẽ trái.",
    "tip": "",
    "image": "images/questions/q488.png"
  },
  {
    "id": 489,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe tải, xe công an đi làm nhiệm vụ khẩn cấp, xe khách, xe con.",
      "Xe công an đi làm nhiệm vụ khẩn cấp, xe khách, xe con, xe tải.",
      "Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách.",
      "Xe công an đi làm nhiệm vụ khẩn cấp, xe tải, xe khách, xe con."
    ],
    "answer": 4,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>1. Xe công an: Xe ưu tiên; <br/>2. Xe tải: Đường ưu tiên;<br/>3. Xe khách: Đường không ưu tiên, bên phải trống;<br/>4. Xe con: Đường không ưu tiên, bên phải vướng xe khách nên phải nhường.",
    "tip": "",
    "image": "images/questions/q489.png"
  },
  {
    "id": 490,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe tải, xe con, xe mô tô.",
      "Xe con, xe tải, xe mô tô.",
      "Xe mô tô, xe con, xe tải.",
      "Xe con, xe mô tô, xe tải."
    ],
    "answer": 3,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>1. Xe mô tô: Bên phải trống;<br/>2. Xe con: Đi thẳng;<br/>3. Xe tải: Rẽ trái;",
    "tip": "",
    "image": "images/questions/q490.png"
  },
  {
    "id": 491,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào phải nhường đường trong trường hợp này?",
    "options": [
      "Xe con.",
      "Xe tải."
    ],
    "answer": 1,
    "explanation": "Giao nhau cùng cấp có vòng xuyến: Chưa vào vòng xuyến thì ưu tiên xe bên phải; đã vào vòng xuyến ưu tiên xe từ bên trái tới.<br/>Xe con nhường vì thấy xe tải từ bên trái tới đã nằm trong vòng xuyến.",
    "tip": "",
    "image": "images/questions/q491.png"
  },
  {
    "id": 492,
    "chapter": 6,
    "isCritical": false,
    "question": "Trường hợp này xe nào được quyền đi trước?",
    "options": [
      "Xe mô tô.",
      "Xe con."
    ],
    "answer": 2,
    "explanation": "Xe con được đi trước vì mô tô có biển STOP trước mặt.",
    "tip": "",
    "image": "images/questions/q492.png"
  },
  {
    "id": 493,
    "chapter": 6,
    "isCritical": false,
    "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe con (A), xe cứu thương đi làm nhiệm vụ cấp cứu, xe con (B).",
      "Xe cứu thương đi làm nhiệm vụ cấp cứu, xe con (B), xe con (A).",
      "Xe con (B), xe con (A), xe cứu thương đi làm nhiệm vụ cấp cứu."
    ],
    "answer": 1,
    "explanation": "Thứ tự ưu tiên: Xe vào ngã ba, ngã tư trước - Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái..<br/>1. Xe con (A): Đã vào ngã tư trước;<br/>2. Xe cứu thương: Xe ưu tiên;<br/>3. Xe con (B);",
    "tip": "",
    "image": "images/questions/q493.png"
  },
  {
    "id": 494,
    "chapter": 6,
    "isCritical": false,
    "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe cứu thương đi làm nhiệm vụ cấp cứu, xe chữa cháy đi làm nhiệm vụ chữa cháy, xe con.",
      "Xe chữa cháy đi làm nhiệm vụ chữa cháy, xe cứu thương đi làm nhiệm vụ cấp cứu, xe con.",
      "Xe cứu thương đi làm nhiệm vụ cấp cứu, xe con, xe chữa cháy đi làm nhiệm vụ chữa cháy."
    ],
    "answer": 2,
    "explanation": "Thứ tự xe ưu tiên: Xe cứu hoả (mức độ thương vong lớn hơn); Xe công an; Xe cứu thương.",
    "tip": "",
    "image": "images/questions/q494.png"
  },
  {
    "id": 495,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào được quyền đi trước trong trường hợp này?",
    "options": [
      "Xe mô tô.",
      "Xe cứu thương đi làm nhiệm vụ cấp cứu."
    ],
    "answer": 2,
    "explanation": "Xe ưu tiên đi trước.",
    "tip": "",
    "image": "images/questions/q495.png"
  },
  {
    "id": 496,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, xe nào phải nhường đường đi cuối cùng qua nơi giao nhau này?",
    "options": [
      "Xe khách.",
      "Xe tải.",
      "Xe con."
    ],
    "answer": 1,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>1. Xe con: Đường ưu tiên;<br/>2. Xe tải: Đường không ưu tiên, rẽ phải;<br/>3. Xe khách: Đường không ưu tiên, rẽ trái (Đáp án đúng).",
    "tip": "",
    "image": "images/questions/q496.png"
  },
  {
    "id": 497,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, xe nào phải nhường đường là đúng quy tắc giao thông?",
    "options": [
      "Xe con.",
      "Xe tải."
    ],
    "answer": 1,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>Xe tải bên phải trống nên đi trước;<br/>Đáp án đúng là Xe con phải nhường đường: Bên phải vướng xe tải.",
    "tip": "",
    "image": "images/questions/q497.png"
  },
  {
    "id": 498,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào được quyền đi trước trong trường hợp này?",
    "options": [
      "Xe công an đi làm nhiệm vụ khẩn cấp.",
      "Xe chữa cháy đi làm nhiệm vụ chữa cháy."
    ],
    "answer": 2,
    "explanation": "Xe ưu tiên theo mức độ thiệt hại: Xe chữa cháy ưu tiên hơn.",
    "tip": "",
    "image": "images/questions/q498.png"
  },
  {
    "id": 499,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo tín hiệu đèn, xe nào được phép đi?",
    "options": [
      "Xe con và xe khách.",
      "Xe mô tô."
    ],
    "answer": 1,
    "explanation": "Xe con và xe khách đang ở làn đường có tín hiệu đèn xanh nên được phép đi.",
    "tip": "",
    "image": "images/questions/q499.png"
  },
  {
    "id": 500,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo tín hiệu đèn, xe nào đi là đúng quy tắc giao thông?",
    "options": [
      "Xe khách, xe mô tô.",
      "Xe con, xe tải.",
      "Xe tải, xe mô tô."
    ],
    "answer": 2,
    "explanation": "Xe con và xe tải đang ở trên làn đường có tín hiệu đèn xanh nên được phép đi.",
    "tip": "",
    "image": "images/questions/q500.png"
  },
  {
    "id": 501,
    "chapter": 6,
    "isCritical": false,
    "question": "Trong trường hợp này xe nào được quyền đi trước?",
    "options": [
      "Xe công an đi làm nhiệm vụ khẩn cấp.",
      "Xe quân sự đi làm nhiệm vụ khẩn cấp."
    ],
    "answer": 2,
    "explanation": "Xe ưu tiên cùng cấp nên áp dụng thứ tự đường cùng cấp: Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>Xe quân sự được ưu tiên trước do bên phải trống.",
    "tip": "",
    "image": "images/questions/q501.png"
  },
  {
    "id": 502,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo tín hiệu đèn, xe tải đi theo hướng nào là đúng quy tắc giao thông?",
    "options": [
      "Hướng 2, 3, 4.",
      "Chỉ hướng 1.",
      "Hướng 1 và 2.",
      "Hướng 3 và 4."
    ],
    "answer": 2,
    "explanation": "Hướng 1 rẽ phải có tín hiệu đèn xanh nên được phép đi. Hướng đi thẳng đang có tín hiệu đèn đỏ do đó các hướng 2,3,4 không thể đi được. Câu trả lời đúng là chỉ có hướng 1.",
    "tip": "",
    "image": "images/questions/q502.png"
  },
  {
    "id": 503,
    "chapter": 6,
    "isCritical": false,
    "question": "Các xe đi theo hướng mũi tên, những xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe khách, xe tải, xe mô tô.",
      "Xe tải, xe con, xe mô tô.",
      "Xe khách, xe con, xe mô tô."
    ],
    "answer": 1,
    "explanation": "1. Xe khách: Sai làn, Đi thẳng đèn đang đỏ;<br/>2. Xe tải: Sai làn: Đi trên làn đi thẳng trong khi thực hiện rẽ trái.<br/>3. Xe mô tô: Sai làn: Đi trên làn rẽ trái trong khi thực hiện rẽ phải,<br/>Nên đáp án đúng là xe khách, xe tải và xe mô tô đều vi phạm quy tắc giao thông.",
    "tip": "",
    "image": "images/questions/q503.png"
  },
  {
    "id": 504,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe khách, xe tải, xe mô tô, xe con.",
      "Xe con, xe khách, xe tải, xe mô tô.",
      "Xe mô tô, xe tải, xe khách, xe con.",
      "Xe mô tô, xe tải, xe con, xe khách."
    ],
    "answer": 3,
    "explanation": "Giao nhau cùng cấp có vòng xuyến: Chưa vào vòng xuyến thì ưu tiên xe bên phải; đã vào vòng xuyến ưu tiên xe từ bên trái tới.<br/>Toàn bộ các xe chưa vào phòng xuyến nên ưu tiên xe bên phải.<br/>Thứ tự sẽ là Mô tô, xe tải, xe khách, xe con.",
    "tip": "",
    "image": "images/questions/q504.png"
  },
  {
    "id": 505,
    "chapter": 6,
    "isCritical": false,
    "question": "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông?",
    "options": [
      "Xe tải.",
      "Xe con và mô tô.",
      "Cả ba xe.",
      "Xe con và xe tải."
    ],
    "answer": 1,
    "explanation": "Biển cấm đỗ xe tải (ở biển phụ) nên chỉ có xe tải vi phạm.",
    "tip": "",
    "image": "images/questions/q505.png"
  },
  {
    "id": 506,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, xe nào được quyền đi trước?",
    "options": [
      "Xe tải.",
      "Xe con (B).",
      "Xe con (A)."
    ],
    "answer": 2,
    "explanation": "Thứ tự ưu tiên không vòng xuyến: Xe vào ngã ba, ngã tư trước - Xe ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>Đáp án đúng là Xe con (B): Đường ưu tiên;",
    "tip": "",
    "image": "images/questions/q506.png"
  },
  {
    "id": 507,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, những hướng nào xe gắn máy được phép đi?",
    "options": [
      "Cả ba hướng.",
      "Chỉ hướng 1 và 3.",
      "Chỉ hướng 1."
    ],
    "answer": 1,
    "explanation": "Bạn lưu ý câu hỏi này hỏi về hướng đi của xe <b>GẮN MÁY</b>. Hướng 1 và 3 chắc chắn là đi được rồi.<br/>Với hướng 2, biển báo cấm mô tô đi vào chỉ có tác dụng với xe MÔ TÔ nên xe gắn máy không có hiệu lực. Do đó vẫn đi vào bình thường.",
    "tip": "",
    "image": "images/questions/q507.png"
  },
  {
    "id": 508,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào đỗ vi phạm quy tắc giao thông?",
    "options": [
      "Cả hai xe.",
      "Không xe nào vi phạm.",
      "Chỉ xe mô tô vi phạm.",
      "Chỉ xe tải vi phạm."
    ],
    "answer": 1,
    "explanation": "Biển cấm đỗ xe ở cả phía trước và phía sau biển (ở biển báo phụ) nên cả 2 xe vi phạm.",
    "tip": "",
    "image": "images/questions/q508.png"
  },
  {
    "id": 509,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào đỗ vi phạm quy tắc giao thông?",
    "options": [
      "Chỉ xe mô tô.",
      "Chỉ xe tải.",
      "Cả ba xe.",
      "Chỉ xe mô tô và xe tải."
    ],
    "answer": 3,
    "explanation": "Xe tải đậu trái đường; Xe con và mô tô đậu xe đè vạch nên cả 3 xe vi phạm.",
    "tip": "",
    "image": "images/questions/q509.png"
  },
  {
    "id": 510,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe tải kéo xe mô tô ba bánh như hình này có đúng quy tắc giao thông không?",
    "options": [
      "Đúng.",
      "Không đúng."
    ],
    "answer": 2,
    "explanation": "Xe tải kéo xe mô tô 3 bánh như trên hình là không đúng vì đi vào đường có biển P.108 “Cấm ô tô kéo moóc” kể cả xe máy kéo, xe ô tô khách kéo theo rơ moóc đi qua.",
    "tip": "",
    "image": "images/questions/q510.png"
  },
  {
    "id": 511,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, hướng nào xe không được phép đi?",
    "options": [
      "Hướng 2 và 5.",
      "Chỉ hướng 1."
    ],
    "answer": 2,
    "explanation": "Hướng 1 có biển cấm ô tô nên xe ô tô đương nhiên không được phép đi vào rồi.",
    "tip": "",
    "image": "images/questions/q511.png"
  },
  {
    "id": 512,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, những hướng nào xe ô tô không được phép đi?",
    "options": [
      "Hướng 1 và 2.",
      "Hướng 3.",
      "Hướng 1 và 4.",
      "Hướng 2 và 3."
    ],
    "answer": 2,
    "explanation": "Biển P.123a “Cấm rẽ trái” không cấm quay đầu xe nên chỉ có hướng 3 là hướng ô tô không được phép đi.",
    "tip": "",
    "image": "images/questions/q512.png"
  },
  {
    "id": 513,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào vượt đúng quy tắc giao thông?",
    "options": [
      "Cả hai xe đều đúng.",
      "Xe con.",
      "Xe khách."
    ],
    "answer": 1,
    "explanation": "Biển số P.126 “Cấm ô tô tải vượt” nên không áp dụng với xe con và xe khách.",
    "tip": "",
    "image": "images/questions/q513.png"
  },
  {
    "id": 514,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, gặp biển hướng đi phải theo đặt trước ngã tư, những hướng nào xe được phép đi?",
    "options": [
      "Hướng 2 và 3.",
      "Hướng 1, 2 và 3.",
      "Hướng 1 và 3."
    ],
    "answer": 1,
    "explanation": "Biển R.301g được đặt ở trước nơi đường giao nhau, chỉ được phép đi thẳng, rẽ trái hoặc quay đầu xe để đi theo hướng ngược lại.<br/>Đáp án đúng là hướng 2 và hướng 3.",
    "tip": "",
    "image": "images/questions/q514.png"
  },
  {
    "id": 515,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe kéo nhau như hình này có vi phạm quy tắc giao thông không?",
    "options": [
      "Không.",
      "Vi phạm."
    ],
    "answer": 2,
    "explanation": "Xe kéo rơ moóc, xe kéo sơ mi rơ moóc đã kéo rơ moóc thì không được kéo thêm xe khác nên trường hợp này là vi phạm.",
    "tip": "",
    "image": "images/questions/q515.png"
  },
  {
    "id": 516,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào phải nhường đường trong trường hợp này?",
    "options": [
      "Xe khách.",
      "Xe tải."
    ],
    "answer": 1,
    "explanation": "Phía trước xe tải có biển báo được ưu tiên qua đường hẹp nên được đi trước.<br/>Hoặc phía trước xe khách có biển báo nhường cho xe ngược chiều qua đường hẹp.",
    "tip": "",
    "image": "images/questions/q516.png"
  },
  {
    "id": 517,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào được quyền đi trước trong trường hợp này?",
    "options": [
      "Xe con.",
      "Xe mô tô."
    ],
    "answer": 2,
    "explanation": "Cả 2 xe đều gặp đèn xanh nên áp dụng quy tắc đường cùng cấp: Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>Nên đáp án đúng là xe mô tô rẽ phải được quyền đi trước. Xe con rẽ trái phải nhường đường.",
    "tip": "",
    "image": "images/questions/q517.png"
  },
  {
    "id": 518,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe kéo nhau trong trường hợp này đúng quy định không?",
    "options": [
      "Không đúng.",
      "Đúng."
    ],
    "answer": 1,
    "explanation": "Xe đầu kéo (xe container) đã kéo rơmoóc, sơmi rơmoóc không được phép kéo thêm rơmoóc hoặc xe khác, vật khác.",
    "tip": "",
    "image": "images/questions/q518.png"
  },
  {
    "id": 519,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, những hướng nào xe ô tô con được phép đi?",
    "options": [
      "Hướng 1.",
      "Hướng 1, 3 và 4.",
      "Hướng 2, 3 và 4.",
      "Cả bốn hướng."
    ],
    "answer": 2,
    "explanation": "Biển số R.301d “Chỉ được rẽ phải” chỉ áp dụng với xe tải (biển phụ) nên không áp dụng với xe con.<br/>Hướng 2 cấm xe con không được đi vào, còn hướng 1, 3 và 4 xe con đều được phép đi.",
    "tip": "",
    "image": "images/questions/q519.png"
  },
  {
    "id": 520,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe con (A), xe mô tô, xe con (B), xe đạp.",
      "Xe con (B), xe đạp, xe mô tô, xe con (A).",
      "Xe con (A), xe con (B), xe mô tô + xe đạp.",
      "Xe mô tô + xe đạp, xe con (A), xe con (B)."
    ],
    "answer": 4,
    "explanation": "Thứ tự ưu tiên đường cùng cấp: Xe ưu tiên - Đường ưu tiên - Bên phải trống - rẽ phải - đi thẳng - rẽ trái.<br/>1. Mô tô và xe đạp: Bên phải trống;<br/>2. Xe con (A): Đi thẳng;<br/>3. Xe con (B): Rẽ trái.",
    "tip": "",
    "image": "images/questions/q520.png"
  },
  {
    "id": 521,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, những hướng nào xe tải được phép đi?",
    "options": [
      "Chỉ hướng 1.",
      "Hướng 1, 3 và 4.",
      "Hướng 1, 2 và 3.",
      "Cả bốn hướng."
    ],
    "answer": 1,
    "explanation": "Biển số R.301d “Chỉ được rẽ phải” áp dụng với xe tải (biển phụ) nên hướng 3, 4 rẽ trái bị cấm.<br/>Hướng 2 có biển cấm xe tải đi vào.<br/>Nên xe tải chỉ có thể chạy theo hướng 1 là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q521.png"
  },
  {
    "id": 522,
    "chapter": 6,
    "isCritical": false,
    "question": "Những hướng nào xe tải được phép đi?",
    "options": [
      "Cả ba hướng.",
      "Hướng 2 và 3."
    ],
    "answer": 2,
    "explanation": "Xe tải cấm rẽ phải (biển phụ) nên chỉ đi được hướng 2 và hướng 3.",
    "tip": "",
    "image": "images/questions/q522.png"
  },
  {
    "id": 523,
    "chapter": 6,
    "isCritical": false,
    "question": "Những hướng nào xe ô tô tải được phép đi?",
    "options": [
      "Chỉ hướng 1.",
      "Hướng 1 và 4.",
      "Hướng 1 và 5.",
      "Hướng 1, 4 và 5."
    ],
    "answer": 3,
    "explanation": "Hướng 2,3,4 bị cấm do có biển cấm xe ô tô đi vào.<br/>Hướng 1 và 5 xe tải đi được bình thường.",
    "tip": "",
    "image": "images/questions/q523.png"
  },
  {
    "id": 524,
    "chapter": 6,
    "isCritical": false,
    "question": "Những hướng nào xe ô tô tải được phép đi?",
    "options": [
      "Cả bốn hướng.",
      "Trừ hướng 2.",
      "Hướng 2, 3 và 4.",
      "Trừ hướng 4."
    ],
    "answer": 2,
    "explanation": "Hướng 2 có biển cấm xe tải nên xe tải không được phép đi vào.",
    "tip": "",
    "image": "images/questions/q524.png"
  },
  {
    "id": 525,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào được quyền đi trước trong trường hợp này?",
    "options": [
      "Xe mô tô.",
      "Xe con."
    ],
    "answer": 1,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>Xe mô tô rẽ trái từ đường ưu tiên vào đường ưu tiên (theo biển báo và biển phụ) nên được quyền đi trước.",
    "tip": "",
    "image": "images/questions/q525.png"
  },
  {
    "id": 526,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe ô tô con đi theo chiều mũi tên có vi phạm quy tắc giao thông không?",
    "options": [
      "Không vi phạm.",
      "Vi phạm."
    ],
    "answer": 2,
    "explanation": "Biển số R.301a được đặt trước ngã ba, ngã tư. Các xe chỉ được đi thẳng ở khu vực ngã ba, ngã tư.",
    "tip": "",
    "image": "images/questions/q526.png"
  },
  {
    "id": 527,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe khách.",
      "Xe mô tô.",
      "Xe con.",
      "Xe con và xe mô tô."
    ],
    "answer": 3,
    "explanation": "Xe con quay đầu đè vạch liền trên đường nên vi phạm.",
    "tip": "",
    "image": "images/questions/q527.png"
  },
  {
    "id": 528,
    "chapter": 6,
    "isCritical": false,
    "question": "Các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng.",
      "Cho phép các xe ở mọi hướng được phép rẽ phải.",
      "Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi."
    ],
    "answer": 3,
    "explanation": "Giơ tay thẳng đứng: Tất cả dừng, trừ xe đã ở trong ngã tư được phép đi;<br/>Giang ngang tay: Trái phải đi; Trước sau dừng;<br/>Tay phải giơ trước: Sau, phải dừng, trước rẽ phải, trái đi các hướng, người đi bộ qua đường đi sau người điều khiển.",
    "tip": "",
    "image": "images/questions/q528.png"
  },
  {
    "id": 529,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, xe nào được phép đi?",
    "options": [
      "Xe mô tô, xe con.",
      "Xe con, xe tải.",
      "Xe mô tô, xe tải.",
      "Cả ba xe."
    ],
    "answer": 3,
    "explanation": "Giang ngang tay: Trái phải đi; Trước sau dừng.<br/>Xe mô tô và xe tải được phép đi là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q529.png"
  },
  {
    "id": 530,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe con vượt xe tải như trường hợp này có đúng không?",
    "options": [
      "Đúng.",
      "Không đúng."
    ],
    "answer": 1,
    "explanation": "Xe con đi thẳng và xe tải rẽ trái không giao nhau nên được phép vượt trong trường hợp này.",
    "tip": "",
    "image": "images/questions/q530.png"
  },
  {
    "id": 531,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào vượt đúng quy tắc giao thông?",
    "options": [
      "Xe tải.",
      "Cả hai xe.",
      "Xe con."
    ],
    "answer": 3,
    "explanation": "Theo hướng xe tải, vượt xe khách đè vạch liền nên vi phạm.<br/> Theo hướng xe con, xe con vượt xe tải đè vạch đứt nên không vi phạm quy tắc giao thông là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q531.png"
  },
  {
    "id": 532,
    "chapter": 6,
    "isCritical": false,
    "question": "Đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe chữa cháy đi làm nhiệm vụ chữa cháy.",
      "Xe tải.",
      "Cả hai xe."
    ],
    "answer": 2,
    "explanation": "Biển cấm xe ngược chiều không có tác dụng với xe chữa cháy (xe ưu tiên) nên không vi phạm.<br/>Trước mặt xe tải có biển cấm rẽ trái và quay đầu nên vi phạm là đáp án đúng.",
    "tip": "",
    "image": "images/questions/q532.png"
  },
  {
    "id": 533,
    "chapter": 6,
    "isCritical": false,
    "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe khách, xe tải, xe con.",
      "Xe con, xe tải, xe khách.",
      "Xe tải, xe khách, xe con."
    ],
    "answer": 3,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe tải: Rẽ phải; 2. Xe khách: Đi thẳng; 3. Xe con: Rẽ trái.",
    "tip": "",
    "image": "images/questions/q533.png"
  },
  {
    "id": 534,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe khách và xe tải, xe con.",
      "Xe tải, xe khách, xe con.",
      "Xe con, xe khách, xe tải."
    ],
    "answer": 1,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe khách và xe tải cùng rẽ phải nên cùng nhau đi trước. Hãy nhìn đáp án có chữ <b>“VÀ”</b>.",
    "tip": "",
    "image": "images/questions/q534.png"
  },
  {
    "id": 535,
    "chapter": 6,
    "isCritical": false,
    "question": "Những hướng nào xe ô tô tải được phép đi?",
    "options": [
      "Cả bốn hướng.",
      "Chỉ hướng 1 và 2.",
      "Trừ hướng 4."
    ],
    "answer": 3,
    "explanation": "Biển số P.102 “Cấm đi ngược chiều” ở hướng 4 nên hướng này không được phép đi.",
    "tip": "",
    "image": "images/questions/q535.png"
  },
  {
    "id": 536,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, thứ tự các xe đi như thế nào là đúng?",
    "options": [
      "Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe tải, xe khách.",
      "Xe con, xe khách và xe công an đi làm nhiệm vụ khẩn cấp, xe tải.",
      "Xe công an đi làm nhiệm vụ khẩn cấp, xe con, xe khách, xe tải.",
      "Xe con, xe tải, xe khách, xe công an đi làm nhiệm vụ khẩn cấp."
    ],
    "answer": 1,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe công an: Xe ưu tiên;<br/>2. Xe con: Đường ưu tiên, bên phải trống;<br/>3. Xe tải: Đường ưu tiên, bên phải vướng xe con nếu đi trước;<br/>4. Xe khách: Đường không ưu tiên.",
    "tip": "",
    "image": "images/questions/q536.png"
  },
  {
    "id": 537,
    "chapter": 6,
    "isCritical": false,
    "question": "Những hướng nào ô tô tải được phép đi?",
    "options": [
      "Cả bốn hướng.",
      "Hướng 1, 2 và 3.",
      "Hướng 1 và 4.",
      "Hướng 1, 3 và 4."
    ],
    "answer": 4,
    "explanation": "Trước mặt xe tải là Biển số P.123a “Cấm rẽ trái” không cấm quay đầu (hướng 3).<br/>Hướng 4 là Biển số P.109 “Cấm máy kéo” không cấm xe tải.<br/>Nên các hướng 1, 3 và 4 là câu trả lời đúng.",
    "tip": "",
    "image": "images/questions/q537.png"
  },
  {
    "id": 538,
    "chapter": 6,
    "isCritical": false,
    "question": "Trong hình dưới đây, xe nào chấp hành đúng quy tắc giao thông?",
    "options": [
      "Chỉ xe khách, xe mô tô.",
      "Tất cả các loại xe trên.",
      "Không xe nào chấp hành đúng quy tắc giao thông."
    ],
    "answer": 2,
    "explanation": "Xe khách chờ đèn đỏ rẽ trái. Xe tải đi thẳng và rẽ phải theo tín hiệu đèn xanh. Xe con đi thẳng và rẽ phải theo tín hiệu đèn xanh. Xe mô tô chờ đèn đỏ rẽ trái. Nên tất cả xe đều chấp hành.",
    "tip": "",
    "image": "images/questions/q538.png"
  },
  {
    "id": 539,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi?",
    "options": [
      "Cả ba hướng.",
      "Hướng 1 và 2.",
      "Hướng 1 và 3.",
      "Hướng 2 và 3."
    ],
    "answer": 3,
    "explanation": "Hướng 2 có Biển số P.104 “Cấm mô tô”. Hướng 3 Biển số P.103a “Cấm ô tô” nhưng không cấm mô tô. Nên đáp án đúng là hướng 1 và hướng 3.",
    "tip": "",
    "image": "images/questions/q539.png"
  },
  {
    "id": 540,
    "chapter": 6,
    "isCritical": false,
    "question": "Trong trường hợp này, thứ tự xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe công an đi làm nhiệm vụ khẩn cấp, xe quân sự đi làm nhiệm vụ khẩn cấp, xe con + xe mô tô.",
      "Xe quân sự đi làm nhiệm vụ khẩn cấp, xe công an đi làm nhiệm vụ khẩn cấp, xe con + xe mô tô.",
      "Xe mô tô + xe con, xe quân sự đi làm nhiệm vụ khẩn cấp, xe công an đi làm nhiệm vụ khẩn cấp."
    ],
    "answer": 2,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe quân sự: Xe ưu tiên cùng cấp xe công an nhưng đi thẳng;<br/>2. Xe công an: Xe ưu tiên; rẽ trái;<br/>3. Xe con và xe mô tô: Cùng đi thẳng.",
    "tip": "",
    "image": "images/questions/q540.png"
  },
  {
    "id": 541,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
    "options": [
      "Xe A.",
      "Xe B."
    ],
    "answer": 1,
    "explanation": "Xe xuống dốc A phải nhường đường cho xe đang lên dốc B.",
    "tip": "",
    "image": "images/questions/q541.png"
  },
  {
    "id": 542,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe con quay đầu đi ngược lại như hình vẽ dưới có vi phạm quy tắc giao thông không?",
    "options": [
      "Không vi phạm.",
      "Vi phạm."
    ],
    "answer": 2,
    "explanation": "Xe con quay đầu đè vạch nên vi phạm.",
    "tip": "",
    "image": "images/questions/q542.png"
  },
  {
    "id": 543,
    "chapter": 6,
    "isCritical": false,
    "question": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe con (E), xe mô tô (C).",
      "Xe tải (A), xe mô tô (D).",
      "Xe khách (B), xe mô tô (C).",
      "Xe khách (B), xe mô tô (D)."
    ],
    "answer": 1,
    "explanation": "Xe mô tô C chạy vào làn dành riêng xe ô tô: Vi phạm; Xe con E chạy vào làn dành riêng xe máy: Vi phạm.",
    "tip": "",
    "image": "images/questions/q543.png"
  },
  {
    "id": 544,
    "chapter": 6,
    "isCritical": false,
    "question": "Để điều khiển cho xe đi thẳng, người lái xe phải làm gì là đúng quy tắc giao thông?",
    "options": [
      "Nhường xe con rẽ trái trước.",
      "Đi thẳng không nhường."
    ],
    "answer": 1,
    "explanation": "Người lái xe phải nhường đường xe con rẽ trái trước vì xe con rẽ trái đã vào nơi giao nhau trước (đã qua vạch).",
    "tip": "",
    "image": "images/questions/q544.png"
  },
  {
    "id": 545,
    "chapter": 6,
    "isCritical": false,
    "question": "Người lái xe điều khiển xe đi theo hướng nào là đúng quy tắc giao thông?",
    "options": [
      "Chỉ hướng 2.",
      "Hướng 1 và 2.",
      "Tất cả các hướng trừ hướng 3.",
      "Tất cả các hướng trừ hướng 4."
    ],
    "answer": 2,
    "explanation": "Hướng 4: Biển số P.123b “Cấm rẽ phải”; Hướng 3: Biển số P.102 “Cấm đi ngược chiều”;<br/>Nên chỉ có thể đi theo hướng 1 và hướng 2 là câu trả lời đúng.",
    "tip": "",
    "image": "images/questions/q545.png"
  },
  {
    "id": 546,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào phải nhường đường là đúng quy tắc giao thông?",
    "options": [
      "Xe con (A).",
      "Xe con (B)."
    ],
    "answer": 2,
    "explanation": "Xe con (A) đang đi trước và xi nhan trái nên được đi trước, xe con (B) xi nhan phải và đi sau nên phải nhường.",
    "tip": "",
    "image": "images/questions/q546.png"
  },
  {
    "id": 547,
    "chapter": 6,
    "isCritical": false,
    "question": "Người lái xe điều khiển xe rẽ trái như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Rẽ trái ngay trước xe buýt.",
      "Rẽ trái trước xe tải.",
      "Nhường đường cho xe buýt và xe tải."
    ],
    "answer": 3,
    "explanation": "Xe tải đã vào nơi giao nhau trước nên được đi đầu tiên; Tiếp theo xe buýt: Đi thẳng; Cuối cùng là xe của bạn: Rẽ trái.",
    "tip": "",
    "image": "images/questions/q547.png"
  },
  {
    "id": 548,
    "chapter": 6,
    "isCritical": false,
    "question": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe con (B), xe mô tô (C).",
      "Xe con (A), xe mô tô (C).",
      "Xe con (E), xe mô tô (D).",
      "Tất cả các loại xe trên."
    ],
    "answer": 3,
    "explanation": "Nhìn vào bảng chỉ dẫn loại phương tiện theo làn đường: Xe con (E) đi trên làn dành riêng cho mô tô nên vi phạm: Xe mô tô (D) chạy trên làn dành riêng xe ô tô nên cũng vi phạm.",
    "tip": "",
    "image": "images/questions/q548.png"
  },
  {
    "id": 549,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào đi trước là đúng quy tắc giao thông?",
    "options": [
      "Xe của bạn.",
      "Xe tải."
    ],
    "answer": 2,
    "explanation": "Trước mặt xe của bạn có Biển số W.208 “Giao nhau với đường ưu tiên” nên phải ưu tiên các xe đang đi trên đường ưu tiên. Xe tải được ưu tiên trong trường hợp này.",
    "tip": "",
    "image": "images/questions/q549.png"
  },
  {
    "id": 550,
    "chapter": 6,
    "isCritical": false,
    "question": "Người lái xe có thể quay đầu xe như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Quay đầu theo hướng A.",
      "Quay đầu theo hướng B.",
      "Cấm quay đầu."
    ],
    "answer": 1,
    "explanation": "Trước mặt người lái xe có Biển số P.123a “Cấm rẽ trái” không cấm quay đầu. Tuy nhiên, hướng B quay đầu đè vạch liền nên vi phạm. Do đó, chỉ có hướng A quay đầu xe là câu trả lời đúng.",
    "tip": "",
    "image": "images/questions/q550.png"
  },
  {
    "id": 551,
    "chapter": 6,
    "isCritical": false,
    "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Xe con và xe tải, xe của bạn.",
      "Xe của bạn, xe tải, xe con.",
      "Xe của bạn và xe con, xe tải.",
      "Xe của bạn, xe tải + xe con."
    ],
    "answer": 3,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>Xe bạn đang trên đường ưu tiên nên được đi trước.<br/>Xe con rẽ phải không giao nhau với xe bạn nên được đi đồng thời với xe bạn.<br/>Xe tải rẽ trái từ đường không ưu tiên phải nhường đi sau cùng.",
    "tip": "",
    "image": "images/questions/q551.png"
  },
  {
    "id": 552,
    "chapter": 6,
    "isCritical": false,
    "question": "Khi muốn vượt xe tải, người lái xe phải làm gì là đúng quy tắc giao thông?",
    "options": [
      "Tăng tốc cho xe chạy vượt qua.",
      "Bật tín hiệu báo hiệu bằng đèn hoặc còi, khi đủ điều kiện an toàn, tăng tốc cho xe chạy vượt qua.",
      "Đánh lái sang làn bên trái và tăng tốc cho xe chạy vượt qua."
    ],
    "answer": 2,
    "explanation": "Chú ý vạch kẻ đường ngăn cách với làn bên trái là vạch liền. Bạn phải bật tín hiệu báo hiệu cho đến khi xe tải phía trước giảm tốc độ và chuyển qua làn bên phải thì bạn mới có thể tăng tốc cho xe vượt qua.",
    "tip": "",
    "image": "images/questions/q552.png"
  },
  {
    "id": 553,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo tín hiệu đèn, xe nào phải dừng lại là đúng quy tắc giao thông?",
    "options": [
      "Xe khách, xe mô tô.",
      "Xe tải, xe mô tô.",
      "Xe con, xe tải."
    ],
    "answer": 3,
    "explanation": "Xe con và xe tải đang ở trên làn đường có tín hiệu đèn đỏ nên phải dừng lại.",
    "tip": "",
    "image": "images/questions/q553.png"
  },
  {
    "id": 554,
    "chapter": 6,
    "isCritical": false,
    "question": "Trong hình dưới, những xe nào chấp hành quy tắc giao thông?",
    "options": [
      "Xe tải ( D), xe con (B).",
      "Xe con (A), xe con (C), xe con (E), xe buýt (G).",
      "Xe con (A), xe con (B), xe tải (D)."
    ],
    "answer": 2,
    "explanation": "Xe con (B) và xe tải (D) đang đè lên vạch liền phân tách làn đường nên vi phạm quy tắc giao thông. Các xe còn lại (A, C, E, G) là đúng quy tắc giao thông.",
    "tip": "",
    "image": "images/questions/q566.png"
  },
  {
    "id": 555,
    "chapter": 6,
    "isCritical": false,
    "question": "Người lái xe có được phép vượt xe tải để đi thẳng trong trường hợp này không?",
    "options": [
      "Được vượt.",
      "Cấm vượt."
    ],
    "answer": 2,
    "explanation": "Tại nơi giao nhau, trên đoạn đường có làn đường dành cho người đi bộ cắt ngang thì không được phép vượt.",
    "tip": "",
    "image": "images/questions/q555.png"
  },
  {
    "id": 556,
    "chapter": 6,
    "isCritical": false,
    "question": "Bạn có được phép vượt xe mô tô phía trước không?",
    "options": [
      "Cho phép.",
      "Không được vượt."
    ],
    "answer": 2,
    "explanation": "Tại nơi giao nhau, trên đoạn đường có làn đường dành cho người đi bộ cắt ngang thì không được phép vượt.",
    "tip": "",
    "image": "images/questions/q556.png"
  },
  {
    "id": 557,
    "chapter": 6,
    "isCritical": false,
    "question": "Người lái xe dừng tại vị trí nào là đúng quy tắc giao thông?",
    "options": [
      "Vị trí A và B.",
      "Vị trí A và C.",
      "Vị trí B và C.",
      "Cả ba vị trí A, B, C."
    ],
    "answer": 3,
    "explanation": "Vị trí A vi phạm do dừng bên trái đường.<br/>Biển số P.131a “Cấm đỗ xe” không cấm dừng xe. Do đó vị trí dừng tại B và C là câu trả lời đúng.",
    "tip": "",
    "image": "images/questions/q557.png"
  },
  {
    "id": 558,
    "chapter": 6,
    "isCritical": false,
    "question": "Bạn được dừng xe ở vị trí nào trong tình huống này?",
    "options": [
      "Được phép dừng ở vị trí A.",
      "Được phép dừng ở vị trí B.",
      "Được phép dừng ở vị trí A và B.",
      "Không được dừng."
    ],
    "answer": 4,
    "explanation": "Biển số P.130 “Cấm dừng xe và đỗ xe” và biển phụ báo phạm vi trước và sau biển báo nên không được phép dừng xe tại cả 2 vị trí A và B.",
    "tip": "",
    "image": "images/questions/q558.png"
  },
  {
    "id": 559,
    "chapter": 6,
    "isCritical": false,
    "question": "Theo tín hiệu đèn của xe cơ giới, xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe mô tô.",
      "Xe ô tô con.",
      "Không xe nào vi phạm.",
      "Cả hai xe."
    ],
    "answer": 4,
    "explanation": "Biển số R.301a chỉ cho phép các phương tiện đi thẳng trong khi cả hai xe đều có tín hiệu xi nhan rẽ sang hướng khác nên cả 2 xe đều vi phạm quy tắc giao thông.",
    "tip": "",
    "image": "images/questions/q559.png"
  },
  {
    "id": 560,
    "chapter": 6,
    "isCritical": false,
    "question": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe con.",
      "Xe tải.",
      "Xe con, xe tải."
    ],
    "answer": 2,
    "explanation": "Xe con trong cả hai phía đều đang ở đúng làn đường và đi theo hướng mà đèn xanh đang bật nên đúng quy tắc.<br/>Xe tải trong cả hai phía đều ở sai làn đường so với hướng rẽ nên vi phạm quy tắc giao thông.",
    "tip": "",
    "image": "images/questions/q560.png"
  },
  {
    "id": 561,
    "chapter": 6,
    "isCritical": false,
    "question": "Các xe đi theo hướng mũi tên, những xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe tải, xe con.",
      "Xe khách, xe con.",
      "Xe khách, xe tải."
    ],
    "answer": 3,
    "explanation": "Xe con và xe mô tô đang ở đúng làn đường, đúng hướng rẽ với tín hiệu đèn xanh nên đúng quy tắc giao thông.<br/>Xe khách và xe tải đang ở sai làn đường so với hướng rẽ nên đều vi phạm.",
    "tip": "",
    "image": "images/questions/q561.png"
  },
  {
    "id": 562,
    "chapter": 6,
    "isCritical": false,
    "question": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe con, xe tải, xe khách.",
      "Xe tải, xe khách, xe mô tô.",
      "Xe khách, xe mô tô, xe con.",
      "Cả bốn xe."
    ],
    "answer": 2,
    "explanation": "Xe con đi đúng làn đường theo hướng rẽ và tín hiệu đèn.<br/>Xe khách: Sai làn đường và tín hiệu đèn.<br/>Xe tải: Đi thẳng vi phạm đèn đỏ.<br/>Xe mô tô: Đi thẳng vi phạm đèn đỏ.",
    "tip": "",
    "image": "images/questions/q562.png"
  },
  {
    "id": 563,
    "chapter": 6,
    "isCritical": false,
    "question": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe khách, xe tải.",
      "Xe khách, xe con.",
      "Xe con, xe tải.",
      "Xe khách, xe tải, xe con."
    ],
    "answer": 1,
    "explanation": "Xe con đúng làn đường và tín hiệu đèn.<br/>Xe khách: Sai làn đường; Xe tải: Sai làn đường và tín hiệu đèn.",
    "tip": "",
    "image": "images/questions/q563.png"
  },
  {
    "id": 564,
    "chapter": 6,
    "isCritical": false,
    "question": "Trong tình huống dưới đây, để tránh xe phía trước bị hỏng đột xuất trên đường, người lái xe phải làm gì?",
    "options": [
      "Đánh lái sang trái cho xe vượt qua.",
      "Quan sát phía trước, phía sau, khi đủ điều kiện an toàn, bật tín hiệu bằng đèn hoặc còi rồi cho xe chạy vượt qua.",
      "Cấm vượt."
    ],
    "answer": 2,
    "explanation": "Chú ý quan sát, bật tín hiệu đèn, còi rồi mới được vượt nên Đáp án 2 trong trường hợp này mô tả chính xác.",
    "tip": "",
    "image": "images/questions/q564.png"
  },
  {
    "id": 565,
    "chapter": 6,
    "isCritical": false,
    "question": "Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
    "options": [
      "Xe tải, xe mô tô.",
      "Xe khách, xe mô tô.",
      "Xe tải, xe con.",
      "Xe mô tô, xe con."
    ],
    "answer": 2,
    "explanation": "Xe con và xe tải: Vi phạm tín hiệu đèn;<br/>Xe khách và xe mô tô: Đúng làn đường và đúng tín hiệu đèn.",
    "tip": "",
    "image": "images/questions/q565.png"
  },
  {
    "id": 566,
    "chapter": 6,
    "isCritical": false,
    "question": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
    "options": [
      "Xe con (A), xe con (B), xe tải (D).",
      "Xe tải (D), xe con (E), xe buýt (G).",
      "Xe tải ( D), xe con (B).",
      "Xe con (B), xe con (C)."
    ],
    "answer": 3,
    "explanation": "Xe con (B) và xe tải (D) đang đè lên vạch liền phân tách làn đường nên vi phạm quy tắc giao thông.",
    "tip": "",
    "image": "images/questions/q566.png"
  },
  {
    "id": 567,
    "chapter": 6,
    "isCritical": false,
    "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "Xe của bạn, xe mô tô, xe con.",
      "Xe con, xe của bạn, xe mô tô.",
      "Xe mô tô, xe con, xe của bạn."
    ],
    "answer": 3,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>Biển báo phía trước là đường ưu tiên và biển phụ báo hướng di chuyển của xe mô tô là hướng ưu tiên.<br/>1. Xe mô tô: Đường ưu tiên;<br/>2. Xe con: Đường không ưu tiên, bên phải trống;<br/>3. Xe của bạn: Đường không ưu tiên, bên phải vướng xe con.",
    "tip": "",
    "image": "images/questions/q567.png"
  },
  {
    "id": 568,
    "chapter": 6,
    "isCritical": false,
    "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "Xe của bạn, xe mô tô, xe con.",
      "Xe con, xe của bạn, xe mô tô.",
      "Xe mô tô, xe con, xe của bạn."
    ],
    "answer": 2,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Đường cùng cấp: Bên phải trống, rẽ phải, đi thẳng, rẽ trái.<br/>1. Xe con: Rẽ phải; 2. Xe của bạn: Đi thẳng; 3. Mô tô: Rẽ trái.",
    "tip": "",
    "image": "images/questions/q568.png"
  },
  {
    "id": 569,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào phải dừng lại trong trường hợp này?",
    "options": [
      "Xe con.",
      "Xe của bạn.",
      "Cả hai xe."
    ],
    "answer": 1,
    "explanation": "Xe con dừng lại vì phía trước là tín hiệu đèn đỏ. Xe của bạn được đi vì rẽ phải trước đèn đỏ nên không vi phạm.",
    "tip": "",
    "image": "images/questions/q569.png"
  },
  {
    "id": 570,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe của bạn được đi theo hướng nào trong trường hợp này?",
    "options": [
      "Đi thẳng, rẽ trái.",
      "Đi thẳng, rẽ phải.",
      "Rẽ trái.",
      "Đi thẳng, rẽ phải, rẽ trái."
    ],
    "answer": 1,
    "explanation": "Làn đường mà xe của bạn đang đi chỉ được đi thẳng hoặc rẽ trái thôi. Nếu bạn chọn rẽ phải là bị đèn tín hiệu nó lừa rồi đó.",
    "tip": "",
    "image": "images/questions/q570.png"
  },
  {
    "id": 571,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe của bạn được đi theo hướng nào trong trường hợp này?",
    "options": [
      "Chuyển sang làn đường bên phải và rẽ phải.",
      "Dừng lại trước vạch dừng và rẽ phải khi đèn xanh.",
      "Dừng lại trước vạch dừng và đi thẳng hoặc rẽ trái khi đèn xanh."
    ],
    "answer": 3,
    "explanation": "Bạn phải dừng lại chờ đèn đỏ và làn đường bạn đang dừng xe chỉ được rẽ trái hoặc đi thẳng khi đèn xanh.",
    "tip": "",
    "image": "images/questions/q571.png"
  },
  {
    "id": 572,
    "chapter": 6,
    "isCritical": false,
    "question": "Bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "Tăng tốc độ, rẽ phải trước xe tải và xe đạp.",
      "Giảm tốc độ, rẽ phải sau xe tải và xe đạp.",
      "Tăng tốc độ, rẽ phải trước xe đạp."
    ],
    "answer": 2,
    "explanation": "Xe tải đã vào nơi giao nhau trước nên sẽ được ưu tiên trước. Biển báo phía trước là đường ưu tiên dành cho xe thô sơ nên phải nhường đường cho xe đạp. Do đó, xe bạn rẽ phải sau xe tải và xe đạp.",
    "tip": "",
    "image": "images/questions/q572.png"
  },
  {
    "id": 573,
    "chapter": 6,
    "isCritical": false,
    "question": "Bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "Tăng tốc độ, rẽ phải trước xe con màu xanh phía trước và người đi bộ.",
      "Giảm tốc độ, để người đi bộ qua đường và rẽ phải trước xe con màu xanh.",
      "Giảm tốc độ, để người đi bộ qua đường và rẽ phải sau xe con màu xanh."
    ],
    "answer": 3,
    "explanation": "Ở vạch kẻ đường dành cho người đi bộ có người chuẩn bị sang đường nên phải nhường đường và không được phép vượt.<br/>Nên bạn phải nhường đường cho người đi bộ và rẽ phải sau xe con màu xanh.",
    "tip": "",
    "image": "images/questions/q573.png"
  },
  {
    "id": 574,
    "chapter": 6,
    "isCritical": false,
    "question": "Bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "Nhường đường cho xe khách và đi trước xe đạp.",
      "Nhường đường cho xe đạp và đi trước xe khách.",
      "Nhường đường cho xe đạp và xe khách."
    ],
    "answer": 3,
    "explanation": "Trước mặt bạn có biển Biển số R.122 “Dừng lại” nên phải dừng xe và nhường đường. Nên xe của bạn phải nhường đường cho xe đạp và xe khách.",
    "tip": "",
    "image": "images/questions/q574.png"
  },
  {
    "id": 575,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào phải nhường đường trong trường hợp này?",
    "options": [
      "Xe con.",
      "Xe tải.",
      "Xe của bạn."
    ],
    "answer": 2,
    "explanation": "Biển W.207c “Giao nhau với đường không ưu tiên” cho biết xe tải đi từ đường không ưu tiên nên phải nhường đường.",
    "tip": "",
    "image": "images/questions/q575.png"
  },
  {
    "id": 576,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào phải nhường đường trong trường hợp này?",
    "options": [
      "Xe đi ngược chiều.",
      "Xe của bạn."
    ],
    "answer": 2,
    "explanation": "Xe bạn không thể vượt khi phía trước có chướng ngại vật hoặc xe đi ngược chiều. Nên xe bạn phải nhường đường trong tình huống này.",
    "tip": "",
    "image": "images/questions/q576.png"
  },
  {
    "id": 577,
    "chapter": 6,
    "isCritical": false,
    "question": "Bạn xử lý như thế nào khi lái xe ô tô vượt qua đoàn người đi xe đạp có tổ chức?",
    "options": [
      "Tăng tốc độ, chuyển sang làn đường bên trái để vượt.",
      "Không được vượt những người đi xe đạp."
    ],
    "answer": 2,
    "explanation": "Xe của bạn không được vượt khi bên trái có chướng ngại vật hay xe ngược chiều.",
    "tip": "",
    "image": "images/questions/q577.png"
  },
  {
    "id": 578,
    "chapter": 6,
    "isCritical": false,
    "question": "Phía trước có một xe đang lùi vào nơi đỗ, xe con phía trước đang chuyển sang làn đường bên trái, bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "Nếu phía sau không có xe xin vượt, chuyển sang làn đường bên trái.",
      "Nếu phía sau có xe xin vượt, thì giảm tốc độ, ở lại làn đường, dừng lại khi cần thiết.",
      "Tăng tốc độ trên làn đường của mình và vượt xe con.",
      "Ý 1 và ý 2."
    ],
    "answer": 4,
    "explanation": "Cần quan sát kỹ xe phía sau trong tình huống này để có hành động hợp lý. Nếu không có xe xin vượt chuyển làn trái đi tiếp. Nếu có xe xin vượt thì giảm tốc độ, ở lại làn đường hoặc dừng lại nếu cần thiết.",
    "tip": "",
    "image": "images/questions/q578.png"
  },
  {
    "id": 579,
    "chapter": 6,
    "isCritical": false,
    "question": "Bạn xử lý như thế nào khi xe phía trước đang lùi ra khỏi nơi đỗ?",
    "options": [
      "Chuyển sang nửa đường bên trái để đi tiếp.",
      "Bấm còi, nháy đèn báo hiệu và đi tiếp.",
      "Giảm tốc độ, dừng lại nhường đường."
    ],
    "answer": 3,
    "explanation": "Không được vượt khi phía trước có chướng ngại vật hay xe chạy ngược chiều. Do đó, cần giảm tốc độ, dừng lại nhường đường.",
    "tip": "",
    "image": "images/questions/q579.png"
  },
  {
    "id": 580,
    "chapter": 6,
    "isCritical": false,
    "question": "Phía trước có một xe màu xanh đang vượt xe màu vàng trên làn đường của bạn, bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "Phanh xe giảm tốc độ và đi sát lề đường bên phải.",
      "Bấm còi, nháy đèn báo hiệu, giữ nguyên tốc độ và đi tiếp.",
      "Phanh xe giảm tốc độ và đi sát vào lề đường bên trái."
    ],
    "answer": 1,
    "explanation": "Vì xe màu xanh đang trên làn đường của bạn, để đảm bảo an toàn, bạn cần phanh xe giảm tốc độ và đi sát lề đường bên phải.",
    "tip": "",
    "image": "images/questions/q580.png"
  },
  {
    "id": 581,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe tải phía trước có tín hiệu xin chuyển làn đường, bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "Bật tín hiệu xin chuyển làn đường sang trái để vượt xe tải.",
      "Phanh xe giảm tốc độ chờ xe tải phía trước chuyển làn đường.",
      "Bấm còi báo hiệu và vượt qua xe tải trên làn đường của mình."
    ],
    "answer": 2,
    "explanation": "Không được vượt khi phía trước có xe đang chuyển làn đường. Do đó, để đảm bảo an toàn bạn cần phanh xe giảm tốc độ chờ xe tải phía trước chuyển làn đường.",
    "tip": "",
    "image": "images/questions/q581.png"
  },
  {
    "id": 582,
    "chapter": 6,
    "isCritical": false,
    "question": "Bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "Tăng tốc độ và đi thẳng qua ngã tư.",
      "Dừng xe trước vạch dừng.",
      "Giảm tốc độ và đi thẳng qua ngã tư."
    ],
    "answer": 3,
    "explanation": "Trước mặt là Biển số W.208 “Giao nhau với đường ưu tiên” nên bạn phải giảm tốc độ, quan sát nhường đường ưu tiên nếu có và đi qua ngã tư.",
    "tip": "",
    "image": "images/questions/q582.png"
  },
  {
    "id": 583,
    "chapter": 6,
    "isCritical": false,
    "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "Xe của bạn, xe mô tô, xe đạp.",
      "Xe mô tô, xe đạp, xe của bạn.",
      "Xe đạp, xe mô tô, xe của bạn."
    ],
    "answer": 3,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe đạp: Bên phải trống; 2. Xe mô tô: Đi thẳng; 3. Xe của bạn: Rẽ trái.",
    "tip": "",
    "image": "images/questions/q583.png"
  },
  {
    "id": 584,
    "chapter": 6,
    "isCritical": false,
    "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "Xe của bạn, xe tải, xe con.",
      "Xe con, xe tải, xe của bạn.",
      "Xe tải, xe của bạn, xe con.",
      "Xe của bạn, xe con, xe tải."
    ],
    "answer": 4,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe của bạn: Đường ưu tiên; 2. Xe con: Đi không ưu tiên, đi thẳng; 3. Xe tải: Đường không ưu tiên, rẽ trái.",
    "tip": "",
    "image": "images/questions/q584.png"
  },
  {
    "id": 585,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào phải nhường đường trong trường hợp này?",
    "options": [
      "Xe của bạn.",
      "Xe con."
    ],
    "answer": 1,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe con: Đường ưu tiên; 2. Xe của bạn: Đường không ưu tiên nên phải nhường đường.",
    "tip": "",
    "image": "images/questions/q585.png"
  },
  {
    "id": 586,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào phải nhường đường trong trường hợp này?",
    "options": [
      "Xe con.",
      "Xe của bạn."
    ],
    "answer": 2,
    "explanation": "Trước mặt xe của bạn có Biển số P.132 “Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp” nên phải nhường đường.",
    "tip": "",
    "image": "images/questions/q586.png"
  },
  {
    "id": 587,
    "chapter": 6,
    "isCritical": false,
    "question": "Bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "Tăng tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau.",
      "Giảm tốc độ, đi qua vạch người đi bộ sang đường, để người đi bộ sang đường sau.",
      "Giảm tốc độ, để người đi bộ sang đường trước, sau đó cho xe đi qua vạch người đi bộ sang đường."
    ],
    "answer": 3,
    "explanation": "Trước mặt bạn có biển I.423a “Đường người đi bộ sang ngang” nên bạn phải giảm tốc độ và nhường đường cho người đi bộ sang đường.",
    "tip": "",
    "image": "images/questions/q587.png"
  },
  {
    "id": 588,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào được đi trước trong trường hợp này?",
    "options": [
      "Xe con.",
      "Xe của bạn."
    ],
    "answer": 2,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>Xe của bạn trên đường ưu tiên (theo biển báo) nên được đi trước.",
    "tip": "",
    "image": "images/questions/q588.png"
  },
  {
    "id": 589,
    "chapter": 6,
    "isCritical": false,
    "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "Xe con, xe tải, xe của bạn.",
      "Xe tải, xe con, xe của bạn.",
      "Xe tải, xe của bạn, xe con."
    ],
    "answer": 2,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe tải: Bên phải trống; 2. Xe con: Đi thẳng; 3. Xe của bạn: Rẽ trái.",
    "tip": "",
    "image": "images/questions/q589.png"
  },
  {
    "id": 590,
    "chapter": 6,
    "isCritical": false,
    "question": "Bạn xử lý như thế nào trong trường hợp này?",
    "options": [
      "Tăng tốc độ cho xe lấn sang phần đường bên trái.",
      "Giảm tốc độ cho xe lấn sang phần đường bên trái.",
      "Giảm tốc độ cho xe đi sát phần đường bên phải."
    ],
    "answer": 3,
    "explanation": "Phía trước khuất tầm nhìn, bên trái làn đường là vạch liền nên bạn cần phải giảm tốc độ, đi sát làn đường bên phải để đảm bảo đi đúng làn đường.",
    "tip": "",
    "image": "images/questions/q590.png"
  },
  {
    "id": 591,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào được đi trước trong trường hợp này?",
    "options": [
      "Xe tải.",
      "Xe của bạn."
    ],
    "answer": 1,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe tải: Đi thẳng; 2. Xe của bạn: Rẽ trái.",
    "tip": "",
    "image": "images/questions/q591.png"
  },
  {
    "id": 592,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe nào dừng đúng theo quy tắc giao thông?",
    "options": [
      "Xe con.",
      "Xe mô tô.",
      "Cả 2 xe đều đúng."
    ],
    "answer": 1,
    "explanation": "Biển số W.211a “Giao nhau với đường sắt không có rào chắn” thì các phương tiện đứng cách xa đường sắt tối thiểu 5m nên xe con đúng.",
    "tip": "",
    "image": "images/questions/q592.png"
  },
  {
    "id": 593,
    "chapter": 6,
    "isCritical": false,
    "question": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
    "options": [
      "Xe tải, xe đạp, xe của bạn.",
      "Xe của bạn, xe đạp, xe tải.",
      "Xe của bạn, xe tải, xe đạp."
    ],
    "answer": 3,
    "explanation": "Thứ tự ưu tiên: Xe ưu tiên - Đường ưu tiên - Bên phải trống - Rẽ phải - Đi thẳng - Rẽ trái.<br/>1. Xe của bạn: Bên phải trống, đi thẳng; 2. Xe tải: Rẽ trái, bên phải trống (khi xe bạn đã đi rồi); 3. Xe đạp: Rẽ trái.",
    "tip": "",
    "image": "images/questions/q593.png"
  },
  {
    "id": 594,
    "chapter": 6,
    "isCritical": false,
    "question": "Để điều khiển xe rẽ trái, bạn chọn hướng đi nào dưới đây?",
    "options": [
      "Hướng 1.",
      "Hướng 2.",
      "Cả hai hướng đều được."
    ],
    "answer": 1,
    "explanation": "Vạch kẻ đường nét đứt màu vàng, phân chia 2 chiều xe chạy. Do đó, hướng 2 sẽ đi bên trái đường 1 đoạn nên không được phép. Do đó, bạn chỉ được chọn theo hướng 1 để rẽ trái.",
    "tip": "",
    "image": "images/questions/q594.png"
  },
  {
    "id": 595,
    "chapter": 6,
    "isCritical": false,
    "question": "Khi gặp xe ngược chiều bật đèn pha trong tình huống dưới đây, bạn xử lý như thế nào?",
    "options": [
      "Bật đèn chiếu xa, tăng tốc độ vượt xe cùng chiều.",
      "Giữ nguyên đèn chiếu gần, giảm tốc độ, đi sau xe phía trước.",
      "Giữ nguyên đèn chiếu gần, tăng tốc độ vượt xe cùng chiều."
    ],
    "answer": 2,
    "explanation": "Giữ nguyên đèn chiếu gần và giảm tốc độ do không thể quan sát rõ phía trước.",
    "tip": "",
    "image": "images/questions/q595.png"
  },
  {
    "id": 596,
    "chapter": 6,
    "isCritical": false,
    "question": "Xe của bạn đang di chuyển gần đến khu vực giao cắt với đường sắt, khi rào chắn đang dịch chuyển, bạn điều khiển xe như thế nào là đúng quy tắc giao thông?",
    "options": [
      "Quan sát nếu thấy không có tàu thì tăng tốc cho xe vượt qua đường sắt.",
      "Dừng lại trước rào chắn một khoảng cách an toàn.",
      "Ra tín hiệu, yêu cầu người gác chắn tàu kéo chậm barie để xe bạn qua."
    ],
    "answer": 2,
    "explanation": "Bắt buộc phải dừng xe.",
    "tip": "",
    "image": "images/questions/q596.png"
  },
  {
    "id": 597,
    "chapter": 6,
    "isCritical": false,
    "question": "Trong tình huống dưới đây, xe con màu đỏ nhập làn đường cao tốc theo hướng mũi tên là đúng hay sai?",
    "options": [
      "Đúng.",
      "Sai."
    ],
    "answer": 2,
    "explanation": "Khi nhập làn cao tốc phải chạy dọc theo làn tạm để đủ thời gian quan sát, khoảng cách an toàn và đủ tốc độ trước khi di chuyển vào làn cao tốc nên trong tình huống này xe màu đỏ sai khi nhập làn cao tốc.",
    "tip": "",
    "image": "images/questions/q597.png"
  },
  {
    "id": 598,
    "chapter": 6,
    "isCritical": false,
    "question": "Trong tình huống dưới đây, xe con màu đỏ có được phép vượt khi xe con màu xanh đang vượt xe tải hay không?",
    "options": [
      "Được vượt.",
      "Không được vượt."
    ],
    "answer": 2,
    "explanation": "Xe xin vượt chỉ được vượt khi không có chướng ngại vật phía trước, không có xe chạy ngược chiều trong đoạn đường định vượt, xe chạy trước không có tín hiệu vượt xe khác và đã tránh về bên phải. Do đó, xe màu đỏ không được vượt.",
    "tip": "",
    "image": "images/questions/q598.png"
  },
  {
    "id": 599,
    "chapter": 6,
    "isCritical": false,
    "question": "Trong tình huống dưới đây, xe con màu vàng vượt xe con màu đỏ là đúng quy tắc giao thông hay không?",
    "options": [
      "Đúng.",
      "Không đúng."
    ],
    "answer": 1,
    "explanation": "Xe màu đỏ đang tránh về phía bên phải, xe màu vàng đã có tín hiệu xin vượt, vạch kẻ đường theo hướng xe chạy là nét đứt , không có xe ngược chiều. Nên xe vàng vượt đúng quy tắc giao thông.",
    "tip": "",
    "image": "images/questions/q599.png"
  },
  {
    "id": 600,
    "chapter": 6,
    "isCritical": false,
    "question": "Trong tình huống dưới đây, xe đầu kéo kéo rơ moóc (xe container) đang rẽ phải, xe con màu xanh và xe máy phía sau xe container đi như thế nào để bảo đảm an toàn?",
    "options": [
      "Vượt về phía bên phải để đi tiếp.",
      "Giảm tốc độ chờ xe container rẽ xong rồi tiếp tục đi.",
      "Vượt về phía bên trái để đi tiếp."
    ],
    "answer": 2,
    "explanation": "Giảm tốc độ chờ xe đầu kéo rẽ phải rồi mới tiếp tục đi.",
    "tip": "",
    "image": "images/questions/q600.png"
  }
];

export const GPLX_PRESET_EXAMS = [
  {
    "id": 1,
    "title": "Đề Số 1",
    "questionIds": [
      19,
      20,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      181,
      206,
      207,
      264,
      301,
      302,
      303,
      304,
      305,
      306,
      307,
      308,
      309,
      486,
      487,
      488,
      489,
      490,
      491,
      492
    ]
  },
  {
    "id": 2,
    "title": "Đề Số 2",
    "questionIds": [
      21,
      22,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      182,
      208,
      209,
      265,
      310,
      311,
      312,
      313,
      314,
      315,
      316,
      317,
      318,
      493,
      494,
      495,
      496,
      497,
      498,
      499
    ]
  },
  {
    "id": 3,
    "title": "Đề Số 3",
    "questionIds": [
      23,
      24,
      17,
      18,
      19,
      20,
      21,
      22,
      183,
      210,
      211,
      266,
      319,
      320,
      321,
      322,
      323,
      324,
      325,
      326,
      327,
      500,
      501,
      502,
      503,
      504,
      505,
      506,
      439,
      471
    ]
  },
  {
    "id": 4,
    "title": "Đề Số 4",
    "questionIds": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      184,
      212,
      213,
      267,
      328,
      329,
      330,
      331,
      332,
      333,
      334,
      335,
      336,
      507,
      508,
      509,
      510,
      511,
      512,
      513,
      79,
      278
    ]
  },
  {
    "id": 5,
    "title": "Đề Số 5",
    "questionIds": [
      27,
      28,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      185,
      214,
      215,
      268,
      337,
      338,
      339,
      340,
      341,
      342,
      343,
      344,
      345,
      514,
      515,
      516,
      517,
      518,
      519,
      520
    ]
  },
  {
    "id": 6,
    "title": "Đề Số 6",
    "questionIds": [
      30,
      32,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      186,
      216,
      217,
      269,
      346,
      347,
      348,
      349,
      350,
      351,
      352,
      353,
      354,
      521,
      522,
      523,
      524,
      525,
      526,
      527
    ]
  },
  {
    "id": 7,
    "title": "Đề Số 7",
    "questionIds": [
      34,
      35,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      187,
      218,
      219,
      270,
      355,
      356,
      357,
      358,
      359,
      360,
      361,
      362,
      363,
      528,
      529,
      530,
      531,
      532,
      533,
      534
    ]
  },
  {
    "id": 8,
    "title": "Đề Số 8",
    "questionIds": [
      47,
      48,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      188,
      220,
      221,
      271,
      364,
      365,
      366,
      367,
      368,
      369,
      370,
      371,
      372,
      535,
      536,
      537,
      538,
      539,
      540,
      541
    ]
  },
  {
    "id": 9,
    "title": "Đề Số 9",
    "questionIds": [
      52,
      53,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      189,
      222,
      223,
      272,
      373,
      374,
      375,
      376,
      377,
      378,
      379,
      380,
      381,
      542,
      543,
      544,
      545,
      546,
      547,
      548
    ]
  },
  {
    "id": 10,
    "title": "Đề Số 10",
    "questionIds": [
      55,
      58,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      190,
      224,
      225,
      273,
      382,
      383,
      384,
      385,
      386,
      387,
      388,
      389,
      390,
      549,
      550,
      551,
      552,
      553,
      554,
      555
    ]
  },
  {
    "id": 11,
    "title": "Đề Số 11",
    "questionIds": [
      63,
      64,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      191,
      226,
      227,
      274,
      391,
      392,
      393,
      394,
      395,
      396,
      397,
      398,
      399,
      556,
      557,
      558,
      559,
      560,
      561,
      562
    ]
  },
  {
    "id": 12,
    "title": "Đề Số 12",
    "questionIds": [
      65,
      66,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      192,
      228,
      229,
      275,
      400,
      401,
      402,
      403,
      404,
      405,
      406,
      407,
      408,
      563,
      564,
      565,
      566,
      567,
      568,
      569
    ]
  },
  {
    "id": 13,
    "title": "Đề Số 13",
    "questionIds": [
      67,
      68,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      193,
      230,
      231,
      276,
      409,
      410,
      411,
      412,
      413,
      414,
      415,
      416,
      417,
      570,
      571,
      572,
      573,
      574,
      575,
      576
    ]
  },
  {
    "id": 14,
    "title": "Đề Số 14",
    "questionIds": [
      70,
      71,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      194,
      232,
      233,
      277,
      418,
      419,
      420,
      421,
      422,
      423,
      424,
      425,
      426,
      577,
      578,
      579,
      580,
      581,
      582,
      583
    ]
  },
  {
    "id": 15,
    "title": "Đề Số 15",
    "questionIds": [
      72,
      73,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      195,
      234,
      235,
      278,
      427,
      428,
      429,
      430,
      431,
      432,
      433,
      434,
      435,
      584,
      585,
      586,
      587,
      588,
      589,
      590
    ]
  },
  {
    "id": 16,
    "title": "Đề Số 16",
    "questionIds": [
      74,
      85,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      196,
      236,
      237,
      279,
      436,
      437,
      438,
      439,
      440,
      441,
      442,
      443,
      444,
      591,
      592,
      593,
      594,
      595,
      596,
      597
    ]
  },
  {
    "id": 17,
    "title": "Đề Số 17",
    "questionIds": [
      86,
      87,
      129,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      197,
      238,
      239,
      280,
      445,
      446,
      447,
      448,
      449,
      450,
      451,
      452,
      453,
      598,
      599,
      600,
      486,
      487,
      488,
      489
    ]
  },
  {
    "id": 18,
    "title": "Đề Số 18",
    "questionIds": [
      88,
      89,
      137,
      138,
      139,
      140,
      141,
      142,
      143,
      144,
      198,
      240,
      241,
      281,
      454,
      455,
      456,
      457,
      458,
      459,
      460,
      461,
      462,
      490,
      491,
      492,
      493,
      494,
      495,
      496
    ]
  },
  {
    "id": 19,
    "title": "Đề Số 19",
    "questionIds": [
      90,
      91,
      145,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      199,
      242,
      243,
      282,
      463,
      464,
      465,
      466,
      467,
      468,
      469,
      470,
      471,
      497,
      498,
      499,
      500,
      501,
      502,
      503
    ]
  },
  {
    "id": 20,
    "title": "Đề Số 20",
    "questionIds": [
      92,
      93,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160,
      200,
      244,
      245,
      283,
      472,
      473,
      474,
      475,
      476,
      477,
      478,
      479,
      480,
      504,
      505,
      506,
      507,
      508,
      509,
      510
    ]
  }
];

/**
 * Sinh đề thi ngẫu nhiên 30 câu theo chuẩn sát hạch Tổng cục Đường bộ Việt Nam:
 * - 9-10 câu Quy tắc giao thông & Khái niệm
 * - 1-2 câu Nghiệp vụ vận tải
 * - 1-2 câu Văn hóa đạo đức lái xe
 * - 1 câu Kỹ thuật & Cấu tạo sửa chữa
 * - 9-10 câu Hệ thống biển báo hiệu đường bộ
 * - 7 câu Sa hình & Tình huống giao thông
 * - Bao gồm ít nhất 1-2 câu điểm liệt
 */
export function generateRandomExam30() {
  const ch1 = GPLX_QUESTIONS.filter(q => q.chapter === 1 && !q.isCritical);
  const ch2 = GPLX_QUESTIONS.filter(q => q.chapter === 2 && !q.isCritical);
  const ch3 = GPLX_QUESTIONS.filter(q => q.chapter === 3 && !q.isCritical);
  const ch4 = GPLX_QUESTIONS.filter(q => q.chapter === 4 && !q.isCritical);
  const ch5 = GPLX_QUESTIONS.filter(q => q.chapter === 5 && !q.isCritical);
  const ch6 = GPLX_QUESTIONS.filter(q => q.chapter === 6 && !q.isCritical);
  const criticals = GPLX_QUESTIONS.filter(q => q.isCritical);

  function sample(arr, n) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  }

  const selected = [
    ...sample(criticals, 1),
    ...sample(ch1, 8),
    ...sample(ch2, 1),
    ...sample(ch3, 2),
    ...sample(ch4, 1),
    ...sample(ch5, 10),
    ...sample(ch6, 7)
  ];

  // If duplicate IDs somehow exist, fill with random questions
  const uniqueMap = new Map();
  selected.forEach(q => uniqueMap.set(q.id, q));

  while (uniqueMap.size < 30) {
    const randomQ = GPLX_QUESTIONS[Math.floor(Math.random() * GPLX_QUESTIONS.length)];
    uniqueMap.set(randomQ.id, randomQ);
  }

  return Array.from(uniqueMap.values()).slice(0, 30);
}
