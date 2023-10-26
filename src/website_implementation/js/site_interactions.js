let discount_code = 5000;

const discount_button = document.getElementById('discount-code');

const your_discount_code_element = document.getElementById('your-discount-code');

// Define a function to show the discount code
const showDiscountCode = () => {
    discount_code = discount_code + 1;
    // Update the text of the 'your-discount-code' element to display the new discount code
    your_discount_code_element.innerText = "Hi, your code is " + discount_code;
}

// Add a click event listener to the 'discount_button' element
discount_button.addEventListener("click", showDiscountCode)