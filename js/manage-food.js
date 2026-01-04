const manageFood = document.getElementById("manage-food");
const foods = JSON.parse(localStorage.getItem("foods")) || [];

const handleDeleteFood = (id) => {
    Swal.fire({
        title: `Bạn có chắc chắn muốn xóa món ăn này không?`,
        text: "Sau khi xóa bạn sẽ không thể khôi phục lại món ăn này!",
        icon: "info",
        willClose() {
            // tìm index của món ăn cần xóa
            const foodIndex = foods.findIndex((f) => f.id === id);
            // xóa món ăn khỏi mảng
            if (foodIndex !== -1) {
                foods.splice(foodIndex, 1);
                // lưu lại mảng sau khi xóa vào localStorage
                localStorage.setItem("foods", JSON.stringify(foods));
                // làm mới lại trang
                window.location.reload();
            }
        },
    });
};

foods.forEach((food) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td class="border px-4 py-2 w-64">${food.name}</td>
        <td class="border px-4 py-2  ">${food.description}</td>
        <td class="border p-3  w-64">
            <img src="${food.image}" alt="${food.name}" class="h-full w-full object-cover"/>
        </td>
        <td class="border px-4 py-2 w-64">
       <a href="./edit-food.html?${food.id}" class="btn btn-warning mr-2">Sửa</a>
        <button class="btn btn-error" onclick="handleDeleteFood(${food.id});">Xóa</button>
        </td>

    `;
    manageFood.appendChild(tr);
});
