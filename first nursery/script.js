let selectedRectangle = null;
const originalPositions = new Map();
const rectangleTops = new Map();

const solutionsMap = new Map();

// when the page loads, the rectangles' original positions are stored
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.Rectangle').forEach(rectangle => {
        const { top, left } = rectangle.getBoundingClientRect();
        originalPositions.set(rectangle, { top, left });
    });
});

// Define the handler function
function focusClickHandler() {
    // If the rectangle is on a rectangle_top, remove the event listener and CSS class
    if (rectangleTops.has(this)) {
        this.removeEventListener('click', focusClickHandler);
        this.classList.remove('hover');
        return;
    }

    if (selectedRectangle !== null && selectedRectangle !== this) {
        var firstSelectedRectangle = this;
        var secondSelectedRectangle = selectedRectangle;

        // Store the original positions
        const originalFirstRectPosition = firstSelectedRectangle.getBoundingClientRect();
        const originalSecondRectPosition = secondSelectedRectangle.getBoundingClientRect();

        // Append both to the body
        document.body.appendChild(firstSelectedRectangle);
        document.body.appendChild(secondSelectedRectangle);

        // Set the initial position of the Rectangle items
        firstSelectedRectangle.style.position = 'absolute';
        secondSelectedRectangle.style.position = 'absolute';

        firstSelectedRectangle.style.top = `${originalFirstRectPosition.top}px`;
        firstSelectedRectangle.style.left = `${originalFirstRectPosition.left}px`;

        secondSelectedRectangle.style.top = `${originalSecondRectPosition.top}px`;
        secondSelectedRectangle.style.left = `${originalSecondRectPosition.left}px`;

        // Force a reflow to make the initial position take effect
        void firstSelectedRectangle.offsetWidth;
        void secondSelectedRectangle.offsetWidth;

        // Animate the Rectangle items to the position of the other Rectangle
        firstSelectedRectangle.style.transition = 'all 0.3s ease';
        secondSelectedRectangle.style.transition = 'all 0.3s ease';

        firstSelectedRectangle.style.top = `${originalSecondRectPosition.top}px`;
        firstSelectedRectangle.style.left = `${originalSecondRectPosition.left}px`;

        secondSelectedRectangle.style.top = `${originalFirstRectPosition.top}px`;
        secondSelectedRectangle.style.left = `${originalFirstRectPosition.left}px`;

        // Remove the line that sets selectedRectangle to null
        selectedRectangle = null;
        return;
    }
    selectedRectangle = this;
}

// Add event listeners to Rectangle items
document.querySelectorAll('.Rectangle').forEach(rectangle => {
    rectangle.addEventListener('click', focusClickHandler);

});

// Add event listeners to Rectangle_top items
document.querySelectorAll('.Rectangle_top').forEach(rectangleTop => {
    rectangleTop.addEventListener('click', () => {
        if (selectedRectangle) {
            // Get the position of the Rectangle item relative to the document
            const { top: topRect, left: leftRect } = selectedRectangle.getBoundingClientRect();

            // Append the Rectangle item to the body
            document.body.appendChild(selectedRectangle);

            // Set the initial position of the Rectangle item
            selectedRectangle.style.position = 'absolute';
            selectedRectangle.style.top = `${topRect}px`;
            selectedRectangle.style.left = `${leftRect}px`;

            // Force a reflow to make the initial position take effect
            void selectedRectangle.offsetWidth;

            // Get the position of the Rectangle_top item relative to the document
            const { top: topTop, left: leftTop } = rectangleTop.getBoundingClientRect();

            // Animate the Rectangle item to the position of the Rectangle_top item
            selectedRectangle.style.transition = 'all 0.3s ease';
            selectedRectangle.style.top = `${topTop}px`;
            selectedRectangle.style.left = `${leftTop}px`;

            // Store the Rectangle on the Rectangle_top
            rectangleTops.set(rectangleTop, selectedRectangle);

             // Clear the stored Rectangle item after the animation and add the click event listener back to all rectangles
             setTimeout(() => {
                selectedRectangle = null;
                document.querySelectorAll('.Tile .Rectangle').forEach(rectangle => {
                    rectangle.addEventListener('click', focusClickHandler);
                });
            }, 500);

            selectedRectangle = null;
        }
    });
});

//CORRECT ANSWER
document.querySelector('.confirm-button').addEventListener('click', function() {
    var hintLocation = document.getElementById('hint');
    hintLocation.classList.toggle('hidden');
  });


// ALERT FOR SUPPORT
document.querySelector('.support-button').addEventListener('click', function() {
    var curtain = document.getElementById('curtain');
    curtain.classList.toggle('hidden');
});