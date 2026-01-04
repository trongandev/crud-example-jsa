//cấu trúc mẫu tham khảo của object foods, không cần quan tâm đến phần này trong quá trình làm bài
const exampleCodeFoods = [
    {
        id: 1766288588182,
        name: "Bún Chả Hà Nội",
        description:
            "Bún chả là món ăn làm nên tên tuổi ẩm thực Hà Nội. Điểm nhấn của món ăn là những miếng chả thịt lợn băm và chả miếng nướng vàng ruộm trên than hoa, thơm lừng. Chả được đặt trong bát nước chấm chua ngọt pha vừa vặn, kèm theo đu đủ xanh ngâm giòn. Khi ăn, thực khách gắp bún tươi, chả và rau sống đủ loại nhúng vào bát nước chấm, tạo nên hương vị bùng nổ.",
        image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1751995139/xho76hhwpnawqu7afiw3.webp",
    },
    {
        id: 1766289082100,
        name: "Bánh Đa Cua Hải Phòng",
        description:
            "Là đặc sản không thể bỏ qua khi đến Hải Phòng, bánh đa cua hấp dẫn bởi sợi bánh đa đỏ đặc trưng, dai và có mùi thơm riêng. Nước dùng được chế biến từ cua đồng, có vị ngọt thanh, đậm đà, kết hợp với riêu cua béo ngậy, chả lá lốt thơm lừng, tôm, chả cá và rau muống, rau nhút. Tất cả tạo nên một bát bánh đa cua đầy màu sắc và hương vị khó cưỡng.",
        image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1751995210/eslmzivufwukz7hlsxqq.webp",
    },
    {
        id: 1766289257684,
        name: "Chả Mực Hạ Long",
        description:
            "Chả mực Hạ Long là niềm tự hào của ẩm thực Quảng Ninh, được làm hoàn toàn thủ công từ những con mực mai tươi ngon nhất. Mực được giã tay thay vì xay nhuyễn, giữ được độ dai giòn sần sật đặc trưng. Khi chiên lên, từng miếng chả vàng ươm, tỏa hương thơm nức, vỏ ngoài giòn tan mà bên trong vẫn mềm, ngọt đậm vị biển. Món này thường ăn kèm với xôi trắng hoặc bún.",
        image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1751995541/ohwady1fihjgytuqwvy7.webp",
    },
];

// dưới đây là phần chính của code hiển thị món ăn trên trang chủ
// lây ra id của thẻ chứa các món ăn
const foodContainer = document.getElementById("food-container");
// lấy ra danh sách món ăn từ localStorage
const foods = JSON.parse(localStorage.getItem("foods")) || [];
// duyệt qua từng món ăn và tạo thẻ HTML tương ứng
let html = ``;

foods.forEach((food) => {
    html += `
    <a href="./html/detail-food.html?${food.id}" class="w-full bg-white rounded-lg shadow hover:shadow-md overflow-hidden">
        <img src="${food.image}" alt="" class="h-48 w-full"/>
        <div class="py-4 px-5">
            <h1 class="font-medium text-xl">${food.name}</h1>
            <p class="text-gray-600 line-clamp-3">${food.description}</p>
        </div>
    </a>
    `;
});

// chèn các thẻ HTML vào trong thẻ chứa món ăn
foodContainer.innerHTML = html;
