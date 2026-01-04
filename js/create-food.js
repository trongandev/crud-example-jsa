const btnCreateFood = document.getElementById("btn-create-food");
const name = document.getElementById("food-name");
const description = document.getElementById("food-description");
const image = document.getElementById("food-image");

// cập nhật hình ảnh khi người dùng nhập URL
image.addEventListener("input", () => {
    let imagePreview = document.getElementById("image-preview");
    imagePreview.src = image.value;
});

btnCreateFood.addEventListener("click", () => {
    // lấy giá trị từ các input
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
    // tạo đối tượng món ăn mới
    const newFood = {
        id: Date.now(),
        name: name.value,
        description: description.value,
        image: image.value,
    };
    // lấy danh sách món ăn từ localStorage
    const foods = JSON.parse(localStorage.getItem("foods")) || [];
    // thêm món ăn mới vào danh sách
    foods.push(newFood);
    // lưu danh sách món ăn vào localStorage
    localStorage.setItem("foods", JSON.stringify(foods));
    // chuyển về trang danh sách món ăn
    window.location.href = "../index.html";
});
