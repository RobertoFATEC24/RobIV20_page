function filterSelection(category) {
    const items = document.querySelectorAll(".filterDiv");

    items.forEach((item) => {
        const matches = category === "all" || item.classList.contains(category);
        item.style.display = matches ? "" : "none";
    });

    document.querySelectorAll("#myBtnContainer .btn").forEach((button) => {
        button.classList.remove("active");

        if (button.getAttribute("onclick")?.includes(`'${category}'`)) {
            button.classList.add("active");
        }
    });
}
