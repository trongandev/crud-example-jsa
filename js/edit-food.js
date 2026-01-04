const btnCreateFood = document.getElementById("btn-create-food");
const name = document.getElementById("food-name");
const description = document.getElementById("food-description");
const image = document.getElementById("food-image");
let imagePreview = document.getElementById("image-preview");

const queryString = window.location.search;
// lấy ra danh sách món ăn từ localStorage
const foods = JSON.parse(localStorage.getItem("foods")) || [];

// lấy id từ URL
const foodId = Number(queryString.split("?")[1]);

// tìm món ăn có id tương ứng
const food = foods.find((f) => f.id === foodId);
// hiển thị thông tin món ăn lên các input để chỉnh sửa
if (food) {
    name.value = food.name;
    description.value = food.description;
    image.value = food.image;
    imagePreview.src = food.image;
}

btnCreateFood.addEventListener("click", () => {
    // kiểm tra dữ liệu hợp lệ
    if (!name.value) {
        alert("Vui lòng nhập tên món ăn");
        return;
    }
    if (!description.value) {
        alert("Vui lòng nhập mô tả món ăn");
        return;
    }
    if (!image.value) {
        alert("Vui lòng nhập URL hình ảnh món ăn");
        return;
    }

    // tìm index của món ăn cần cập nhật
    const foodIndex = foods.findIndex((f) => f.id === foodId);

    // cập nhật thông tin món ăn
    if (foodIndex !== -1) {
        foods[foodIndex] = {
            id: foodId, // giữ nguyên id
            name: name.value,
            description: description.value,
            image: image.value,
        };

        // lưu danh sách món ăn vào localStorage
        localStorage.setItem("foods", JSON.stringify(foods));

        // chuyển về trang danh sách món ăn
        window.location.href = "../index.html";
    }
});
