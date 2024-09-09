// Select the button using its ID
const button = document.getElementById('clicky');
const paragraph = document.getElementById('myparagraph')
const total = document.getElementById('totalClick')


let boom = 0
let borderSize = 0

// Add a click event listener to the button
button.addEventListener('mousedown', function() {

    
    // Change the background color of the button
    button.style.backgroundColor = 'yellow';
    paragraph.textContent = 'You clicked the button! :D :D :D';
    borderSize += 10;
    boom += 1;
    total.textContent = boom;
    button.style.borderWidth = `${borderSize}px`;

});

button.addEventListener('mouseleave', function () {
    button.style.backgroundColor = 'blue';
    paragraph.textContent = 'Weeeee!';
});

button.addEventListener('mouseover', function () {

    button.style.backgroundColor = 'black';

})
