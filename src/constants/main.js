export const listToast = [
    { severity: 'success', summary: 'Thành công' },
    { severity: 'error', summary: 'Lỗi' },
    { severity: 'warn', summary: 'Cảnh báo' },
    { severity: 'info', summary: 'Info' },
]

export const toolTypes = [
    { name: 'Theo công ty', id: 'company' },
    { name: 'Theo tòa nhà', id: 'building' },
]
export const marital_status = [
    { name: 'Độc thân', id: 1 },
    { name: 'Đã kết hôn', id: 2 },
]
export const level = [
    { name: 'Cấp độ 1', id: 1 },
    { name: 'Cấp độ 2', id: 2 },
    { name: 'Cấp độ 3', id: 3 },
    { name: 'Cấp độ 4', id: 4 },
    { name: 'Cấp độ 5', id: 5 },
    { name: 'Cấp độ 6', id: 6 },
    { name: 'Cấp độ 7', id: 7 },
]

export const status = [
    { name: 'Hoạt động', id: 1 },
    { name: 'Dừng hoạt động', id: 0 },
]

export const date_work = [
    { name: 'Thứ 2', id: 'mo' },
    { name: 'Thứ 3', id: 'tu' },
    { name: 'Thứ 4', id: 'we' },
    { name: 'Thứ 5', id: 'th' },
    { name: 'Thứ 6', id: 'fr' },
    { name: 'Thứ 7', id: 'sa' },
    { name: 'Chủ nhật', id: 'su' },
]
export const statusV2 = [
    { name: 'Hoạt động', id: 1 },
    { name: 'Dừng hoạt động', id: 2 },
]

export const formofpayment = [
    { name: 'Tiền mặt', id: 'tien_mat' },
    { name: 'Cần trừ CĐT', id: 'chuyen_khoan' },
    { name: 'Cần trừ TKDX', id: 'can_tru_cđt' },
    { name: 'Ví', id: 'vi' },
    { name: 'Khác', id: 'khac' },
]
export const units = [
    { name: 'Công ty', id: 1 },
    { name: 'Dự án', id: 2 },
    { name: 'Phòng ban', id: 3 },
]
export const status_productv2 = [
    { name: 'Bình thường', id: 1, color: '#1D84C7' },
    { name: 'Hỏng hóc', id: 2, color: '#FF0000' },
    { name: 'Bảo trì', id: 3, color: '#FF9600' },
]

export const statusApartment = [
    { name: 'Trống', id: 0 },
    { name: 'Đang cho thuê', id: 1 },
    { name: 'Muốn cho thuê', id: 2 },
    { name: 'Đang ở', id: 3 },
    { name: 'Mới bàn giao', id: 4 },
    { name: 'Đang cải tạo', id: 5 },
    { name: 'Chưa bàn giao', id: 6 },
]

export const serviceApartment = [
    { id: 1, name: 'Phí dịch vụ – Xe ô tô – 1 – 232323' },
    { id: 2, name: 'Phí dịch vụ - Xe ô tô - 1 - 884222' },
    { id: 3, name: 'Phí dịch vụ - Xe ô tô cư dân – 1 - 884222' },
    { id: 4, name: 'Phí thu hộ BQT -' },
    { id: 5, name: 'Tiền nước của tòa VP -' },
]

export const type_vehicles = [
    { id: 0, name: 'Phương tiện khác' },
    { id: 1, name: 'Xe đạp' },
    { id: 2, name: 'Xe máy' },
    { id: 3, name: 'Ô tô' },
    { id: 4, name: 'Xe điện' },
]
export const typeClassify = [
    { id: 'imp', name: 'Phiếu nhập' },
    { id: 'exp', name: 'Phiếu xuất' },
    { id: 'rol', name: 'Phiếu luân chuyển' },
]
export const typeClassifyV2 = [
    { id: 1, name: 'Phiếu nhập' },
    { id: 2, name: 'Phiếu xuất' },
]
export const product_category = [
    { id: 'tieu_hao', name: 'Sản phẩm tiêu hao' },
    { id: 'co_dinh', name: 'Sản phẩm văn phòng' },
    { id: 'thiet_bi', name: 'Sản phẩm kỹ thuật tòa nhà' },
]

export const services = [
    { id: 1, name: 'Phí dịch vụ - Xe ô tô - 1' },
    { id: 2, name: 'Phí thu hộ BQT' },
    { id: 3, name: 'Phí nước đầu kỳ' },
    { id: 4, name: 'Phí bổ sung -' },
]

export const category = [
    { id: 1, name: 'Đồ gia dụng' },
    { id: 2, name: 'Phòng cháy chữa cháy' },
    { id: 3, name: 'Đồ điện tử ' },
    { id: 4, name: 'Đồ thông cống' },
    { id: 5, name: 'Thiết bị thông minh' },
]

export const statusDebt = [
    { name: 'Trạng thái', id: 1 },
    { name: 'Chờ xác nhận', id: 2 },
    { name: 'Chờ gửi', id: 3 },
    { name: 'Quá hạn', id: 4 },
    { name: 'Đã thanh toán', id: 5 },
    { name: 'Đang thanh toán', id: 6 },
]

