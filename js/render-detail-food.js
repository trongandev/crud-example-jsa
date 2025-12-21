const foodName = document.getElementById("food-name");
const foodDesc = document.getElementById("food-description");
const foodImage = document.getElementById("food-image");

const queryString = window.location.search;
console.log(queryString.split("?")[1]);

// lấy ra danh sách món ăn từ localStorage
const foods = JSON.parse(localStorage.getItem("foods")) || [];

// tìm món ăn có id tương ứng
const food = foods.find((f) => f.id === Number(queryString.split("?")[1]));

// hiển thị thông tin món ăn lên trang
if (food) {
    foodName.innerText = food.name;
    foodDesc.innerText = food.description;
    foodImage.src = food.image;
}
