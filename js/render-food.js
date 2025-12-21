// lây ra id của thẻ chứa các món ăn
const foodContainer = document.getElementById("food-container");
// lấy ra danh sách món ăn từ localStorage
const foods = JSON.parse(localStorage.getItem("foods")) || [];
// duyệt qua từng món ăn và tạo thẻ HTML tương ứng
let html = ``;

foods.forEach((food) => {
    html += `
    <a href="./html/detail-food.html?${food.id}" class="w-full bg-white rounded-lg shadow hover:shadow-md overflow-hidden">
        <img src="${food.image}" alt="" />
        <div class="p-5">
            <h1 class="font-medium text-xl">${food.name}</h1>
            <p class="text-gray-600 line-clamp-3">${food.description}</p>
        </div>
    </a>
    `;
});

// chèn các thẻ HTML vào trong thẻ chứa món ăn
foodContainer.innerHTML = html;
