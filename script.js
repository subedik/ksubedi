document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    // Show "About Me" section by default
    document.getElementById("about").style.display = "block";

    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();
            let target = this.getAttribute("data-tab");

            // Hide all sections
            contents.forEach(content => {
                content.style.display = "none";
            });

            // Show selected section
            document.getElementById(target).style.display = "block";
        });
    });
});
