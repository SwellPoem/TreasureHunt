var CORRECT_ANSWER = 'culo';

document.querySelector('.confirm-button').addEventListener('click', function() {
    var input = document.querySelector('#myInput').value;
    var hint = document.getElementById('hint');
    var curtainMistake = document.getElementById('curtain-mistake');
  
    if (input === CORRECT_ANSWER) {
        hint.classList.toggle('hidden');
    }
    else {
        curtainMistake.classList.toggle('hidden');
    }
  });


document.querySelector('.support-button').addEventListener('click', function() {
    var curtain = document.getElementById('curtain');
    curtain.classList.toggle('hidden');
});