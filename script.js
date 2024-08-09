const inventory =
{
    apple: {price: 12, qty: 0},
    cherry: {price: 15, qty: 0},
    rhubarb: {price: 15, qty: 0}
}

function sum() {
    let total = 0;
    const keys = Object.keys(inventory);
    keys.forEach(pie => {
        total += inventory[pie].price * inventory[pie].qty;
    });
    return total;
}

function calculate(box)  {
    let qty = 0;

    if (box.value.length > 0) {
        qty = parseInt(box.value);
    }

    inventory[box.id].qty = qty;
    const total = sum();
    return `€${total}.00`;
}

window.addEventListener('DOMContentLoaded', () => {
    const totalContainer = document.getElementById('total-container');
    const inputBoxes = document.querySelectorAll('#calculator input');
    inputBoxes.forEach(
        box => {
            box.addEventListener('change', () => totalContainer.textContent = calculate(box));
            box.addEventListener('keyup', () => totalContainer.textContent = calculate(box));
        });
});