export const typeServiceNotification = [
    { name: 'Email', id: 'email' },
    { name: 'SMS', id: 'sms' },
]

export const typeLogImport = [
    { name: 'Import thêm cư dân', id: 0 },
    { name: 'Import cập nhật cư dân', id: 1 },
    { name: 'Import căn hộ', id: 7 },
]

export const statementPeriod = [
    { name: 'Một kỳ bảng kê', id: 0 },
    { name: 'Một khoảng kỳ bảng kê', id: 1 },
    { name: 'Khoảng thời gian', id: 2 },
]

export const banking = [
    { id: 1, name: 'Việt Nam thịnh vượng' },
    { id: 2, name: 'Đầu tư và phát triển ' },
    { id: 3, name: 'Công thương Việt Name' },
    { id: 4, name: 'Quân Đội' },
    { id: 5, name: 'Kĩ Thương' },
    { id: 6, name: 'NN&PT Nông thôn Việt Nam' },
]

export const allocationAsset = [
    { id: 'car', name: 'Cấp phát', color: '#54a0ff' },
    { id: 'cir', name: 'Luân chuyển', color: '#FF66FF' },
]
export const statusBuilding = [
    { id: 0, name: 'Đóng', color: '#F39C12' },
    { id: 1, name: 'Mở', color: '#30CB83' },
]
export const statusAsset = [
    { id: 1, name: 'Lưu kho', color: '#F39C12' },
    { id: 2, name: 'Đang sử dụng', color: '#30CB83' },
    { id: 3, name: 'Hỏng Hóc', color: '#E74C3C' },
    { id: 4, name: 'Mất', color: '#E74C3C' },
    { id: 5, name: 'Đã thu hồi', color: '#F39C12' },
]

export const statusLogImport = [
    { id: 0, name: 'Thất bại', color: '#F39C12' },
    { id: 1, name: 'Thành công', color: '#30CB83' },
]
export const codeBillImport = [
    { id: 1, name: 'Tạo mã hóa đơn mới' },
    { id: 0, name: 'Đồng bộ mã hóa đơn công nợ hiện tại' },
]

export const statusFormSetup = [
    { id: 0, name: 'Chưa duyệt', color: '#F39C12' },
    { id: 1, name: 'Đã duyệt', color: '#30CB83' },
]

export const relationshipOwner = [
    { id: 0, name: 'Chủ hộ' },
    { id: 1, name: 'Vợ chồng' },
    { id: 2, name: 'Con' },
    { id: 3, name: 'Bố, mẹ' },
    { id: 4, name: 'Anh, chị, em' },
    { id: 5, name: 'Khác' },
    { id: 6, name: 'Khách thuê' },
    { id: 7, name: 'Chủ hộ cũ' },
    { id: 8, name: 'Cháu' },
]

export const genders = [
    { id: 1, name: 'Nam' },
    { id: 2, name: 'Nữ' },
    { id: 3, name: 'Không xác định' },
]
export const type_Contract = [
    { id: 1, name: 'Hợp đồng chính thức (1 năm)' },
    { id: 2, name: 'Hợp đồng chính thức (3 năm)' },
    { id: 3, name: 'Hợp đồng chính thức (Không thời hạn ' },
    { id: 4, name: 'Hợp đồng thời vụ' },
    { id: 5, name: 'Hợp đồng thử việc' },
]
export const status_Contract = [
    { id: 1, name: 'Đang hiệu lực', color: '#30CB83' },
    { id: 2, name: 'Hết hiệu lực', color: '#E74C3C' },
    { id: 3, name: 'Thanh lý', color: '#FABB00' },
]

export const work_position = [
    { id: 'tong_giam_doc', name: 'Tổng giám đốc' },
    { id: 'giam_doc_hanh_chinh_nhan_su', name: 'Giám đốc Hành chính Nhân sự' },
    { id: 'nhan_vien_tuyen_dung', name: 'Nhân viên Tuyển dụng' },
    { id: 'truong_nhom_c&b', name: 'Trưởng nhóm C&B' },
    { id: 'nhan_vien_hanh_chinh_nhan_su', name: 'Nhân viên hành chính nhân sự' },
    { id: 'truong_nhom_tuyen_dung', name: 'Trưởng nhóm Tuyển dụng' },
    { id: 'chuyen_vien_dao_tao', name: 'Chuyên viên Đào tạo' },
]
export const debitBalance = [
    { id: 1, name: 'Ngày' },
    { id: 2, name: 'Tháng' },
]

