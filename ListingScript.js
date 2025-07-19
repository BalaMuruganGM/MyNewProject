    document.getElementById('searchInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const carCards = document.querySelectorAll('.rightTag');

    // cartype imgae start
    document.querySelector('.FourNotFour').style.display="none";
    // cartype image clouses


    carCards.forEach(card => {
        const carName = card.querySelector('.formInformation .carName')?.textContent.toLowerCase() || '';

        if (carName.includes(filter)) {
            card.style.display = 'flex';
            document.querySelector('.rightSide').style.cssText = "justify-content:start;align-items:start;";

        } else {
            card.style.display = 'none';
        }
    });
});


// Range tag Start

const priceRange = document.querySelector('.price input[type="range"]');
const milageRange = document.querySelector('.milage input[type="range"]');

priceRange.addEventListener('input', filterCars);
milageRange.addEventListener('input', filterCars);

function filterCars() {
    document.querySelector('.FourNotFour').style.display="none";
    const selectedPrice = parseInt(priceRange.value);
    const selectedMilage = parseInt(milageRange.value);

    const carCards = document.querySelectorAll('.rightTag');

    carCards.forEach(card => {
        const carPrice = parseInt(card.querySelector('.carPrice')?.textContent.trim() || '0');
        const carMilage = parseInt(card.querySelector('.carMillage')?.textContent.trim() || '0');

        const priceMatch = carPrice <= selectedPrice;
        const milageMatch = carMilage <= selectedMilage;

        if (priceMatch && milageMatch) {
            card.style.display = 'flex';
            document.querySelector('.rightSide').style.cssText = "justify-content:start;align-items:start;";
        } else {
            card.style.display = 'none';
        }
    });
}


// range data Show start
const RpriceRange = document.getElementById('priceRange');
const RmilageRange = document.getElementById('milageRange');
const priceValueSpan = document.getElementById('priceValue');
const milageValueSpan = document.getElementById('milageValue');

// Update price value
RpriceRange.addEventListener('input', () => {
    priceValueSpan.textContent = RpriceRange.value;
});

// Update mileage value
RmilageRange.addEventListener('input', () => {
    milageValueSpan.textContent = RmilageRange.value;
});


// range data show clouses

// Range tag Clouses

// body Type Image Start

const bodyTypeButtons = document.querySelectorAll('.bodyType-1');
const noDataImg = document.querySelector('.FourNotFour'); // 404 image

bodyTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedType = button.getAttribute('data-body-type').toLowerCase();
        filterByBodyType(selectedType);
    });
});

function filterByBodyType(type) {
    const carCards = document.querySelectorAll('.rightTag');
    let visibleCount = 0;

    carCards.forEach(card => {
        const carType = (card.querySelector('.carbodyType')?.textContent || '').toLowerCase();

        if (carType.includes(type)) {
            card.style.display = 'flex'; // Corrected from 'flext' to 'flex'
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    const rightSide = document.querySelector('.rightSide');
    if (visibleCount === 0) {
        noDataImg.style.display = 'flex';
        if (rightSide) rightSide.style.cssText = "justify-content: center; align-items: center;";
    } else {
        noDataImg.style.display = 'none';
        if (rightSide) rightSide.style.cssText = "justify-content: start; align-items: start;";
    }
}


        function hideSpan() {
            document.querySelector('.hideSpan').style.display = "inline";
            document.querySelector('.listHead').style.minHeight = "50vh";
            document.querySelector('.readSpan').style.display = "none";
        }

        let = listScrollvalue = 13;

        function leftscroll() {
            if (listScrollvalue < 90) {
                document.querySelector('.ListScrollBox').style.left = "-" + listScrollvalue + "%";
                listScrollvalue = listScrollvalue + 13;
            }
        }

        function rightscroll() {
            if (listScrollvalue > 0)
                listScrollvalue = listScrollvalue - 13;
            document.querySelector('.ListScrollBox').style.left = "-" + listScrollvalue + "%";

        }



