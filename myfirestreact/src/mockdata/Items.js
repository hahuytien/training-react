// import uuidv4 from 'uuid/v4';
import { v1 as uuidv1 } from 'uuid';
console.log(uuidv1()); //=> f68f7b70-9606-11ea-9ccc-fbd3ee221c8

const Items = [
    {
        id: uuidv1(),
        name: "Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết",
        level: 2 // high
    },
    {
        id: uuidv1(),
        name: "Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018",
        level: 0 // low
    },
    {
        id: uuidv1(),
        name: "Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo",
        level: 1 // medium
    },
    {
        id: uuidv1(),
        name: "Gần 200 người chết vì tai nạn giao thông 7 ngày nghỉ Tết",
        level: 0 // low
    },
    {
        id: uuidv1(),
        name: "VFF giải ngân 15 tỷ đồng, tiền thưởng tới tay U23 VN trước Tết",
        level: 2 // high
    },
    {
        id: uuidv1(),
        name: "F1 muốn tổ chức giải đua xe tại Việt Nam vào năm 2020",
        level: 1 // medium
    }
];

export default Items;