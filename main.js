const foodContainer = document.querySelector(".food-container")

const header = document.querySelector("[data-header]")

window.addEventListener("scroll", () => {
    if (this.window.scrollY >= 100) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }
})