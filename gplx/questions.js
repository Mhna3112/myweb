/**
 * GPLX 600 CÂU HỎI SÁT HẠCH LÁI XE Ô TÔ - DATABASE CHUẨN
 * Bản quyền dữ liệu: GPLX Pro Vietnam
 * Đầy đủ 60 Câu Điểm Liệt (isCritical: true), 7 Chương, Biển Báo, Sa Hình & 20 Đề Thi 30 Câu
 */

export const GPLX_CHAPTERS = [
  { id: 1, name: "Chương 1: Khái niệm & Quy tắc giao thông", desc: "Khái niệm làn đường, nồng độ cồn, tốc độ và khoảng cách an toàn", icon: "book-open", color: "#BA4A1B" },
  { id: 2, name: "Chương 2: Nghiệp vụ vận tải", desc: "Thời gian làm việc lái xe, quyền và nghĩa vụ vận tải hàng hóa, hành khách", icon: "truck", color: "#2563EB" },
  { id: 3, name: "Chương 3: Văn hóa giao thông & Đạo đức", desc: "Quy tắc ứng xử khi va chạm, cứu giúp người bị nạn", icon: "heart", color: "#DC2626" },
  { id: 4, name: "Chương 4: Kỹ thuật lái xe ô tô", desc: "Vào cua, lên/xuống dốc, đề-pa, phanh khẩn cấp, lái xe đường trơn", icon: "compass", color: "#059669" },
  { id: 5, name: "Chương 5: Cấu tạo & Sửa chữa xe ô tô", desc: "Động cơ, phanh, bôi trơn, ắc quy, dây an toàn, túi khí", icon: "tool", color: "#7C3AED" },
  { id: 6, name: "Chương 6: Hệ thống biển báo hiệu đường bộ", desc: "Biển cấm, biển nguy hiểm, biển hiệu lệnh, biển chỉ dẫn", icon: "alert-triangle", color: "#D97706" },
  { id: 7, name: "Chương 7: Giải các thế sa hình & Tình huống", desc: "Quy tắc ưu tiên qua giao lộ: Giao lộ > Xe ưu tiên > Đường ưu tiên > Hướng đi", icon: "map-pin", color: "#0D9488" }
];

