document.addEventListener("DOMContentLoaded", function () {
    // POPUP
    const popup = document.getElementById("popup-container");
    const closeBtn = document.getElementById("close-popup");

    if (popup && closeBtn) { // Verifica se os elementos existem
        if (!sessionStorage.getItem("popupShown")) {
            popup.style.display = "flex"; 
            //sessionStorage.setItem("popupShown", "true");
        }

        closeBtn.addEventListener("click", function () {
            popup.style.display = "none";
        });

        popup.addEventListener("click", function (event) {
            if (event.target === popup) {
                popup.style.display = "none";
            }
        });
    }

});