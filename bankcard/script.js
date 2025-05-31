const cardForm = document.getElementById('cardForm');
    const bankNameInput = document.getElementById('bankName');
    const paymentSystemSelect = document.getElementById('paymentSystem');
    const cardNumberInput = document.getElementById('cardNumber');
    const cardHolderInput = document.getElementById('cardHolder');
    const expiryDateInput = document.getElementById('expiryDate');

    const bankLogoPreview = document.getElementById('bankLogo');
    const paymentSystemLogoPreview = document.getElementById('paymentSystemLogo');
    const cardNumberPreview = document.getElementById('cardNumberPreview');
    const cardHolderPreview = document.getElementById('cardHolderPreview');
    const expiryDatePreview = document.getElementById('expiryDatePreview');

    const cardTableBody = document.querySelector('#cardTable tbody');

    cardForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const bankName = bankNameInput.value;
        const paymentSystem = paymentSystemSelect.value;
        const cardNumber = cardNumberInput.value;
        const cardHolder = cardHolderInput.value;
        const expiryDate = expiryDateInput.value;

        bankLogoPreview.textContent = bankName;
        paymentSystemLogoPreview.textContent = paymentSystem;
        cardNumberPreview.textContent = formatCardNumber(cardNumber);
        cardHolderPreview.textContent = cardHolder;
        expiryDatePreview.textContent = expiryDate;

        const newRow = cardTableBody.insertRow();
        const bankNameCell = newRow.insertCell();
        const paymentSystemCell = newRow.insertCell();
        const cardNumberCell = newRow.insertCell();
        const cardHolderCell = newRow.insertCell();
        const expiryDateCell = newRow.insertCell();

        bankNameCell.textContent = bankName;
        paymentSystemCell.textContent = paymentSystem;
        cardNumberCell.textContent = formatCardNumber(cardNumber);
        cardHolderCell.textContent = cardHolder;
        expiryDateCell.textContent = expiryDate;

        cardForm.reset();
        bankLogoPreview.textContent = 'Лого банка';
        paymentSystemLogoPreview.textContent = 'Лого платежной системы';
        cardNumberPreview.textContent = '0000 0000 0000 0000';
        cardHolderPreview.textContent = 'Имя держателя';
        expiryDatePreview.textContent = 'MM/ГГ';
    });


    function formatCardNumber(number) {
        return number.replace(/(\d{4})/g, '$1 ').trim();
    }