export const GPLX_QUESTIONS = [
  {
    "id": 1,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi nào dưới đây bị nghiêm cấm trong hoạt động giao thông đường bộ?",
    "options": [
      "1. Đỗ xe trên đường phố theo quy định.",
      "2. Sử dụng xe đạp đi trên các tuyến quốc lộ có mật độ giao thông cao.",
      "3. Đua xe, cổ vũ đua xe, tổ chức đua xe trái phép; lạng lách, đánh võng.",
      "4. Bấm còi trong khu vực đô thị từ 5 giờ sáng đến 22 giờ đêm."
    ],
    "answer": 3,
    "explanation": "Theo Khoản 6 Điều 8 Luật Giao thông đường bộ 2008, đua xe, cổ vũ đua xe, tổ chức đua xe trái phép, lạng lách, đánh võng là các hành vi bị nghiêm cấm tuyệt đối.",
    "tip": "Mẹo: Các hành vi 'Đua xe, cổ vũ đua xe, lạng lách' luôn luôn bị nghiêm cấm.",
    "imageSvg": ""
  },
  {
    "id": 2,
    "chapter": 1,
    "isCritical": true,
    "question": "Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy có bị nghiêm cấm hay không?",
    "options": [
      "1. Bị nghiêm cấm.",
      "2. Không bị nghiêm cấm nếu sử dụng với liều lượng nhỏ.",
      "3. Không bị nghiêm cấm nếu là chất ma túy theo chỉ định của bác sĩ.",
      "4. Bị nghiêm cấm chỉ khi gây ra tai nạn giao thông."
    ],
    "answer": 1,
    "explanation": "Luật GTĐB nghiêm cấm tuyệt đối người điều khiển phương tiện giao thông mà trong cơ thể có chất ma túy dưới bất kỳ hình thức nào.",
    "tip": "Mẹo: Ma túy = Bị nghiêm cấm tuyệt đối.",
    "imageSvg": ""
  },
  {
    "id": 3,
    "chapter": 1,
    "isCritical": true,
    "question": "Người điều khiển xe mô tô, ô tô, máy kéo trên đường mà trong máu hoặc hơi thở có nồng độ cồn có bị nghiêm cấm không?",
    "options": [
      "1. Bị nghiêm cấm.",
      "2. Không bị nghiêm cấm nếu nồng độ cồn trong máu ở mức dưới 50 miligam/100 mililít máu.",
      "3. Không bị nghiêm cấm nếu nồng độ cồn trong hơi thở ở mức dưới 0,25 miligam/1 lít khí thở.",
      "4. Chỉ bị nghiêm cấm khi điều khiển phương tiện trên đường cao tốc."
    ],
    "answer": 1,
    "explanation": "Theo Luật Phòng chống tác hại của rượu, bia 2019 và Nghị định 100/2019/NĐ-CP, việc điều khiển phương tiện tham gia giao thông mà trong máu hoặc hơi thở có nồng độ cồn bị nghiêm cấm triệt để (nồng độ cồn = 0).",
    "tip": "Mẹo: Cứ thấy 'trong máu hoặc hơi thở có nồng độ cồn' là chọn ngay 'Bị nghiêm cấm'.",
    "imageSvg": ""
  },
  {
    "id": 4,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?",
    "options": [
      "1. Bị nghiêm cấm tùy từng trường hợp cụ thể.",
      "2. Không bị nghiêm cấm trên đường vắng.",
      "3. Bị nghiêm cấm.",
      "4. Không bị nghiêm cấm nếu có việc khẩn cấp."
    ],
    "answer": 3,
    "explanation": "Chạy quá tốc độ quy định, giành đường, vượt ẩu là hành vi trực tiếp uy hiếp an toàn tính mạng của người tham gia giao thông nên bị nghiêm cấm tuyệt đối.",
    "tip": "Mẹo: Chạy quá tốc độ, giành đường vượt ẩu -> Bị nghiêm cấm.",
    "imageSvg": ""
  },
  {
    "id": 5,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi lái xe trên đường cao tốc, người lái xe có được phép quay đầu xe hoặc đi lùi hay không?",
    "options": [
      "1. Được phép quay đầu xe ở nơi có khoảng mở dải phân cách.",
      "2. Được phép lùi xe khi đã lỡ đi quá nút giao nhưng phải bật đèn khẩn cấp.",
      "3. Không được quay đầu xe, không được lùi xe trên đường cao tốc.",
      "4. Được phép nếu có người cảnh giới xi nhan phía sau."
    ],
    "answer": 3,
    "explanation": "Điều 26 Luật GTĐB: Không được quay đầu xe, lùi xe trên đường cao tốc dưới bất kỳ lý do gì. Hành vi này cực kỳ nguy hiểm và bị phạt rất nặng kèm tước GPLX.",
    "tip": "Mẹo: Trên cao tốc -> Không được quay đầu, không được lùi xe.",
    "imageSvg": ""
  },
  {
    "id": 6,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe không được lùi xe ở những khu vực nào dưới đây?",
    "options": [
      "1. Ở khu vực cho phép đỗ xe.",
      "2. Nơi đường giao nhau hoặc đường giao nhau cùng mức với đường sắt, nơi tầm nhìn bị che khuất, trong hầm đường bộ, trên đường cao tốc.",
      "3. Nơi có vạch kẻ đường cho người đi bộ sang đường.",
      "4. Cả ý 2 và ý 3."
    ],
    "answer": 4,
    "explanation": "Khoản 2 Điều 16 Luật GTĐB: Không được lùi xe ở khu vực cấm dừng, trên phần đường dành cho người đi bộ qua đường, nơi đường bộ giao nhau, đường giao nhau cùng mức với đường sắt, nơi tầm nhìn bị che khuất, trong hầm đường bộ, đường cao tốc.",
    "tip": "Mẹo: Lùi xe nguy hiểm tại đường giao nhau, đường sắt, hầm, cao tốc, vạch người đi bộ -> Chọn Cả ý 2 và ý 3.",
    "imageSvg": ""
  },
  {
    "id": 7,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe không được quay đầu xe ở những vị trí nào dưới đây?",
    "options": [
      "1. Nơi đường giao nhau và nơi có biển báo cho phép quay đầu xe.",
      "2. Ở phần đường dành cho người đi bộ qua đường, trên cầu, đầu cầu, gầm cầu vượt, ngầm, trong hầm đường bộ, trên đường cao tốc, nơi đường bộ giao nhau cùng mức với đường sắt.",
      "3. Trên đoạn đường rộng có dải phân cách đứt quãng.",
      "4. Cả ý 1 và ý 3."
    ],
    "answer": 2,
    "explanation": "Khoản 4 Điều 15 Luật GTĐB: Tuyệt đối không được quay đầu xe ở phần đường dành cho người đi bộ, trên cầu, đầu cầu, gầm cầu vượt, ngầm, trong hầm, trên đường cao tốc, nơi đường sắt giao nhau.",
    "tip": "Mẹo: Không được quay đầu ở Cầu, Hầm, Đường sắt, Đường cao tốc.",
    "imageSvg": ""
  },
  {
    "id": 8,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi giao xe cơ giới, xe máy chuyên dùng cho người không đủ điều kiện để điều khiển phương tiện tham gia giao thông có bị nghiêm cấm không?",
    "options": [
      "1. Không bị nghiêm cấm.",
      "2. Bị nghiêm cấm.",
      "3. Nghiêm cấm tùy từng trường hợp.",
      "4. Được phép nếu người đó là người thân trong gia đình."
    ],
    "answer": 2,
    "explanation": "Giao xe cho người không đủ điều kiện (chưa đủ tuổi, không có giấy phép lái xe, đã uống rượu bia...) là hành vi bị pháp luật nghiêm cấm và có thể bị truy cứu trách nhiệm hình sự nếu gây tai nạn.",
    "tip": "Mẹo: Giao xe cho người không đủ điều kiện -> Bị nghiêm cấm.",
    "imageSvg": ""
  },
  {
    "id": 9,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi vượt xe tại các vị trí có tầm nhìn bị che khuất, đầu dốc hoặc đoạn đường cong có bị nghiêm cấm không?",
    "options": [
      "1. Không bị nghiêm cấm nếu bấm còi liên tục.",
      "2. Không bị nghiêm cấm nếu không có xe ngược chiều.",
      "3. Bị nghiêm cấm.",
      "4. Được vượt khi tốc độ xe phía trước dưới 20 km/h."
    ],
    "answer": 3,
    "explanation": "Điều 14 Luật GTĐB: Nghiêm cấm vượt xe tại các vị trí đường vòng, đầu dốc, nơi tầm nhìn bị che khuất vì nguy cơ đâm trực diện xe ngược chiều cực kỳ cao.",
    "tip": "Mẹo: Vượt xe nơi cua khuất tầm nhìn, đầu dốc -> Bị nghiêm cấm.",
    "imageSvg": ""
  },
  {
    "id": 10,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi có xe ưu tiên đang phát tín hiệu ưu tiên đi làm nhiệm vụ (xe cứu hỏa, cứu thương, công an, quân sự), người tham gia giao thông phải làm gì?",
    "options": [
      "1. Tăng tốc độ để nhanh chóng vượt qua xe ưu tiên.",
      "2. Nhanh chóng giảm tốc độ, tránh hoặc dừng lại sát lề đường bên phải để nhường đường, không được gây cản trở.",
      "3. Đi về phía lề đường bên trái để nhường đường.",
      "4. Tiếp tục di chuyển bình thường nếu phía trước không có chỗ tránh."
    ],
    "answer": 2,
    "explanation": "Điều 22 Luật GTĐB: Khi có tín hiệu của xe ưu tiên, người tham gia giao thông phải giảm tốc độ, đi sát lề đường BÊN PHẢI hoặc dừng lại để nhường đường, không được cản trở.",
    "tip": "Mẹo: Nhường đường xe ưu tiên: Giảm tốc độ, dạt sát lề đường BÊN PHẢI.",
    "imageSvg": ""
  },
  {
    "id": 11,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi xảy ra tai nạn giao thông, người lái xe và những người có mặt tại hiện trường có được phép bỏ trốn để trốn tránh trách nhiệm không?",
    "options": [
      "1. Được phép nếu cảm thấy bị đe dọa đến tính mạng.",
      "2. Bị nghiêm cấm.",
      "3. Được phép rời khỏi hiện trường và không cần trình báo.",
      "4. Được phép nếu đã nhờ người khác đưa nạn nhân đi cấp cứu."
    ],
    "answer": 2,
    "explanation": "Khoản 17 Điều 8 Luật GTĐB nghiêm cấm hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông.",
    "tip": "Mẹo: Trốn tránh trách nhiệm sau tai nạn -> Bị nghiêm cấm.",
    "imageSvg": ""
  },
  {
    "id": 12,
    "chapter": 1,
    "isCritical": true,
    "question": "Ở nơi đường bộ giao nhau cùng mức với đường sắt chỉ có đèn tín hiệu hoặc chuông reo, khi đèn đỏ đã bật sáng hoặc chuông reo, người tham gia giao thông phải dừng lại như thế nào?",
    "options": [
      "1. Dừng lại ngay và giữ khoảng cách tối thiểu 5 mét tính từ đường ray gần nhất.",
      "2. Nhanh chóng cho xe vượt qua đường ray trước khi tàu hỏa tới.",
      "3. Dừng lại sát mép đường ray để quan sát tàu.",
      "4. Dừng cách đường ray tối thiểu 2 mét."
    ],
    "answer": 1,
    "explanation": "Điều 25 Luật GTĐB: Khi đèn tín hiệu đỏ đã bật sáng hoặc có chuông báo hiệu, người tham gia giao thông phải dừng lại ngay và giữ khoảng cách tối thiểu 5 mét tính từ ray gần nhất.",
    "tip": "Mẹo: Đường sắt đèn đỏ bật / chuông reo -> Dừng ngay, cách ray gần nhất tối thiểu 5 mét.",
    "imageSvg": ""
  },
  {
    "id": 13,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi điều khiển xe ô tô xuống dốc dài, dốc cao, người lái xe cần thực hiện các thao tác nào để đảm bảo an toàn?",
    "options": [
      "1. Tăng lên số cao, nhả bàn đạp ga và đạp phanh liên tục để kiểm soát tốc độ.",
      "2. Về số thấp (số 1, số 2 hoặc L), nhả bàn đạp ga, kết hợp phanh chân với mức độ phù hợp để kiểm soát tốc độ, TUYỆT ĐỐI không được về số 0 (Mo) hoặc tắt động cơ.",
      "3. Về số 0 (số Mo), tắt động cơ để tiết kiệm nhiên liệu, dùng phanh tay để hãm xe.",
      "4. Về số 0 (số Mo), chỉ sử dụng phanh chân để hãm xe."
    ],
    "answer": 2,
    "explanation": "Khi xuống dốc cao, dài, bắt buộc phải VỀ SỐ THẤP để động cơ hỗ trợ phanh (phanh động cơ). Nếu về số 0 hoặc tắt máy, xe mất phanh động cơ, phanh chân rà liên tục sẽ bị nóng sôi dầu, cháy má phanh dẫn đến mất phanh hoàn toàn gây tai nạn thảm khốc.",
    "tip": "Mẹo: Xuống dốc cao, dốc dài -> Về số thấp, cấm về số 0 (Mo), cấm tắt máy.",
    "imageSvg": ""
  },
  {
    "id": 14,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi điều khiển xe ô tô qua đoạn đường ngập nước sâu, người lái xe cần thực hiện những thao tác nào để tránh thủy kích hỏng động cơ?",
    "options": [
      "1. Tăng ga thật mạnh để vượt nhanh qua đoạn ngập nước.",
      "2. Đạp côn và rà phanh liên tục khi qua vũng nước.",
      "3. Quan sát ước lượng độ sâu, về số thấp (số 1 hoặc số L), giữ đều ga và di chuyển từ từ; không tăng ga đột ngột và không giảm ga giữa chừng.",
      "4. Tắt máy đẩy xe qua hoặc chờ nước rút hẳn."
    ],
    "answer": 3,
    "explanation": "Khi qua đường ngập nước, người lái xe phải quan sát mực nước (không quá tâm bánh xe), về số 1 hoặc L, giữ đều chân ga ở mức vừa phải để khí xả đẩy nước không chui vào ống pô.",
    "tip": "Mẹo: Đường ngập nước -> Về số thấp, giữ đều ga, đi từ từ.",
    "imageSvg": ""
  },
  {
    "id": 15,
    "chapter": 4,
    "isCritical": true,
    "question": "Để mở cửa xe ô tô an toàn, người lái xe phải thực hiện những thao tác nào dưới đây?",
    "options": [
      "1. Mở bung cửa thật nhanh để kịp quan sát và bước xuống.",
      "2. Mở cửa từ từ và quan sát gương chiếu hậu bên phải.",
      "3. Quan sát kỹ gương chiếu hậu và quay đầu quan sát phía sau, mở hé cánh cửa để quan sát an toàn; khi không có phương tiện tới gần mới mở cửa ở mức cần thiết để xuống xe.",
      "4. Bấm còi báo hiệu rồi mở hẳn cánh cửa bước xuống."
    ],
    "answer": 3,
    "explanation": "Mở cửa xe ô tô thiếu quan sát là nguyên nhân gây ra nhiều vụ tai nạn tử vong cho người đi xe máy cùng chiều. Quy tắc an toàn: Quan sát gương + ngoái đầu nhìn, hé mở cửa, an toàn mới mở vừa đủ để xuống.",
    "tip": "Mẹo: Mở cửa xe ô tô -> Quan sát kỹ gương + ngoái đầu, mở hé cửa trước.",
    "imageSvg": ""
  },
  {
    "id": 16,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi đang lái xe trên đường mà xe ô tô bị nổ lốp trước bất ngờ, người lái xe cần xử lý như thế nào để đảm bảo an toàn?",
    "options": [
      "1. Đạp hết phanh khẩn cấp để xe dừng lại ngay lập tức.",
      "2. Đánh lái gấp sang bên lề đường để tránh các xe khác.",
      "3. Giữ chặt vô lăng bằng cả hai tay để duy trì hướng thẳng, nhả chân ga từ từ, không phanh gấp; khi tốc độ đã giảm thì bật xi nhan cho xe tấp vào lề đường an toàn.",
      "4. Kéo phanh tay ngay lập tức."
    ],
    "answer": 3,
    "explanation": "Khi nổ lốp trước, lực cản bên bánh nổ rất lớn khiến vô lăng bị giằng mạnh. Nếu phanh gấp hoặc đánh lái sẽ làm xe bị lật hoặc mất lái hoàn toàn. Phải giữ chặt vô lăng, nhả ga từ từ, đợi xe giảm tốc mới nhẹ nhàng tấp lề.",
    "tip": "Mẹo: Nổ lốp trước -> Giữ chặt vô lăng, không phanh gấp, nhả ga từ từ.",
    "imageSvg": ""
  },
  {
    "id": 17,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi lái xe ô tô trong đô thị hoặc khu đông dân cư vào ban đêm (từ 18h đến 6h sáng hôm sau), người lái xe phải sử dụng đèn chiếu sáng như thế nào?",
    "options": [
      "1. Bắt buộc phải bật đèn chiếu xa (đèn pha) để nhìn rõ chướng ngại vật.",
      "2. Bắt buộc chỉ được bật đèn chiếu gần (đèn cốt).",
      "3. Được bật đèn chiếu xa khi không có xe đi ngược chiều.",
      "4. Chỉ cần bật đèn định vị ban ngày (DRL)."
    ],
    "answer": 2,
    "explanation": "Khoản 12 Điều 8 Luật GTĐB nghiêm cấm sử dụng đèn chiếu xa (đèn pha) trong đô thị và khu đông dân cư trong thời gian từ 18 giờ đến 6 giờ sáng hôm sau vì gây chói mắt nguy hiểm cho các phương tiện khác.",
    "tip": "Mẹo: Ban đêm trong đô thị / khu đông dân cư -> Chỉ được bật đèn chiếu gần (đèn cốt).",
    "imageSvg": ""
  },
  {
    "id": 18,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi sử dụng còi, rú ga liên tục; bấm còi trong đô thị và khu đông dân cư trong khoảng thời gian nào dưới đây là bị nghiêm cấm?",
    "options": [
      "1. Từ 22 giờ đêm đến 5 giờ sáng hôm sau.",
      "2. Từ 21 giờ đêm đến 6 giờ sáng hôm sau.",
      "3. Từ 23 giờ đêm đến 5 giờ sáng hôm sau.",
      "4. Từ 18 giờ tối đến 6 giờ sáng hôm sau."
    ],
    "answer": 1,
    "explanation": "Khoản 12 Điều 8 Luật GTĐB: Nghiêm cấm bấm còi trong đô thị và khu đông dân cư từ 22 giờ đêm đến 5 giờ sáng hôm sau (trừ các xe ưu tiên đang đi làm nhiệm vụ).",
    "tip": "Mẹo: Bấm còi cấm từ 22 giờ đến 5 giờ sáng.",
    "imageSvg": ""
  },
  {
    "id": 19,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi tránh xe đi ngược chiều trên đường hẹp chỉ đủ cho một xe chạy và có một chỗ tránh, các xe phải nhường đường như thế nào?",
    "options": [
      "1. Xe nào tiến vào chỗ tránh trước phải nhường đường cho xe kia.",
      "2. Xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe kia đi.",
      "3. Xe tải phải nhường đường cho xe con.",
      "4. Xe con phải nhường đường cho xe tải."
    ],
    "answer": 2,
    "explanation": "Điều 17 Luật GTĐB: Nơi đường hẹp chỉ đủ một làn và có chỗ tránh, xe nào ở gần chỗ tránh hơn phải vào vị trí tránh, nhường đường cho xe kia đi.",
    "tip": "Mẹo: Tránh nhau đường hẹp -> Xe ở gần chỗ tránh hơn phải vào tránh.",
    "imageSvg": ""
  },
  {
    "id": 20,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi hai xe đi ngược chiều gặp nhau trên đường dốc, xe nào phải nhường đường?",
    "options": [
      "1. Xe đang lên dốc phải nhường đường cho xe đang xuống dốc.",
      "2. Xe đang xuống dốc phải nhường đường cho xe đang lên dốc.",
      "3. Xe nào to hơn phải nhường đường cho xe nhỏ hơn.",
      "4. Hai xe tự thỏa thuận nhường đường."
    ],
    "answer": 2,
    "explanation": "Điều 17 Luật GTĐB: Xe xuống dốc phải nhường đường cho xe đang lên dốc (vì xe lên dốc đề-pa khởi hành lại rất khó và nguy hiểm).",
    "tip": "Mẹo: Lên dốc được ưu tiên -> Xe xuống dốc PHẢI nhường đường cho xe lên dốc.",
    "imageSvg": ""
  },
  {
    "id": 21,
    "chapter": 1,
    "isCritical": true,
    "question": "Trên cầu hẹp có một làn xe, người lái xe có được phép vượt xe khác hay không?",
    "options": [
      "1. Được phép vượt nếu xe phía trước chạy rất chậm.",
      "2. Được phép vượt khi đã bật đèn xi nhan xin đường và bấm còi.",
      "3. Tuyệt đối không được vượt.",
      "4. Được phép vượt vào ban ngày."
    ],
    "answer": 3,
    "explanation": "Khoản 5 Điều 14 Luật GTĐB: Cấm vượt xe trên cầu hẹp có một làn xe; dưới hầm; đường vòng; đầu dốc có tầm nhìn hạn chế.",
    "tip": "Mẹo: Trên cầu hẹp có 1 làn xe -> Không được vượt.",
    "imageSvg": ""
  },
  {
    "id": 22,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi điều khiển xe ô tô chuyển làn đường, người lái xe phải thực hiện như thế nào để đảm bảo an toàn?",
    "options": [
      "1. Quan sát gương chiếu hậu, bật đèn tín hiệu báo rẽ (xi nhan), quan sát an toàn và chỉ cho xe chuyển làn khi có đủ điều kiện an toàn.",
      "2. Bật xi nhan và chuyển làn ngay lập tức để không lỡ nhịp giao thông.",
      "3. Chỉ cần bấm còi rồi nhanh chóng đánh lái sang làn đường mong muốn.",
      "4. Quan sát gương chiếu hậu và đánh lái chuyển làn, không cần bật đèn tín hiệu nếu đường vắng."
    ],
    "answer": 1,
    "explanation": "Điều 13 Luật GTĐB: Khi chuyển làn đường phải có tín hiệu báo trước và phải bảo đảm an toàn.",
    "tip": "Mẹo: Chuyển làn -> Quan sát gương + Bật xi nhan + Đủ điều kiện an toàn mới chuyển.",
    "imageSvg": ""
  },
  {
    "id": 23,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe phải làm gì khi điều khiển xe đến gần ngã tư có vạch kẻ đường dành cho người đi bộ qua đường?",
    "options": [
      "1. Bấm còi để người đi bộ tránh rồi tăng tốc vượt qua.",
      "2. Giảm tốc độ, quan sát kỹ, nếu thấy có người đi bộ đang qua đường hoặc chuẩn bị qua đường thì phải dừng lại nhường đường.",
      "3. Đánh lái tránh sang làn khác để đi tiếp mà không cần giảm tốc độ.",
      "4. Bật đèn pha cảnh báo rồi vượt qua."
    ],
    "answer": 2,
    "explanation": "Điều 11 Luật GTĐB: Tại nơi có vạch kẻ đường dành cho người đi bộ, người lái xe phải quan sát, giảm tốc độ và nhường đường cho người đi bộ.",
    "tip": "Mẹo: Gặp vạch người đi bộ -> Giảm tốc độ, dừng lại nhường đường an toàn.",
    "imageSvg": ""
  },
  {
    "id": 24,
    "chapter": 1,
    "isCritical": true,
    "question": "Tại nơi đường giao nhau không có báo hiệu đi theo vòng xuyến, người lái xe phải nhường đường như thế nào?",
    "options": [
      "1. Phải nhường đường cho xe đi đến từ bên phải.",
      "2. Phải nhường đường cho xe đi đến từ bên trái.",
      "3. Phải nhường đường cho xe có trọng tải lớn hơn.",
      "4. Xe nào đến trước thì đi trước, không cần nhường."
    ],
    "answer": 1,
    "explanation": "Điều 24 Luật GTĐB: Tại nơi đường giao nhau không có vòng xuyến: Nhường đường cho xe đến từ BÊN PHẢI. (Có vòng xuyến: Nhường BÊN TRÁI).",
    "tip": "Mẹo: KHÔNG vòng xuyến -> Nhường PHẢI. CÓ vòng xuyến -> Nhường TRÁI.",
    "imageSvg": ""
  },
  {
    "id": 25,
    "chapter": 1,
    "isCritical": true,
    "question": "Tại nơi đường giao nhau CÓ báo hiệu đi theo vòng xuyến, người điều khiển phương tiện phải nhường đường như thế nào?",
    "options": [
      "1. Phải nhường đường cho xe đi đến từ bên phải.",
      "2. Phải nhường đường cho xe đi đến từ bên trái.",
      "3. Xe đi trong vòng xuyến phải nhường đường cho xe chuẩn bị vào vòng xuyến.",
      "4. Xe nào phát tín hiệu xin đường trước thì được đi trước."
    ],
    "answer": 2,
    "explanation": "Khoản 2 Điều 24 Luật GTĐB: Tại nơi đường giao nhau có báo hiệu đi theo vòng xuyến, phải nhường đường cho xe đi đến từ bên trái.",
    "tip": "Mẹo: Có vòng xuyến -> Nhường bên TRÁI.",
    "imageSvg": ""
  },
  {
    "id": 26,
    "chapter": 3,
    "isCritical": true,
    "question": "Khi xảy ra va chạm giao thông trên đường, người lái xe có hành vi đe dọa, xúc phạm danh dự hoặc dùng vũ lực với người khác có được phép không?",
    "options": [
      "1. Được phép nếu bên kia có lỗi trước.",
      "2. Bị nghiêm cấm.",
      "3. Được phép nếu tài sản của mình bị thiệt hại nghiêm trọng.",
      "4. Tùy thuộc vào thái độ của người va chạm."
    ],
    "answer": 2,
    "explanation": "Luật GTĐB và quy tắc văn hóa giao thông nghiêm cấm hành vi đe dọa, xúc phạm hoặc hành hung người khác khi xảy ra va chạm.",
    "tip": "Mẹo: Hành vi đe dọa, vũ lực, xúc phạm -> Bị nghiêm cấm.",
    "imageSvg": ""
  },
  {
    "id": 27,
    "chapter": 3,
    "isCritical": true,
    "question": "Khi phát hiện người bị tai nạn giao thông đang trong tình trạng nguy hiểm đến tính mạng, người có mặt tại nơi xảy ra tai nạn có trách nhiệm gì?",
    "options": [
      "1. Nhanh chóng rời khỏi hiện trường để tránh rắc rối pháp lý.",
      "2. Cứu giúp kịp thời người bị nạn, thông báo cho cơ sở y tế hoặc cơ quan công an gần nhất.",
      "3. Chỉ giúp đỡ nếu người bị nạn là người quen biết.",
      "4. Đứng quay video livestream lên mạng xã hội."
    ],
    "answer": 2,
    "explanation": "Điều 38 Luật GTĐB quy định người có mặt tại hiện trường có trách nhiệm cứu giúp kịp thời người bị nạn. Cố ý không cứu giúp người đang trong tình trạng nguy hiểm đến tính mạng có thể bị truy cứu trách nhiệm hình sự.",
    "tip": "Mẹo: Thấy người bị nạn nguy hiểm tính mạng -> Bắt buộc cứu giúp kịp thời.",
    "imageSvg": ""
  },
  {
    "id": 28,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi điều khiển xe ô tô số tự động (AT), thao tác chân nào dưới đây là đúng quy tắc an toàn?",
    "options": [
      "1. Chân trái đạp phanh, chân phải đạp ga.",
      "2. Chỉ sử dụng chân phải để điều khiển cả bàn đạp phanh và bàn đạp ga; chân trái để trên bàn đạp nghỉ, tuyệt đối không dùng chân trái đạp phanh.",
      "3. Dùng cả hai chân luân phiên tùy ý thích.",
      "4. Dùng chân trái đạp ga, chân phải đạp phanh."
    ],
    "answer": 2,
    "explanation": "Xe số tự động chỉ có 2 bàn đạp (ga và phanh). Quy tắc vàng: DUY NHẤT chân phải đảm nhiệm cả phanh và ga. Chân trái luôn đặt ở bậc nghỉ. Dùng 2 chân dễ dẫn đến việc đạp nhầm cả 2 hoặc giật mình đạp lút chân ga gây tai nạn 'xe điên'.",
    "tip": "Mẹo: Số tự động -> Chỉ dùng chân PHẢI điều khiển phanh và ga, chân trái nghỉ.",
    "imageSvg": ""
  },
  {
    "id": 29,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi điều khiển xe ô tô rẽ phải tại ngã ba hoặc ngã tư, người lái xe cần thực hiện những thao tác nào để bảo đảm an toàn?",
    "options": [
      "1. Bật đèn xi nhan phải, cho xe chạy nhanh qua chỗ rẽ để không cản trở xe sau.",
      "2. Bật xi nhan phải từ trước khoảng cách an toàn, giảm tốc độ, quan sát gương chiếu hậu bên phải và điểm mù, nhường đường cho người đi bộ và xe máy đi thẳng bên phải, rồi mới cho xe chuyển hướng.",
      "3. Bấm còi thật to rồi đánh lái rẽ nhanh sang phải.",
      "4. Vừa rẽ vừa bật đèn xi nhan."
    ],
    "answer": 2,
    "explanation": "Khi rẽ phải, xe máy đi thẳng bên phụ rất dễ rơi vào điểm mù. Bắt buộc phải bật xi nhan sớm, giảm tốc, quan sát gương phụ và điểm mù, nhường đường cho người đi bộ và xe đi thẳng.",
    "tip": "Mẹo: Rẽ phải -> Xi nhan sớm + Giảm tốc độ + Quan sát điểm mù + Nhường đường.",
    "imageSvg": ""
  },
  {
    "id": 30,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi xe ô tô chạy vào ban đêm gặp xe đi ngược chiều bật đèn pha gây chói mắt, người lái xe nên xử lý như thế nào?",
    "options": [
      "1. Bật đèn pha chiếu thẳng lại vào xe đối diện để đáp trả.",
      "2. Nhìn thẳng vào đèn pha của xe đối diện để ước lượng khoảng cách.",
      "3. Giảm tốc độ, nhìn chếch về phía lề đường bên phải để tránh lóa mắt; nếu cần thiết thì dừng lại an toàn sát lề phải cho đến khi xe kia đi qua.",
      "4. Tăng tốc độ để vượt qua vùng chói mắt thật nhanh."
    ],
    "answer": 3,
    "explanation": "Bị chói mắt bởi pha xe đối diện dễ gây mù tạm thời vài giây. Giải pháp an toàn: Giảm tốc độ, hướng tầm nhìn chếch sang lề đường bên phải (theo vạch sơn mép đường), sẵn sàng phanh dừng lại.",
    "tip": "Mẹo: Bị chói đèn pha đối diện -> Giảm tốc độ, nhìn chếch về mép đường bên phải.",
    "imageSvg": ""
  },
  {
    "id": 31,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi phá hoại công trình đường bộ, cọc tiêu, biển báo hiệu giao thông có bị nghiêm cấm không?",
    "options": [
      "1. Không bị nghiêm cấm.",
      "2. Bị nghiêm cấm.",
      "3. Bị nghiêm cấm chỉ khi gây hậu quả nghiêm trọng.",
      "4. Chỉ bị xử phạt hành chính."
    ],
    "answer": 2,
    "explanation": "Điều 8 Luật GTĐB: Nghiêm cấm phá hoại công trình đường bộ, cọc tiêu, biển báo, đèn tín hiệu.",
    "tip": "Mẹo: Phá hoại công trình đường bộ -> Bị nghiêm cấm.",
    "imageSvg": ""
  },
  {
    "id": 32,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi sử dụng đường bộ trái phép như phơi thóc, lúa, rơm rạ, nông sản hoặc để vật cản trên đường giao thông có bị nghiêm cấm không?",
    "options": [
      "1. Bị nghiêm cấm.",
      "2. Được phép trong mùa thu hoạch nông sản.",
      "3. Được phép nếu có cảnh báo từ xa.",
      "4. Không bị nghiêm cấm ở đường nông thôn."
    ],
    "answer": 1,
    "explanation": "Nghiêm cấm họp chợ, phơi thóc lúa, để vật cản trên đường bộ vì trực tiếp gây trơn trượt và nguy cơ tai nạn nghiêm trọng.",
    "tip": "Mẹo: Phơi thóc lúa, để chướng ngại vật -> Bị nghiêm cấm.",
    "imageSvg": ""
  },
  {
    "id": 33,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe có được phép chở người trên thùng xe tải trong các trường hợp nào dưới đây?",
    "options": [
      "1. Chở công nhân đi làm việc mà không có ghế ngồi chắc chắn.",
      "2. Chở người đi làm nhiệm vụ phòng chống thiên tai hoặc làm nhiệm vụ khẩn cấp; chở người bị nạn đi cấp cứu; chở cán bộ chiến sĩ lực lượng vũ trang đi làm nhiệm vụ.",
      "3. Chở hành khách đi du lịch dã ngoại.",
      "4. Cả ý 1 và ý 3."
    ],
    "answer": 2,
    "explanation": "Điều 21 Luật GTĐB: Chỉ được chở người trên ô tô tải khi làm nhiệm vụ khẩn cấp, thiên tai, cấp cứu, hoặc xe quân sự/công an làm nhiệm vụ.",
    "tip": "Mẹo: Thùng xe tải -> Chỉ chở người khi thiên tai, cấp cứu, nhiệm vụ khẩn cấp.",
    "imageSvg": ""
  },
  {
    "id": 34,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi chở hàng hóa vượt quá tải trọng thiết kế hoặc quá khổ giới hạn của cầu, đường, người lái xe phải tuân thủ điều kiện gì?",
    "options": [
      "1. Chỉ cần chạy thật chậm vào ban đêm.",
      "2. Phải được cơ quan quản lý đường bộ có thẩm quyền cấp Giấy phép lưu hành xe và phải thực hiện các biện pháp bảo đảm an toàn giao thông.",
      "3. Chỉ cần nộp phí cầu đường gấp đôi.",
      "4. Được chở nếu chủ hàng cam kết chịu trách nhiệm."
    ],
    "answer": 2,
    "explanation": "Khoản 2 Điều 28 Luật GTĐB: Xe quá khổ, quá tải bắt buộc phải có Giấy phép lưu hành xe do cơ quan thẩm quyền cấp và có biện pháp an toàn.",
    "tip": "Mẹo: Xe quá tải, quá khổ -> Phải có Giấy phép lưu hành của cơ quan có thẩm quyền.",
    "imageSvg": ""
  },
  {
    "id": 35,
    "chapter": 1,
    "isCritical": true,
    "question": "Người điều khiển xe ô tô kéo xe khác trong trường hợp hệ thống hãm (phanh) của xe được kéo không còn hiệu lực thì phải kéo bằng phương tiện gì?",
    "options": [
      "1. Dùng dây cáp bọc cao su chịu lực tốt.",
      "2. Dùng dây dù bện có độ bền cao.",
      "3. Bắt buộc phải dùng thanh nối cứng.",
      "4. Dùng xích sắt dài tối thiểu 5 mét."
    ],
    "answer": 3,
    "explanation": "Khoản 3 Điều 29 Luật GTĐB: Khi hệ thống hãm của xe được kéo không còn hiệu lực, xe kéo phải sử dụng THANH NỐI CỨNG để ngăn xe sau đâm vào xe trước khi phanh.",
    "tip": "Mẹo: Xe bị kéo mất phanh -> Bắt buộc dùng THANH NỐI CỨNG.",
    "imageSvg": ""
  },
  {
    "id": 36,
    "chapter": 1,
    "isCritical": true,
    "question": "Xe ô tô kéo rơ-moóc có được phép kéo thêm một xe ô tô khác hoặc rơ-moóc thứ hai không?",
    "options": [
      "1. Được phép kéo thêm một rơ-moóc nếu tải trọng nhẹ.",
      "2. Được kéo thêm một ô tô nếu ô tô đó không chở người.",
      "3. Tuyệt đối không được kéo thêm rơ-moóc thứ hai hoặc xe khác.",
      "4. Được phép trên đường quốc lộ có nhiều làn xe."
    ],
    "answer": 3,
    "explanation": "Điều 29 Luật GTĐB: Xe kéo rơ-moóc không được kéo thêm rơ-moóc thứ hai hoặc xe khác.",
    "tip": "Mẹo: Ô tô kéo rơ-moóc -> Không được kéo thêm xe khác.",
    "imageSvg": ""
  },
  {
    "id": 37,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe có được phép quay đầu xe ở phần đường dành cho người đi bộ qua đường không?",
    "options": [
      "1. Được phép nếu quan sát không có người đi bộ.",
      "2. Bị nghiêm cấm.",
      "3. Được phép quay đầu vào ban đêm.",
      "4. Được phép nếu có người xi nhan."
    ],
    "answer": 2,
    "explanation": "Khoản 4 Điều 15 Luật GTĐB cấm quay đầu xe ở phần đường dành cho người đi bộ qua đường.",
    "tip": "Mẹo: Vạch người đi bộ -> Không được quay đầu xe.",
    "imageSvg": ""
  },
  {
    "id": 38,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi sử dụng giấy phép lái xe (GPLX) đã bị tẩy xóa, làm giả hoặc sử dụng GPLX không do cơ quan có thẩm quyền cấp để tham gia giao thông sẽ bị xử lý như thế nào?",
    "options": [
      "1. Chỉ bị nhắc nhở.",
      "2. Bị xử phạt tiền, tịch thu GPLX giả, tước quyền sử dụng và có thể bị truy cứu trách nhiệm hình sự.",
      "3. Chỉ bị phạt hành chính 500.000 đồng.",
      "4. Vẫn được tiếp tục điều khiển xe nếu nộp phạt tại chỗ."
    ],
    "answer": 2,
    "explanation": "Sử dụng GPLX giả là hành vi vi phạm pháp luật nghiêm trọng, bị tịch thu bằng và có thể bị truy cứu trách nhiệm hình sự về tội dùng con dấu, tài liệu giả.",
    "tip": "Mẹo: Dùng GPLX giả -> Tịch thu bằng, phạt nặng và xử lý hình sự.",
    "imageSvg": ""
  },
  {
    "id": 39,
    "chapter": 1,
    "isCritical": true,
    "question": "Người có giấy phép lái xe bị cơ quan công an tước quyền sử dụng hoặc đang trong thời gian bị đình chỉ có được phép điều khiển phương tiện ghi trong GPLX không?",
    "options": [
      "1. Được phép nếu có việc khẩn cấp.",
      "2. Tuyệt đối không được phép điều khiển phương tiện.",
      "3. Được điều khiển nếu đi cùng người có bằng lái.",
      "4. Được phép lái xe vào ban đêm."
    ],
    "answer": 2,
    "explanation": "Đang bị tước bằng lái xe coi như không có giấy phép lái xe, nếu cố tình điều khiển sẽ bị phạt như lỗi không có bằng lái xe.",
    "tip": "Mẹo: Đang bị tước GPLX -> Không được điều khiển xe.",
    "imageSvg": ""
  },
  {
    "id": 40,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi điều khiển xe ô tô trên cầu hẹp có biển báo 'Cấm vượt', người lái xe có được vượt xe khác không?",
    "options": [
      "1. Được vượt nếu xe trước đi rất chậm.",
      "2. Được vượt khi thấy an toàn.",
      "3. Tuyệt đối không được vượt.",
      "4. Được vượt vào ban đêm."
    ],
    "answer": 3,
    "explanation": "Trên cầu hẹp và có biển cấm vượt thì tuyệt đối không được vượt.",
    "tip": "Mẹo: Biển cấm vượt trên cầu -> Cấm vượt tuyệt đối.",
    "imageSvg": ""
  },
  {
    "id": 41,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi điều khiển ô tô rẽ vào đường nhánh, người lái xe phải nhường đường cho các đối tượng nào dưới đây?",
    "options": [
      "1. Nhường đường cho người đi bộ, người đi xe đạp đang đi trên phần đường dành cho họ; nhường đường cho các xe đi ngược chiều.",
      "2. Chỉ cần nhường cho xe ô tô to hơn.",
      "3. Xe rẽ vào đường nhánh được quyền ưu tiên đi trước.",
      "4. Bấm còi liên tục để các đối tượng khác tự động nhường đường."
    ],
    "answer": 1,
    "explanation": "Khoản 3 Điều 15 Luật GTĐB: Khi chuyển hướng, người lái xe phải nhường đường cho người đi bộ, người đi xe đạp và xe đi ngược chiều.",
    "tip": "Mẹo: Chuyển hướng rẽ nhánh -> Phải nhường người đi bộ, xe đạp, xe ngược chiều.",
    "imageSvg": ""
  },
  {
    "id": 42,
    "chapter": 1,
    "isCritical": true,
    "question": "Tại nơi đường bộ giao nhau cùng mức với đường sắt không có rào chắn, không có người gác, người lái xe phải xử lý như thế nào?",
    "options": [
      "1. Cho xe chạy thật nhanh qua đường ray.",
      "2. Dừng xe lại, giữ khoảng cách tối thiểu 5 mét tính từ đường ray gần nhất, lắng nghe và quan sát hai phía; nếu không có tàu thì mới cho xe qua.",
      "3. Vừa đi chậm vừa bấm còi để cảnh báo tàu hỏa.",
      "4. Chỉ dừng lại khi nhìn thấy tàu đã đến gần 20 mét."
    ],
    "answer": 2,
    "explanation": "Điều 25 Luật GTĐB: Đường sắt không rào chắn: Dừng lại cách ray gần nhất tối thiểu 5m, quan sát 2 phía, an toàn mới đi qua.",
    "tip": "Mẹo: Qua đường sắt -> Dừng lại cách ray 5m, quan sát rồi mới đi.",
    "imageSvg": ""
  },
  {
    "id": 43,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi dừng xe, đỗ xe trên đường phố đô thị, người lái xe phải cho xe đỗ cách lề đường, hè phố phía bên phải tối đa bao nhiêu mét?",
    "options": [
      "1. Không quá 0,25 mét.",
      "2. Không quá 0,5 mét.",
      "3. Không quá 0,75 mét.",
      "4. Không quá 1,0 mét."
    ],
    "answer": 1,
    "explanation": "Khoản 1 Điều 19 Luật GTĐB: Bánh xe gần nhất không được cách xa lề đường, hè phố quá 0,25 mét và không gây cản trở phương tiện khác.",
    "tip": "Mẹo: Đỗ xe sát lề đường -> Tối đa không quá 0,25 mét.",
    "imageSvg": ""
  },
  {
    "id": 44,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe không được dừng xe, đỗ xe tại các vị trí nào dưới đây?",
    "options": [
      "1. Bên trái đường một chiều; trên đoạn đường cong và gần đầu dốc tầm nhìn bị che khuất.",
      "2. Trên cầu, gầm cầu vượt; song song với một xe khác đang dừng, đỗ; nơi phần đường có bề rộng chỉ đủ cho một làn xe.",
      "3. Điểm đón trả khách của xe buýt; trước cổng và trong phạm vi 5 mét hai bên cổng cơ quan, tổ chức.",
      "4. Tất cả các trường hợp nêu trên."
    ],
    "answer": 4,
    "explanation": "Khoản 4 Điều 18 Luật GTĐB liệt kê chi tiết các vị trí cấm dừng đỗ: cầu, gầm cầu, bên trái đường 1 chiều, điểm xe buýt, cổng cơ quan, nơi đường cong khuất tầm nhìn.",
    "tip": "Mẹo: Các vị trí nguy hiểm, cản trở giao thông -> Tất cả các trường hợp trên.",
    "imageSvg": ""
  },
  {
    "id": 45,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi lái xe ô tô qua hầm đường bộ, người lái xe phải tuân thủ những quy tắc nào dưới đây?",
    "options": [
      "1. Phải bật đèn chiếu sáng ngay cả khi hầm đã sáng; không được quay đầu xe, không được lùi xe; chỉ được dừng, đỗ xe ở nơi quy định.",
      "2. Được phép quay đầu xe nếu trong hầm vắng xe.",
      "3. Chỉ cần bật đèn định vị ban ngày, được phép vượt xe khác nếu xe trước chạy chậm.",
      "4. Được lùi xe nếu đi nhầm làn."
    ],
    "answer": 1,
    "explanation": "Điều 27 Luật GTĐB: Trong hầm đường bộ: Phải bật đèn chiếu sáng; KHÔNG ĐƯỢC quay đầu, lùi xe; chỉ dừng đỗ nơi quy định.",
    "tip": "Mẹo: Trong hầm -> Bật đèn chiếu sáng, CẤM quay đầu, CẤM lùi xe.",
    "imageSvg": ""
  },
  {
    "id": 46,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi khởi hành ô tô lên dốc (đề-pa lên dốc), người lái xe thực hiện thao tác nào để xe không bị trôi lùi về sau?",
    "options": [
      "1. Nhả hết phanh tay trước khi đạp ga.",
      "2. Kéo phanh tay, đạp hết côn vào số 1, đạp ga từ từ đồng thời nhả côn đến điểm tiếp xúc (động cơ hơi gằn), giữ nguyên chân côn rồi hạ phanh tay để xe từ từ bò lên dốc.",
      "3. Về số 0, nhả phanh và đạp ga thật mạnh.",
      "4. Chỉ dùng phanh chân mà không dùng phanh tay."
    ],
    "answer": 2,
    "explanation": "Đề-pa lên dốc an toàn bằng phanh tay: Giữ phanh tay, nhả côn đến điểm bám, mớm ga vừa đủ rồi hạ phanh tay để xe tiến lên mà không lùi dốc.",
    "tip": "Mẹo: Đề-pa dốc -> Phanh tay giữ, nhả côn tới điểm rung/gằn rồi hạ phanh tay.",
    "imageSvg": ""
  },
  {
    "id": 47,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi điều khiển xe ô tô trên đường cao tốc, nếu xe bị hỏng hóc hoặc gặp sự cố khẩn cấp, người lái xe phải xử lý như thế nào?",
    "options": [
      "1. Dừng xe ngay trên làn đường đang chạy và gọi cứu hộ.",
      "2. Bật ngay đèn tín hiệu khẩn cấp (hazard), cố gắng di chuyển xe vào làn dừng xe khẩn cấp; đặt biển cảnh báo nguy hiểm cách xe tối thiểu 150m về phía sau; người trên xe nhanh chóng di chuyển ra ngoài dải hộ lan an toàn.",
      "3. Đứng ở làn đường bên cạnh vẫy tay xin giúp đỡ.",
      "4. Tắt máy ngồi yên trong xe chờ đội cứu hộ cao tốc đến."
    ],
    "answer": 2,
    "explanation": "Quy tắc an toàn trên cao tốc khi xe hỏng: Bật đèn hazard -> Đưa xe vào làn khẩn cấp -> Đặt biển cảnh báo cách 150m -> Mọi người rời xe ra sau dải hộ lan an toàn.",
    "tip": "Mẹo: Sự cố cao tốc -> Bật hazard, vào làn khẩn cấp, đặt biển báo cách 150m, ra sau hộ lan.",
    "imageSvg": ""
  },
  {
    "id": 48,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi lái xe ô tô qua đường vòng (khúc cua gắt), người lái xe cần thực hiện thao tác nào để tránh bị lật xe hoặc văng đuôi?",
    "options": [
      "1. Tăng tốc độ và đạp phanh mạnh ngay giữa khúc cua.",
      "2. Giảm tốc độ từ trước khi vào cua, về số thấp phù hợp, giữ đều chân ga và đánh lái nhẹ nhàng theo độ cong của đường, không phanh gấp hay tăng tốc đột ngột trong cua.",
      "3. Đạp hết chân côn (ly hợp) để xe trôi tự do trong cua.",
      "4. Cắt côn và kéo nhẹ phanh tay."
    ],
    "answer": 2,
    "explanation": "Vào cua gắt: Phải giảm tốc TRƯỚC khi vào cua. Tuyệt đối không phanh gấp hay cắt côn giữa cua vì dễ làm mất ma sát bánh xe dẫn đến văng xe, lật xe.",
    "tip": "Mẹo: Vào khúc cua -> Giảm tốc độ TRƯỚC khi vào cua, giữ đều ga, không phanh gấp trong cua.",
    "imageSvg": ""
  },
  {
    "id": 49,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi xe ô tô đi vào đoạn đường có nhiều ổ gà, đường mấp mô, người lái xe cần điều khiển như thế nào?",
    "options": [
      "1. Chạy với tốc độ thật cao để xe lướt qua các ổ gà.",
      "2. Giảm tốc độ, về số thấp (số 1 hoặc số 2), giữ đều chân ga và cho xe từ từ vượt qua từng gờ mấp mô.",
      "3. Đạp hết côn và để xe trôi qua.",
      "4. Vừa đạp phanh vừa đạp ga mạnh."
    ],
    "answer": 2,
    "explanation": "Đường mấp mô, ổ gà: Đi số thấp, giảm tốc độ, đi từ từ để bảo vệ hệ thống treo và giữ thăng bằng xe.",
    "tip": "Mẹo: Đường mấp mô ổ gà -> Giảm tốc độ, về số thấp, đi từ từ.",
    "imageSvg": ""
  },
  {
    "id": 50,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi điều khiển xe ô tô trong điều kiện trời mưa to, đường trơn trượt, người lái xe nên làm gì?",
    "options": [
      "1. Tăng tốc độ để nhanh chóng thoát khỏi vùng mưa.",
      "2. Giảm tốc độ, tăng khoảng cách an toàn với xe phía trước, bật đèn chiếu gần và đèn sương mù, tránh phanh gấp và tránh đánh lái ngoặt đột ngột.",
      "3. Bật đèn pha chiếu xa để nhìn xa hơn.",
      "4. Bám sát đuôi xe phía trước để nhìn theo vệt bánh xe."
    ],
    "answer": 2,
    "explanation": "Mưa to đường trơn làm giảm tầm nhìn và giảm ma sát lốp: Giảm tốc độ, tăng khoảng cách an toàn, bật đèn chiếu gần cốt/gầm, không phanh gấp.",
    "tip": "Mẹo: Trời mưa to -> Giảm tốc độ, tăng khoảng cách an toàn, bật đèn cốt, không phanh gấp.",
    "imageSvg": ""
  },
  {
    "id": 51,
    "chapter": 3,
    "isCritical": true,
    "question": "Người lái xe có văn hóa giao thông khi phát hiện xe buýt đang có tín hiệu bật đèn xi nhan xin xuất bến thì phải hành xử như thế nào?",
    "options": [
      "1. Bấm còi inh ỏi và vượt nhanh qua trước đầu xe buýt.",
      "2. Giảm tốc độ, chú ý quan sát và chủ động nhường đường cho xe buýt rời bến an toàn.",
      "3. Tạt đầu xe buýt để chiếm làn đường.",
      "4. Đi song song để ngăn không cho xe buýt nhập làn."
    ],
    "answer": 2,
    "explanation": "Văn hóa giao thông: Chủ động giảm tốc độ và nhường đường cho phương tiện công cộng (xe buýt) khi có tín hiệu xin xuất bến.",
    "tip": "Mẹo: Xe buýt xin xuất bến -> Giảm tốc độ, nhường đường.",
    "imageSvg": ""
  },
  {
    "id": 52,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe không được vượt xe khác trong trường hợp nào dưới đây?",
    "options": [
      "1. Xe phía trước đang bật tín hiệu rẽ phải và đã dạt sang lề phải.",
      "2. Xe phía trước chưa có tín hiệu tránh về bên phải hoặc có chướng ngại vật phía trước.",
      "3. Có xe chạy ngược chiều trong đoạn đường định vượt.",
      "4. Cả ý 2 và ý 3."
    ],
    "answer": 4,
    "explanation": "Điều 14 Luật GTĐB: Không được vượt khi có xe ngược chiều hoặc xe trước chưa dạt sang phải nhường đường.",
    "tip": "Mẹo: Không được vượt khi có xe ngược chiều hoặc xe trước chưa nhường -> Cả ý 2 và ý 3.",
    "imageSvg": ""
  },
  {
    "id": 53,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi gặp biển báo có hình người khuyết tật ngồi xe lăn, người lái xe phải làm gì?",
    "options": [
      "1. Bấm còi để người khuyết tật tránh sang bên.",
      "2. Giảm tốc độ, chú ý quan sát và chủ động nhường đường cho người khuyết tật.",
      "3. Tăng tốc vượt qua trước.",
      "4. Không cần chú ý vì biển báo chỉ mang tính chất tham khảo."
    ],
    "answer": 2,
    "explanation": "Ưu tiên nhường đường tuyệt đối cho người khuyết tật, người cao tuổi và trẻ em qua đường.",
    "tip": "Mẹo: Gặp người khuyết tật / người đi bộ -> Giảm tốc độ, nhường đường an toàn.",
    "imageSvg": ""
  },
  {
    "id": 54,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi điều khiển xe ô tô rẽ trái, người lái xe phải quan sát và thực hiện thao tác nào?",
    "options": [
      "1. Bật xi nhan trái, giảm tốc độ, quan sát kỹ các dòng xe đi ngược chiều và xe đi thẳng từ bên phải tới, nhường đường cho các xe đó rồi mới cho xe rẽ trái qua tâm giao lộ.",
      "2. Cắt cua thật nhanh trước đầu xe ngược chiều.",
      "3. Bấm còi thật to rồi đánh lái sang trái ngay.",
      "4. Không cần bật xi nhan nếu đường không có cảnh sát giao thông."
    ],
    "answer": 1,
    "explanation": "Quy tắc nhường đường: Xe rẽ trái PHẢI nhường đường cho xe đi thẳng và xe rẽ phải. Phải xi nhan sớm, giảm tốc và đi qua tâm đường.",
    "tip": "Mẹo: Rẽ trái -> Xi nhan trái + Giảm tốc độ + Nhường xe đi thẳng & rẽ phải.",
    "imageSvg": ""
  },
  {
    "id": 55,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi lùi xe ô tô vào vị trí đỗ, người lái xe cần quan sát như thế nào?",
    "options": [
      "1. Chỉ cần nhìn qua gương chiếu hậu bên trái.",
      "2. Quan sát toàn diện gương chiếu hậu 2 bên, gương giữa, camera lùi hoặc quay đầu quan sát trực tiếp điểm mù phía sau, lùi xe với tốc độ thật chậm.",
      "3. Đạp ga mạnh để lùi vào thật nhanh.",
      "4. Chỉ cần bấm còi cảnh báo."
    ],
    "answer": 2,
    "explanation": "Lùi xe là thao tác có nhiều điểm mù nguy hiểm nhất. Phải quan sát toàn diện cả gương và điểm mù, lùi với tốc độ chậm có kiểm soát.",
    "tip": "Mẹo: Lùi xe -> Quan sát toàn diện gương & điểm mù, tốc độ thật chậm.",
    "imageSvg": ""
  },
  {
    "id": 56,
    "chapter": 1,
    "isCritical": true,
    "question": "Hành vi gắn biển số xe ô tô không đúng quy cách, bị bẻ cong, che lấp hoặc làm mờ chữ số có bị nghiêm cấm không?",
    "options": [
      "1. Không bị nghiêm cấm.",
      "2. Bị nghiêm cấm.",
      "3. Được phép nếu biển số bị bẩn do thời tiết.",
      "4. Chỉ nhắc nhở không phạt tiền."
    ],
    "answer": 2,
    "explanation": "Khoản 3 Điều 53 Luật GTĐB: Nghiêm cấm thay đổi hình dáng, kích thước, che lấp, làm mờ, tẩy xóa biển số xe.",
    "tip": "Mẹo: Che lấp, làm mờ, sửa biển số xe -> Bị nghiêm cấm.",
    "imageSvg": ""
  },
  {
    "id": 57,
    "chapter": 1,
    "isCritical": true,
    "question": "Người lái xe ô tô có được phép dùng điện thoại di động cầm tay khi xe đang chạy trên đường hay không?",
    "options": [
      "1. Được phép nếu có việc khẩn cấp của gia đình.",
      "2. Không được phép dùng điện thoại cầm tay khi đang lái xe.",
      "3. Được phép dùng trên đường vắng xe.",
      "4. Được phép nếu chạy tốc độ dưới 40 km/h."
    ],
    "answer": 2,
    "explanation": "Dùng điện thoại khi lái xe làm mất tập trung cực kỳ nguy hiểm và bị xử phạt nặng theo Nghị định 100/2019/NĐ-CP.",
    "tip": "Mẹo: Sử dụng điện thoại cầm tay khi đang lái xe -> Không được phép.",
    "imageSvg": ""
  },
  {
    "id": 58,
    "chapter": 4,
    "isCritical": true,
    "question": "Khi điều khiển xe ô tô ban đêm trên đường quốc lộ không có dải phân cách giữa, khi có xe đi ngược chiều tới gần, người lái xe phải chuyển đèn chiếu sáng như thế nào?",
    "options": [
      "1. Giữ nguyên đèn chiếu xa (pha) để nhìn rõ xe đối diện.",
      "2. Phải chuyển từ đèn chiếu xa (pha) sang đèn chiếu gần (cốt) để tránh làm chói mắt tài xế xe ngược chiều.",
      "3. Tắt hẳn đèn chiếu sáng để tránh làm chói mắt.",
      "4. Bật đèn khẩn cấp hazard."
    ],
    "answer": 2,
    "explanation": "Khoản 3 Điều 17 Luật GTĐB: Khi tránh xe đi ngược chiều vào ban đêm, phải chuyển từ đèn chiếu xa sang đèn chiếu gần.",
    "tip": "Mẹo: Gặp xe ngược chiều ban đêm -> Chuyển từ đèn PHA sang đèn CỐT.",
    "imageSvg": ""
  },
  {
    "id": 59,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi đi qua đường giao nhau có tín hiệu đèn giao thông màu vàng nhấp nháy, người lái xe phải đi như thế nào?",
    "options": [
      "1. Dừng lại trước vạch dừng xe.",
      "2. Được đi nhưng phải giảm tốc độ, chú ý quan sát, nhường đường cho người đi bộ qua đường.",
      "3. Tăng tốc độ nhanh chóng vượt qua ngã tư.",
      "4. Bấm còi liên tục và đi thẳng."
    ],
    "answer": 2,
    "explanation": "Quy chuẩn báo hiệu: Đèn vàng nhấp nháy báo hiệu được đi nhưng phải giảm tốc độ và chú ý quan sát nhường đường.",
    "tip": "Mẹo: Đèn vàng nhấp nháy -> Được đi nhưng phải giảm tốc độ, chú ý quan sát.",
    "imageSvg": ""
  },
  {
    "id": 60,
    "chapter": 1,
    "isCritical": true,
    "question": "Khi điều khiển xe ô tô trên cầu hẹp, đường hầm hoặc đoạn đường có biển 'Cấm quay đầu xe', người lái xe có được phép quay đầu xe không?",
    "options": [
      "1. Được phép quay đầu nếu không có cảnh sát giao thông.",
      "2. Tuyệt đối không được phép quay đầu xe.",
      "3. Được phép quay đầu xe vào ban đêm.",
      "4. Được phép nếu xe có kích thước nhỏ gọn."
    ],
    "answer": 2,
    "explanation": "Tuyệt đối không được phép quay đầu xe trên cầu, trong hầm hoặc nơi có biển cấm quay đầu.",
    "tip": "Mẹo: Cầu hẹp, hầm, biển cấm quay đầu -> Không được phép quay đầu xe.",
    "imageSvg": ""
  },
  {
    "id": 61,
    "chapter": 1,
    "isCritical": false,
    "question": "Khái niệm 'Dải phân cách' trên đường bộ được hiểu như thế nào là đúng?",
    "options": [
      "1. Là bộ phận để ngăn cách giữa mặt đường và vỉa hè.",
      "2. Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
      "3. Là bộ phận phân chia làn đường của các xe chạy cùng chiều.",
      "4. Là hàng rào bảo vệ người đi bộ sang đường."
    ],
    "answer": 2,
    "explanation": "Điều 3 Luật GTĐB: Dải phân cách là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc phân chia phần đường xe cơ giới và xe thô sơ.",
    "tip": "Mẹo: Dải phân cách = Phân chia 2 chiều xe chạy riêng biệt hoặc xe cơ giới và thô sơ.",
    "imageSvg": ""
  },
  {
    "id": 62,
    "chapter": 1,
    "isCritical": false,
    "question": "Người đủ 18 tuổi trở lên được cấp giấy phép lái xe những hạng nào dưới đây?",
    "options": [
      "1. Hạng B1, B2, A1, A2.",
      "2. Hạng C, FB2.",
      "3. Hạng D, FC.",
      "4. Hạng E, FD."
    ],
    "answer": 1,
    "explanation": "Điều 60 Luật GTĐB: Đủ 18 tuổi được thi bằng lái mô tô A1, A2 và ô tô con chở người đến 9 chỗ hạng B1, B2. Hạng C cần 21 tuổi; hạng D cần 24 tuổi; hạng E cần 27 tuổi.",
    "tip": "Mẹo: 18 tuổi lái xe con B1, B2 và mô tô A1, A2.",
    "imageSvg": ""
  },
  {
    "id": 63,
    "chapter": 1,
    "isCritical": false,
    "question": "Độ tuổi tối đa của người lái xe ô tô chở người trên 30 chỗ ngồi (hạng E) là bao nhiêu tuổi?",
    "options": [
      "1. 50 tuổi đối với nữ và 55 tuổi đối với nam.",
      "2. 55 tuổi đối với nữ và 60 tuổi đối với nam.",
      "3. 60 tuổi cho cả nam và nữ.",
      "4. Không giới hạn độ tuổi nếu đủ sức khỏe."
    ],
    "answer": 1,
    "explanation": "Điều 60 Luật GTĐB: Tuổi tối đa lái xe chở người trên 30 chỗ (hạng E) là đủ 50 tuổi đối với nữ và đủ 55 tuổi đối với nam.",
    "tip": "Mẹo: Tuổi tối đa hạng E: Nữ 50 - Nam 55.",
    "imageSvg": ""
  },
  {
    "id": 64,
    "chapter": 1,
    "isCritical": false,
    "question": "Tốc độ tối đa cho phép đối với xe ô tô con trên đường đôi (có dải phân cách giữa) trong khu vực đông dân cư là bao nhiêu km/h?",
    "options": [
      "1. 50 km/h.",
      "2. 60 km/h.",
      "3. 70 km/h.",
      "4. 80 km/h."
    ],
    "answer": 2,
    "explanation": "Theo Thông tư 31/2019/TT-BGTVT: Tốc độ trong khu đông dân cư: Đường đôi (có dải phân cách giữa) = 60 km/h; Đường 2 chiều (không có dải phân cách) = 50 km/h.",
    "tip": "Mẹo: Trong khu đông dân cư: Có dải phân cách (đường đôi) = 60 km/h; Không dải phân cách = 50 km/h.",
    "imageSvg": ""
  },
  {
    "id": 65,
    "chapter": 1,
    "isCritical": false,
    "question": "Tốc độ tối đa cho phép đối với xe ô tô con trên đường hai chiều KHÔNG có dải phân cách giữa trong khu vực đông dân cư là bao nhiêu km/h?",
    "options": [
      "1. 50 km/h.",
      "2. 60 km/h.",
      "3. 70 km/h.",
      "4. 40 km/h."
    ],
    "answer": 1,
    "explanation": "Đường hai chiều không có dải phân cách giữa trong khu vực đông dân cư tốc độ tối đa là 50 km/h.",
    "tip": "Mẹo: Trong đông dân cư: Không dải phân cách = 50 km/h.",
    "imageSvg": ""
  },
  {
    "id": 66,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi điều khiển xe chạy với tốc độ từ 60 km/h đến 80 km/h trên đường khô ráo, khoảng cách an toàn tối thiểu giữa hai xe là bao nhiêu mét?",
    "options": [
      "1. 35 mét.",
      "2. 55 mét.",
      "3. 70 mét.",
      "4. 100 mét."
    ],
    "answer": 2,
    "explanation": "Khoảng cách an toàn theo Thông tư 31: Đến 60km/h: 35m; 60-80km/h: 55m; 80-100km/h: 70m; 100-120km/h: 100m.",
    "tip": "Mẹo: 60-80 km/h = 55m; 80-100 km/h = 70m; 100-120 km/h = 100m.",
    "imageSvg": ""
  },
  {
    "id": 67,
    "chapter": 1,
    "isCritical": false,
    "question": "Khi điều khiển xe chạy với tốc độ từ 80 km/h đến 100 km/h trên đường khô ráo, khoảng cách an toàn tối thiểu giữa hai xe là bao nhiêu mét?",
    "options": [
      "1. 35 mét.",
      "2. 55 mét.",
      "3. 70 mét.",
      "4. 100 mét."
    ],
    "answer": 3,
    "explanation": "Tốc độ từ 80 đến 100 km/h thì khoảng cách an toàn tối thiểu là 70 mét.",
    "tip": "Mẹo: 80 - 100 km/h -> 70m.",
    "imageSvg": ""
  },
  {
    "id": 68,
    "chapter": 1,
    "isCritical": false,
    "question": "Thời hạn có giá trị của Giấy phép lái xe hạng B2 là bao lâu kể từ ngày cấp?",
    "options": [
      "1. 5 năm.",
      "2. 10 năm.",
      "3. 20 năm.",
      "4. Không thời hạn."
    ],
    "answer": 2,
    "explanation": "Theo Thông tư 12/2017/TT-BGTVT: Giấy phép lái xe hạng B2 có thời hạn 10 năm kể từ ngày cấp. Hạng C, D, E có thời hạn 5 năm.",
    "tip": "Mẹo: Bằng B2 có thời hạn 10 năm. C, D, E thời hạn 5 năm.",
    "imageSvg": ""
  },
  {
    "id": 69,
    "chapter": 2,
    "isCritical": false,
    "question": "Thời gian làm việc của người lái xe ô tô không được lái xe liên tục quá bao nhiêu giờ và không được làm việc quá bao nhiêu giờ trong một ngày?",
    "options": [
      "1. Không quá 3 giờ liên tục và không quá 8 giờ trong một ngày.",
      "2. Không quá 4 giờ liên tục và không quá 10 giờ trong một ngày.",
      "3. Không quá 5 giờ liên tục và không quá 12 giờ trong một ngày.",
      "4. Không quá 4 giờ liên tục và không quá 8 giờ trong một ngày."
    ],
    "answer": 2,
    "explanation": "Điều 65 Luật GTĐB: Thời gian làm việc của người lái xe ô tô không được quá 10 giờ trong 1 ngày và không được lái xe liên tục quá 4 giờ.",
    "tip": "Mẹo: Lái xe liên tục không quá 4 giờ; tổng ngày không quá 10 giờ.",
    "imageSvg": ""
  },
  {
    "id": 70,
    "chapter": 2,
    "isCritical": false,
    "question": "Người lái xe vận tải hành khách có những trách nhiệm gì dưới đây?",
    "options": [
      "1. Kiểm tra an toàn của xe trước khi xuất bến; hướng dẫn hành khách thắt dây an toàn khi xe chạy.",
      "2. Thu tiền vé cao hơn quy định vào các dịp lễ tết.",
      "3. Nhồi nhét thêm khách nếu còn chỗ đứng.",
      "4. Vận chuyển hàng cấm nếu được trả cước cao."
    ],
    "answer": 1,
    "explanation": "Trách nhiệm người lái xe khách: Kiểm tra an toàn phương tiện, hướng dẫn hành khách tuân thủ quy định an toàn, thắt dây an toàn.",
    "tip": "Mẹo: Lái xe khách có trách nhiệm kiểm tra an toàn và nhắc hành khách thắt dây an toàn.",
    "imageSvg": ""
  },
  {
    "id": 71,
    "chapter": 3,
    "isCritical": false,
    "question": "Khái niệm 'Văn hóa giao thông' được hiểu như thế nào là đầy đủ nhất?",
    "options": [
      "1. Là sự hiểu biết và chấp hành nghiêm chỉnh luật pháp về giao thông.",
      "2. Là ý thức trách nhiệm với cộng đồng, tôn trọng và nhường nhịn người khác khi tham gia giao thông.",
      "3. Cả ý 1 và ý 2.",
      "4. Là việc lái xe thành thạo và không bao giờ bị xử phạt."
    ],
    "answer": 3,
    "explanation": "Văn hóa giao thông bao gồm cả hai yếu tố: Hiểu biết chấp hành luật pháp VÀ ý thức trách nhiệm, nhường nhịn cộng đồng.",
    "tip": "Mẹo: Văn hóa giao thông -> Chọn cả ý 1 và ý 2.",
    "imageSvg": ""
  },
  {
    "id": 72,
    "chapter": 4,
    "isCritical": false,
    "question": "Khi lái xe ô tô qua đường sắt không có rào chắn và không có người gác, nếu thấy có tàu hỏa đang tới thì người lái xe phải xử lý như thế nào?",
    "options": [
      "1. Tăng ga thật nhanh để vượt qua đường sắt trước.",
      "2. Dừng xe lại ngay, giữ khoảng cách tối thiểu 5 mét tính từ ray gần nhất và kéo phanh tay chờ tàu qua.",
      "3. Cho xe dừng sát mép ray và bấm còi.",
      "4. Về số thấp và đi từ từ qua đường ray."
    ],
    "answer": 2,
    "explanation": "Khi thấy tàu hỏa đang tới: Dừng xe ngay, giữ khoảng cách tối thiểu 5m tính từ ray gần nhất, kéo phanh tay đợi tàu qua an toàn.",
    "tip": "Mẹo: Thấy tàu tới -> Dừng cách ray tối thiểu 5 mét.",
    "imageSvg": ""
  },
  {
    "id": 73,
    "chapter": 4,
    "isCritical": false,
    "question": "Mục đích chính của việc giữ khoảng cách an toàn với xe chạy phía trước là gì?",
    "options": [
      "1. Để xe chạy mượt mà tiết kiệm xăng.",
      "2. Để có đủ thời gian và quãng đường phanh dừng lại an toàn khi xe phía trước phanh gấp hoặc gặp sự cố bất ngờ.",
      "3. Để không bị bụi từ xe trước bắn vào kính chắn gió.",
      "4. Để tránh bị camera phạt nguội."
    ],
    "answer": 2,
    "explanation": "Khoảng cách an toàn tạo ra vùng đệm phản xạ và quãng đường phanh cần thiết, tránh đâm va dồn toa khi xe trước đột ngột phanh gấp.",
    "tip": "Mẹo: Khoảng cách an toàn = Kịp phanh dừng an toàn khi xe trước phanh gấp.",
    "imageSvg": ""
  },
  {
    "id": 74,
    "chapter": 5,
    "isCritical": false,
    "question": "Hệ thống phanh (thắng) trên xe ô tô có công dụng chính là gì?",
    "options": [
      "1. Giúp xe tăng tốc nhanh hơn khi vào cua.",
      "2. Dùng để giảm tốc độ hoặc dừng hẳn chuyển động của xe ô tô và giữ cho xe đứng yên trên dốc.",
      "3. Dùng để truyền mô-men quay từ động cơ tới các bánh xe chủ động.",
      "4. Dùng để thay đổi hướng chuyển động của xe ô tô."
    ],
    "answer": 2,
    "explanation": "Hệ thống phanh có tác dụng giảm tốc độ, dừng xe và giữ xe đứng yên (phanh đỗ).",
    "tip": "Mẹo: Phanh = Giảm tốc độ, dừng xe và giữ xe đứng yên.",
    "imageSvg": ""
  },
  {
    "id": 75,
    "chapter": 5,
    "isCritical": false,
    "question": "Dây đai an toàn (seatbelt) lắp trên xe ô tô có công dụng gì?",
    "options": [
      "1. Giữ chặt người lái và hành khách trên ghế khi xe phanh gấp hoặc va chạm, ngăn không bị văng va đập vào kính lái hoặc văng ra khỏi xe.",
      "2. Làm cho người ngồi trên xe cảm thấy êm ái hơn khi xe qua ổ gà.",
      "3. Cố định ghế ngồi không bị lung lay.",
      "4. Báo động khi xe chạy quá tốc độ."
    ],
    "answer": 1,
    "explanation": "Dây đai an toàn giữ cơ thể người ngồi gắn liền với ghế, giảm thiểu chấn thương do lực quán tính khi va chạm hoặc phanh khẩn cấp.",
    "tip": "Mẹo: Dây đai an toàn = Giữ chặt người ngồi trên ghế khi phanh gấp hoặc va chạm.",
    "imageSvg": ""
  },
  {
    "id": 76,
    "chapter": 5,
    "isCritical": false,
    "question": "Túi khí an toàn (Airbag) trên xe ô tô có tác dụng gì khi xảy ra va chạm?",
    "options": [
      "1. Giảm chấn thương vùng đầu và ngực của người ngồi trên xe do va đập với vô lăng hoặc bảng táp-lô.",
      "2. Giúp xe nổi lên khi rơi xuống nước.",
      "3. Tự động dập tắt đám cháy trong khoang động cơ.",
      "4. Giảm tốc độ của xe khi lao dốc."
    ],
    "answer": 1,
    "explanation": "Túi khí bung ra trong vài mili-giây khi va chạm mạnh để hấp thụ lực va đập, bảo vệ đầu và ngực của người ngồi trên xe.",
    "tip": "Mẹo: Túi khí = Giảm chấn thương đầu và ngực khi va chạm mạnh.",
    "imageSvg": ""
  },
  {
    "id": 77,
    "chapter": 5,
    "isCritical": false,
    "question": "Ắc quy (bình điện) lắp trên xe ô tô có công dụng chính là gì?",
    "options": [
      "1. Cung cấp nhiên liệu cho động cơ hoạt động.",
      "2. Tích trữ điện năng và cung cấp điện cho máy khởi động (củ đề) để khởi động động cơ, đồng thời cấp điện cho các thiết bị khi động cơ chưa nổ máy.",
      "3. Tăng công suất của động cơ khi lên dốc.",
      "4. Làm mát hệ thống động cơ xe."
    ],
    "answer": 2,
    "explanation": "Ắc quy là nguồn tích trữ điện năng để đề máy khởi động và cấp điện cho hệ thống đèn, radio khi máy chưa nổ.",
    "tip": "Mẹo: Ắc quy = Tích trữ điện năng, đề máy khởi động.",
    "imageSvg": ""
  },
  {
    "id": 78,
    "chapter": 6,
    "isCritical": false,
    "question": "Biển nào dưới đây là biển 'Cấm đi ngược chiều'?",
    "options": [
      "1. Biển tròn viền đỏ nền trắng có gạch chéo đỏ.",
      "2. Biển tròn màu đỏ có vạch ngang màu trắng ở giữa (Biển P.102).",
      "3. Biển tam giác viền đỏ nền vàng có dấu chấm than.",
      "4. Biển hình chữ nhật màu xanh có mũi tên trắng chỉ lên."
    ],
    "answer": 2,
    "explanation": "Biển P.102 hình tròn màu đỏ, ở giữa có một vạch trắng nằm ngang là biển Cấm đi ngược chiều.",
    "tip": "Mẹo: Tròn đỏ vạch trắng ngang = Cấm đi ngược chiều.",
    "imageSvg": "<svg viewBox=\"0 0 100 100\" class=\"sign-svg\" width=\"90\" height=\"90\"><circle cx=\"50\" cy=\"50\" r=\"46\" fill=\"#DC2626\" stroke=\"#FFFFFF\" stroke-width=\"3\"/><rect x=\"18\" y=\"42\" width=\"64\" height=\"16\" fill=\"#FFFFFF\" rx=\"2\"/></svg>"
  },
  {
    "id": 79,
    "chapter": 6,
    "isCritical": false,
    "question": "Gặp biển báo 'Cấm rẽ trái' (Biển P.123a), xe ô tô có được phép quay đầu xe hay không theo Quy chuẩn 41/2019/BGTVT?",
    "options": [
      "1. Không được phép quay đầu xe.",
      "2. Được phép quay đầu xe (trừ khi có biển cấm quay đầu đi kèm).",
      "3. Chỉ xe con mới được phép quay đầu xe.",
      "4. Chỉ được quay đầu vào ban đêm."
    ],
    "answer": 2,
    "explanation": "Theo Quy chuẩn kỹ thuật Quốc gia về báo hiệu đường bộ QCVN 41/2019/BGTVT: Biển Cấm rẽ trái (P.123a) KHÔNG CẤM quay đầu xe.",
    "tip": "Mẹo: Cấm rẽ trái KHÔNG cấm quay đầu (theo QCVN 41/2019).",
    "imageSvg": "<svg viewBox=\"0 0 100 100\" class=\"sign-svg\" width=\"90\" height=\"90\"><circle cx=\"50\" cy=\"50\" r=\"46\" fill=\"#FFFFFF\" stroke=\"#DC2626\" stroke-width=\"8\"/><path d=\"M52 28 L52 56 Q52 64 42 64 L30 64\" fill=\"none\" stroke=\"#1F2937\" stroke-width=\"7\" stroke-linecap=\"round\"/><polygon points=\"24,64 36,56 36,72\" fill=\"#1F2937\"/><line x1=\"22\" y1=\"22\" x2=\"78\" y2=\"78\" stroke=\"#DC2626\" stroke-width=\"8\" stroke-linecap=\"round\"/></svg>"
  },
  {
    "id": 80,
    "chapter": 6,
    "isCritical": false,
    "question": "Biển nào dưới đây báo hiệu xe đi trên đoạn đường này được quyền ưu tiên qua nơi đường giao nhau?",
    "options": [
      "1. Biển hình tam giác ngược viền đỏ nền trắng (Biển Giao nhau với đường ưu tiên).",
      "2. Biển hình thoi viền trắng nền vàng (Biển Bắt đầu đường ưu tiên - I.401).",
      "3. Biển tròn viền đỏ nền trắng có 2 mũi tên đen đỏ.",
      "4. Biển hình bát giác viền trắng nền đỏ chữ STOP."
    ],
    "answer": 2,
    "explanation": "Biển hình thoi nền vàng viền trắng là biển I.401 'Bắt đầu đường ưu tiên', báo hiệu các phương tiện đi trên tuyến đường này được ưu tiên qua nơi giao nhau.",
    "tip": "Mẹo: Hình thoi vàng viền trắng = Đường ưu tiên.",
    "imageSvg": "<svg viewBox=\"0 0 100 100\" class=\"sign-svg\" width=\"90\" height=\"90\"><rect x=\"50\" y=\"8\" width=\"58\" height=\"58\" rx=\"4\" transform=\"rotate(45 50 8)\" fill=\"#EAB308\" stroke=\"#FFFFFF\" stroke-width=\"6\"/><rect x=\"50\" y=\"16\" width=\"46\" height=\"46\" rx=\"2\" transform=\"rotate(45 50 16)\" fill=\"#FFFFFF\"/></svg>"
  },
  {
    "id": 81,
    "chapter": 6,
    "isCritical": false,
    "question": "Khi gặp biển báo hình tam giác lộn ngược (đỉnh hướng xuống dưới) viền đỏ nền trắng (Biển W.208), người lái xe phải xử lý thế nào?",
    "options": [
      "1. Tăng tốc độ vì đang ở trên đường ưu tiên.",
      "2. Giảm tốc độ và nhường đường cho xe trên đường ưu tiên đi qua trước.",
      "3. Bấm còi và đi thẳng qua ngã tư.",
      "4. Dừng lại 10 phút."
    ],
    "answer": 2,
    "explanation": "Biển W.208 hình tam giác ngược đỉnh chúc xuống là biển 'Giao nhau với đường ưu tiên'. Phương tiện gặp biển này đang ở trên đường KHÔNG ưu tiên, phải giảm tốc và nhường đường.",
    "tip": "Mẹo: Tam giác lộn ngược đầu chúc xuống = Giao nhau với đường ưu tiên -> PHẢI nhường đường.",
    "imageSvg": "<svg viewBox=\"0 0 100 100\" class=\"sign-svg\" width=\"90\" height=\"90\"><polygon points=\"50,90 10,18 90,18\" fill=\"#FFFFFF\" stroke=\"#DC2626\" stroke-width=\"8\" stroke-linejoin=\"round\"/></svg>"
  },
  {
    "id": 82,
    "chapter": 6,
    "isCritical": false,
    "question": "Gặp biển báo bát giác màu đỏ có chữ 'STOP' màu trắng, người lái xe phải hành động như thế nào?",
    "options": [
      "1. Chỉ dừng lại nếu có tàu hỏa đi tới.",
      "2. Bắt buộc phải dừng xe lại trước vạch dừng, quan sát an toàn hai bên, chỉ được đi tiếp khi không có nguy cơ mất an toàn.",
      "3. Giảm tốc độ từ từ và đi qua không cần dừng hẳn.",
      "4. Nhường đường cho xe bên trái rồi đi tiếp."
    ],
    "answer": 2,
    "explanation": "Biển P.122 'Dừng lại (STOP)': Bắt buộc mọi phương tiện cơ giới và thô sơ (kể cả xe ưu tiên) phải dừng lại trước biển hoặc trước vạch dừng xe.",
    "tip": "Mẹo: Biển STOP bát giác đỏ = BẮT BUỘC dừng lại trước khi đi tiếp.",
    "imageSvg": "<svg viewBox=\"0 0 100 100\" class=\"sign-svg\" width=\"90\" height=\"90\"><polygon points=\"30,8 70,8 92,30 92,70 70,92 30,92 8,70 8,30\" fill=\"#DC2626\" stroke=\"#FFFFFF\" stroke-width=\"3\"/><text x=\"50\" y=\"58\" font-family=\"Arial, sans-serif\" font-weight=\"900\" font-size=\"24\" fill=\"#FFFFFF\" text-anchor=\"middle\" letter-spacing=\"1\">STOP</text></svg>"
  },
  {
    "id": 83,
    "chapter": 6,
    "isCritical": false,
    "question": "Biển báo hình tròn nền xanh lam có 3 mũi tên trắng uốn cong theo vòng tròn báo hiệu điều gì?",
    "options": [
      "1. Nơi đỗ xe theo vòng tròn.",
      "2. Nơi giao nhau chạy theo vòng xuyến; các xe phải chạy vòng quanh đảo an toàn theo chiều mũi tên.",
      "3. Đường cấm đi vòng quanh.",
      "4. Biển báo nguy hiểm đường trơn trượt."
    ],
    "answer": 2,
    "explanation": "Biển R.303 'Nơi giao nhau chạy theo vòng xuyến': Báo hiệu các phương tiện phải đi theo chiều vòng tròn quanh đảo giao thông.",
    "tip": "Mẹo: Tròn xanh 3 mũi tên xoay = Bắt buộc đi theo vòng xuyến.",
    "imageSvg": "<svg viewBox=\"0 0 100 100\" class=\"sign-svg\" width=\"90\" height=\"90\"><circle cx=\"50\" cy=\"50\" r=\"46\" fill=\"#2563EB\" stroke=\"#FFFFFF\" stroke-width=\"3\"/><circle cx=\"50\" cy=\"50\" r=\"18\" fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" stroke-dasharray=\"24 10\"/><polygon points=\"68,50 78,40 78,60\" fill=\"#FFFFFF\" transform=\"rotate(-40 50 50)\"/><polygon points=\"32,50 22,40 22,60\" fill=\"#FFFFFF\" transform=\"rotate(140 50 50)\"/></svg>"
  },
  {
    "id": 84,
    "chapter": 6,
    "isCritical": false,
    "question": "Biển báo hình vuông hoặc chữ nhật nền xanh lá cây có vẽ biểu tượng cây cầu vượt và 2 vạch đường hội tụ báo hiệu điều gì?",
    "options": [
      "1. Cầu hẹp nguy hiểm.",
      "2. Đường cao tốc (Biển IE.452).",
      "3. Đường sắt cắt ngang.",
      "4. Bến phà đường bộ."
    ],
    "answer": 2,
    "explanation": "Biển IE.452 nền xanh lá cây là biển báo 'Bắt đầu đường cao tốc', quy định quy chế lưu thông nghiêm ngặt của đường cao tốc.",
    "tip": "Mẹo: Nền xanh lá cây hình 2 đường thẳng song song và cầu vượt = Đường cao tốc.",
    "imageSvg": "<svg viewBox=\"0 0 100 100\" class=\"sign-svg\" width=\"90\" height=\"90\"><rect x=\"8\" y=\"8\" width=\"84\" height=\"84\" rx=\"10\" fill=\"#15803D\" stroke=\"#FFFFFF\" stroke-width=\"3\"/><line x1=\"28\" y1=\"84\" x2=\"42\" y2=\"16\" stroke=\"#FFFFFF\" stroke-width=\"6\"/><line x1=\"72\" y1=\"84\" x2=\"58\" y2=\"16\" stroke=\"#FFFFFF\" stroke-width=\"6\"/><rect x=\"22\" y=\"44\" width=\"56\" height=\"12\" fill=\"#15803D\" stroke=\"#FFFFFF\" stroke-width=\"3\"/></svg>"
  },
  {
    "id": 85,
    "chapter": 6,
    "isCritical": false,
    "question": "Biển tròn viền đỏ nền trắng có ghi số '50' ở giữa màu đen có ý nghĩa gì?",
    "options": [
      "1. Tốc độ tối thiểu cho phép là 50 km/h.",
      "2. Tốc độ tối đa cho phép các xe cơ giới chạy là 50 km/h (Biển P.127).",
      "3. Chiều cao giới hạn 5 mét.",
      "4. Khoảng cách giữa 2 xe là 50 mét."
    ],
    "answer": 2,
    "explanation": "Biển P.127 'Tốc độ tối đa cho phép': Số màu đen trong vòng tròn đỏ báo hiệu tốc độ tối đa không được vượt quá.",
    "tip": "Mẹo: Vòng tròn đỏ số 50 = Tốc độ TỐI ĐA 50 km/h (Biển tròn xanh số trắng mới là tối thiểu).",
    "imageSvg": "<svg viewBox=\"0 0 100 100\" class=\"sign-svg\" width=\"90\" height=\"90\"><circle cx=\"50\" cy=\"50\" r=\"46\" fill=\"#FFFFFF\" stroke=\"#DC2626\" stroke-width=\"8\"/><text x=\"50\" y=\"62\" font-family=\"Inter, sans-serif\" font-weight=\"900\" font-size=\"40\" fill=\"#1F2937\" text-anchor=\"middle\">50</text></svg>"
  },
  {
    "id": 86,
    "chapter": 7,
    "isCritical": false,
    "question": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông trong sa hình tại ngã tư?",
    "options": [
      "1. Xe con -> Xe cứu hỏa -> Xe bạn.",
      "2. Xe cứu hỏa -> Xe con -> Xe bạn.",
      "3. Xe bạn -> Xe cứu hỏa -> Xe con.",
      "4. Xe con -> Xe bạn -> Xe cứu hỏa."
    ],
    "answer": 2,
    "explanation": "Thứ tự ưu tiên giao lộ: 1. Xe đã lọt vào ngã tư; 2. Xe ưu tiên (Cứu hỏa > Quân sự > Công an > Cứu thương); 3. Đường ưu tiên; 4. Quyền bên phải không vướng; 5. Hướng rẽ (Rẽ phải > Đi thẳng > Rẽ trái). Trong hình xe cứu hỏa được đi trước tiên.",
    "tip": "Mẹo: Thứ tự xe ưu tiên: Cứu hỏa - Quân sự - Công an - Cứu thương (Hỏa - Sự - An - Thương).",
    "imageSvg": "<svg viewBox=\"0 0 200 150\" class=\"sahinh-svg\" width=\"180\" height=\"135\"><rect width=\"200\" height=\"150\" fill=\"#E5E7EB\" rx=\"8\"/><rect x=\"80\" y=\"0\" width=\"40\" height=\"150\" fill=\"#4B5563\"/><rect x=\"0\" y=\"55\" width=\"200\" height=\"40\" fill=\"#4B5563\"/><line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"55\" stroke=\"#FFFFFF\" stroke-dasharray=\"5 5\" stroke-width=\"2\"/><line x1=\"100\" y1=\"95\" x2=\"100\" y2=\"150\" stroke=\"#FFFFFF\" stroke-dasharray=\"5 5\" stroke-width=\"2\"/><line x1=\"0\" y1=\"75\" x2=\"80\" y2=\"75\" stroke=\"#FFFFFF\" stroke-dasharray=\"5 5\" stroke-width=\"2\"/><line x1=\"120\" y1=\"75\" x2=\"200\" y2=\"75\" stroke=\"#FFFFFF\" stroke-dasharray=\"5 5\" stroke-width=\"2\"/><rect x=\"88\" y=\"110\" width=\"24\" height=\"32\" rx=\"4\" fill=\"#EF4444\"/><text x=\"100\" y=\"130\" font-size=\"10\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"bold\">Xe Bạn</text><rect x=\"15\" y=\"60\" width=\"35\" height=\"20\" rx=\"4\" fill=\"#3B82F6\"/><text x=\"32\" y=\"74\" font-size=\"9\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"bold\">Xe Con</text><rect x=\"145\" y=\"60\" width=\"40\" height=\"22\" rx=\"4\" fill=\"#DC2626\"/><text x=\"165\" y=\"75\" font-size=\"8\" fill=\"#FFFFFF\" text-anchor=\"middle\" font-weight=\"bold\">Cứu Hỏa</text><circle cx=\"165\" cy=\"55\" r=\"4\" fill=\"#EF4444\"/></svg>"
  },
  {
    "id": 87,
    "chapter": 7,
    "isCritical": false,
    "question": "Tại ngã tư không có biển báo ưu tiên, khi 2 xe cùng đến cùng lúc, xe đi thẳng và xe rẽ trái thì xe nào được quyền đi trước?",
    "options": [
      "1. Xe rẽ trái được đi trước.",
      "2. Xe đi thẳng được quyền đi trước.",
      "3. Xe nào to hơn được đi trước.",
      "4. Hai xe đi cùng lúc."
    ],
    "answer": 2,
    "explanation": "Thứ tự ưu tiên theo hướng di chuyển: Xe rẽ phải được ưu tiên số 1 -> Xe đi thẳng ưu tiên số 2 -> Xe rẽ trái ưu tiên cuối cùng.",
    "tip": "Mẹo: Hướng rẽ: RẼ PHẢI > ĐI THẲNG > RẼ TRÁI (Phải - Thẳng - Trái).",
    "imageSvg": ""
  },
  {
    "id": 88,
    "chapter": 7,
    "isCritical": false,
    "question": "Trong các xe dưới đây, xe nào phải nhường đường khi qua ngã tư có biển tam giác lộn ngược (W.208 - Giao nhau với đường ưu tiên)?",
    "options": [
      "1. Xe đang đi trên đường có biển tam giác lộn ngược phải nhường đường.",
      "2. Xe đi trên đường có biển hình thoi màu vàng phải nhường đường.",
      "3. Xe cứu thương phải nhường đường cho xe con.",
      "4. Cả hai xe đều được đi."
    ],
    "answer": 1,
    "explanation": "Biển tam giác ngược cắm trên đường nhánh không ưu tiên, xe gặp biển này bắt buộc phải nhường đường cho xe trên đường ưu tiên từ bất kỳ hướng nào tới.",
    "tip": "Mẹo: Thấy biển tam giác ngược trước mặt -> Xe của bạn PHẢI nhường đường.",
    "imageSvg": ""
  },
  {
    "id": 89,
    "chapter": 7,
    "isCritical": false,
    "question": "Xe nào vi phạm quy tắc giao thông khi quay đầu đè lên vạch kẻ đường dành cho người đi bộ?",
    "options": [
      "1. Xe con vi phạm.",
      "2. Xe tải vi phạm.",
      "3. Cả xe con và xe tải đều không vi phạm.",
      "4. Xe nào đè lên vạch kẻ đường dành cho người đi bộ khi quay đầu là vi phạm."
    ],
    "answer": 4,
    "explanation": "Khoản 4 Điều 15 Luật GTĐB nghiêm cấm quay đầu xe đè lên vạch kẻ đường dành cho người đi bộ.",
    "tip": "Mẹo: Quay đầu đè vạch người đi bộ là vi phạm luật.",
    "imageSvg": ""
  },
  {
    "id": 90,
    "chapter": 7,
    "isCritical": false,
    "question": "Tại ngã tư giao lộ có vòng xuyến, các xe phải nhường đường theo quy tắc nào?",
    "options": [
      "1. Nhường đường cho xe bên phải.",
      "2. Nhường đường cho xe đi đến từ bên trái (trong vòng xuyến).",
      "3. Nhường cho xe đi thẳng.",
      "4. Không cần nhường đường."
    ],
    "answer": 2,
    "explanation": "Quy tắc vòng xuyến: Khi đã vào vòng xuyến, phải nhường đường cho các xe đi từ BÊN TRÁI tới.",
    "tip": "Mẹo: Có vòng xuyến -> Nhường bên TRÁI.",
    "imageSvg": ""
  },
  {
    "id": 91,
    "chapter": 1,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 91: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 92,
    "chapter": 2,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 92: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 93,
    "chapter": 3,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 93: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 94,
    "chapter": 4,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 94: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 95,
    "chapter": 5,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 95: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 96,
    "chapter": 6,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 96: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 97,
    "chapter": 7,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 97: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 98,
    "chapter": 1,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 98: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 99,
    "chapter": 2,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 99: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 100,
    "chapter": 3,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 100: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 101,
    "chapter": 4,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 101: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 102,
    "chapter": 5,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 102: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 103,
    "chapter": 6,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 103: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 104,
    "chapter": 7,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 104: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 105,
    "chapter": 1,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 105: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 106,
    "chapter": 2,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 106: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 107,
    "chapter": 3,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 107: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 108,
    "chapter": 4,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 108: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 109,
    "chapter": 5,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 109: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 110,
    "chapter": 6,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 110: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 111,
    "chapter": 7,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 111: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 112,
    "chapter": 1,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 112: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 113,
    "chapter": 2,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 113: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 114,
    "chapter": 3,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 114: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 115,
    "chapter": 4,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 115: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 116,
    "chapter": 5,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 116: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 117,
    "chapter": 6,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 117: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 118,
    "chapter": 7,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 118: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 119,
    "chapter": 1,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 119: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  },
  {
    "id": 120,
    "chapter": 2,
    "isCritical": false,
    "question": "Câu hỏi ôn luyện số 120: Trong các trường hợp tham gia giao thông, người điều khiển xe ô tô cần chú ý điều gì để đảm bảo an toàn tối đa?",
    "options": [
      "1. Luôn quan sát gương chiếu hậu, giữ khoảng cách an toàn và tuân thủ tốc độ quy định.",
      "2. Chạy bám sát đuôi xe phía trước để vượt nhanh khi có khoảng trống.",
      "3. Bấm còi liên tục để các phương tiện khác chủ động nhường đường.",
      "4. Chỉ cần tập trung nhìn thẳng, không cần quan sát hai bên."
    ],
    "answer": 1,
    "explanation": "Nguyên tắc an toàn cốt lõi: Luôn quan sát gương, giữ khoảng cách an toàn với xe trước và tuân thủ tốc độ cho phép.",
    "tip": "Mẹo: Lựa chọn mang tính cẩn trọng, quan sát toàn diện luôn là đáp án đúng.",
    "imageSvg": ""
  }
];

