document.addEventListener("DOMContentLoaded", () => {
    const cat = document.getElementById("cat");
    const waveContainer = document.querySelector(".wave-container");
    const viewtext = document.getElementById("viewtext");

    cat.addEventListener("animationend", () => {
        viewtext.style.display = 'block'; // Hiển thị wish.png
        waveContainer.style.display = "block"; // Hiển thị sóng

        cat.addEventListener("mouseenter", () => {
            viewtext.style.display = "block"; // Hiển thị viewtext
        });

        // Sự kiện rời khỏi #cat
        cat.addEventListener("mouseleave", () => {
            viewtext.style.display = "none"; // Ẩn viewtext
        });

        // Sự kiện click thay thế hover trên thiết bị di động
        cat.addEventListener("click", () => {
            // Kiểm tra xem viewtext có đang hiển thị không
            if (viewtext.style.display === "none" || viewtext.style.display === "") {
                viewtext.style.display = "block"; // Hiển thị viewtext khi click
            } else {
                viewtext.style.display = "none"; // Ẩn viewtext khi click lần nữa
            }
        });

    });
});
