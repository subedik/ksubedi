document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();

            let target = this.getAttribute("data-tab");

            // Hide all sections
            contents.forEach(content => {
                content.style.display = "none";
            });

            // Show the selected section
            document.getElementById(target).style.display = "block";
        });
    });
});
