let selectedRectangle = null;
const originalPositions = new Map();
const rectangleTops = new Map();
// Add event listeners to Rectangle items
document.querySelectorAll('.Tile .Rectangle').forEach(rectangle => {
    rectangle.addEventListener('click', function handler() {
        // If the rectangle is on a rectangle_top, remove the event listener and CSS class
        if (rectangleTops.has(rectangle)) {
            rectangle.removeEventListener('click', handler);
            rectangle.classList.remove('hover');
            return;
        }

        selectedRectangle = rectangle;

        // Store the original position of each Rectangle
        const { top, left } = rectangle.getBoundingClientRect();
        originalPositions.set(rectangle, { top, left });
    });
});

// Add event listeners to Rectangle_top items
document.querySelectorAll('.Tile_top .Rectangle_top').forEach(rectangleTop => {
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

            // If there's a Rectangle on the Rectangle_top, move it back to its original position
            const existingRectangle = rectangleTops.get(rectangleTop);
            if (existingRectangle) {
                const { top, left } = originalPositions.get(existingRectangle);
                existingRectangle.style.transition = 'all 0.5s ease';
                existingRectangle.style.top = `${top}px`;
                existingRectangle.style.left = `${left}px`;

                // Re-enable the event listener and CSS class for the existing rectangle
                existingRectangle.addEventListener('click', handler);
                existingRectangle.classList.add('hover');
            }

            // Animate the Rectangle item to the position of the Rectangle_top item
            selectedRectangle.style.transition = 'all 0.5s ease';
            selectedRectangle.style.top = `${topTop}px`;
            selectedRectangle.style.left = `${leftTop}px`;

            // Store the Rectangle on the Rectangle_top
            rectangleTops.set(rectangleTop, selectedRectangle);

            // Clear the stored Rectangle item after the animation
            setTimeout(() => {
                selectedRectangle = null;
            }, 500);
        }
    });
});