export const typeRequest = [
    { id: 1, name: 'Thêm phương tiện' },
    { id: 2, name: 'Hủy phương tiện' },
    { id: 3, name: 'Cấp lại thẻ xe (có thông tin chi tiết)' },
    { id: 4, name: 'Chuyển đồ' },
    { id: 5, name: 'Sửa chữa' },
    { id: 6, name: 'Tiện ích' },
    { id: 7, name: 'Cấp lại thẻ xe (không có thông tin chi tiết)' },
    { id: 9, name: 'Thêm nhân khẩu' },
    { id: 10, name: 'Thay đổi thông tin cá nhân' },
    { id: 11, name: 'Đăng ký thẻ' },
    { id: 12, name: 'Yêu cầu hủy thẻ' },
    { id: 13, name: 'Yêu cầu sửa chữa' },
    { id: 14, name: 'Yêu cầu bảo trì, bảo dưỡng' },
    { id: 15, name: 'Gia hạn phương tiện' },
]
export const serviceCharge = [
    { id: 0, name: 'Phí công ty' },
    { id: 2, name: 'Phí thu hộ' },
    { id: 3, name: 'Phí chủ đầu tư' },
    { id: 4, name: 'Phí ban quản trị' },
]
export const serviceChargeV2 = [
    { id: 1, name: 'Công ty' },
    { id: 2, name: 'Thu hộ' },
    { id: 3, name: 'Chủ đầu tư' },
    { id: 4, name: 'Ban quản trị' },
]
export const tax_authorization = [
    { id: 'cong_ty', name: 'Công ty' },
    { id: 'ca_nhan', name: 'Cá nhân' },
]

export const selectServiceCharge = [
    { id: 0, name: 'Phí khác' },
    { id: 2, name: 'Điện' },
    { id: 3, name: 'Phí dịch vụ' },
    { id: 4, name: 'Nước ' },
    { id: 5, name: 'Phương tiện' },
]
export const services_Debt = [
    { id: 0, name: 'Phí khác' },
    { id: 2, name: 'Phí dịch vụ' },
    { id: 3, name: 'Nước ' },
    { id: 4, name: 'Phương tiện' },
    { id: 5, name: 'Điện' },
]
export const statusRequest = [
    { id: 1, name: 'BQL đang xử lý', color: '#9B59B6' },
    { id: 2, name: 'Chờ cư dân phản hồi', color: '#54A0FF' },
    { id: 3, name: 'Thành công', color: '#30CB83' },
    { id: 4, name: 'Hủy', color: '#E74C3C' },
    { id: 5, name: 'Chờ BQL xử lý (Đã tiếp nhận)', color: '#F39C12' },
    { id: 0, name: 'Chờ BQL xử lý', color: '#F39C12' },
]
export const statusNotifications = [
    { id: 1, name: 'Thành Công', color: '#9B59B6' },
    { id: 2, name: 'Đã gửi', color: '#54A0FF' },
]

export const statusOpinion = [
    { id: 0, name: 'Chờ BQL xử lý', color: '#F39C12' },
    { id: 1, name: 'Hoàn thành', color: '#30CB83' },
    { id: 2, name: 'Chờ cư dân phản hồi', color: '#54A0FF' },
    { id: 3, name: 'BQL đang xử lý', color: '#9B59B6' },
    { id: 4, name: 'Chờ BQL xử lý (đã tiếp nhận )', color: '#F39C12' },
]

export const statusRepair = [
    { name: 'Chờ xử lý', id: 0, color: '#F39C12' },
    { name: 'BQL đang xử lý', id: 1, color: '#54A0FF' },
    { name: 'Chờ cư dân phản hồi', id: 2, color: '#9B59B6' },
    { name: 'Thành công', id: 3, color: '#F00098' },
    { name: 'Hủy', id: 4, color: '#EE00FF' },
    { name: 'Chờ xử lý', id: 5, color: '#00FFEE ' },
    { name: 'Duyệt', id: 6, color: '#00FC93' },
    { name: 'Chờ CĐT phản hồi', id: 7, color: '#21FA00' },
    { name: 'CĐT từ chối', id: 8, color: '#E74C3C' },
    { name: 'CĐT duyệt - YC cọc', id: 9, color: '#30CB83' },
    { name: 'Đã cọc', id: 10, color: '#FABB00' },
    { name: 'Đang thi công', id: 10, color: '#FABB00' },
    { name: 'Tạm dừng', id: 10, color: '#FABB00' },
]

export const residentOptions = [
    { name: 'Chờ xử lý', id: 0, color: '#F39C12' },
    { name: 'BQL đang xử lý', id: 1, color: '#54A0FF' },
    { name: 'Chờ cư dân phản hồi', id: 2, color: '#9B59B6' },
    { name: 'Thành công', id: 3, color: '#F00098' },
    { name: 'Hủy', id: 4, color: '#EE00FF' },
    { name: 'Chờ xử lý', id: 5, color: '#00FFEE ' },
    { name: 'Duyệt', id: 6, color: '#00FC93' },
    { name: 'Chờ CĐT phản hồi', id: 7, color: '#21FA00' },
    { name: 'CĐT từ chối', id: 8, color: '#E74C3C' },
    { name: 'CĐT duyệt - YC cọc', id: 9, color: '#30CB83' },
    { name: 'Đã cọc', id: 10, color: '#FABB00' },
    { name: 'Đang thi công', id: 10, color: '#FABB00' },
    { name: 'Tạm dừng', id: 10, color: '#FABB00' },
]

export const servicesRequest = [
    { id: 1, name: 'Thuê phòng cầu lông' },
    { id: 2, name: 'Phòng họp' },
]
export const transactionForm = [
    { id: 0, name: 'Tiền măt' },
    { id: 1, name: 'Chuyển khoản' },
    { id: 2, name: 'VNPay' },
]

