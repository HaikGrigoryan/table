let avelacnogh = document.getElementById('add');
let aghusyak = document.getElementById('aghusyak');

let delet = document.querySelectorAll('.jnjogh');
let cherevacoghTogh = document.querySelector('.cherevacogh');

let hide = document.querySelectorAll('.hide');

let deleteRow = function () {
    this.closest('.togh').remove();
};

let editButtonListener = function () {
    toggleEditState(this);
};

let saveButtonListener = function () {
    toggleEditState(this);

    let rowSpanElements = this.closest('.togh').querySelectorAll('.appear');

    let rowInputElements = this.closest('.togh').querySelectorAll('.input');

    rowSpanElements.forEach((spanElement, index) => {
        spanElement.innerText = rowInputElements[index].value;
    });
};

let cancelButtonListener = function () {
    toggleEditState(this);

    let rowSpanElements = this.closest('.togh').querySelectorAll('.appear');

    let rowInputElements = this.closest('.togh').querySelectorAll('.input');

    rowSpanElements.forEach((spanElement, index) => {
        rowInputElements[index].value = spanElement.innerText;
    });
};

avelacnogh.addEventListener('click', function () {
    let newRow = cherevacoghTogh.cloneNode(true);
    newRow.classList.toggle('cherevacogh');

    let jnjoghButton = newRow.getElementsByClassName('jnjogh')[0];
    jnjoghButton.addEventListener('click', deleteRow);

    let editButton = newRow.getElementsByClassName('edit')[0];
    editButton.addEventListener('click', editButtonListener);

    let saveButton = newRow.getElementsByClassName('save')[0];
    saveButton.addEventListener('click', saveButtonListener);

    let cancelButton = newRow.getElementsByClassName('cancel')[0];
    cancelButton.addEventListener('click', cancelButtonListener);

    aghusyak.append(newRow);
});

delet.forEach((button) => {
    button.addEventListener('click', deleteRow);
});

let editButtons = document.querySelectorAll('.edit');

let saveButtons = document.querySelectorAll('.save');

let cancelButtons = document.querySelectorAll('.cancel');

let toggleEditState = function (yntacikElement) {
    let spanElements = yntacikElement
        .closest('.togh')
        .getElementsByClassName('appear');
    [...spanElements].forEach((span) => {
        span.classList.toggle('hide');
    });
    let inputElements = yntacikElement
        .closest('.togh')
        .getElementsByClassName('input');
    [...inputElements].forEach((input) => {
        input.classList.toggle('hide');
    });

    let editButton = yntacikElement.closest('.togh').querySelector('.edit');
    editButton.classList.toggle('hide');

    let saveButton = yntacikElement.closest('.togh').querySelector('.save');
    saveButton.classList.toggle('hide');
    let cancelButton = yntacikElement.closest('.togh').querySelector('.cancel');
    cancelButton.classList.toggle('hide');
};

editButtons.forEach((editButton) => {
    editButton.addEventListener('click', editButtonListener);
});

saveButtons.forEach((saveButton) => {
    saveButton.addEventListener('click', saveButtonListener);
});

cancelButtons.forEach((cancelButton) => {
    cancelButton.addEventListener('click', cancelButtonListener);
});

let search = document.getElementById('search');

let addButtonDisabledText = document.querySelector('.disableText');

search.addEventListener('change', function (event) {
    if (search.value) {
        avelacnogh.setAttribute('disabled', true);
        addButtonDisabledText.classList.remove('disableText');
    } else {
        avelacnogh.removeAttribute('disabled');
        addButtonDisabledText.classList.add('disableText');
    }

    let tableRows = document.querySelectorAll('.togh');

    tableRows.forEach((tableRow) => {
        tableRow.classList.remove('hide');
    });

    const inputTextValue = event.target.value;

    tableRows.forEach((tableRow) => {
        if (!tableRow.innerText.includes(inputTextValue)) {
            tableRow.classList.add('hide');
        }
    });
});

let syuner = document.querySelectorAll('.syun');

syuner.forEach((syun) => {
    syun.addEventListener('dblclick', editButtonListener);
});
