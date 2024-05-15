/* INPUT AND PRICE */

const ticketQuantityInput = document.getElementById('ticket-quantity');
const ticketPriceAmount = document.getElementById('ticket-price-amount');
const ticketPriceInput = document.getElementById('ticket-price');


ticketQuantityInput.addEventListener('input', function () {

    const quantity = parseInt(this.value);

    const basePrice = parseInt(ticketPriceInput.value);

    const totalPrice = quantity * basePrice;

    ticketPriceAmount.textContent = totalPrice + ' ₼';

    ticketPriceInput.textContent = totalPrice;

});

/* INPUT AND PRICE */