export const ticketType = [
    { id: 0, name: 'Phiếu thu ký quỹ' },
    { id: 1, name: 'Phiếu hoàn ký quỹ' },
]
export const receiptList = [
    { id: 0, name: 'Phiếu hoàn tiền ký quỹ' },
    { id: 1, name: 'Phiếu thu ký quỹ' },
]
export const payments = [
    { id: 0, name: 'Tiền mặt' },
    { id: 1, name: 'Chuyển khoản' },
    { id: 2, name: 'VNPay' },
    { id: 3, name: 'Ví' },
]
export const types = [
    { id: 0, name: 'Phiếu thu' },
    { id: 1, name: 'Phiếu báo có' },
    { id: 2, name: 'Phiếu thu khác' },
    { id: 3, name: 'Phiếu chi' },
    { id: 4, name: 'Phiếu chi khác' },
    { id: 5, name: 'Phiếu kế toán' },
]
export const typesV2 = [
    { id: 'phieu_thu', name: 'Phiếu thu' },
    { id: 'phieu_bao_co', name: 'Phiếu báo có' },
    { id: 'phieu_thu_khac', name: 'Phiếu thu khác' },
    { id: 'phieu_chi', name: 'Phiếu chi' },
    { id: 'phieu_chi_khac', name: 'Phiếu chi khác' },
    { id: 'phieu_ke_toan', name: 'Phiếu kế toán' },
]
export const typesV3 = [{ id: 'phieu_thu_ky_quy', name: 'Phiếu thu ký quỹ' }]
export const typesV4 = [{ id: 'phieu_thu_khac ', name: 'Phiếu thu khác' }]
export const typesOfPromotion = [
    { id: 0, name: 'VNĐ' },
    { id: 1, name: '%' },
]
export const discount = [
    { id: 2, name: 'Không' },
    { id: 1, name: '%' },
    { id: 0, name: 'VNĐ' },
]
export const typeServices = [
    {
        type: 1,
        title: 'Thông tin đăng kí phương tiện',
        columns: [
            { label: 'Chủ phương tiện', key: 'full_name' },
            { label: 'Loại xe', key: 'type_vehicles' },
            { label: 'Biển số xe', key: 'number_vehicles' },
            { label: 'Ngày bắt đầu sử dụng', key: 'date_begin' },
        ],
        images: [
            { label: 'Ảnh phương tiện', key: 'image_vehicles' },
            { label: 'Ảnh giấy đăng ký phương tiện', key: 'image_reg_vehicles' },
            { label: 'Ảnh bảo hiểm phương tiện', key: 'image_bao_hiem' },
        ],
    },
    {
        type: 2,
        title: 'Hủy phương tiện',
        columns: [
            { label: 'Biển số xe:', key: 'number_vehicles' },
            { label: 'Loại xe:', key: 'type_vehicles' },
            { label: 'Ngày kết thúc gửi:', key: 'date_end' },
            { label: 'Lý do:', key: 'reason' },
        ],
    },
    {
        type: 3,
        title: 'Cấp lại thẻ xe',
        columns: [
            { label: 'Biển số xe:', key: 'number_vehicles' },
            { label: 'Loại xe:', key: 'type_vehicles' },
            { label: 'Lý do:', key: 'reason' },
        ],
    },
    {
        type: 4,
        title: ' Đăng kí chuyển đồ vào',
        columns: [
            { label: 'Người đăng kí:', key: 'full_name' },
            { label: 'Số điện thoại', key: 'phone' },
            { label: 'Khung giờ đăng kí', key: 'times' },
            { label: 'Ngày đăng kí', key: 'date' },
            { label: 'Đồ vận chuyển', key: 'products' },
        ],
    },
    {
        type: 5,
        title: 'Đăng kí sửa chữa',
        columns: [
            { label: 'Người đăng kí', key: 'full_name' },
            { label: 'Điện thoại', key: 'phone' },
            { label: 'Thời gian dự kiến thi công', key: 'fromto' },
            { label: 'Đơn vị thi công', key: 'construction' },
            { label: 'Ghi chú', key: 'content' },
        ],
    },
    {
        type: 6,
        title: 'Đăng kí tiện ích',
        columns: [
            { label: 'Người đăng kí', key: 'full_name' },
            { label: 'Điện thoại', key: 'phone' },
            { label: 'Ngày đăng kí', key: 'date' },
            { label: 'Tiện ích', key: 'service_type' },
            { label: 'Khung giờ đăng kí', key: 'time' },
        ],
    },
    {
        type: 7,
        title: 'Đăng ký khách đến chơi',
        columns: [
            { label: 'Biển số xe:', key: 'number_vehicles' },
            { label: 'Loại xe:', key: 'number_vehicles' },
            { label: 'Lý do:', key: 'reason' },
        ],
    },
    {
        type: 8,
        title: 'Đăng ký khách đến chơi',
        columns: [
            { label: 'Biển số xe:', key: 'number_vehicles' },
            { label: 'Loại xe:', key: 'number_vehicles' },
            { label: 'Lý do:', key: 'reason' },
        ],
    },
    {
        type: 9,
        title: 'Đăng ký khách đến chơi',
        columns: [
            { label: 'Biển số xe:', key: 'number_vehicles' },
            { label: 'Loại xe:', key: 'number_vehicles' },
            { label: 'Lý do:', key: 'reason' },
        ],
    },
    {
        type: 10,
        title: 'Thay đổi thông tin cá nhân',
        columns: [
            { label: 'Chủ phương tiện', key: 'full_name' },
            { label: 'Loại xe', key: 'type_vehicles' },
            { label: 'Biển số xe', key: 'number_vehicles' },
            { label: 'Ngày bắt đầu sử dụng', key: 'date_begin' },
        ],
        images: [
            { label: 'Ảnh đại diện', key: 'avatar' },
            { label: 'Ảnh CCCD mặt trước', key: 'before_cmt' },
            { label: 'Ảnh CCCD mặt sau', key: 'after_cmt' },
        ],
    },
]

