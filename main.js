// Helper function to get an element by ID
function domId(id) {
    return document.getElementById(id);
}

// Get DOM elements and store them in variables for easier access
const customPercent = domId('input_percent');
const inputBill = domId('type_bill');
const inputPeople = domId('type_people');
const buttons = document.querySelectorAll('button');
const total = domId('total_calculated');
const amount = domId('amount_calculated');
const reset = domId('reset_button');

// Object to map button IDs to their respective tip percentages
const buttonPercent = {
    'five': 5,
    'ten': 10,
    'fifteen': 15,
    'twenty-five': 25,
    'fifty': 50
};

// Function to set up tip buttons with click events
function setupTipButtons() {
    // Iterate through buttonPercent object to add click events to buttons
    Object.keys(buttonPercent).forEach(id => {
        const button = domId(id);
        if (button) {
            button.addEventListener('click', () => {
                calculateAndDisplayTip(buttonPercent[id]);
                customPercent.value = buttonPercent[id];
            });
        }
    });

    // Add input event to customPercent input field to handle custom tip percentages
    customPercent.addEventListener('input', () => {
        const custom = parseFloat(customPercent.value);
        if (custom > 0) calculateAndDisplayTip(custom);
    });
}

// Function to calculate tip amount per person
function calculateTip(bill, people, percent) {
    return (bill * (percent / 100)) / people;
}

// Function to calculate total amount per person including tip
function calculateTotalTip(bill, people, percent) {
    return (bill / people) + calculateTip(bill, people, percent);
}

// Function to calculate and display tip and total amounts
function calculateAndDisplayTip(percent) {
    const bill = parseFloat(inputBill.value);
    const people = parseFloat(inputPeople.value);

    // Check if bill and people inputs are valid numbers
    if (!isNaN(bill) && !isNaN(people)) {
        const tip = calculateTip(bill, people, percent);
        const totalAndTip = calculateTotalTip(bill, people, percent);
        amount.textContent = `$${tip.toFixed(2)}`;
        total.textContent = `$${totalAndTip.toFixed(2)}`;
        // Hide error message if inputs are valid
        document.querySelector('.error').style.display = 'none';
        inputPeople.classList.remove('invalid');
    } else {
        console.log('You should select tip percent or input it');
    }

    // Show error message if people input is invalid
    if (isNaN(people) || people <= 0) {
        document.querySelector('.error').style.display = 'block';
        inputPeople.classList.add('invalid');
    }
}

// Function to set up input events for bill and people input fields
function inputEvent() {
    // Add input event listeners to both input fields
    [inputBill, inputPeople].forEach(inputElement => {
        if (inputElement) {
            inputElement.addEventListener('input', () => {
                const percent = parseFloat(document.querySelector('button.active')?.dataset.percent || 0);
                calculateAndDisplayTip(percent);
            });
        }
    });
}

// Function to handle button active state and store tip percentage in dataset
function setupButtonActiveState() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            button.dataset.percent = button.textContent.replace('%', '');
        });
    });
}

// Function to reset input fields and output display
reset.addEventListener('click', () => {
    customPercent.value = '';
    inputBill.value = '';
    inputPeople.value = '';
    buttons.forEach(btn => btn.classList.remove('active'));
    total.textContent = `$0.00`;
    amount.textContent = `$0.00`;
    document.querySelector('.error').style.display = 'none';
    inputPeople.classList.remove('invalid');
});

// Initialize functions when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupTipButtons();
    inputEvent();
    setupButtonActiveState();
});