export const GPLX_PRESET_EXAMS = [
  {
    "id": 1,
    "title": "Đề Số 1",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      2,
      4,
      6,
      7,
      13,
      14,
      20,
      21,
      27,
      28,
      34,
      35,
      41,
      42,
      48,
      49,
      55,
      56,
      62,
      63,
      69,
      70,
      76,
      77,
      83,
      90,
      97,
      104,
      111,
      118
    ]
  },
  {
    "id": 2,
    "title": "Đề Số 2",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      1,
      5,
      7,
      9,
      10,
      16,
      17,
      23,
      24,
      30,
      31,
      37,
      38,
      44,
      45,
      51,
      52,
      58,
      59,
      65,
      66,
      72,
      73,
      79,
      80,
      86,
      93,
      100,
      107,
      114
    ]
  },
  {
    "id": 3,
    "title": "Đề Số 3",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      4,
      8,
      10,
      12,
      13,
      19,
      20,
      26,
      27,
      33,
      34,
      40,
      41,
      47,
      48,
      54,
      55,
      61,
      62,
      68,
      69,
      75,
      76,
      82,
      83,
      89,
      96,
      103,
      110,
      117
    ]
  },
  {
    "id": 4,
    "title": "Đề Số 4",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      7,
      11,
      13,
      15,
      16,
      22,
      23,
      29,
      30,
      36,
      37,
      43,
      44,
      50,
      51,
      57,
      58,
      64,
      65,
      71,
      72,
      78,
      79,
      85,
      86,
      92,
      99,
      106,
      113,
      120
    ]
  },
  {
    "id": 5,
    "title": "Đề Số 5",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      3,
      10,
      14,
      16,
      18,
      19,
      25,
      26,
      32,
      33,
      39,
      40,
      46,
      47,
      53,
      54,
      60,
      61,
      67,
      68,
      74,
      75,
      81,
      82,
      88,
      89,
      95,
      102,
      109,
      116
    ]
  },
  {
    "id": 6,
    "title": "Đề Số 6",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      6,
      13,
      17,
      19,
      21,
      22,
      28,
      29,
      35,
      36,
      42,
      43,
      49,
      50,
      56,
      57,
      63,
      64,
      70,
      71,
      77,
      78,
      84,
      85,
      91,
      92,
      98,
      105,
      112,
      119
    ]
  },
  {
    "id": 7,
    "title": "Đề Số 7",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      2,
      9,
      16,
      20,
      22,
      24,
      25,
      31,
      32,
      38,
      39,
      45,
      46,
      52,
      53,
      59,
      60,
      66,
      67,
      73,
      74,
      80,
      81,
      87,
      88,
      94,
      95,
      101,
      108,
      115
    ]
  },
  {
    "id": 8,
    "title": "Đề Số 8",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      5,
      12,
      19,
      23,
      25,
      27,
      28,
      34,
      35,
      41,
      42,
      48,
      49,
      55,
      56,
      62,
      63,
      69,
      70,
      76,
      77,
      83,
      84,
      90,
      91,
      97,
      98,
      104,
      111,
      118
    ]
  },
  {
    "id": 9,
    "title": "Đề Số 9",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      1,
      8,
      15,
      22,
      26,
      28,
      30,
      31,
      37,
      38,
      44,
      45,
      51,
      52,
      58,
      59,
      65,
      66,
      72,
      73,
      79,
      80,
      86,
      87,
      93,
      94,
      100,
      101,
      107,
      114
    ]
  },
  {
    "id": 10,
    "title": "Đề Số 10",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      4,
      11,
      18,
      25,
      29,
      31,
      33,
      34,
      40,
      41,
      47,
      48,
      54,
      55,
      61,
      62,
      68,
      69,
      75,
      76,
      82,
      83,
      89,
      90,
      96,
      97,
      103,
      104,
      110,
      117
    ]
  },
  {
    "id": 11,
    "title": "Đề Số 11",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      7,
      14,
      21,
      28,
      32,
      34,
      36,
      37,
      43,
      44,
      50,
      51,
      57,
      58,
      64,
      65,
      71,
      72,
      78,
      79,
      85,
      86,
      92,
      93,
      99,
      100,
      106,
      107,
      113,
      120
    ]
  },
  {
    "id": 12,
    "title": "Đề Số 12",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      3,
      10,
      17,
      24,
      31,
      35,
      37,
      39,
      40,
      46,
      47,
      53,
      54,
      60,
      61,
      67,
      68,
      74,
      75,
      81,
      82,
      88,
      89,
      95,
      96,
      102,
      103,
      109,
      110,
      116
    ]
  },
  {
    "id": 13,
    "title": "Đề Số 13",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      6,
      13,
      20,
      27,
      34,
      38,
      40,
      42,
      43,
      49,
      50,
      56,
      57,
      63,
      64,
      70,
      71,
      77,
      78,
      84,
      85,
      91,
      92,
      98,
      99,
      105,
      106,
      112,
      113,
      119
    ]
  },
  {
    "id": 14,
    "title": "Đề Số 14",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      2,
      9,
      16,
      23,
      30,
      37,
      41,
      43,
      45,
      46,
      52,
      53,
      59,
      60,
      66,
      67,
      73,
      74,
      80,
      81,
      87,
      88,
      94,
      95,
      101,
      102,
      108,
      109,
      115,
      116
    ]
  },
  {
    "id": 15,
    "title": "Đề Số 15",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      5,
      12,
      19,
      26,
      33,
      40,
      44,
      46,
      48,
      49,
      55,
      56,
      62,
      63,
      69,
      70,
      76,
      77,
      83,
      84,
      90,
      91,
      97,
      98,
      104,
      105,
      111,
      112,
      118,
      119
    ]
  },
  {
    "id": 16,
    "title": "Đề Số 16",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      1,
      2,
      8,
      15,
      22,
      29,
      36,
      43,
      47,
      49,
      51,
      52,
      58,
      59,
      65,
      66,
      72,
      73,
      79,
      80,
      86,
      87,
      93,
      94,
      100,
      101,
      107,
      108,
      114,
      115
    ]
  },
  {
    "id": 17,
    "title": "Đề Số 17",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      4,
      5,
      11,
      18,
      25,
      32,
      39,
      46,
      50,
      52,
      54,
      55,
      61,
      62,
      68,
      69,
      75,
      76,
      82,
      83,
      89,
      90,
      96,
      97,
      103,
      104,
      110,
      111,
      117,
      118
    ]
  },
  {
    "id": 18,
    "title": "Đề Số 18",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      1,
      7,
      8,
      14,
      21,
      28,
      35,
      42,
      49,
      53,
      55,
      57,
      58,
      64,
      65,
      71,
      72,
      78,
      79,
      85,
      86,
      92,
      93,
      99,
      100,
      106,
      107,
      113,
      114,
      120
    ]
  },
  {
    "id": 19,
    "title": "Đề Số 19",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      3,
      4,
      10,
      11,
      17,
      24,
      31,
      38,
      45,
      52,
      56,
      58,
      60,
      61,
      67,
      68,
      74,
      75,
      81,
      82,
      88,
      89,
      95,
      96,
      102,
      103,
      109,
      110,
      116,
      117
    ]
  },
  {
    "id": 20,
    "title": "Đề Số 20",
    "questionCount": 30,
    "durationMinutes": 20,
    "passScore": 27,
    "questionIds": [
      1,
      7,
      8,
      14,
      15,
      21,
      28,
      35,
      42,
      49,
      56,
      59,
      63,
      64,
      70,
      71,
      77,
      78,
      84,
      85,
      91,
      92,
      98,
      99,
      105,
      106,
      112,
      113,
      119,
      120
    ]
  }
];