export const formTemplate = [
    {
        id: 1,
        name: 'Phiếu đăng ký cấp thẻ thang máy',
        params: '@ten_khach_hang , @can_ho , @email , @phone , @ngay_de_nghi',
    },
    { id: 2, name: 'Phiếu đăng ký hủy thẻ thang máy', params: '@ngay_de_nghi' },
    {
        id: 3,
        name: 'Phiếu đăng ký chuyển đồ',
        params: '@ten_khach_hang , @email , @can_ho , @dien_thoai_lien_he , @ngay_van_chuyen , @du_lieu',
    },
    {
        id: 4,
        name: 'Phiếu đăng ký sửa chữa',
        params: '@ten_khach_hang , @sdt_kh , @can_ho , @ten_nha_thau , @nguoi_chiu_trach_nhiem , @sdt_nha_thau , @start_time , @end_time , @ngay_bat_dau , @ngay_ket_thuc',
    },
    { id: 5, name: 'Phiếu đăng ký tiện ích', params: '@ten_khach_hang , @can_ho , @sdt , @ngay_de_nghi , @du_lieu' },
]

export const formTemplatesStatus = [
    { id: 1, name: 'Hiện' },
    { id: 2, name: 'Ẩn' },
]

export const ratedService = [
    { id: -1, name: 'Chưa hài lòng', color: '#F39C12' },
    { id: 1, name: 'Bình thường', color: '#54A0FF' },
    { id: -3, name: 'Rất không hài lòng', color: '#9B59B6' },
    { id: 3, name: 'Hài lòng', color: '#30CB83' },
    { id: 5, name: 'Rất hài lòng', color: '#30CB83' },
]

export const objectRate = [
    { id: 1, name: 'Cư dân' },
    { id: 2, name: 'Khách vãng lai' },
]

export const prices = [
    { name: 'Một giá (giá cố định)', id: 1 },
    { name: 'Lũy tiến (tính giá theo bậc thang)', id: 2 },
    // { name: 'Phí phát sinh đầu kỳ', id: 3 },
    { name: 'Lũy tiến nước theo nhân khẩu', id: 3 },
    { name: 'Giá điện theo yêu cầu', id: 5 },
]

export const typeBdcPrices = [
    { name: 'Giá tiền/tháng', id: 1 },
    { name: 'Giá tiền/m2/tháng', id: 2 },
]

export const statusLog = [
    // { id: 1, name: 'ReadyToSend', severity: '#F59E0B' },
    { id: '2', name: 'Đã gửi', color: '#30CB83' },
    { id: '3', name: 'Đang gửi', color: '#54A0FF' },
    { id: '4', name: 'Có lỗi', color: '#EF4444' },
    { id: '5', name: 'Đã gửi', color: '#30CB83' },
    // { id: 6, name: 'Opened', color: 'success' },
    // { id: 7, name: 'Clicked', color: 'info' },
    { id: '8', name: 'Hủy nhận mail', color: '#F59E0B' },
    { id: '9', name: 'Mail không tồn tại', color: '#F59E0B' },
    { id: '00', name: 'Thành công', color: '#30CB83' },
    { id: '02', name: 'Độ dài không hợp lệ', color: '#EF4444' },
    { id: '04', name: 'Sai thông tin xác thực', color: '#EF4444' },
    { id: '05', name: 'Mất kết nối đến nhà cung cấp', color: '#EF4444' },
    { id: '06', name: 'Ip không được phép truy cập', color: '#EF4444' },
    { id: '07', name: 'Chưa nhận tin MO từ khách hàng', color: '#EF4444' },
    { id: '12', name: 'Không hỗ trợ tin unicode', color: '#EF4444' },
    { id: '14', name: 'Số lượng bản tin quá nhiều', color: '#EF4444' },
    { id: '15', name: 'Sai chữ ký', color: '#EF4444' },
    { id: '80', name: 'Không tìm thấy đối tác', color: '#EF4444' },
    { id: '81', name: 'Đối tác chưa được hỗ trợ', color: '#EF4444' },
    { id: '83', name: 'Nhà cung cấp chưa được hỗ trợ', color: '#EF4444' },
    { id: '84', name: 'Chưa định tuyến dịch vụ', color: '#EF4444' },
    { id: '85', name: 'Sai sender', color: '#EF4444' },
    { id: '86', name: 'Sai từ khóa', color: '#EF4444' },
    { id: '87', name: 'Sai mẫu tin nhắn', color: '#EF4444' },
    { id: '88', name: 'Thuê bao Viettel chưa được mã hóa', color: '#EF4444' },
    { id: '89', name: 'Thuê bao mạng khác Viettel nhưng đã mã hóa', color: '#EF4444' },
    { id: '97', name: 'Sai dữ liệu đầu vào', color: '#EF4444' },
    { id: '90', name: 'Tin nhắn trùng lặp', color: '#EF4444' },
    { id: '99', name: 'Lỗi ngoại lệ', color: '#EF4444' },
]

