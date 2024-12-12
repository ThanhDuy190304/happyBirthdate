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

    });
});
