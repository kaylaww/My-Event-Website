// Function to change the height of all cards to match the tallest card
const changeCardHeights = () => {
    let maxHeight = 0;

    const cards = Array.from(document.getElementsByClassName('card'));

    cards.forEach(card => {
        if (card.offsetHeight > maxHeight) {
            maxHeight = card.offsetHeight;
        }
    });

    cards.forEach(card => card.computedStyleMap.height = maxHeight + "px");
}

// Add an event listener to run the changeCardHeights function when the page loads
window.addEventListener('load', changeCardHeights);
// Add an event listener to run the changeCardHeights function when the window is resized
window.addEventListener('resize', changeCardHeights);