export const statusCustomerList = [
    { id: -3, name: 'Chờ xác nhận', color: '#F59E0B' },
    { id: -2, name: 'Chờ gửi', color: '#54A0FF' },
    { id: 1, name: 'Chờ thanh toán', color: '#F59E0B' },
    { id: 2, name: 'Đã thanh toán thành công', color: '#30CB83' },
    { id: 3, name: 'Quá hạn thanh toán', color: '#EF4444' },
]

export const statusListpay = [
    { id: 1, name: 'Chờ thanh toán', color: '#F59E0B' },
    { id: 2, name: 'Đã thanh toán', color: '#30CB83' },
    { id: 3, name: 'Quá hạn thanh toán', color: 'EF4444' },
    { id: -2, name: 'Chờ gửi', color: 'EF4444' },
]

export const statusLogInvoice = [
    { id: 'success', name: 'Thành công', color: '#30CB83' },
    { id: 'error', name: 'Thất bại', color: '#F59E0B' },
]

export const statusLogCarParkingTicket = [
    { id: 0, name: 'Chờ xử lý', color: '#30CB83' },
    { id: 1, name: 'Thành công', color: '#30CB83' },
    { id: 2, name: 'Thất bại', color: '#F59E0B' },
]

export const statusLogCarParkingTicketRegister = [
    { id: 2, name: 'Hết hạn', color: 'rgb(231, 76, 60)' },
    { id: 1, name: 'Còn sử dụng', color: '#30CB83' },
]

export const typeLogCarParkingTicket = [
    { id: "update", name: 'Đổi trạng thái thẻ phương tiện' },
    { id: "expired", name: 'Gia hạn thẻ phương tiện' },
]

export const statusInvoice = [
    { id: 'DA_CAP_MA', name: 'Đã cấp mã', color: '#F59E0B' },
    { id: 'DA_XUAT', name: 'Đã xuẩt', color: '#F59E0B' },
    { id: 'GHI_TAM', name: 'Ghi tạm', color: '#54A0FF' },
    { id: 'CHO_CAP_MA', name: 'Chờ cấp mã', color: '#F59E0B' },
    { id: 'CAP_MA_LOI', name: 'Cấp mã lỗi', color: '#30CB83' },
    { id: 'HUY', name: 'Hủy', color: '#EF4444' },
]

export const typePrices = [
    { name: 'Dịch vụ', id: 1 },
    { name: 'Phương tiện', id: 2 },
    { name: 'Dịch vụ phát sinh', id: 3 },
]

export const object = [
    { name: 'Công ty', id: 1 },
    { name: 'Thu hộ', id: 2 },
    { name: 'Chủ đầu tư', id: 3 },
]

export const typeElectricMeter = [
    { id: 5, name: 'Điện ' },
    { id: 3, name: 'Nước' },
    { id: 6, name: 'Nước nóng' },
    { id: 7, name: 'Điện 3 giá' },
]

export const typeBuidingServices = [
    { id: 0, name: 'Phí khác ' },
    { id: 2, name: 'Phí dịch vụ' },
    { id: 3, name: 'Phí nước' },
    { id: 4, name: 'Phí phương tiện' },
    { id: 5, name: 'Phí điện' },
    { id: 6, name: 'Phí nước nóng' },
]
export const typeBuidingServicesv2 = [
    { id: 1, name: 'Thẻ cư dân ' },
    { id: 2, name: 'Thẻ khách' },
    { id: 3, name: 'Thẻ Ô tô' },
    { id: 4, name: 'Thẻ xe máy' },
]

export const typeVehiclesService = [
    { id: 0, name: 'Phí khác ' },
    { id: 2, name: 'Phí dịch vụ' },
    { id: 3, name: 'Phí nước' },
    { id: 4, name: 'Phí phương tiện' },
    { id: 5, name: 'Phí điện' },
    { id: 6, name: 'Phí nước nóng' },
]
export const typeDebitService = [
    { id: 0, name: 'Phí khác ' },
    { id: 2, name: 'Phí dịch vụ' },
    { id: 3, name: 'Phí nước' },
    { id: 4, name: 'Phí phương tiện' },
    { id: 5, name: 'Phí điện' },
]

export const listVehicleService = [
    { id: 0, name: 'Phương tiện khác' },
    { id: 1, name: 'Xe đạp' },
    { id: 2, name: 'Xe máy' },
    { id: 3, name: 'Ô tô' },
    { id: 4, name: 'Xe điện' },
]

