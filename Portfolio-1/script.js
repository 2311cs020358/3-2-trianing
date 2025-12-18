// Contact button
document.getElementById("contactBtn").addEventListener("click", function () {
    alert("Thank you for contacting me!");
});

// Project click alert
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
    project.addEventListener("click", function () {
        const name = this.getAttribute("data-name");
        alert("You clicked on " + name);
    });
});

// Auto update year
document.getElementById("year").textContent = new Date().getFullYear();
