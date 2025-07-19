function openCarDetail3(tagClass) {
    const tag = document.querySelector(`.${tagClass}`);
    const imgTags = tag.querySelectorAll('.rightImgTag img');
    const images = Array.from(imgTags).map(img => img.src);

    const title = tag.querySelector('.CN')?.innerText || "";
    const brand = tag.querySelector('.carName')?.innerText || "";
    const price = tag.querySelector('.carPrice')?.innerText || "";
    const mileage = tag.querySelector('.carMillage')?.innerText || "";

    const carData = {
        images,
        title,
        brand,
        price,
        mileage
    };

    localStorage.setItem("carDetails2", JSON.stringify(carData));
    // Page opens in same tab
    window.location.href = "Homeview2.html";
}

function sendToViewPage2(className) {
    const box = event.currentTarget;
    const infoBox = box.querySelector(`.${className}`);

    if (!infoBox) {
        console.error("formInformation not found!");
        return;
    }

    const fields = [
        "carbodyType", "carDoor", "carSeater", "carpower",
        "carAutomation", "carTarget", "carColor", "interColor",
        "fuelType", "cylinder", "carWarranty", "carName",
        "carMillage", "carPrice"
    ];

    fields.forEach(field => {
        const value = infoBox.querySelector(`.${field}`)?.textContent || "";
        localStorage.setItem(field, value);
    });

    // Optional: redirect only once if not handled in onclick
    window.location.href = "Homeview2.html";
}