export const typeServicesGroup = [
    { id: 1, name: 'Công ty' },
    { id: 2, name: 'Thu hộ' },
    { id: 3, name: 'Chủ đầu tư' },
    { id: 4, name: 'Ban quản trị' },
]

export const TemplateEmail = [
    { id: 'bdc', name: 'BDC' },
    { id: 'asahi', name: 'Asahi' },
]

export const processingType = [
    { id: 1, name: 'Xử lý công nợ' },
    { id: 2, name: 'Xử lý phí đầu kỳ' },
]

export const type_payment = [
    { id: 1, name: 'Chuyển khoản ngân hàng qua tài khoản ảo 9pay' },
    { id: 2, name: 'Chuyển khoản qua tài khoản ngân hàng nội địa' },
    { id: 3, name: 'Chuyển khoản qua tài khoản VISA, MASTER' },
    { id: 4, name: 'Chuyển khoản VIET_QR' },
]

export const member_admin = [
    { id: 0, name: 'Thành viên thường' },
    { id: 1, name: 'Trưởng ban' },
    { id: 2, name: 'Phó ban' },
    { id: 3, name: 'Ủy viên' },
]

export const typePayment = [
    { id: 1, name: 'Tiền mặt' },
    { id: 2, name: 'Chuyển khoản' },
]

export const listBooking = [
    { id: 1, name: 'BBQz' },
    { id: 2, name: 'Sân tập đa năng' },
    { id: 3, name: 'Phòng sinh hoạt cộng đồng' },
    { id: 4, name: 'Sân bóng đá' },
]

export const handbook_Type = [
    { id: 1, name: 'Nội quy' },
    { id: 2, name: 'Tiện ích' },
    { id: 3, name: 'BQL Tòa Nhà' },
    { id: 4, name: 'Hỗ trợ khẩn cấp' },
    { id: 5, name: 'Asahi Luxstay' },
    { id: 6, name: 'Sổ Tay Cư Dân' },
]

export const status_Handbook = [
    { id: 0, name: 'Lưu nháp' },
    { id: 1, name: 'Đã đăng' },
]

export const customer_payments_type = [
    { id: 'tien_mat', name: 'Tiền Mặt' },
    { id: 'chuyen_khoan', name: 'Chuyển khoản' },
    { id: 'can_tru_cdt', name: 'Cấn trừ CĐT' },
    { id: 'vi', name: 'Ví' },
    { id: 'khac', name: 'Khác' },
    { id: 'chuyen_khoan_auto', name: 'Chuyển khoản auto' },
]
export const type_time = [
    { id: 1, name: 'Đăng ký theo khung giờ cố định' },
    { id: 2, name: 'Đăng ký theo khung giờ không cố định' },
]

export const type_receipt = [
    { id: 'phieu_dieu_chinh_giam', name: 'Điều chỉnh giảm' },
    { id: 'phieu_dieu_chinh_tang', name: 'Điều chỉnh tăng' },
]

export const day_active = [
    { id: 1, name: 'Tất cả các ngày trong tuần' },
    { id: 2, name: 'Thứ 2' },
    { id: 3, name: 'Thứ 3' },
    { id: 4, name: 'Thứ 4' },
    { id: 5, name: 'Thứ 5' },
    { id: 6, name: 'Thứ 6' },
    { id: 7, name: 'Thứ 7' },
    { id: 8, name: 'Chủ Nhật' },
]

export const registration_time_limit = [
    { id: 1, name: '1 tiếng / lần' },
    { id: 2, name: '2 tiếng / lần' },
    { id: 3, name: '3 tiếng / lần' },
    { id: 4, name: '4 tiếng / lần' },
]

export const registration_period = [
    { id: 1, name: 'Ngày' },
    { id: 2, name: 'Tuần' },
    { id: 3, name: 'Tháng' },
    { id: 4, name: 'Quý' },
    { id: 5, name: 'Năm' },
]
export const notify_category = [
    { id: 1, name: 'Thông báo' },
    { id: 2, name: 'Tin hay' },
    { id: 3, name: 'Sự kiện nổi bật' },
]
export const statusPeriods = [
    { id: 1, name: 'Đã khóa' },
    { id: 0, name: 'Chưa khóa' },
]

export const statusReceipt = [
    { id: 'huy_hach_toan', name: 'Hủy hạch toán', color: '#EF4444' },
    { id: 'da_hach_toan', name: 'Đã hạch toán', color: '#30CB83' },
    { id: 'cho_hach_toan', name: 'Chờ hạch toán', color: '#F59E0B' },
]
export const apartment_charges = [
    { id: 0, name: 'Căn hộ' },
    { id: 1, name: 'Tất cả căn hộ' },
]
export const month = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
    { id: 6, name: '6' },
    { id: 7, name: '7' },
    { id: 8, name: '8' },
    { id: 9, name: '9' },
    { id: 10, name: '10' },
    { id: 11, name: '11' },
    { id: 12, name: '12' },
]
export const year = [
    { id: 2020, name: '2020' },
    { id: 2021, name: '2021' },
    { id: 2022, name: '2022' },
    { id: 2023, name: '2023' },
    { id: 2024, name: '2024' },
    { id: 2025, name: '2025' },
]
export const reservationStatus = [
    { id: 1, name: 'Chờ xác nhận', color: '#FABB00' },
    { id: 2, name: 'Đã cọc', color: '#FABB00' },
    { id: 3, name: 'Đang sử dụng', color: '#54a0ff' },
    { id: 4, name: 'Kiểm tra vi phạm', color: '#E74C3C' },
    { id: 5, name: 'Hoàn thành', color: '#30CB83' },
    { id: 6, name: 'Hủy', color: '#E74C3C' },
    { id: 7, name: 'Phạt', color: '#E74C3C' },
]

