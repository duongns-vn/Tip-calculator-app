# Tip Calculator

### Preview: 
https://duongns-vn.github.io/Tip-calculator-app/

### Contributing
Feel free to fork this project and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Introduction

This is a simple Tip Calculator web application that helps you calculate the tip amount and total amount per person based on the bill amount, the number of people sharing the bill, and the desired tip percentage. The application also supports custom tip percentages.

## Features

- **Tip Buttons**: Predefined buttons for common tip percentages (5%, 10%, 15%, 25%, 50%).
- **Custom Tip Percentage**: Input field to enter a custom tip percentage.
- **Bill and People Inputs**: Fields to input the bill amount and the number of people sharing the bill.
- **Real-time Calculation**: Automatic calculation of tip and total amounts as you type.
- **Error Handling**: Displays error messages for invalid inputs.
- **Reset Functionality**: Button to reset all inputs and outputs.

## Usage

1. **Bill Amount**: Enter the bill amount in the "Bill" input field.
2. **Number of People**: Enter the number of people sharing the bill in the "People" input field.
3. **Tip Percentage**: Click on one of the predefined tip percentage buttons or enter a custom percentage in the "Custom" input field.
4. **View Results**: The tip amount per person and the total amount per person will be displayed in real-time.
5. **Reset**: Click the "RESET" button to clear all inputs and outputs.

## Implementation Details

### HTML Elements

- `#input_percent`: Custom tip percentage input field.
- `#type_bill`: Bill amount input field.
- `#type_people`: Number of people input field.
- `button`: Tip percentage buttons.
- `#total_calculated`: Element to display the total amount per person.
- `#amount_calculated`: Element to display the tip amount per person.
- `#reset_button`: Reset button.
- `.error`: Error message element.

### JavaScript Functions

- **domId**: Helper function to get a DOM element by ID.
- **setupTipButtons**: Sets up click events for tip buttons and custom percentage input.
- **calculateTip**: Calculates the tip amount per person.
- **calculateTotalTip**: Calculates the total amount per person including the tip.
- **calculateAndDisplayTip**: Calculates and displays the tip and total amounts.
- **inputEvent**: Sets up input events for bill and people input fields.
- **setupButtonActiveState**: Handles the active state of tip buttons and stores the tip percentage in the dataset.
- **reset**: Resets all input fields and output displays.

### Error Handling

- If the number of people is not a valid number or is less than or equal to 0, an error message will be displayed, and the input field will be highlighted.

## Example Code

Here's an example of how to include the script in your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tip Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <div class="inputs">
            <label for="type_bill">Bill</label>
            <input type="number" id="type_bill" placeholder="Enter bill amount">
            
            <label for="type_people">People</label>
            <input type="number" id="type_people" placeholder="Enter number of people">
        </div>
        
        <div class="tip-buttons">
            <button id="five">5%</button>
            <button id="ten">10%</button>
            <button id="fifteen">15%</button>
            <button id="twenty-five">25%</button>
            <button id="fifty">50%</button>
            <input type="number" id="input_percent" placeholder="Custom">
        </div>
        
        <div class="outputs">
            <div id="amount_calculated">$0.00</div>
            <div id="total_calculated">$0.00</div>
        </div>
        
        <button id="reset_button">RESET</button>
        
        <div class="error" style="display:none;">Please enter valid number of people</div>
    </div>
    <script src="main.js"></script>
</body>
</html>
```
