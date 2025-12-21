const btnCreateFood = document.getElementById("btn-create-food");

btnCreateFood.addEventListener("click", () => {
    // lấy giá trị từ các input
    const name = document.getElementById("food-name").value;
    const description = document.getElementById("food-description").value;
    const image = document.getElementById("food-image").value;
    // kiểm tra dữ liệu hợp lệ
    if (!name) {
        alert("Vui lòng nhập tên món ăn");
        return;
    }
    if (!description) {
        alert("Vui lòng nhập mô tả món ăn");
        return;
    }
    if (!image) {
        alert("Vui lòng nhập URL hình ảnh món ăn");
        return;
    }
    // tạo đối tượng món ăn mới
    const newFood = {
        id: Date.now(),
        name: name,
        description: description,
        image: image,
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