export const periods = [
    { id: 1, name: '1 Tháng' },
    { id: 2, name: '2 Tháng' },
    { id: 3, name: '3 Tháng' },
    { id: 4, name: '4 Tháng' },
    { id: 6, name: '6 Tháng' },
    { id: 12, name: '12 Tháng' },
]
export const typeCard = [
    { id: 1, name: 'Thẻ cư dân' },
    { id: 2, name: 'Thẻ khách' },
    { id: 3, name: 'Thẻ phương tiện' },
]
export const typeVehicle = [
    { id: 2, name: 'Xe 2 bánh' },
    { id: 1, name: 'Xe 4 bánh' },
]
export const documentClassification = [
    { id: 1, name: 'Hồ sơ' },
    { id: 2, name: 'Hợp đồng' },
    { id: 3, name: 'Biên bản' },
    { id: 4, name: 'Tài liệu' },
    { id: 5, name: 'Khác' },
]
export const listReceptType = [
    { id: 'phieu_thu', name: 'Phiếu thu' },
    { id: 'phieu_bao_co', name: 'Phiếu báo có' },
    { id: 'phieu_thu_khac', name: 'Phiếu thu khác' },
    { id: 'phieu_chi', name: 'Phiếu chi' },
    { id: 'phieu_chi_khac', name: 'Phiếu chi khác' },
    { id: 'phieu_ke_toan', name: 'Phiếu kế toán' },
    { id: 'phieu_dieu_chinh_giam', name: 'Phiếu điều chỉnh' },
    { id: 'phieu_thu_ky_quy', name: 'phiếu thu ký quỹ' },
]
export const statusExport = [
    { id: 1, name: 'Xuất nội bộ' },
    { id: 2, name: 'Thanh lý' },
]
export const lane_action = [
    { id: 'IN', name: 'Vào' },
    { id: 'OUT', name: 'Ra' },
]

export const vehicle_type = [
    { id: 'Car', name: 'Ô tô' },
    { id: 'Motor', name: 'Xe máy' },
    { id: 'ElectricMotor', name: 'Xe máy điện' },
    { id: 'Bicycle', name: 'Xe đạp' },
]

export const typeCarParkingEvent = [
    { id: 1, name: 'Ô tô' },
    { id: 2, name: 'Xe máy' },
    { id: 3, name: 'Xe máy điện' },
    { id: 4, name: 'Xe đạp' },
]
export const type_prices_table = [
    { id: 1, name: 'Phí khác' },
    { id: 2, name: 'Phí dịch vụ' },
    { id: 3, name: 'Phí nước' },
    { id: 4, name: 'Phương tiện' },
    { id: 5, name: 'Điện' },
    { id: 6, name: 'Nước nóng' },
    { id: 7, name: 'Điện 3 giá' },
]
export const status_input_warehouse = [
    { id: 1, name: 'Thu hồi' },
    { id: 2, name: 'Nhập kho' },
]
export const ticket_type = [
    { id: 'Daily', name: 'Thẻ lượt' },
    { id: 'Monthly', name: 'Thẻ tháng' },
]
export const typeAmountBuildingServices = [
    { id: 1, name: 'Thời gian' },
    { id: 2, name: 'Số lượng nhập' },
]
export const time_unit = [
    { id: 1, name: 'ngày' },
    { id: 2, name: 'tuần' },
    { id: 3, name: 'tháng' },
    { id: 4, name: 'quý' },
    { id: 5, name: 'năm' },
]
export const type_maintain = [
    { id: 1, name: 'Bảo trì định kỳ' },
    { id: 2, name: 'Bảo trì tự quản' },
    { id: 3, name: 'Bảo trì theo tình trạng' },
    { id: 4, name: 'Bảo trì tiên đoán' },
    { id: 5, name: 'Bảo trì hư hỏng, sửa chữa (khắc phục tạm thời)' },
    { id: 6, name: 'Bảo trì hư hỏng, sửa chữa (sửa chữa' },
]
export const vehicle_ticket_type = [
    { id: 'Monthly', name: 'Thẻ tháng' },
    { id: 'Daily', name: 'Thẻ ngày' },
]
export const ticket_status = [
    { id: 'hd', name: 'Hoạt động' },
    { id: 'kt', name: 'Khóa thẻ' },
    { id: 'mt', name: 'Mất thẻ' },
]
export const menuOptionUi = [
    { id: 1, name: 'Bài post' },
    { id: 2, name: 'Tiện ích' },
    { id: 3, name: 'Yêu cầu cư dân' },
]