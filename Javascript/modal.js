// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const butn = document.getElementsByClassName('nav-item')[0];

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
butn.addEventListener('click', () => {
    modal.style.opacity = 1;
    modal.style.pointerEvents = 'auto';
});

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => {
    modal.style.opacity = 0;
    modal.style.pointerEvents = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.opacity = 0;
        modal.style.pointerEvents = 'none';
    }
});