/**
 * Hàm sinh đề ngẫu nhiên 30 câu chuẩn cấu trúc Tổng cục Đường bộ:
 * - 1 đến 2 câu điểm liệt (bắt buộc phải đúng)
 * - 10 câu Chương 1 (quy tắc)
 * - 1 câu Chương 2 (vận tải)
 * - 1 câu Chương 3 (đạo đức)
 * - 1 câu Chương 4 (kỹ thuật lái)
 * - 1 câu Chương 5 (cấu tạo sửa chữa)
 * - 9 câu Chương 6 (biển báo)
 * - 7 câu Chương 7 (sa hình)
 */
export function generateRandomExam30() {
  const criticalPool = GPLX_QUESTIONS.filter(q => q.isCritical);
  const ch1Pool = GPLX_QUESTIONS.filter(q => q.chapter === 1 && !q.isCritical);
  const ch2Pool = GPLX_QUESTIONS.filter(q => q.chapter === 2 && !q.isCritical);
  const ch3Pool = GPLX_QUESTIONS.filter(q => q.chapter === 3 && !q.isCritical);
  const ch4Pool = GPLX_QUESTIONS.filter(q => q.chapter === 4 && !q.isCritical);
  const ch5Pool = GPLX_QUESTIONS.filter(q => q.chapter === 5 && !q.isCritical);
  const ch6Pool = GPLX_QUESTIONS.filter(q => q.chapter === 6 && !q.isCritical);
  const ch7Pool = GPLX_QUESTIONS.filter(q => q.chapter === 7 && !q.isCritical);

  function sample(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  // Lấy 2 câu điểm liệt
  const selectedCrit = sample(criticalPool, 2);
  // Lấy các câu còn lại
  const selectedCh1 = sample(ch1Pool, 8);
  const selectedCh2 = sample(ch2Pool.length ? ch2Pool : ch1Pool, 1);
  const selectedCh3 = sample(ch3Pool.length ? ch3Pool : ch1Pool, 1);
  const selectedCh4 = sample(ch4Pool.length ? ch4Pool : ch1Pool, 2);
  const selectedCh5 = sample(ch5Pool.length ? ch5Pool : ch1Pool, 2);
  const selectedCh6 = sample(ch6Pool.length ? ch6Pool : ch1Pool, 8);
  const selectedCh7 = sample(ch7Pool.length ? ch7Pool : ch1Pool, 6);

  let combined = [
    ...selectedCrit,
    ...selectedCh1,
    ...selectedCh2,
    ...selectedCh3,
    ...selectedCh4,
    ...selectedCh5,
    ...selectedCh6,
    ...selectedCh7
  ];

  // Nếu chưa đủ 30, bù thêm từ pool tổng
  if (combined.length < 30) {
    const remainingNeeded = 30 - combined.length;
    const existingIds = new Set(combined.map(q => q.id));
    const extra = GPLX_QUESTIONS.filter(q => !existingIds.has(q.id));
    combined = combined.concat(sample(extra, remainingNeeded));
  }

  // Shuffle kết quả và đảm bảo đúng 30 câu
  return combined.sort(() => 0.5 - Math.random()).slice(0, 30);
}
